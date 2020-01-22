declare var Java: any;
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {Material} from '../../../org/bukkit/Material.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Color} from '../../../org/bukkit/Color.js'

export interface ItemFactory {
	getItemMeta(material: Material): ItemMeta;
	asMetaFor(meta: ItemMeta, material: Material): ItemMeta;
	asMetaFor(meta: ItemMeta, stack: ItemStack): ItemMeta;
	updateMaterial(meta: ItemMeta, material: Material): Material;
	isApplicable(meta: ItemMeta, material: Material): boolean;
	isApplicable(meta: ItemMeta, stack: ItemStack): boolean;
	getDefaultLeatherColor(): Color;
}

export class ItemFactory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemFactory');
	}
}

