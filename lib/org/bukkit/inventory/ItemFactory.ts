declare var Java: any;
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Color} from '../../../org/bukkit/Color.js'

export interface ItemFactory {
	asMetaFor(meta: ItemMeta, stack: ItemStack): ItemMeta;
	asMetaFor(meta: ItemMeta, material: Material): ItemMeta;
	getItemMeta(material: Material): ItemMeta;
	isApplicable(meta: ItemMeta, material: Material): boolean;
	isApplicable(meta: ItemMeta, stack: ItemStack): boolean;
	updateMaterial(meta: ItemMeta, material: Material): Material;
	getDefaultLeatherColor(): Color;
}

export class ItemFactory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemFactory');
	}
}

