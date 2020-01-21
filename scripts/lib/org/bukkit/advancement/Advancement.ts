declare var Java: any;
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface Advancement extends Keyed {
	getCriteria(): any;
	getKey(): NamespacedKey;
}

export class Advancement {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.Advancement');
	}
}

