package com.pixlfox.scriptablemc

import java.io.File
import java.net.URLClassLoader
import java.security.CodeSource
import java.security.PermissionCollection
import java.security.Permissions

class PluginClassLoader(pluginFolder: File) : URLClassLoader(
    pluginFolder
        .listFiles()?.filter {
            it.extension.equals("jar", true)
        }?.map {
            it.canonicalFile.toURI().toURL()
        }?.toTypedArray()) {

    override fun getPermissions(codesource: CodeSource?): PermissionCollection = Permissions()
}