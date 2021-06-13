package com.pixlfox.scriptablemc

import co.aikar.commands.BaseCommand
import co.aikar.commands.annotation.CommandAlias
import co.aikar.commands.annotation.CommandPermission
import co.aikar.commands.annotation.Subcommand
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender
import java.lang.Exception


@Suppress("unused")
@CommandAlias("scriptablemc|smc")
@Subcommand("typescript|ts")
class SMCTypeScriptToolsCommands(private val basePlugin: SMCTypeScriptToolsMain) : BaseCommand() {

    @Subcommand("reload|rl")
    @CommandAlias("tsrl")
    @CommandPermission("scriptablemc.ts.reload")
    fun reload(sender: CommandSender) {
        basePlugin.reloadConfig()
    }

    @Subcommand("export|ex")
    @CommandAlias("tsex")
    @CommandPermission("scriptablemc.ts.export")
    fun export(sender: CommandSender) {
        val tsExporter = TypescriptLibraryExporter()
                            .clearWhitelistPackages()

        for (packageName in basePlugin.config.getStringList("package_whitelist")) {
            tsExporter.addWhitelistPackage(packageName)
        }

        for (className in basePlugin.config.getStringList("export_classes")) {
            try {
                val exportClass = javaClass.classLoader.loadClass(className)
                tsExporter.addAllClasses(exportClass)
            }
            catch (e: Exception) {
                sender.sendMessage("${ChatColor.RED}[SMC] $e")
            }
        }

        tsExporter.addHelperClasses()
            .addBukkitClasses()
            .clean()
            .exportLibraries()
            .exportGlobalLibrary()
            .copyStaticSources()
            .exportProjectFiles()
    }


}