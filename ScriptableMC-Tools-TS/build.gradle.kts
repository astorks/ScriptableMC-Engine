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
    implementation("org.graalvm.sdk:graal-sdk:19.3.1")
    implementation("org.graalvm.js:js:19.3.1")
    implementation("org.graalvm.js:js-scriptengine:19.3.1")
    implementation("org.graalvm.truffle:truffle-api:19.3.1")

    implementation("com.github.jkcclemens:khttp:-SNAPSHOT")
    implementation("org.spigotmc:spigot-api:1.15.2-R0.1-SNAPSHOT")
    implementation("co.aikar:acf-paper:0.5.0-SNAPSHOT")
    implementation("fr.minuskube.inv:smart-invs:1.2.7")
    compileOnly("me.clip:placeholderapi:2.10.4")
    implementation("com.thoughtworks.paranamer:paranamer:2.8")
    implementation("com.beust:klaxon:5.2")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("commons-io:commons-io:2.6")

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
    //classpath = sourceSets["main"].java.srcDirs
}