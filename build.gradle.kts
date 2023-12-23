plugins {
    java
    id("org.jetbrains.kotlin.jvm") version "1.9.22" apply false
//    id("com.github.johnrengelman.shadow") version "8.1.1" apply false
    id("io.github.goooler.shadow") version "8.1.2" apply false
    id("org.jetbrains.gradle.plugin.idea-ext") version "1.1.7" apply false
}

allprojects {
    group = project.findProperty("maven_group") ?: "com.pixlfox.scriptablemc"
    version = project.findProperty("plugin.version") ?: "2.0.0-SNAPSHOT"

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

    dependsOn(":ScriptableMC-Engine-Core:shadowJar")
    dependsOn(":ScriptableMC-Engine-JS:shadowJarBase")
    dependsOn(":ScriptableMC-Engine-JS:shadowJarEngine")

    doFirst {
        if(!file("./build/libs").exists()) file("./build/libs").mkdirs()
    }

    doLast {
        file("./ScriptableMC-Engine-Core/build/libs/ScriptableMC-Engine-Core.jar").copyTo(file("./build/libs/ScriptableMC-Engine-Core.jar"), overwrite = true)
        file("./ScriptableMC-Engine-JS/build/libs/ScriptableMC-Engine-JS.jar").copyTo(file("./build/libs/ScriptableMC-Engine-JS.jar"), overwrite = true)
        file("./ScriptableMC-Engine-JS/build/libs/ScriptableMC-Engine-JS-Bundled.jar").copyTo(file("./build/libs/ScriptableMC-Engine-JS-Bundled.jar"), overwrite = true)
    }

}
