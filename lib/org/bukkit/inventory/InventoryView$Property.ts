declare var Java: any;
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'

export interface InventoryView$Property {
	getId(): number;
	getType(): InventoryType;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class InventoryView$Property {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.InventoryView$Property');
	}

	public static get BREW_TIME(): InventoryView$Property {
		return this.$javaClass.BREW_TIME;
	}
	public static get BURN_TIME(): InventoryView$Property {
		return this.$javaClass.BURN_TIME;
	}
	public static get TICKS_FOR_CURRENT_FUEL(): InventoryView$Property {
		return this.$javaClass.TICKS_FOR_CURRENT_FUEL;
	}
	public static get COOK_TIME(): InventoryView$Property {
		return this.$javaClass.COOK_TIME;
	}
	public static get TICKS_FOR_CURRENT_SMELTING(): InventoryView$Property {
		return this.$javaClass.TICKS_FOR_CURRENT_SMELTING;
	}
	public static get ENCHANT_BUTTON1(): InventoryView$Property {
		return this.$javaClass.ENCHANT_BUTTON1;
	}
	public static get ENCHANT_BUTTON2(): InventoryView$Property {
		return this.$javaClass.ENCHANT_BUTTON2;
	}
	public static get ENCHANT_BUTTON3(): InventoryView$Property {
		return this.$javaClass.ENCHANT_BUTTON3;
	}
	public static get ENCHANT_XP_SEED(): InventoryView$Property {
		return this.$javaClass.ENCHANT_XP_SEED;
	}
	public static get ENCHANT_ID1(): InventoryView$Property {
		return this.$javaClass.ENCHANT_ID1;
	}
	public static get ENCHANT_ID2(): InventoryView$Property {
		return this.$javaClass.ENCHANT_ID2;
	}
	public static get ENCHANT_ID3(): InventoryView$Property {
		return this.$javaClass.ENCHANT_ID3;
	}
	public static get ENCHANT_LEVEL1(): InventoryView$Property {
		return this.$javaClass.ENCHANT_LEVEL1;
	}
	public static get ENCHANT_LEVEL2(): InventoryView$Property {
		return this.$javaClass.ENCHANT_LEVEL2;
	}
	public static get ENCHANT_LEVEL3(): InventoryView$Property {
		return this.$javaClass.ENCHANT_LEVEL3;
	}
	public static get LEVELS(): InventoryView$Property {
		return this.$javaClass.LEVELS;
	}
	public static get PRIMARY_EFFECT(): InventoryView$Property {
		return this.$javaClass.PRIMARY_EFFECT;
	}
	public static get SECONDARY_EFFECT(): InventoryView$Property {
		return this.$javaClass.SECONDARY_EFFECT;
	}
	public static get REPAIR_COST(): InventoryView$Property {
		return this.$javaClass.REPAIR_COST;
	}
	public static get BOOK_PAGE(): InventoryView$Property {
		return this.$javaClass.BOOK_PAGE;
	}
}

