package docusaur

import cats.effect.{IO, Resource}
import cats.syntax.all.*
import effectie.instances.ce3.fx.ioFx
import effectie.syntax.all.*
import extras.hedgehog.ce3.syntax.runner.*
import extras.scala.io.file.TempFiles
import hedgehog.*
import hedgehog.runner.*
import io.circe.literal.*
import io.circe.parser.*
import loggerf.logger.{CanLog, Slf4JLogger}

import java.io.File
import scala.io.{Codec, Source}

/** @author Kevin Lee
  * @since 2026-07-11
  */
object DocusaurAlgoliaSpec extends Properties {

  implicit val canLog: CanLog = Slf4JLogger.slf4JCanLog[DocusaurAlgoliaSpec.type]

  override def tests: List[Test] = List(
    property("test createAlgoliaConfig with the full config", testCreateAlgoliaConfigWithFullConfig),
    property("test createAlgoliaConfig with an empty value", testCreateAlgoliaConfigWithEmptyValue),
    property("test createAlgoliaConfig with a missing value", testCreateAlgoliaConfigWithMissingValue),
  )

  def testCreateAlgoliaConfigWithFullConfig: Property =
    for {
      appId     <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).log("appId")
      apiKey    <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).log("apiKey")
      indexName <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).log("indexName")
    } yield runIO {
      TempFiles
        .runWithTempDir("sbt-docusaur-test") { tempDir =>
          val resultJsonFile = new File(tempDir.value, "algolia.config.json")

          val expected =
            json"""{
                "appId": $appId,
                "apiKey": $apiKey,
                "indexName": $indexName
              }"""

          for {
            _                <- Docusaur
                                  .createAlgoliaConfig[IO](resultJsonFile, appId.some, apiKey.some, indexName.some)
            resultJsonString <- readFile(resultJsonFile)
            actual           <- effectOf(parse(resultJsonString)).rethrow
          } yield actual ==== expected
        }
        .sequence
        .rethrow
    }

  def testCreateAlgoliaConfigWithEmptyValue: Property =
    for {
      appId      <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).log("appId")
      apiKey     <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).log("apiKey")
      indexName  <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).log("indexName")
      emptyIndex <- Gen.int(Range.linear(0, 2)).log("emptyIndex")
    } yield runIO {
      TempFiles
        .runWithTempDir("sbt-docusaur-test") { tempDir =>
          val resultJsonFile = new File(tempDir.value, "algolia.config.json")

          val values                              = List(appId, apiKey, indexName)
            .zipWithIndex
            .map { case (value, index) => if (index === emptyIndex) "" else value }
          val (theAppId, theApiKey, theIndexName) = values match {
            case a :: k :: i :: Nil => (a, k, i)
            case _ => ("", "", "")
          }

          for {
            _                <- Docusaur
                                  .createAlgoliaConfig[IO](
                                    resultJsonFile,
                                    theAppId.some,
                                    theApiKey.some,
                                    theIndexName.some,
                                  )
            resultJsonString <- readFile(resultJsonFile)
            actual           <- effectOf(parse(resultJsonString)).rethrow
          } yield actual ==== json"""{}"""
        }
        .sequence
        .rethrow
    }

  def testCreateAlgoliaConfigWithMissingValue: Property =
    for {
      appId        <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).option.log("appId")
      apiKey       <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).option.log("apiKey")
      indexName    <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).option.log("indexName")
      missingIndex <- Gen.int(Range.linear(0, 2)).log("missingIndex")
    } yield runIO {
      val values                              = List(appId, apiKey, indexName)
        .zipWithIndex
        .map { case (value, index) => if (index === missingIndex) none[String] else value }
      val (theAppId, theApiKey, theIndexName) = values match {
        case a :: k :: i :: Nil => (a, k, i)
        case _ => (none[String], none[String], none[String])
      }

      TempFiles
        .runWithTempDir("sbt-docusaur-test") { tempDir =>
          val resultJsonFile = new File(tempDir.value, "algolia.config.json")

          for {
            _                <- Docusaur.createAlgoliaConfig[IO](resultJsonFile, theAppId, theApiKey, theIndexName)
            resultJsonString <- readFile(resultJsonFile)
            actual           <- effectOf(parse(resultJsonString)).rethrow
          } yield actual ==== json"""{}"""
        }
        .sequence
        .rethrow
    }

  private def readFile(file: File): IO[String] = {
    Resource
      .make(effectOf(Source.fromFile(file)(Codec.UTF8)))(source => effectOf(source.close()))
      .map(_.getLines())
      .use { lines =>
        pureOrError(lines.mkString("\n"))
      }
  }

}
