declare var Java: any;
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface InventoryHolder {
	getInventory(): Inventory;
}

export class InventoryHolder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.InventoryHolder');
	}
}

