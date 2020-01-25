package com.pixlfox.scriptablemc

import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.pixlfox.scriptablemc.smartinvs.MainMenu
import io.github.jorelali.commandapi.api.CommandAPI
import io.github.jorelali.commandapi.api.CommandExecutor
import io.github.jorelali.commandapi.api.CommandPermission
import io.github.jorelali.commandapi.api.arguments.Argument
import io.github.jorelali.commandapi.api.arguments.GreedyStringArgument
import io.github.jorelali.commandapi.api.arguments.LiteralArgument
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.event.Listener
import org.bukkit.plugin.java.JavaPlugin
import org.graalvm.polyglot.PolyglotException


@Suppress("unused")
class ScriptablePluginMain : JavaPlugin(), Listener {
    private var scriptEngine: ScriptablePluginEngine? = null

    override fun onLoad() {
        runInPluginContext {
            val canRegisterField = CommandAPI::class.java.getDeclaredField("canRegister")
            canRegisterField.isAccessible = true
            canRegisterField.setBoolean(null, true)
            canRegisterField.isAccessible = false

            CommandAPI.getInstance().register(
                "scriptablemc",
                CommandPermission.fromString("scriptablemc.menu"),
                arrayOf("smc"),
                linkedMapOf<String, Argument>("menu" to LiteralArgument("menu")),
                CommandExecutor { sender, _ ->
                    if (sender is Player) {
                        MainMenu.INVENTORY.open(sender)
                    }
                })

            CommandAPI.getInstance().register(
                "scriptablemc",
                CommandPermission.fromString("scriptablemc.info"),
                arrayOf("smc"),
                linkedMapOf<String, Argument>("info" to LiteralArgument("info")),
                CommandExecutor { sender, _ ->
                    if (sender is Player) {
                        val isGraalRuntime = scriptEngine?.evalJs("if (typeof Graal != 'undefined') { Graal.isGraalRuntime() } else { false }")?.asBoolean() == true
                        sender.sendMessage("${ChatColor.GREEN}ScriptableMC Version: ${this.description.version}")
                        sender.sendMessage("${ if(isGraalRuntime) ChatColor.GREEN else ChatColor.YELLOW }GraalVM Java Runtime: $isGraalRuntime")
                        if(isGraalRuntime) {
                            sender.sendMessage("${ChatColor.AQUA}GraalVM Runtime Version: ${scriptEngine?.evalJs("Graal.versionGraalVM")}")
                            sender.sendMessage("${ChatColor.AQUA}GraalJS Engine Version: ${scriptEngine?.evalJs("Graal.versionJS")}")
                        }
                    }
                })

            CommandAPI.getInstance().register(
                "jsreload",
                CommandPermission.fromString("scriptablemc.js.reload"),
                arrayOf("jsrl"),
                linkedMapOf<String, Argument>(),
                CommandExecutor { sender, _ ->
                    try {
                        scriptEngine!!.close()
                        logger.info("Scripting engine shutdown.")

                        scriptEngine = ScriptablePluginEngine(this)
                        scriptEngine!!.start()
                        logger.info("Scripting engine started.")

                        sender.sendMessage("Javascript engine reloaded.")
                    } catch (e: PolyglotException) {
                        CommandAPI.fail("${ChatColor.DARK_RED}$e")
                        for (stackTrace in e.stackTrace) {
                            sender.sendMessage("${ChatColor.RED}$stackTrace")
                        }
                        e.printStackTrace()
                    } catch (e: Exception) {
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

            CommandAPI.getInstance().register(
                "jsexec",
                CommandPermission.fromString("scriptablemc.js.execute"),
                arrayOf("jsex"),
                linkedMapOf<String, Argument>("source" to GreedyStringArgument()),
                CommandExecutor { sender, args ->
                    try {
                        val response = scriptEngine!!.evalJs(args[0] as String)
                        if (!response.isNull) {
                            sender.sendMessage(response.toString())
                        }
                    } catch (e: PolyglotException) {
                        CommandAPI.fail("${ChatColor.DARK_RED}$e")
                        for (stackTrace in e.stackTrace) {
                            sender.sendMessage("${ChatColor.RED}$stackTrace")
                        }
                        e.printStackTrace()
                    } catch (e: Exception) {
                        CommandAPI.fail("${ChatColor.DARK_RED}$e")
                        e.printStackTrace()
                    }
                })

            CommandAPI.getInstance().register(
                "jsexecfile",
                CommandPermission.fromString("scriptablemc.js.execute.file"),
                arrayOf("jsexf"),
                linkedMapOf<String, Argument>("fileName" to GreedyStringArgument()),
                CommandExecutor { sender, args ->
                    if((args[0] as String).equals("main.js", true)) {
                        CommandAPI.fail("${ChatColor.DARK_RED}Unable to execute the main script entrypoint. Use the command /jsrl to reload scripts.")
                    }
                    else {
                        try {
                            val response = scriptEngine!!.evalFile(args[0] as String)
                            if (!response.isNull) {
                                sender.sendMessage(response.toString())
                            }
                        } catch (e: PolyglotException) {
                            CommandAPI.fail("${ChatColor.DARK_RED}$e")
                            for (stackTrace in e.stackTrace) {
                                sender.sendMessage("${ChatColor.RED}$stackTrace")
                            }
                            e.printStackTrace()
                        } catch (e: Exception) {
                            CommandAPI.fail("${ChatColor.DARK_RED}$e")
                            e.printStackTrace()
                        }
                    }
                })

            val fixPermissionsMethod = CommandAPI::class.java.getDeclaredMethod("fixPermissions")
            fixPermissionsMethod.isAccessible = true
            fixPermissionsMethod.invoke(null)
            fixPermissionsMethod.isAccessible = false
        }
    }

    override fun onEnable() {
        runInPluginContext {
            try {
                scriptEngine = ScriptablePluginEngine(this)
                scriptEngine!!.start()
                logger.info("Scriptable plugin engine started.")
            } catch (e: IllegalStateException) {
                if (e.message?.contains("Make sure the truffle-api.jar is on the classpath.", true) == true) {
                    logger.warning("Scriptable plugin engine failed to start.")
                    e.printStackTrace()
                    logger.severe("It looks like you're trying to run this server with the standard java runtime. ScriptableMC only works with the GraalVM java runtime.")
                } else {
                    logger.warning("Scriptable plugin engine failed to start.")
                    e.printStackTrace()
                }
            } catch (e: Exception) {
                logger.warning("Scriptable plugin engine failed to start.")
                e.printStackTrace()
            }
        }
    }

    override fun onDisable() {
        runInPluginContext {
            try {
                CommandAPI.getInstance().unregister("scriptablemc")
                CommandAPI.getInstance().unregister("jsreload")
                CommandAPI.getInstance().unregister("jsexec")
                CommandAPI.getInstance().unregister("jsexecfile")
            } catch (e: Exception) { }

            try {
                scriptEngine!!.close()
                logger.info("Scriptable plugin engine shutdown.")
            } catch (e: Exception) {
                logger.warning("Scriptable plugin engine failed to shutdown.")
                e.printStackTrace()
            }
        }
    }

    private fun runInPluginContext(callback: () -> Unit) {
        val oldCl = Thread.currentThread().contextClassLoader
        Thread.currentThread().contextClassLoader = javaClass.classLoader
        callback()
        Thread.currentThread().contextClassLoader = oldCl
    }
}