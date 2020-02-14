plugins {
    java
    id("org.jetbrains.kotlin.jvm") version "1.3.61"
    id("com.github.johnrengelman.shadow") version "5.2.0"
    id("org.jetbrains.gradle.plugin.idea-ext") version "0.7"
}

group = "com.pixlfox.scriptablemc"
version = "1.1.10"

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

repositories {
    mavenCentral()
    jcenter()
    maven {
        name = "JitPack"
        url = uri("https://jitpack.io")
    }
    maven {
        name = "spigotmc"
        url = uri("https://hub.spigotmc.org/nexus/content/repositories/snapshots/")
    }
    maven {
        name = "spigotmc nexus"
        url = uri("https://hub.spigotmc.org/nexus/content/repositories/sonatype-nexus-snapshots/")
    }
    maven {
        name = "minecraft"
        url = uri("https://libraries.minecraft.net")
    }
    maven {
        name = "papermc"
        url = uri("https://papermc.io/repo/repository/maven-public/")
    }
    maven {
        name = "placeholderapi"
        url = uri("http://repo.extendedclip.com/content/repositories/placeholderapi/")
    }
    maven {
        name = "aikar-acf"
        url = uri("https://repo.aikar.co/content/groups/aikar/")
    }
}

dependencies {
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
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("com.thoughtworks.paranamer:paranamer:2.8")
    implementation("com.beust:klaxon:5.2")

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

tasks.shadowJar {
    archiveFileName.set("ScriptableMC-Tools-TS.jar")
    mergeServiceFiles()
}

tasks.register<JavaExec>("exportTypeScriptLibraries") {
    dependsOn(":ScriptableMC-Engine-JS:classes")
    group = "libraries"
    main = "com.pixlfox.scriptablemc.TypescriptLibraryExporter"
    classpath = sourceSets["main"].runtimeClasspath
    //classpath = sourceSets["main"].java.srcDirs
}