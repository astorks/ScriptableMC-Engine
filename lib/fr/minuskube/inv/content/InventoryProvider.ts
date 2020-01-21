declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {InventoryContents} from '../../../../fr/minuskube/inv/content/InventoryContents.js'

export interface InventoryProvider {
	update(arg0: Player, arg1: InventoryContents): void;
	init(arg0: Player, arg1: InventoryContents): void;
}

export class InventoryProvider {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.InventoryProvider');
	}
}

