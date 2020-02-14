package com.smc.utils

import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemStack

@Suppress("unused")
class ItemBuilder(private val itemStack: ItemStack) {

    constructor(material: Material): this(ItemStack(material))

    fun setDisplayName(displayName: String): ItemBuilder {
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

    fun setLore(lore: Array<String>): ItemBuilder {
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

    fun isUnbreakable(isUnbreakable: Boolean): ItemBuilder {
        val itemMeta = itemStack.itemMeta
        itemMeta?.isUnbreakable = isUnbreakable
        itemStack.itemMeta = itemMeta

        return this
    }

    fun addEnchant(enchantment: Enchantment, level: Int, ignoreLevelRestriction: Boolean): ItemBuilder {
        val itemMeta = itemStack.itemMeta
        itemMeta?.addEnchant(enchantment, level, ignoreLevelRestriction)
        itemStack.itemMeta = itemMeta

        return this
    }

    fun removeEnchantment(enchantment: Enchantment): ItemBuilder {
        val itemMeta = itemStack.itemMeta
        itemMeta?.removeEnchant(enchantment)
        itemStack.itemMeta = itemMeta

        return this
    }

    fun build(): ItemStack {
        return itemStack
    }
}