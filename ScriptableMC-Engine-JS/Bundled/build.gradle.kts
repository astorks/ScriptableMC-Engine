plugins {
    java
    id("org.jetbrains.kotlin.jvm")
    id("com.github.johnrengelman.shadow")
    id("org.jetbrains.gradle.plugin.idea-ext")
}

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
    implementation(project(":ScriptableMC-Engine-JS", "shadow"))

    // GraalVM SDK & GraalJS Engine
    implementation("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    implementation("org.graalvm.js:js:$graalvmVersion")
    implementation("org.graalvm.js:js-scriptengine:$graalvmVersion")
    implementation("org.graalvm.truffle:truffle-api:$graalvmVersion")
    implementation("org.graalvm.tools:chromeinspector:$graalvmVersion")
    implementation("org.graalvm.tools:profiler:$graalvmVersion")

    testImplementation("junit", "junit", "4.12")
}

tasks.compileKotlin {
    kotlinOptions.jvmTarget = "11"
    kotlinOptions.javaParameters = true
}
tasks.compileTestKotlin {
    kotlinOptions.jvmTarget = "11"
    kotlinOptions.javaParameters = true
}

tasks.jar {

}

tasks.shadowJar {
    archiveFileName.set("ScriptableMC-Engine-JS-Bundled.jar")
    relocate("co.aikar.commands", "com.pixlfox.scriptablemc.acf")
    relocate("de.tr7zw.changeme.nbtapi", "com.smc.nbtapi")
    mergeServiceFiles()
}