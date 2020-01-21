declare var Java: any;
import {ItemTagAdapterContext} from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js'

export interface ItemTagType {
	fromPrimitive(arg0: any, arg1: ItemTagAdapterContext): any;
	getComplexType(): any;
	getPrimitiveType(): any;
	toPrimitive(arg0: any, arg1: ItemTagAdapterContext): any;
}

export class ItemTagType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.ItemTagType');
	}
}

