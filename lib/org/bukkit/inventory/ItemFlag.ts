declare var Java: any;

export interface ItemFlag {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class ItemFlag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemFlag');
	}

	public static get HIDE_ENCHANTS(): ItemFlag {
		return this.$javaClass.HIDE_ENCHANTS;
	}
	public static get HIDE_ATTRIBUTES(): ItemFlag {
		return this.$javaClass.HIDE_ATTRIBUTES;
	}
	public static get HIDE_UNBREAKABLE(): ItemFlag {
		return this.$javaClass.HIDE_UNBREAKABLE;
	}
	public static get HIDE_DESTROYS(): ItemFlag {
		return this.$javaClass.HIDE_DESTROYS;
	}
	public static get HIDE_PLACED_ON(): ItemFlag {
		return this.$javaClass.HIDE_PLACED_ON;
	}
	public static get HIDE_POTION_EFFECTS(): ItemFlag {
		return this.$javaClass.HIDE_POTION_EFFECTS;
	}
}

