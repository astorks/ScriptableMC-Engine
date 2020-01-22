declare var Java: any;
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {SmartInventory} from '../../../fr/minuskube/inv/SmartInventory.js'
import {InventoryOpener} from '../../../fr/minuskube/inv/opener/InventoryOpener.js'
import {JavaPlugin} from '../../../org/bukkit/plugin/java/JavaPlugin.js'

export interface InventoryManager {
	init(): void;
	findOpener(arg0: InventoryType): any;
	getInventory(arg0: Player): any;
	getContents(arg0: Player): any;
	getOpenedPlayers(arg0: SmartInventory): any;
	registerOpeners(arg0: Array<InventoryOpener>): void;
}

export class InventoryManager {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.InventoryManager');
	}
	constructor(arg0: JavaPlugin);
	constructor(...args: any[]) {
		return new InventoryManager.$javaClass(...args);
	}
}

