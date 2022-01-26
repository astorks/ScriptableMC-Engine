plugins {
    java
    id("org.jetbrains.kotlin.jvm") version "1.6.10" apply false
    id("com.github.johnrengelman.shadow") version "7.0.0" apply false
    id("org.jetbrains.gradle.plugin.idea-ext") version "1.1.1" apply false
    id("com.pixlfox.scriptablemc.buildtools") version "1.0.3" apply false
}

var smcVersion = findProperty("smc.version")!!
var graalvmVersion = findProperty("graalvm.version")!!
var spigotmcVersion = findProperty("spigotmc.version")!!


allprojects {
    group = "com.pixlfox.scriptablemc"
    version = smcVersion

    repositories {
        mavenCentral()
        maven {
            name = "JitPack"
            url = uri("https://jitpack.io")
        }
        maven {
            name = "spigotmc"
            url = uri("https://hub.spigotmc.org/nexus/content/repositories/snapshots/")
        }
        maven {
            name = "spigotmc nexus"
            url = uri("https://hub.spigotmc.org/nexus/content/repositories/sonatype-nexus-snapshots/")
        }
        maven {
            name = "minecraft"
            url = uri("https://libraries.minecraft.net")
        }
        maven {
            name = "papermc"
            url = uri("https://papermc.io/repo/repository/maven-public/")
        }
        maven {
            name = "placeholderapi"
            url = uri("https://repo.extendedclip.com/content/repositories/placeholderapi/")
        }
        maven {
            name = "aikar-acf"
            url = uri("https://repo.aikar.co/content/groups/aikar/")
        }
        maven {
            name = "codemc-repo"
            url = uri("https://repo.codemc.org/repository/maven-public/")
        }
    }
}

tasks.register("shadowJarAll") {
    group = "shadow"

    dependsOn(":ScriptableMC-Engine-JS:shadowJar")
    dependsOn(":ScriptableMC-Engine-JS:Bundled:shadowJar")

    doFirst {
        if(!file("./build").exists()) file("./build").mkdirs()
        if(file("./build/ScriptableMC-Engine-JS.jar").exists()) file("./build/ScriptableMC-Engine-JS.jar").delete()
        if(file("./build/ScriptableMC-Engine-JS-Bundled.jar").exists()) file("./build/ScriptableMC-Engine-JS-Bundled.jar").delete()
    }

    doLast {
        file("./ScriptableMC-Engine-JS/build/libs/ScriptableMC-Engine-JS.jar").copyTo(file("./build/ScriptableMC-Engine-JS.jar"), overwrite = true)
        file("./ScriptableMC-Engine-JS/Bundled/build/libs/ScriptableMC-Engine-JS-Bundled.jar").copyTo(file("./build/ScriptableMC-Engine-JS-Bundled.jar"), overwrite = true)
    }

}
