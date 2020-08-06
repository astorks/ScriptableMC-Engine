plugins {
    java
    id("org.jetbrains.kotlin.jvm") version "1.3.72" apply false
    id("com.github.johnrengelman.shadow") version "5.2.0" apply false
    id("org.jetbrains.gradle.plugin.idea-ext") version "0.7" apply false
}

allprojects {
    group = "com.pixlfox.scriptablemc"
    version = "1.3.0"

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
        maven {
            name = "codemc-repo"
            url = uri("https://repo.codemc.org/repository/maven-public/")
        }
        maven {
            name = "mccommandapi"
            url = uri("https://raw.githubusercontent.com/JorelAli/1.13-Command-API/mvn-repo/1.13CommandAPI/")
        }
    }
}

tasks.register("shadowJarAll") {
    group = "shadow"

    dependsOn(":ScriptableMC-Engine-JS:shadowJar")
    dependsOn(":ScriptableMC-Engine-JS:Bundled:shadowJar")
//    dependsOn(":ScriptableMC-Engine-PY:shadowJar")
//    dependsOn(":ScriptableMC-Engine-PY:Bundled:shadowJar")

    doFirst {
        if(!file("./build").exists()) file("./build").mkdirs()
        if(file("./build/ScriptableMC-Engine-JS.jar").exists()) file("./build/ScriptableMC-Engine-JS.jar").delete()
        if(file("./build/ScriptableMC-Engine-JS-Bundled.jar").exists()) file("./build/ScriptableMC-Engine-JS-Bundled.jar").delete()
//        if(file("./build/ScriptableMC-Engine-PY.jar").exists()) file("./build/ScriptableMC-Engine-PY.jar").delete()
//        if(file("./build/ScriptableMC-Engine-PY-Bundled.jar").exists()) file("./build/ScriptableMC-Engine-PY-Bundled.jar").delete()
    }

    doLast {
        file("./ScriptableMC-Engine-JS/build/libs/ScriptableMC-Engine-JS.jar").copyTo(file("./build/ScriptableMC-Engine-JS.jar"), overwrite = true)
        file("./ScriptableMC-Engine-JS/Bundled/build/libs/ScriptableMC-Engine-JS-Bundled.jar").copyTo(file("./build/ScriptableMC-Engine-JS-Bundled.jar"), overwrite = true)
//        file("./ScriptableMC-Engine-PY/build/libs/ScriptableMC-Engine-PY.jar").copyTo(file("./build/ScriptableMC-Engine-PY.jar"), overwrite = true)
//        file("./ScriptableMC-Engine-PY/Bundled/build/libs/ScriptableMC-Engine-PY-Bundled.jar").copyTo(file("./build/ScriptableMC-Engine-PY-Bundled.jar"), overwrite = true)
    }

}
