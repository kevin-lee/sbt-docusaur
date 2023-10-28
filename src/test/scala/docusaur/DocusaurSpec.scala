package docusaur

import cats.effect.{IO, Resource}
import cats.syntax.all.*
import cats.{Eq, Show}
import effectie.instances.ce3.fx.*
import effectie.syntax.all.*
import extras.hedgehog.ce3.syntax.runner.*
import extras.scala.io.file.TempFiles
import hedgehog.*
import hedgehog.runner.*
import io.circe
import io.circe.literal.*
import io.circe.parser.*
import io.circe.syntax.*
import io.circe.{Decoder, Encoder, Json}
import loggerf.instances.cats.*
import loggerf.logger.{CanLog, Slf4JLogger}

import java.io.File
import scala.io.{Codec, Source}

/** @author Kevin Lee
  * @since 2023-10-29
  */
object DocusaurSpec extends Properties {

  implicit val canLog: CanLog    = Slf4JLogger.slf4JCanLog[DocusaurSpec.type]
  override def tests: List[Test] = List(
    property("test createGoogleAnalyticsConfig with a single trackingId", testCreateGoogleAnalyticsConfigWithSingleTrackingId),
    property("test createGoogleAnalyticsConfig with multiple trackingIds", testCreateGoogleAnalyticsConfigWithMultipleTrackingIds),
    property("test createGoogleAnalyticsConfig with no trackingId", testCreateGoogleAnalyticsConfigWithNoTrackingId),
  )

  def testCreateGoogleAnalyticsConfigWithSingleTrackingId: Property =
    for {
      trackingId  <- Gen
                       .string(Gen.digit, Range.linear(1, 10))
                       .map(id => s"G-$id")
                       .log("trackingId")
      anonymizeIp <- Gen.boolean.option.log("anonymizeIp")
      trackingIds <- Gen.constant(List(trackingId)).log("trackingIds")
    } yield runIO {
      TempFiles
        .runWithTempDir("temporary-dir-prefix") { tempDir =>
          val resultJsonFile = new File(tempDir.value, "result.json")

          val expectedJson =
            json"""{
                "trackingID": $trackingId,
                "anonymizeIP": $anonymizeIp
              }""".deepDropNullValues

          val expected = googleAnalytics(trackingIds, anonymizeIp)

          for {
            _                <- Docusaur.createGoogleAnalyticsConfig[IO](resultJsonFile, trackingIds, anonymizeIp)
            resultJsonString <- readFile(resultJsonFile)
            actualJson       <- effectOf(parse(resultJsonString)).rethrow
            actual           <- effectOf(actualJson.as[GoogleAnalytics]).rethrow
          } yield Result.all(
            List(
              actual ==== expected,
              actualJson ==== expectedJson,
            )
          )
        }
        .sequence
        .rethrow
    }

  def testCreateGoogleAnalyticsConfigWithMultipleTrackingIds: Property =
    for {
      trackingIds <- Gen
                       .string(Gen.digit, Range.linear(1, 10))
                       .map(id => s"G-$id")
                       .list(Range.linear(2, 10))
                       .log("trackingIds")
      anonymizeIp <- Gen.boolean.option.log("anonymizeIp")
    } yield runIO {
      TempFiles
        .runWithTempDir("temporary-dir-prefix") { tempDir =>
          val resultJsonFile = new File(tempDir.value, "result.json")

          val expectedJson =
            json"""{
                "trackingID": $trackingIds,
                "anonymizeIP": $anonymizeIp
              }""".deepDropNullValues

          val expected = googleAnalytics(trackingIds, anonymizeIp)

          for {
            _                <- Docusaur.createGoogleAnalyticsConfig[IO](resultJsonFile, trackingIds, anonymizeIp)
            resultJsonString <- readFile(resultJsonFile)
            actualJson       <- effectOf(parse(resultJsonString)).rethrow
            actual           <- effectOf(actualJson.as[GoogleAnalytics]).rethrow
          } yield Result.all(
            List(
              actual ==== expected,
              actualJson ==== expectedJson,
            )
          )
        }
        .sequence
        .rethrow
    }

  def testCreateGoogleAnalyticsConfigWithNoTrackingId: Property =
    for {
      trackingIds <- Gen.constant(List.empty[String]).log("trackingIds")
      anonymizeIp <- Gen.boolean.option.log("anonymizeIp")
    } yield runIO {
      TempFiles
        .runWithTempDir("temporary-dir-prefix") { tempDir =>
          val resultJsonFile = new File(tempDir.value, "result.json")

          val expected = json"""{}"""

          for {
            _                <- Docusaur.createGoogleAnalyticsConfig[IO](resultJsonFile, trackingIds, anonymizeIp)
            resultJsonString <- readFile(resultJsonFile)
            actual           <- effectOf(parse(resultJsonString)).rethrow
          } yield actual ==== expected
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

  def googleAnalytics(trackingID: List[String], anonymizeIP: Option[Boolean]): GoogleAnalytics =
    GoogleAnalytics(GoogleAnalytics.TrackingID(trackingID), anonymizeIP)

  final case class GoogleAnalytics(trackingID: GoogleAnalytics.TrackingID, anonymizeIP: Option[Boolean])
  object GoogleAnalytics {

    implicit val googleAnalyticsEq: Eq[GoogleAnalytics] = Eq.fromUniversalEquals

    implicit val googleAnalyticsShow: Show[GoogleAnalytics] = Show.fromToString

    implicit val googleAnalyticsCodec: circe.Codec[GoogleAnalytics] = io.circe.generic.semiauto.deriveCodec

    final case class TrackingID(trackingIDs: List[String]) extends AnyVal
    object TrackingID {
      implicit val trackingIDEncoder: Encoder[TrackingID] = Encoder.instance { trackingId =>
        val trackingIDs = trackingId.trackingIDs
        trackingIDs match {
          case Nil => Json.Null
          case onlyId :: Nil => onlyId.asJson
          case _ :: _ => trackingIDs.asJson
        }
      }
      implicit val trackingIDDecoder: Decoder[TrackingID] = Decoder[List[String]]
        .or(Decoder[String].map(List(_)))
        .map(TrackingID(_))
    }

  }
}
