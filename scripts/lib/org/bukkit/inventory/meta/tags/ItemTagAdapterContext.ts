declare var Java: any;
import {CustomItemTagContainer} from '../../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'

export interface ItemTagAdapterContext {
	newTagContainer(): CustomItemTagContainer;
}

export class ItemTagAdapterContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.ItemTagAdapterContext');
	}
}

