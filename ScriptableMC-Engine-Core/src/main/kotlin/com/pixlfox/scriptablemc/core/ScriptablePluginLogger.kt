package com.pixlfox.scriptablemc.core

import java.util.logging.Level
import java.util.logging.LogRecord
import java.util.logging.Logger

class ScriptablePluginLogger(private val context: ScriptablePluginContext) : Logger(context.javaPlugin.description.prefix ?: context.javaPlugin.description.name, null) {
    init {
        parent = context.javaPlugin.server.logger.parent
        level = Level.ALL
    }

    override fun log(logRecord: LogRecord) {
        logRecord.message = "[${context.pluginName}] ${logRecord.message}"
        super.log(logRecord)
    }
}