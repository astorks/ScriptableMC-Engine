declare var Java: any;
import {NamespacedKey} from '../../../../../org/bukkit/NamespacedKey.js'
import {ItemTagType} from '../../../../../org/bukkit/inventory/meta/tags/ItemTagType.js'
import {ItemTagAdapterContext} from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js'

export interface CustomItemTagContainer {
	isEmpty(): boolean;
	setCustomTag(arg0: NamespacedKey, arg1: ItemTagType, arg2: any): void;
	hasCustomTag(arg0: NamespacedKey, arg1: ItemTagType): boolean;
	getCustomTag(arg0: NamespacedKey, arg1: ItemTagType): any;
	removeCustomTag(arg0: NamespacedKey): void;
	getAdapterContext(): ItemTagAdapterContext;
}

export class CustomItemTagContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.CustomItemTagContainer');
	}
}

