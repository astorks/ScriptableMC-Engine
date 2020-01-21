declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {InventoryContents} from '../../../../fr/minuskube/inv/content/InventoryContents.js'
import {InventoryProvider} from '../../../../fr/minuskube/inv/content/InventoryProvider.js'

export interface SmartInventoryProvider {
	update(player: Player, contents: InventoryContents): void;
	init(player: Player, contents: InventoryContents): void;
}

export class SmartInventoryProvider {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptableplugin.smartinvs.SmartInventoryProvider');
	}
	constructor(scriptableObject: any);
	constructor(...args: any[]) {
		return new SmartInventoryProvider.$javaClass(...args);
	}
}

