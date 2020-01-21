declare var Java: any;
import {PersistentDataAdapterContext} from '../../../org/bukkit/persistence/PersistentDataAdapterContext.js'

export interface PersistentDataType {
	fromPrimitive(arg0: any, arg1: PersistentDataAdapterContext): any;
	getComplexType(): any;
	getPrimitiveType(): any;
	toPrimitive(arg0: any, arg1: PersistentDataAdapterContext): any;
}

export class PersistentDataType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataType');
	}
}

