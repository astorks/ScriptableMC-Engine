plugins {
    java
    id("org.jetbrains.kotlin.jvm") version "1.3.61" apply false
    id("com.github.johnrengelman.shadow") version "5.2.0" apply false
    id("org.jetbrains.gradle.plugin.idea-ext") version "0.7" apply false
}

allprojects {
    group = "com.pixlfox.scriptablemc"
    version = "1.2.0"

    repositories {
        mavenCentral()
        jcenter()
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
            url = uri("http://repo.extendedclip.com/content/repositories/placeholderapi/")
        }
        maven {
            name = "aikar-acf"
            url = uri("https://repo.aikar.co/content/groups/aikar/")
        }
    }
}

tasks.register("shadowJarAll") {
    group = "shadow"
    dependsOn(":ScriptableMC-Engine-JS:shadowJar")
    dependsOn(":ScriptableMC-Engine-PY:shadowJar")
}
