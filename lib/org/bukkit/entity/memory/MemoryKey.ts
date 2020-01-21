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
	public static get HOME(): MemoryKey {
		return MemoryKey.$javaClass.HOME;
	}
	public static get MEETING_POINT(): MemoryKey {
		return MemoryKey.$javaClass.MEETING_POINT;
	}
	public static get JOB_SITE(): MemoryKey {
		return MemoryKey.$javaClass.JOB_SITE;
	}
	public static get LAST_SLEPT(): MemoryKey {
		return MemoryKey.$javaClass.LAST_SLEPT;
	}
	public static get LAST_WOKEN(): MemoryKey {
		return MemoryKey.$javaClass.LAST_WOKEN;
	}
	public static get LAST_WORKED_AT_POI(): MemoryKey {
		return MemoryKey.$javaClass.LAST_WORKED_AT_POI;
	}
	public static values(): any;
	public static values(...args: any[]): any {
		return MemoryKey.$javaClass.values(...args);
	}
}

