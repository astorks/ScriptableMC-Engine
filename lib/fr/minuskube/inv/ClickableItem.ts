declare var Java: any;
import {InventoryClickEvent} from '../../../org/bukkit/event/inventory/InventoryClickEvent.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'

export interface ClickableItem {
	run(arg0: InventoryClickEvent): void;
	getItem(): ItemStack;
}

export class ClickableItem {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.ClickableItem');
	}
}

