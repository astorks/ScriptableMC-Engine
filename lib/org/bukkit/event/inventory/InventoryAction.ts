declare var Java: any;

export interface InventoryAction {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class InventoryAction {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryAction');
	}

	public static get NOTHING(): InventoryAction {
		return this.$javaClass.NOTHING;
	}
	public static get PICKUP_ALL(): InventoryAction {
		return this.$javaClass.PICKUP_ALL;
	}
	public static get PICKUP_SOME(): InventoryAction {
		return this.$javaClass.PICKUP_SOME;
	}
	public static get PICKUP_HALF(): InventoryAction {
		return this.$javaClass.PICKUP_HALF;
	}
	public static get PICKUP_ONE(): InventoryAction {
		return this.$javaClass.PICKUP_ONE;
	}
	public static get PLACE_ALL(): InventoryAction {
		return this.$javaClass.PLACE_ALL;
	}
	public static get PLACE_SOME(): InventoryAction {
		return this.$javaClass.PLACE_SOME;
	}
	public static get PLACE_ONE(): InventoryAction {
		return this.$javaClass.PLACE_ONE;
	}
	public static get SWAP_WITH_CURSOR(): InventoryAction {
		return this.$javaClass.SWAP_WITH_CURSOR;
	}
	public static get DROP_ALL_CURSOR(): InventoryAction {
		return this.$javaClass.DROP_ALL_CURSOR;
	}
	public static get DROP_ONE_CURSOR(): InventoryAction {
		return this.$javaClass.DROP_ONE_CURSOR;
	}
	public static get DROP_ALL_SLOT(): InventoryAction {
		return this.$javaClass.DROP_ALL_SLOT;
	}
	public static get DROP_ONE_SLOT(): InventoryAction {
		return this.$javaClass.DROP_ONE_SLOT;
	}
	public static get MOVE_TO_OTHER_INVENTORY(): InventoryAction {
		return this.$javaClass.MOVE_TO_OTHER_INVENTORY;
	}
	public static get HOTBAR_MOVE_AND_READD(): InventoryAction {
		return this.$javaClass.HOTBAR_MOVE_AND_READD;
	}
	public static get HOTBAR_SWAP(): InventoryAction {
		return this.$javaClass.HOTBAR_SWAP;
	}
	public static get CLONE_STACK(): InventoryAction {
		return this.$javaClass.CLONE_STACK;
	}
	public static get COLLECT_TO_CURSOR(): InventoryAction {
		return this.$javaClass.COLLECT_TO_CURSOR;
	}
	public static get UNKNOWN(): InventoryAction {
		return this.$javaClass.UNKNOWN;
	}
}

