declare var Java: any;
import {NamespacedKey} from '../../../../org/bukkit/NamespacedKey.js'
import {Keyed} from '../../../../org/bukkit/Keyed.js'

export interface MemoryKey extends Keyed {
	getKey(): NamespacedKey;
	getMemoryClass(): any;
}

export class MemoryKey {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.memory.MemoryKey');
	}
	public static values(): any {
		return MemoryKey.$javaClass.values();
	}
	public static getByKey(arg0: NamespacedKey): MemoryKey {
		return MemoryKey.$javaClass.getByKey(arg0);
	}
}

