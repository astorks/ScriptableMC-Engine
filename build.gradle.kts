plugins {
    java
    id("org.jetbrains.kotlin.jvm") version "1.3.61" apply false
    id("com.github.johnrengelman.shadow") version "5.2.0" apply false
    id("org.jetbrains.gradle.plugin.idea-ext") version "0.7" apply false
}

tasks.register("shadowJarAll") {
    group = "shadow"
    dependsOn(":ScriptableMC-Engine-JS:shadowJar")
    dependsOn(":ScriptableMC-Engine-PY:shadowJar")
}