declare var Java: any;
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'

export interface Lootable {
	setSeed(seed: number): void;
	getLootTable(): LootTable;
	getSeed(): number;
	setLootTable(table: LootTable): void;
}

export class Lootable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.Lootable');
	}
}

