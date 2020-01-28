package com.pixlfox.scriptablemc.utils


@Suppress("unused")
class File(pathName: String) {

    private val javaFile: java.io.File = java.io.File(pathName)

    fun readText(): String = javaFile.readText()
    fun readLines(): Array<String> = javaFile.readLines().toTypedArray()
    fun writeText(text: String): Unit = javaFile.writeText(text)
    fun exists(): Boolean = javaFile.exists()
    fun createNewFile(): Boolean = javaFile.createNewFile()
    fun isFile(): Boolean = javaFile.isFile
    fun mkdir(): Boolean = javaFile.mkdir()
    fun mkdirs(): Boolean = javaFile.mkdirs()
    fun isDirectory(): Boolean = javaFile.isDirectory
    fun parentFile(): File =
        new(javaFile.parentFile)

    companion object {
        internal fun new(javaFile: java.io.File): File {
            return File(javaFile.path)
        }
    }
}