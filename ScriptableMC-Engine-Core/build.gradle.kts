import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
    java
    id("org.jetbrains.kotlin.jvm")
    id("com.github.johnrengelman.shadow")
    id("org.jetbrains.gradle.plugin.idea-ext")
}

var graalvmVersion = findProperty("dependencies.graalvm.version") ?: "22.3.0"
var spigotmcVersion = findProperty("dependencies.spigotmc.version") ?: "1.19.2-R0.1-SNAPSHOT"

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

val coreShadow by configurations.creating

dependencies {
    // Kotlin Standard Library & Reflection
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("org.jetbrains.kotlin:kotlin-reflect")

    // SpigotMC API
    compileOnly("org.spigotmc:spigot-api:$spigotmcVersion") {
        isChanging = true
    }

    // GraalVM SDK & GraalJS Engine
    compileOnly("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    compileOnly("org.graalvm.truffle:truffle-api:$graalvmVersion")

    // 3rd-Party Libraries
    implementation("com.github.kittinunf.fuel:fuel:2.3.1")
    implementation("com.github.kittinunf.fuel:fuel-json:2.3.1")
    implementation("co.aikar:acf-paper:0.5.1-SNAPSHOT")
    implementation("de.tr7zw:item-nbt-api:2.8.0")
    implementation("fr.minuskube.inv:smart-invs:1.2.7")
    compileOnly("me.clip:placeholderapi:2.11.2")


    coreShadow(project)
    coreShadow("org.spigotmc:spigot-api:$spigotmcVersion:shaded")
    coreShadow("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    coreShadow("org.graalvm.truffle:truffle-api:$graalvmVersion")
    coreShadow("com.github.kittinunf.fuel:fuel:2.3.1")
    coreShadow("com.github.kittinunf.fuel:fuel-json:2.3.1")
    coreShadow("co.aikar:acf-paper:0.5.1-SNAPSHOT")
    coreShadow("de.tr7zw:item-nbt-api:2.8.0")
    coreShadow("fr.minuskube.inv:smart-invs:1.2.7")
    coreShadow("me.clip:placeholderapi:2.11.2")

    testImplementation("junit", "junit", "4.12")
}

tasks.shadowJar {
    configurations = listOf(coreShadow)
    archiveFileName.set("ScriptableMC-Engine-Core.jar")
}

tasks.compileKotlin {
    kotlinOptions.jvmTarget = "11"
    kotlinOptions.javaParameters = true
}
tasks.compileTestKotlin {
    kotlinOptions.jvmTarget = "11"
    kotlinOptions.javaParameters = true
}