declare var Java: any;
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface Villager$Type extends Keyed {
	getKey(): NamespacedKey;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Villager$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Villager$Type');
	}

	public static get DESERT(): Villager$Type {
		return this.$javaClass.DESERT;
	}
	public static get JUNGLE(): Villager$Type {
		return this.$javaClass.JUNGLE;
	}
	public static get PLAINS(): Villager$Type {
		return this.$javaClass.PLAINS;
	}
	public static get SAVANNA(): Villager$Type {
		return this.$javaClass.SAVANNA;
	}
	public static get SNOW(): Villager$Type {
		return this.$javaClass.SNOW;
	}
	public static get SWAMP(): Villager$Type {
		return this.$javaClass.SWAMP;
	}
	public static get TAIGA(): Villager$Type {
		return this.$javaClass.TAIGA;
	}
}

