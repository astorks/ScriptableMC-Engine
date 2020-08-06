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
    // GraalVM SDK & GraalJS Engine
    compileOnly("org.graalvm.sdk:graal-sdk:20.1.0")
    compileOnly("org.graalvm.truffle:truffle-api:20.1.0")

    implementation("com.github.jkcclemens:khttp:-SNAPSHOT")
    compileOnly("org.spigotmc:spigot-api:1.16.1-R0.1-SNAPSHOT")
    implementation("co.aikar:acf-paper:0.5.0-SNAPSHOT")
    implementation("fr.minuskube.inv:smart-invs:1.2.7")
    compileOnly("me.clip:placeholderapi:2.10.4")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("commons-io:commons-io:2.6")
    implementation("de.tr7zw:item-nbt-api:2.2.0")
    implementation("dev.jorel:commandapi-core:3.4")

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