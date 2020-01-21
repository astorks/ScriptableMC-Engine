declare var Java: any;
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {PersistentDataType} from '../../../org/bukkit/persistence/PersistentDataType.js'
import {PersistentDataAdapterContext} from '../../../org/bukkit/persistence/PersistentDataAdapterContext.js'

export interface PersistentDataContainer {
	remove(arg0: NamespacedKey): void;
	get(arg0: NamespacedKey, arg1: PersistentDataType): any;
	isEmpty(): boolean;
	set(arg0: NamespacedKey, arg1: PersistentDataType, arg2: any): void;
	getOrDefault(arg0: NamespacedKey, arg1: PersistentDataType, arg2: any): any;
	has(arg0: NamespacedKey, arg1: PersistentDataType): boolean;
	getAdapterContext(): PersistentDataAdapterContext;
}

export class PersistentDataContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataContainer');
	}
}

