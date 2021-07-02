import org.apache.tools.ant.filters.ReplaceTokens

plugins {
    java
    id("org.jetbrains.kotlin.jvm")
    id("com.github.johnrengelman.shadow")
    id("org.jetbrains.gradle.plugin.idea-ext")
}

var smcVersion = findProperty("smc.version")
var graalvmVersion = findProperty("graalvm.version")
var spigotmcVersion = findProperty("spigotmc.version")

java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility  = JavaVersion.VERSION_11
}

idea {
    module {
        isDownloadJavadoc = true
        isDownloadSources = true
    }
}

dependencies {
    implementation(project(":ScriptableMC-Engine-Core"))

    // SpigotMC API
    compileOnly("org.spigotmc:spigot-api:$spigotmcVersion") {
        isChanging = true
    }

    // GraalVM SDK & GraalJS Engine
    compileOnly("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    compileOnly("org.graalvm.truffle:truffle-api:$graalvmVersion")

    // 3rd-Party Libraries
    implementation("com.github.jkcclemens:khttp:-SNAPSHOT")
    implementation("co.aikar:acf-paper:0.5.0-SNAPSHOT")

    testImplementation("junit", "junit", "4.12")
}

tasks {
    processResources {
        expand(
            "smcVersion" to smcVersion,
            "graalvmVersion" to graalvmVersion,
            "spigotmcVersion" to spigotmcVersion,
        )
    }

    compileKotlin {
        kotlinOptions.jvmTarget = "11"
        kotlinOptions.javaParameters = true
    }

    compileTestKotlin {
        kotlinOptions.jvmTarget = "11"
        kotlinOptions.javaParameters = true
    }

    jar { }

    shadowJar {
        dependencies {
            exclude(dependency("org.spigotmc:spigot-api"))
            exclude(dependency("net.md-5:bungeecord-chat"))
            exclude(dependency("junit:junit"))
        }

        archiveFileName.set("ScriptableMC-Engine-JS.jar")
        relocate("co.aikar.commands", "com.pixlfox.scriptablemc.acf")
        relocate("de.tr7zw.changeme.nbtapi", "com.smc.nbtapi")
        mergeServiceFiles()
    }
}