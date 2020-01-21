declare var Java: any;
import {NamespacedKey} from '../../../../../org/bukkit/NamespacedKey.js'
import {ItemTagType} from '../../../../../org/bukkit/inventory/meta/tags/ItemTagType.js'
import {ItemTagAdapterContext} from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js'

export interface CustomItemTagContainer {
	isEmpty(): boolean;
	hasCustomTag(key: NamespacedKey, type: ItemTagType): boolean;
	setCustomTag(key: NamespacedKey, type: ItemTagType, value: any): void;
	getAdapterContext(): ItemTagAdapterContext;
	getCustomTag(key: NamespacedKey, type: ItemTagType): any;
	removeCustomTag(key: NamespacedKey): void;
}

export class CustomItemTagContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.CustomItemTagContainer');
	}
}

