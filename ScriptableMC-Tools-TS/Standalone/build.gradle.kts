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
    implementation(project(":ScriptableMC-Tools-TS"))

    // GraalVM SDK & GraalJS Engine
    implementation("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    implementation("org.graalvm.js:js:$graalvmVersion")
    implementation("org.graalvm.js:js-scriptengine:$graalvmVersion")
    implementation("org.graalvm.truffle:truffle-api:$graalvmVersion")

    implementation("com.github.jkcclemens:khttp:-SNAPSHOT")
    implementation("org.spigotmc:spigot-api:1.17-R0.1-SNAPSHOT")
    implementation("net.md-5:bungeecord-api:1.17-R0.1-SNAPSHOT")
    implementation("co.aikar:acf-paper:0.5.0-SNAPSHOT")
    implementation("fr.minuskube.inv:smart-invs:1.2.7")
    implementation("me.clip:placeholderapi:2.10.9")
    implementation("com.thoughtworks.paranamer:paranamer:2.8")
    implementation("com.beust:klaxon:5.5")
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("commons-io:commons-io:2.6")
    implementation("de.tr7zw:item-nbt-api:2.7.1")

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

tasks.register<JavaExec>("exportTypeScriptLibraries") {
    dependsOn(":ScriptableMC-Tools-TS:Standalone:shadowJar")
    group = "libraries"
    main = "com.pixlfox.scriptablemc.TypescriptLibraryExporter"
    classpath = sourceSets["main"].runtimeClasspath
}

tasks.register<JavaExec>("generateLibSMC") {
    dependsOn(":ScriptableMC-Tools-TS:Standalone:shadowJar")
    group = "libraries"
    main = "com.pixlfox.scriptablemc.TypescriptLibraryExporter"
    args = mutableListOf("--lib-smc")
    classpath = sourceSets["main"].runtimeClasspath
}

tasks.register<JavaExec>("generateLibSMCRelease") {
    dependsOn(":ScriptableMC-Tools-TS:Standalone:shadowJar")
    group = "libraries"
    main = "com.pixlfox.scriptablemc.TypescriptLibraryExporter"
    args = mutableListOf("--lib-smc", "--release")
    classpath = sourceSets["main"].runtimeClasspath
}

tasks.shadowJar {
    println("---------------------------------------")
    println("- ScriptableMC Version: $smcVersion")
    println("- GraalVM Version: $graalvmVersion")
    println("- SpigotMC Version: $spigotmcVersion")
    println("---------------------------------------")
    println("")

    archiveFileName.set("ScriptableMC-Tools-TS-Standalone.jar")
    relocate("co.aikar.commands", "com.pixlfox.scriptablemc.acf")
    relocate("de.tr7zw.changeme.nbtapi", "com.smc.nbtapi")
    mergeServiceFiles()
}