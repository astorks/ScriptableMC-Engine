declare var Java: any;

export interface InventoryType$SlotType {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class InventoryType$SlotType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryType$SlotType');
	}

	public static get RESULT(): InventoryType$SlotType {
		return this.$javaClass.RESULT;
	}
	public static get CRAFTING(): InventoryType$SlotType {
		return this.$javaClass.CRAFTING;
	}
	public static get ARMOR(): InventoryType$SlotType {
		return this.$javaClass.ARMOR;
	}
	public static get CONTAINER(): InventoryType$SlotType {
		return this.$javaClass.CONTAINER;
	}
	public static get QUICKBAR(): InventoryType$SlotType {
		return this.$javaClass.QUICKBAR;
	}
	public static get OUTSIDE(): InventoryType$SlotType {
		return this.$javaClass.OUTSIDE;
	}
	public static get FUEL(): InventoryType$SlotType {
		return this.$javaClass.FUEL;
	}
}

