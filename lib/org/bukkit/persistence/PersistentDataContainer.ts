declare var Java: any;
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {PersistentDataType} from '../../../org/bukkit/persistence/PersistentDataType.js'
import {PersistentDataAdapterContext} from '../../../org/bukkit/persistence/PersistentDataAdapterContext.js'

export interface PersistentDataContainer {
	remove(key: NamespacedKey): void;
	get(key: NamespacedKey, type: PersistentDataType): any;
	isEmpty(): boolean;
	set(key: NamespacedKey, type: PersistentDataType, value: any): void;
	getOrDefault(key: NamespacedKey, type: PersistentDataType, defaultValue: any): any;
	has(key: NamespacedKey, type: PersistentDataType): boolean;
	getAdapterContext(): PersistentDataAdapterContext;
}

export class PersistentDataContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataContainer');
	}
}

