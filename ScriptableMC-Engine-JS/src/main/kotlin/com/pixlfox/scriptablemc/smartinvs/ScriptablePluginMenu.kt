package com.pixlfox.scriptablemc.smartinvs

import com.pixlfox.scriptablemc.core.JavaScriptPluginEngine
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.smc.utils.ItemBuilder
import fr.minuskube.inv.content.InventoryContents
import fr.minuskube.inv.content.InventoryProvider
import org.bukkit.entity.Player
import org.bukkit.Material
import fr.minuskube.inv.ClickableItem
import fr.minuskube.inv.SmartInventory
import org.bukkit.Bukkit
import org.bukkit.ChatColor



@Suppress("unused")
class MainMenu(private val pluginEngine: ScriptablePluginEngine) : InventoryProvider {
    override fun init(player: Player?, contents: InventoryContents?) {
        if(contents != null && player != null) {
            if(player.hasPermission("scriptablemc.reload")) {
                contents.set(0, 0, ClickableItem.of(ItemBuilder(Material.GOLD_NUGGET)
                    .setDisplayName("${ChatColor.DARK_AQUA}Reload Script Engine")
                    .build()) {
                    Bukkit.getServer().dispatchCommand(player, "scriptablemc reload")
                })
            }

            if(player.hasPermission("scriptablemc.info")) {
                contents.set(0, 1, ClickableItem.of(ItemBuilder(Material.IRON_NUGGET)
                    .setDisplayName("${ChatColor.GREEN}Print ScriptableMC Info")
                    .build()) {
                    Bukkit.getServer().dispatchCommand(player, "scriptablemc info")
                    player.closeInventory()
                })
            }

            contents.set(0, 8, ClickableItem.of(ItemBuilder(Material.BARRIER)
                .setDisplayName("${ChatColor.RED}Close Menu")
                .build()) {
                player.closeInventory()
            })
        }
    }

    override fun update(player: Player?, contents: InventoryContents?) {}

    companion object {
        val INVENTORY: SmartInventory
            get() = SmartInventory.builder()
                    .id("spm.mainmenu")
                    .manager(JavaScriptPluginEngine.instance!!.inventoryManager)
                    .provider(MainMenu(JavaScriptPluginEngine.instance!!))
                    .size(1, 9)
                    .title(ChatColor.LIGHT_PURPLE.toString() + "ScriptableMC | Main Menu")
                    .closeable(true)
                    .build()
    }
}

//class PluginsMenu(private val pluginEngine: ScriptablePluginEngine) : InventoryProvider {
//    override fun init(player: Player?, contents: InventoryContents?) {
//        if(contents != null) {
//            val items = mutableListOf<ClickableItem>()
//            val pagination = contents.pagination()
//
//            for (plugin in pluginEngine.scriptablePlugins) {
//                val itemStack = ItemStack(Material.WHITE_CONCRETE)
//                val itemMeta = itemStack.itemMeta
//                itemMeta?.setDisplayName("${ChatColor.DARK_AQUA}${plugin.pluginName}")
//                itemStack.itemMeta = itemMeta
//                items.add(ClickableItem.of(itemStack) {
//                    player?.sendMessage("NYI")
//                })
//            }
//
//            pagination.setItems(*items.toTypedArray())
//            pagination.setItemsPerPage(21)
//
//            pagination.addToIterator(contents.newIterator(SlotIterator.Type.HORIZONTAL, 1, 1))
//
//            contents.set(5, 3, ClickableItem.of(ItemStack(Material.ARROW)) {
//                INVENTORY.open(player, pagination.previous().page)
//            })
//            contents.set(5, 5, ClickableItem.of(ItemStack(Material.ARROW)) {
//                INVENTORY.open(player, pagination.next().page)
//            })
//        }
//    }
//
//    override fun update(player: Player?, contents: InventoryContents?) {}
//
//    companion object {
//        val INVENTORY: SmartInventory
//            get() = SmartInventory.builder()
//                .id("spm.pluginsmenu")
//                .provider(PluginsMenu(ScriptablePluginEngine.instance!!))
//                .size(6, 9)
//                .title(ChatColor.LIGHT_PURPLE.toString() + "Scriptable Plugin | Plugins")
//                .closeable(true)
//                .build()
//    }
//}