plugins {
    java
    id("org.jetbrains.kotlin.jvm")
    id("org.jetbrains.gradle.plugin.idea-ext")
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility  = JavaVersion.VERSION_1_8
}

idea {
    module {
        isDownloadJavadoc = true
        isDownloadSources = true
    }
}

dependencies {
    implementation(project(":ScriptableMC-Engine-Core"))
    implementation(project(":ScriptableMC-Engine-JS"))

    // GraalVM SDK & GraalJS Engine
    implementation("org.graalvm.sdk:graal-sdk:20.1.0")
    implementation("org.graalvm.js:js:20.1.0")
    implementation("org.graalvm.js:js-scriptengine:20.1.0")
    implementation("org.graalvm.truffle:truffle-api:20.1.0")

    implementation("com.github.jkcclemens:khttp:-SNAPSHOT")
    implementation("org.spigotmc:spigot-api:1.16.1-R0.1-SNAPSHOT")
    implementation("net.md-5:bungeecord-api:1.15-SNAPSHOT")
    implementation("co.aikar:acf-paper:0.5.0-SNAPSHOT")
    implementation("fr.minuskube.inv:smart-invs:1.2.7")
    compileOnly("me.clip:placeholderapi:2.10.4")
    implementation("com.thoughtworks.paranamer:paranamer:2.8")
    implementation("com.beust:klaxon:5.2")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("commons-io:commons-io:2.6")
    implementation("de.tr7zw:item-nbt-api:2.2.0")

    testImplementation("junit", "junit", "4.12")
}

tasks.compileKotlin {
    kotlinOptions.jvmTarget = "1.8"
    kotlinOptions.javaParameters = true
}
tasks.compileTestKotlin {
    kotlinOptions.jvmTarget = "1.8"
    kotlinOptions.javaParameters = true
}

tasks.jar {

}

tasks.register<JavaExec>("exportTypeScriptLibraries") {
    dependsOn(":ScriptableMC-Tools-TS:classes")
    group = "libraries"
    main = "com.pixlfox.scriptablemc.TypescriptLibraryExporter"
    classpath = sourceSets["main"].runtimeClasspath
}

tasks.register<JavaExec>("generateLibSMC") {
    dependsOn(":ScriptableMC-Tools-TS:classes")
    group = "libraries"
    main = "com.pixlfox.scriptablemc.TypescriptLibraryExporter"
    args = mutableListOf("--lib-smc")
    classpath = sourceSets["main"].runtimeClasspath
}

tasks.register<JavaExec>("generateLibSMCRelease") {
    dependsOn(":ScriptableMC-Tools-TS:classes")
    group = "libraries"
    main = "com.pixlfox.scriptablemc.TypescriptLibraryExporter"
    args = mutableListOf("--lib-smc", "--release")
    classpath = sourceSets["main"].runtimeClasspath
}