declare var Java: any;

export interface EquipmentSlot {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EquipmentSlot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EquipmentSlot');
	}

	public static get HAND(): EquipmentSlot {
		return this.$javaClass.HAND;
	}
	public static get OFF_HAND(): EquipmentSlot {
		return this.$javaClass.OFF_HAND;
	}
	public static get FEET(): EquipmentSlot {
		return this.$javaClass.FEET;
	}
	public static get LEGS(): EquipmentSlot {
		return this.$javaClass.LEGS;
	}
	public static get CHEST(): EquipmentSlot {
		return this.$javaClass.CHEST;
	}
	public static get HEAD(): EquipmentSlot {
		return this.$javaClass.HEAD;
	}
}

