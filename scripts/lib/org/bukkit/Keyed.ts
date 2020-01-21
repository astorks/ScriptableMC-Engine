declare var Java: any;
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'

export interface Keyed {
	getKey(): NamespacedKey;
}

export class Keyed {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Keyed');
	}
}

