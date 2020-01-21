declare var Java: any;
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface Villager$Profession extends Keyed {
	getKey(): NamespacedKey;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Villager$Profession {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Villager$Profession');
	}

	public static get NONE(): Villager$Profession {
		return this.$javaClass.NONE;
	}
	public static get ARMORER(): Villager$Profession {
		return this.$javaClass.ARMORER;
	}
	public static get BUTCHER(): Villager$Profession {
		return this.$javaClass.BUTCHER;
	}
	public static get CARTOGRAPHER(): Villager$Profession {
		return this.$javaClass.CARTOGRAPHER;
	}
	public static get CLERIC(): Villager$Profession {
		return this.$javaClass.CLERIC;
	}
	public static get FARMER(): Villager$Profession {
		return this.$javaClass.FARMER;
	}
	public static get FISHERMAN(): Villager$Profession {
		return this.$javaClass.FISHERMAN;
	}
	public static get FLETCHER(): Villager$Profession {
		return this.$javaClass.FLETCHER;
	}
	public static get LEATHERWORKER(): Villager$Profession {
		return this.$javaClass.LEATHERWORKER;
	}
	public static get LIBRARIAN(): Villager$Profession {
		return this.$javaClass.LIBRARIAN;
	}
	public static get MASON(): Villager$Profession {
		return this.$javaClass.MASON;
	}
	public static get NITWIT(): Villager$Profession {
		return this.$javaClass.NITWIT;
	}
	public static get SHEPHERD(): Villager$Profession {
		return this.$javaClass.SHEPHERD;
	}
	public static get TOOLSMITH(): Villager$Profession {
		return this.$javaClass.TOOLSMITH;
	}
	public static get WEAPONSMITH(): Villager$Profession {
		return this.$javaClass.WEAPONSMITH;
	}
}

