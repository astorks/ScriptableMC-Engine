declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'

export interface LootContext {
	getLocation(): Location;
	getKiller(): HumanEntity;
	getLuck(): number;
	getLootedEntity(): Entity;
	getLootingModifier(): number;
}

export class LootContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.LootContext');
	}
	public static get DEFAULT_LOOT_MODIFIER(): number {
		return LootContext.$javaClass.DEFAULT_LOOT_MODIFIER;
	}
}

