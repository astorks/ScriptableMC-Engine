declare var Java: any;
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {Color} from '../../../org/bukkit/Color.js'
import {Material} from '../../../org/bukkit/Material.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'

export interface ItemFactory {
	getDefaultLeatherColor(): Color;
	asMetaFor(arg0: ItemMeta, arg1: Material): ItemMeta;
	asMetaFor(arg0: ItemMeta, arg1: ItemStack): ItemMeta;
	isApplicable(arg0: ItemMeta, arg1: Material): boolean;
	isApplicable(arg0: ItemMeta, arg1: ItemStack): boolean;
	updateMaterial(arg0: ItemMeta, arg1: Material): Material;
	getItemMeta(arg0: Material): ItemMeta;
}

export class ItemFactory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemFactory');
	}
}

