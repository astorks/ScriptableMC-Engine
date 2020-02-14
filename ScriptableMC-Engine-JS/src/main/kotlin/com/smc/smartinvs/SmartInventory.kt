package com.smc.smartinvs

import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import fr.minuskube.inv.ClickableItem
import fr.minuskube.inv.SmartInventory
import fr.minuskube.inv.content.InventoryContents
import fr.minuskube.inv.content.InventoryProvider
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.graalvm.polyglot.Value
import java.util.function.Consumer

@Suppress("unused", "MemberVisibilityCanBePrivate")
class SmartInventory {
    companion object {
        @JvmStatic
        fun builder(): SmartInventory.Builder = SmartInventory.builder().manager(ScriptablePluginEngine.instance!!.inventoryManager)

        @JvmStatic
        fun provider(scriptableObject: Value): SmartInventoryProvider {
            if (scriptableObject.canInstantiate()) {
                return provider(scriptableObject.newInstance())
            }

            return SmartInventoryProvider(scriptableObject)
        }

        @JvmStatic
        fun clickableItem(item: ItemStack): ClickableItem = ClickableItem.empty(item)

        @JvmStatic
        fun clickableItem(item: ItemStack, consumer: Consumer<InventoryClickEvent>): ClickableItem = ClickableItem.of(item, consumer)
    }
}

class SmartInventoryProvider(private val scriptableObject: Value) : InventoryProvider {
    override fun init(player: Player, contents: InventoryContents) {
        if(scriptableObject.hasMember("init") && scriptableObject.canInvokeMember("init")) {
            scriptableObject.invokeMember("init", player, contents)
        }
    }

    override fun update(player: Player, contents: InventoryContents) {
        if(scriptableObject.hasMember("update") && scriptableObject.canInvokeMember("update")) {
            scriptableObject.invokeMember("update", player, contents)
        }
    }
}