logLevel := sbt.Level.Warn

addSbtPlugin("com.github.sbt"  % "sbt-ci-release"  % "1.11.2")
addSbtPlugin("org.wartremover" % "sbt-wartremover" % "3.1.5")
addSbtPlugin("io.kevinlee"     % "sbt-docusaur"    % "0.18.0")

val sbtDevOopsVersion = "3.3.1"
addSbtPlugin("io.kevinlee" % "sbt-devoops-sbt-extra" % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-github"    % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-starter"   % sbtDevOopsVersion)
