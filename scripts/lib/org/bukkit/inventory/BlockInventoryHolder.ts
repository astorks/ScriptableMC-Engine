declare var Java: any;
import {Block} from '../../../org/bukkit/block/Block.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'

export interface BlockInventoryHolder extends InventoryHolder {
	getBlock(): Block;
	getInventory(): Inventory;
}

export class BlockInventoryHolder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.BlockInventoryHolder');
	}
}

