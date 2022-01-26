rootProject.name = "ScriptableMC-Engine"

include("ScriptableMC-Engine-Core")
include("ScriptableMC-Engine-JS")
include("ScriptableMC-Engine-JS:Bundled")

pluginManagement {
    repositories {
        maven {
            name = "SMCBuildTools"
            url = uri("https://raw.githubusercontent.com/astorks/ScriptableMC-Tools/maven")
        }
        gradlePluginPortal()
    }
}