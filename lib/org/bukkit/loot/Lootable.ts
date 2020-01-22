declare var Java: any;
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'

export interface Lootable {
	getLootTable(): LootTable;
	setLootTable(table: LootTable): void;
	setSeed(seed: number): void;
	getSeed(): number;
}

export class Lootable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.Lootable');
	}
}

