declare var Java: any;
import {Material} from '../../org/bukkit/Material.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {PluginDescriptionFile} from '../../org/bukkit/plugin/PluginDescriptionFile.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'

export interface UnsafeValues {
	getDataVersion(): number;
	toLegacy(material: Material): Material;
	loadAdvancement(key: NamespacedKey, advancement: string): Advancement;
	getMaterial(material: string, version: number): Material;
	fromLegacy(material: Material): Material;
	fromLegacy(material: MaterialData): Material;
	fromLegacy(material: MaterialData, itemPriority: boolean): Material;
	fromLegacy(material: Material, data: number): BlockData;
	processClass(pdf: PluginDescriptionFile, path: string, clazz: Array<number>): Array<number>;
	checkSupported(pdf: PluginDescriptionFile): void;
	modifyItemStack(stack: ItemStack, _arguments: string): ItemStack;
	removeAdvancement(key: NamespacedKey): boolean;
}

export class UnsafeValues {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UnsafeValues');
	}
}

