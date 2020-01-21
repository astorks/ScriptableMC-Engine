declare var Java: any;
import {Keyed} from '../../org/bukkit/Keyed.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'

export interface Tag extends Keyed {
	isTagged(arg0: Keyed): boolean;
	getValues(): any;
	getKey(): NamespacedKey;
}

export class Tag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Tag');
	}
}

