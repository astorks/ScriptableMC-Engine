package com.pixlfox.scriptablemc.smartinvs

import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import fr.minuskube.inv.ClickableItem
import fr.minuskube.inv.SmartInventory
import fr.minuskube.inv.content.InventoryContents
import fr.minuskube.inv.content.InventoryProvider
import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.graalvm.polyglot.Value
import java.util.function.Consumer

@Suppress("unused", "MemberVisibilityCanBePrivate")
class SmartInventoryInterface {
    fun builder(): SmartInventory.Builder {
        return SmartInventory.builder().manager(ScriptablePluginEngine.instance!!.inventoryManager)
    }

    fun provider(scriptableObject: Value): SmartInventoryProvider {
        if(scriptableObject.canInstantiate()) {
            return provider(scriptableObject.newInstance())
        }

        return SmartInventoryProvider(scriptableObject)
    }

    fun clickableItem(item: ItemStack): ClickableItem {
        return ClickableItem.empty(item)
    }

    fun clickableItem(item: ItemStack, consumer: Consumer<InventoryClickEvent>): ClickableItem {
        return ClickableItem.of(item, consumer)
    }

    fun itemBuilder(itemStack: ItemStack): SmartItemBuilder {
        return SmartItemBuilder(itemStack)
    }
}

class SmartItemBuilder(private val itemStack: ItemStack) {

    constructor(material: Material): this(ItemStack(material))

    fun setDisplayName(displayName: String): SmartItemBuilder {
        val itemMeta = itemStack.itemMeta
        itemMeta?.setDisplayName(displayName)
        itemStack.itemMeta = itemMeta

        return this
    }

    fun getDisplayName(): String {
        val itemMeta = itemStack.itemMeta
        if(itemMeta != null) {
            return itemMeta.displayName
        }

        return ""
    }

    fun setLore(lore: Array<String>): SmartItemBuilder {
        val itemMeta = itemStack.itemMeta
        itemMeta?.lore = lore.toList()
        itemStack.itemMeta = itemMeta

        return this
    }

    fun getLore(): Array<String> {
        val itemMeta = itemStack.itemMeta
        if(itemMeta != null && itemMeta.lore != null) {
            return itemMeta.lore!!.toTypedArray()
        }

        return arrayOf()
    }

    fun isUnbreakable(isUnbreakable: Boolean): SmartItemBuilder {
        val itemMeta = itemStack.itemMeta
        itemMeta?.isUnbreakable = isUnbreakable
        itemStack.itemMeta = itemMeta

        return this
    }

    fun addEnchant(enchantment: Enchantment, level: Int, ignoreLevelRestriction: Boolean): SmartItemBuilder {
        val itemMeta = itemStack.itemMeta
        itemMeta?.addEnchant(enchantment, level, ignoreLevelRestriction)
        itemStack.itemMeta = itemMeta

        return this
    }

    fun removeEnchantment(enchantment: Enchantment): SmartItemBuilder {
        val itemMeta = itemStack.itemMeta
        itemMeta?.removeEnchant(enchantment)
        itemStack.itemMeta = itemMeta

        return this
    }

    fun build(): ItemStack {
        return itemStack
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
