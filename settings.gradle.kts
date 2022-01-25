rootProject.name = "ScriptableMC-Engine"

include("ScriptableMC-Engine-Core")
include("ScriptableMC-Engine-JS")
include("ScriptableMC-Engine-JS:Bundled")

pluginManagement {
    repositories {
        maven {
            name = "LocalMavenFS"
            url = uri("./maven-repo")
        }
        gradlePluginPortal()
    }
}