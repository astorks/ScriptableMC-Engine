declare var Java: any;
import {PersistentDataAdapterContext} from '../../../org/bukkit/persistence/PersistentDataAdapterContext.js'

export interface PersistentDataType {
	getPrimitiveType(): any;
	fromPrimitive(primitive: any, context: PersistentDataAdapterContext): any;
	toPrimitive(complex: any, context: PersistentDataAdapterContext): any;
	getComplexType(): any;
}

export class PersistentDataType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataType');
	}
	public static get BYTE(): PersistentDataType {
		return PersistentDataType.$javaClass.BYTE;
	}
	public static get SHORT(): PersistentDataType {
		return PersistentDataType.$javaClass.SHORT;
	}
	public static get INTEGER(): PersistentDataType {
		return PersistentDataType.$javaClass.INTEGER;
	}
	public static get LONG(): PersistentDataType {
		return PersistentDataType.$javaClass.LONG;
	}
	public static get FLOAT(): PersistentDataType {
		return PersistentDataType.$javaClass.FLOAT;
	}
	public static get DOUBLE(): PersistentDataType {
		return PersistentDataType.$javaClass.DOUBLE;
	}
	public static get STRING(): PersistentDataType {
		return PersistentDataType.$javaClass.STRING;
	}
	public static get BYTE_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.BYTE_ARRAY;
	}
	public static get INTEGER_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.INTEGER_ARRAY;
	}
	public static get LONG_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.LONG_ARRAY;
	}
	public static get TAG_CONTAINER(): PersistentDataType {
		return PersistentDataType.$javaClass.TAG_CONTAINER;
	}
}

