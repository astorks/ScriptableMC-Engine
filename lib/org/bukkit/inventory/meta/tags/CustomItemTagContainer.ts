declare var Java: any;
import {ItemTagAdapterContext} from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js'
import {NamespacedKey} from '../../../../../org/bukkit/NamespacedKey.js'
import {ItemTagType} from '../../../../../org/bukkit/inventory/meta/tags/ItemTagType.js'

export interface CustomItemTagContainer {
	isEmpty(): boolean;
	getAdapterContext(): ItemTagAdapterContext;
	setCustomTag(key: NamespacedKey, type: ItemTagType, value: any): void;
	hasCustomTag(key: NamespacedKey, type: ItemTagType): boolean;
	getCustomTag(key: NamespacedKey, type: ItemTagType): any;
	removeCustomTag(key: NamespacedKey): void;
}

export class CustomItemTagContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.CustomItemTagContainer');
	}
}

