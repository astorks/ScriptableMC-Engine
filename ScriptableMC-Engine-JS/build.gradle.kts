import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar
import org.apache.tools.ant.filters.ReplaceTokens
import org.jetbrains.kotlin.gradle.plugin.mpp.pm20.util.archivesName

plugins {
    java
    id("org.jetbrains.kotlin.jvm")
//    id("com.github.johnrengelman.shadow")
    id("io.github.goooler.shadow")
    id("org.jetbrains.gradle.plugin.idea-ext")
}

var pluginVersion = findProperty("plugin.version") ?: "2.0.0-dev"
var graalvmVersion = findProperty("dependencies.graalvm.version") ?: "23.0.2"
var spigotmcVersion = findProperty("dependencies.spigotmc.version") ?: "1.20.4-R0.1-SNAPSHOT"

version = pluginVersion

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility  = JavaVersion.VERSION_17

}

idea {
    module {
        isDownloadJavadoc = true
        isDownloadSources = true
    }
}

val baseShadow: Configuration by configurations.creating
val engineShadow: Configuration by configurations.creating

dependencies {
    implementation(project(":ScriptableMC-Engine-Core"))

    // SpigotMC API
    compileOnly("org.spigotmc:spigot-api:$spigotmcVersion") {
        isChanging = true
    }

    compileOnly("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    compileOnly("org.graalvm.truffle:truffle-api:$graalvmVersion")
    compileOnly("co.aikar:acf-paper:0.5.1-SNAPSHOT")
    compileOnly("com.github.kittinunf.fuel:fuel:2.3.1")
    compileOnly("com.github.kittinunf.fuel:fuel-json:2.3.1")

    baseShadow(project)
    baseShadow("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    baseShadow("org.graalvm.truffle:truffle-api:$graalvmVersion")
    baseShadow("com.github.kittinunf.fuel:fuel:2.3.1")
    baseShadow("com.github.kittinunf.fuel:fuel-json:2.3.1")
    baseShadow("co.aikar:acf-paper:0.5.1-SNAPSHOT")
    baseShadow("fr.minuskube.inv:smart-invs:1.2.7")

    engineShadow("org.graalvm.js:js:$graalvmVersion")
    engineShadow("org.graalvm.js:js-scriptengine:$graalvmVersion")
    engineShadow("org.graalvm.tools:chromeinspector:$graalvmVersion")
    engineShadow("org.graalvm.tools:profiler:$graalvmVersion")

    testImplementation("junit", "junit", "4.12")
}

tasks {
    processResources {
        expand(
            "smcVersion" to pluginVersion,
            "graalvmVersion" to graalvmVersion,
            "spigotmcVersion" to spigotmcVersion,
        )
    }

    compileKotlin {
        kotlinOptions.jvmTarget = "17"
        kotlinOptions.javaParameters = true
    }

    compileTestKotlin {
        kotlinOptions.jvmTarget = "17"
        kotlinOptions.javaParameters = true
    }

    jar {
        archiveBaseName.set("smcjs-classes")
    }

    shadowJar {
        enabled = false
        dependsOn("shadowJarBase")
        dependsOn("shadowJarEngine")
    }

    register("shadowJarBase", ShadowJar::class.java) {
        group = "shadow"
        configurations = listOf(baseShadow)
        archiveFileName.set("smcjs-$pluginVersion.jar")

        dependencies {
            exclude(dependency("org.spigotmc:spigot-api"))
            exclude(dependency("net.md-5:bungeecord-chat"))
            exclude(dependency("junit:junit"))
        }

        relocate("co.aikar.commands", "com.pixlfox.scriptablemc.acf")
        relocate("de.tr7zw.changeme.nbtapi", "com.smc.nbtapi")
        relocate("kotlin", "scriptablemc.kotlin")
        relocate("org.intellij", "scriptablemc.intellij")
        relocate("org.jetbrains", "scriptablemc.jetbrains")
        relocate("org.yaml", "scriptablemc.yaml")
        relocate("org.json", "scriptablemc.json")

        mergeServiceFiles()
    }

    register("shadowJarEngine", ShadowJar::class.java) {
        group = "shadow"
        configurations = listOf(baseShadow, engineShadow)
        archiveFileName.set("smcjs-bundle-$pluginVersion.jar")

        dependencies {
            exclude(dependency("org.spigotmc:spigot-api"))
            exclude(dependency("net.md-5:bungeecord-chat"))
            exclude(dependency("junit:junit"))
        }

        relocate("co.aikar.commands", "com.pixlfox.scriptablemc.acf")
        relocate("de.tr7zw.changeme.nbtapi", "com.smc.nbtapi")
        relocate("kotlin", "scriptablemc.kotlin")
        relocate("org.intellij", "scriptablemc.intellij")
        relocate("org.jetbrains", "scriptablemc.jetbrains")
        relocate("org.yaml", "scriptablemc.yaml")
        relocate("org.json", "scriptablemc.json")

        mergeServiceFiles()
    }
}