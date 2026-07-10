logLevel := sbt.Level.Warn

addSbtPlugin("com.github.sbt" % "sbt-ci-release" % "1.12.0")

addSbtPlugin("com.eed3si9n" % "sbt-salad-days" % "0.2.0")

addSbtPlugin("org.wartremover" % "sbt-wartremover" % "3.6.1")

val sbtDevOopsVersion = "3.6.0"
addSbtPlugin("io.kevinlee" % "sbt-devoops-sbt-extra" % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-github"    % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-starter"   % sbtDevOopsVersion)
