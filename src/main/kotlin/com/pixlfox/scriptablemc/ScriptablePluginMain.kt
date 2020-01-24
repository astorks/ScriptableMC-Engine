package com.pixlfox.scriptablemc

import com.pixlfox.scriptablemc.core.ScriptNotFoundException
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.pixlfox.scriptablemc.smartinvs.MainMenu
import io.github.jorelali.commandapi.api.CommandAPI
import io.github.jorelali.commandapi.api.CommandExecutor
import io.github.jorelali.commandapi.api.CommandPermission
import io.github.jorelali.commandapi.api.arguments.Argument
import io.github.jorelali.commandapi.api.arguments.GreedyStringArgument
import org.bukkit.ChatColor
import org.bukkit.event.Listener
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.entity.Player
import org.graalvm.polyglot.PolyglotException


@Suppress("unused")
class ScriptablePluginMain : JavaPlugin(), Listener {
    private var scriptEngine: ScriptablePluginEngine? = null

    override fun onLoad() {
        val canRegisterField = CommandAPI::class.java.getDeclaredField("canRegister")
        canRegisterField.isAccessible = true
        canRegisterField.setBoolean(null, true)
        canRegisterField.isAccessible = false

        CommandAPI.getInstance().register("scriptablepluginmenu", CommandPermission.fromString("scriptablepluginengine.menu"), arrayOf("spm"), linkedMapOf<String, Argument>(), CommandExecutor { sender, _ ->
            if(sender is Player) {
                MainMenu.INVENTORY.open(sender)
            }
        })

        CommandAPI.getInstance().register("jsreload", CommandPermission.fromString("scriptablepluginengine.js.reload"), arrayOf("jsrl"), linkedMapOf<String, Argument>(), CommandExecutor { sender, _ ->
            try {
                scriptEngine!!.close()
                logger.info("Scripting engine shutdown.")

                scriptEngine = ScriptablePluginEngine(this)
                scriptEngine!!.start()
                logger.info("Scripting engine started.")

                sender.sendMessage("Javascript engine reloaded.")
            }
            catch (e: PolyglotException) {
                CommandAPI.fail("${ChatColor.DARK_RED}$e")
                for (stackTrace in e.stackTrace) {
                    sender.sendMessage("${ChatColor.RED}$stackTrace")
                }
                e.printStackTrace()
            }
            catch (e: Exception) {
                CommandAPI.fail("${ChatColor.DARK_RED}$e")
                e.printStackTrace()
            }
        })

        // Disabled the in-game command for now, run the main method in TypescriptLibraryExporter.kt to generate typescript helper libraries
//        CommandAPI.getInstance().register("tsdef", CommandPermission.fromString("scriptablemc.js.reload"), arrayOf("tsd"), linkedMapOf<String, Argument>(), CommandExecutor { sender, _ ->
//            try {
//                val exporter = ApiExporter("./scripts/mc/", Regex("(com|org|io|fr|net)\\.(.*)?"))
//                exporter.addDefaultClasses()
//                exporter.clean()
//                exporter.exportAllClasses()
//
//                sender.sendMessage("${ChatColor.GREEN}${ChatColor.BOLD}Export complete!")
//            }
//            catch (e: Exception) {
//                CommandAPI.fail("${ChatColor.RED}${e.localizedMessage}")
//            }
//        })

        CommandAPI.getInstance().register("jsexec", CommandPermission.fromString("scriptablepluginengine.js.execute"), arrayOf("jsex"), linkedMapOf<String, Argument>("source" to GreedyStringArgument()), CommandExecutor { sender, args ->
            try {
                val response = scriptEngine!!.evalJs(args[0] as String)
                if(!response.isNull) {
                    sender.sendMessage(response.toString())
                }
            }
            catch (e: PolyglotException) {
                CommandAPI.fail("${ChatColor.DARK_RED}$e")
                for (stackTrace in e.stackTrace) {
                    sender.sendMessage("${ChatColor.RED}$stackTrace")
                }
                e.printStackTrace()
            }
            catch (e: Exception) {
                CommandAPI.fail("${ChatColor.DARK_RED}$e")
                e.printStackTrace()
            }
        })

        val fixPermissionsMethod = CommandAPI::class.java.getDeclaredMethod("fixPermissions")
        fixPermissionsMethod.isAccessible = true
        fixPermissionsMethod.invoke(null)
        fixPermissionsMethod.isAccessible = false
    }

    override fun onEnable() {
        try {
            scriptEngine = ScriptablePluginEngine(this)
            scriptEngine!!.start()
            logger.info("Scriptable plugin engine started.")
        }
        catch (e: Exception) {
            logger.warning("Scriptable plugin engine failed to start.")
            e.printStackTrace()
        }
    }

    override fun onDisable() {
        try {
            CommandAPI.getInstance().unregister("scriptablepluginmenu")
            CommandAPI.getInstance().unregister("jsreload")
            CommandAPI.getInstance().unregister("jsexec")
        }
        catch (e: Exception) { }

        try {
            scriptEngine!!.close()
            logger.info("Scriptable plugin engine shutdown.")
        }
        catch (e: Exception) {
            logger.warning("Scriptable plugin engine failed to shutdown.")
            e.printStackTrace()
        }
    }
}