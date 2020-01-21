declare var Java: any;
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryContents} from '../../../../fr/minuskube/inv/content/InventoryContents.js'
import {SmartInventory} from '../../../../fr/minuskube/inv/SmartInventory.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {InventoryType} from '../../../../org/bukkit/event/inventory/InventoryType.js'

export interface InventoryOpener {
	fill(arg0: Inventory, arg1: InventoryContents): void;
	open(arg0: SmartInventory, arg1: Player): Inventory;
	supports(arg0: InventoryType): boolean;
}

export class InventoryOpener {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.opener.InventoryOpener');
	}
}

