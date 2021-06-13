plugins {
    java
    id("org.jetbrains.kotlin.jvm")
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
    // GraalVM SDK & GraalJS Engine
    compileOnly("org.graalvm.sdk:graal-sdk:$graalvmVersion")
    compileOnly("org.graalvm.truffle:truffle-api:$graalvmVersion")

    implementation("com.github.jkcclemens:khttp:-SNAPSHOT")
    compileOnly("org.spigotmc:spigot-api:$spigotmcVersion")
    implementation("co.aikar:acf-paper:0.5.0-SNAPSHOT")
    implementation("fr.minuskube.inv:smart-invs:1.2.7")
    compileOnly("me.clip:placeholderapi:2.10.4")
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
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