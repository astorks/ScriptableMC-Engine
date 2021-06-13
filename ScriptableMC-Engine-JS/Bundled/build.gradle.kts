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
    implementation(project(":ScriptableMC-Engine-JS"))

    // GraalVM SDK & GraalJS Engine
    implementation("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    implementation("org.graalvm.js:js:$graalvmVersion")
    implementation("org.graalvm.js:js-scriptengine:$graalvmVersion")
    implementation("org.graalvm.truffle:truffle-api:$graalvmVersion")
    implementation("org.graalvm.tools:chromeinspector:$graalvmVersion")
    implementation("org.graalvm.tools:profiler:$graalvmVersion")

    implementation("com.github.jkcclemens:khttp:-SNAPSHOT")
    compileOnly("org.spigotmc:spigot-api:$spigotmcVersion")
    implementation("co.aikar:acf-paper:0.5.0-SNAPSHOT")
    implementation("fr.minuskube.inv:smart-invs:1.2.7")
    compileOnly("me.clip:placeholderapi:2.10.4")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("commons-io:commons-io:2.6")

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