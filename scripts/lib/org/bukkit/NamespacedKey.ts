declare var Java: any;
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'

export interface NamespacedKey {
	getKey(): string;
	getNamespace(): string;
}

export class NamespacedKey {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.NamespacedKey');
	}
	constructor(arg0: Plugin, arg1: string) {
		return new NamespacedKey.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Plugin, arg1: string): NamespacedKey {
		return new NamespacedKey.$javaClass(arg0, arg1);
	}
	public static new1(arg0: string, arg1: string): NamespacedKey {
		return new NamespacedKey.$javaClass(arg0, arg1);
	}
	public static minecraft(arg0: string): NamespacedKey {
		return NamespacedKey.$javaClass.minecraft(arg0);
	}
	public static randomKey(): NamespacedKey {
		return NamespacedKey.$javaClass.randomKey();
	}
}

