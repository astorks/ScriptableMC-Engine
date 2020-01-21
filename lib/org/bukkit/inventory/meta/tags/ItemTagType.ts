declare var Java: any;
import {ItemTagAdapterContext} from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js'

export interface ItemTagType {
	getPrimitiveType(): any;
	fromPrimitive(primitive: any, context: ItemTagAdapterContext): any;
	toPrimitive(complex: any, context: ItemTagAdapterContext): any;
	getComplexType(): any;
}

export class ItemTagType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.ItemTagType');
	}
	public static get BYTE(): ItemTagType {
		return ItemTagType.$javaClass.BYTE;
	}
	public static get SHORT(): ItemTagType {
		return ItemTagType.$javaClass.SHORT;
	}
	public static get INTEGER(): ItemTagType {
		return ItemTagType.$javaClass.INTEGER;
	}
	public static get LONG(): ItemTagType {
		return ItemTagType.$javaClass.LONG;
	}
	public static get FLOAT(): ItemTagType {
		return ItemTagType.$javaClass.FLOAT;
	}
	public static get DOUBLE(): ItemTagType {
		return ItemTagType.$javaClass.DOUBLE;
	}
	public static get STRING(): ItemTagType {
		return ItemTagType.$javaClass.STRING;
	}
	public static get BYTE_ARRAY(): ItemTagType {
		return ItemTagType.$javaClass.BYTE_ARRAY;
	}
	public static get INTEGER_ARRAY(): ItemTagType {
		return ItemTagType.$javaClass.INTEGER_ARRAY;
	}
	public static get LONG_ARRAY(): ItemTagType {
		return ItemTagType.$javaClass.LONG_ARRAY;
	}
	public static get TAG_CONTAINER(): ItemTagType {
		return ItemTagType.$javaClass.TAG_CONTAINER;
	}
}

