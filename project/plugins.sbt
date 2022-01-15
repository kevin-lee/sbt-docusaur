logLevel := sbt.Level.Warn

addSbtPlugin("com.github.sbt"  % "sbt-ci-release"  % "1.5.10")
addSbtPlugin("org.wartremover" % "sbt-wartremover" % "2.4.10")
addSbtPlugin("io.kevinlee"     % "sbt-docusaur"    % "0.8.1")

val sbtDevOopsVersion = "2.14.0"
addSbtPlugin("io.kevinlee" % "sbt-devoops-sbt-extra" % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-github"    % sbtDevOopsVersion)
