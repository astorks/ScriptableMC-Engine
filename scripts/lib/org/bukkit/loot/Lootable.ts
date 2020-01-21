declare var Java: any;
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'

export interface Lootable {
	getLootTable(): LootTable;
	getSeed(): number;
	setLootTable(arg0: LootTable): void;
	setSeed(arg0: number): void;
}

export class Lootable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.Lootable');
	}
}

