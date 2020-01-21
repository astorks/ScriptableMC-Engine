declare var Java: any;
import {PluginDescriptionFile} from '../../org/bukkit/plugin/PluginDescriptionFile.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {Material} from '../../org/bukkit/Material.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'

export interface UnsafeValues {
	getDataVersion(): number;
	checkSupported(arg0: PluginDescriptionFile): void;
	loadAdvancement(arg0: NamespacedKey, arg1: string): Advancement;
	processClass(arg0: PluginDescriptionFile, arg1: string, arg2: Array<number>): Array<number>;
	getMaterial(arg0: string, arg1: number): Material;
	removeAdvancement(arg0: NamespacedKey): boolean;
	fromLegacy(arg0: Material): Material;
	fromLegacy(arg0: MaterialData): Material;
	fromLegacy(arg0: MaterialData, arg1: boolean): Material;
	fromLegacy(arg0: Material, arg1: number): BlockData;
	modifyItemStack(arg0: ItemStack, arg1: string): ItemStack;
	toLegacy(arg0: Material): Material;
}

export class UnsafeValues {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UnsafeValues');
	}
}

