package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import org.bukkit.plugin.java.JavaPlugin

@Suppress("unused")
class SMCTypeScriptToolsMain : JavaPlugin() {
    var commandManager: PaperCommandManager? = null

    override fun onLoad() {

    }

    override fun onEnable() {
        commandManager = PaperCommandManager(this)
        commandManager?.registerCommand(SMCTypeScriptToolsCommands(this), true)

        saveDefaultConfig()
    }

    override fun onDisable() {
        commandManager?.unregisterCommands()
    }
}