logLevel := sbt.Level.Warn

addSbtPlugin("com.github.sbt"  % "sbt-ci-release"  % "1.5.12")
addSbtPlugin("org.wartremover" % "sbt-wartremover" % "3.1.5")
addSbtPlugin("io.kevinlee"     % "sbt-docusaur"    % "0.17.0")

val sbtDevOopsVersion = "3.2.0"
addSbtPlugin("io.kevinlee" % "sbt-devoops-sbt-extra" % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-github"    % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-starter"   % sbtDevOopsVersion)
