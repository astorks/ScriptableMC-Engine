declare var Java: any;
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {Statistic$Type} from '../../org/bukkit/Statistic$Type.js'
import {Keyed} from '../../org/bukkit/Keyed.js'

export interface Statistic extends Keyed {
	getKey(): NamespacedKey;
	getType(): Statistic$Type;
	isSubstatistic(): boolean;
	isBlock(): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Statistic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Statistic');
	}

	public static get DAMAGE_DEALT(): Statistic {
		return this.$javaClass.DAMAGE_DEALT;
	}
	public static get DAMAGE_TAKEN(): Statistic {
		return this.$javaClass.DAMAGE_TAKEN;
	}
	public static get DEATHS(): Statistic {
		return this.$javaClass.DEATHS;
	}
	public static get MOB_KILLS(): Statistic {
		return this.$javaClass.MOB_KILLS;
	}
	public static get PLAYER_KILLS(): Statistic {
		return this.$javaClass.PLAYER_KILLS;
	}
	public static get FISH_CAUGHT(): Statistic {
		return this.$javaClass.FISH_CAUGHT;
	}
	public static get ANIMALS_BRED(): Statistic {
		return this.$javaClass.ANIMALS_BRED;
	}
	public static get LEAVE_GAME(): Statistic {
		return this.$javaClass.LEAVE_GAME;
	}
	public static get JUMP(): Statistic {
		return this.$javaClass.JUMP;
	}
	public static get DROP_COUNT(): Statistic {
		return this.$javaClass.DROP_COUNT;
	}
	public static get DROP(): Statistic {
		return this.$javaClass.DROP;
	}
	public static get PICKUP(): Statistic {
		return this.$javaClass.PICKUP;
	}
	public static get PLAY_ONE_MINUTE(): Statistic {
		return this.$javaClass.PLAY_ONE_MINUTE;
	}
	public static get WALK_ONE_CM(): Statistic {
		return this.$javaClass.WALK_ONE_CM;
	}
	public static get WALK_ON_WATER_ONE_CM(): Statistic {
		return this.$javaClass.WALK_ON_WATER_ONE_CM;
	}
	public static get FALL_ONE_CM(): Statistic {
		return this.$javaClass.FALL_ONE_CM;
	}
	public static get SNEAK_TIME(): Statistic {
		return this.$javaClass.SNEAK_TIME;
	}
	public static get CLIMB_ONE_CM(): Statistic {
		return this.$javaClass.CLIMB_ONE_CM;
	}
	public static get FLY_ONE_CM(): Statistic {
		return this.$javaClass.FLY_ONE_CM;
	}
	public static get WALK_UNDER_WATER_ONE_CM(): Statistic {
		return this.$javaClass.WALK_UNDER_WATER_ONE_CM;
	}
	public static get MINECART_ONE_CM(): Statistic {
		return this.$javaClass.MINECART_ONE_CM;
	}
	public static get BOAT_ONE_CM(): Statistic {
		return this.$javaClass.BOAT_ONE_CM;
	}
	public static get PIG_ONE_CM(): Statistic {
		return this.$javaClass.PIG_ONE_CM;
	}
	public static get HORSE_ONE_CM(): Statistic {
		return this.$javaClass.HORSE_ONE_CM;
	}
	public static get SPRINT_ONE_CM(): Statistic {
		return this.$javaClass.SPRINT_ONE_CM;
	}
	public static get CROUCH_ONE_CM(): Statistic {
		return this.$javaClass.CROUCH_ONE_CM;
	}
	public static get AVIATE_ONE_CM(): Statistic {
		return this.$javaClass.AVIATE_ONE_CM;
	}
	public static get MINE_BLOCK(): Statistic {
		return this.$javaClass.MINE_BLOCK;
	}
	public static get USE_ITEM(): Statistic {
		return this.$javaClass.USE_ITEM;
	}
	public static get BREAK_ITEM(): Statistic {
		return this.$javaClass.BREAK_ITEM;
	}
	public static get CRAFT_ITEM(): Statistic {
		return this.$javaClass.CRAFT_ITEM;
	}
	public static get KILL_ENTITY(): Statistic {
		return this.$javaClass.KILL_ENTITY;
	}
	public static get ENTITY_KILLED_BY(): Statistic {
		return this.$javaClass.ENTITY_KILLED_BY;
	}
	public static get TIME_SINCE_DEATH(): Statistic {
		return this.$javaClass.TIME_SINCE_DEATH;
	}
	public static get TALKED_TO_VILLAGER(): Statistic {
		return this.$javaClass.TALKED_TO_VILLAGER;
	}
	public static get TRADED_WITH_VILLAGER(): Statistic {
		return this.$javaClass.TRADED_WITH_VILLAGER;
	}
	public static get CAKE_SLICES_EATEN(): Statistic {
		return this.$javaClass.CAKE_SLICES_EATEN;
	}
	public static get CAULDRON_FILLED(): Statistic {
		return this.$javaClass.CAULDRON_FILLED;
	}
	public static get CAULDRON_USED(): Statistic {
		return this.$javaClass.CAULDRON_USED;
	}
	public static get ARMOR_CLEANED(): Statistic {
		return this.$javaClass.ARMOR_CLEANED;
	}
	public static get BANNER_CLEANED(): Statistic {
		return this.$javaClass.BANNER_CLEANED;
	}
	public static get BREWINGSTAND_INTERACTION(): Statistic {
		return this.$javaClass.BREWINGSTAND_INTERACTION;
	}
	public static get BEACON_INTERACTION(): Statistic {
		return this.$javaClass.BEACON_INTERACTION;
	}
	public static get DROPPER_INSPECTED(): Statistic {
		return this.$javaClass.DROPPER_INSPECTED;
	}
	public static get HOPPER_INSPECTED(): Statistic {
		return this.$javaClass.HOPPER_INSPECTED;
	}
	public static get DISPENSER_INSPECTED(): Statistic {
		return this.$javaClass.DISPENSER_INSPECTED;
	}
	public static get NOTEBLOCK_PLAYED(): Statistic {
		return this.$javaClass.NOTEBLOCK_PLAYED;
	}
	public static get NOTEBLOCK_TUNED(): Statistic {
		return this.$javaClass.NOTEBLOCK_TUNED;
	}
	public static get FLOWER_POTTED(): Statistic {
		return this.$javaClass.FLOWER_POTTED;
	}
	public static get TRAPPED_CHEST_TRIGGERED(): Statistic {
		return this.$javaClass.TRAPPED_CHEST_TRIGGERED;
	}
	public static get ENDERCHEST_OPENED(): Statistic {
		return this.$javaClass.ENDERCHEST_OPENED;
	}
	public static get ITEM_ENCHANTED(): Statistic {
		return this.$javaClass.ITEM_ENCHANTED;
	}
	public static get RECORD_PLAYED(): Statistic {
		return this.$javaClass.RECORD_PLAYED;
	}
	public static get FURNACE_INTERACTION(): Statistic {
		return this.$javaClass.FURNACE_INTERACTION;
	}
	public static get CRAFTING_TABLE_INTERACTION(): Statistic {
		return this.$javaClass.CRAFTING_TABLE_INTERACTION;
	}
	public static get CHEST_OPENED(): Statistic {
		return this.$javaClass.CHEST_OPENED;
	}
	public static get SLEEP_IN_BED(): Statistic {
		return this.$javaClass.SLEEP_IN_BED;
	}
	public static get SHULKER_BOX_OPENED(): Statistic {
		return this.$javaClass.SHULKER_BOX_OPENED;
	}
	public static get TIME_SINCE_REST(): Statistic {
		return this.$javaClass.TIME_SINCE_REST;
	}
	public static get SWIM_ONE_CM(): Statistic {
		return this.$javaClass.SWIM_ONE_CM;
	}
	public static get DAMAGE_DEALT_ABSORBED(): Statistic {
		return this.$javaClass.DAMAGE_DEALT_ABSORBED;
	}
	public static get DAMAGE_DEALT_RESISTED(): Statistic {
		return this.$javaClass.DAMAGE_DEALT_RESISTED;
	}
	public static get DAMAGE_BLOCKED_BY_SHIELD(): Statistic {
		return this.$javaClass.DAMAGE_BLOCKED_BY_SHIELD;
	}
	public static get DAMAGE_ABSORBED(): Statistic {
		return this.$javaClass.DAMAGE_ABSORBED;
	}
	public static get DAMAGE_RESISTED(): Statistic {
		return this.$javaClass.DAMAGE_RESISTED;
	}
	public static get CLEAN_SHULKER_BOX(): Statistic {
		return this.$javaClass.CLEAN_SHULKER_BOX;
	}
	public static get OPEN_BARREL(): Statistic {
		return this.$javaClass.OPEN_BARREL;
	}
	public static get INTERACT_WITH_BLAST_FURNACE(): Statistic {
		return this.$javaClass.INTERACT_WITH_BLAST_FURNACE;
	}
	public static get INTERACT_WITH_SMOKER(): Statistic {
		return this.$javaClass.INTERACT_WITH_SMOKER;
	}
	public static get INTERACT_WITH_LECTERN(): Statistic {
		return this.$javaClass.INTERACT_WITH_LECTERN;
	}
	public static get INTERACT_WITH_CAMPFIRE(): Statistic {
		return this.$javaClass.INTERACT_WITH_CAMPFIRE;
	}
	public static get INTERACT_WITH_CARTOGRAPHY_TABLE(): Statistic {
		return this.$javaClass.INTERACT_WITH_CARTOGRAPHY_TABLE;
	}
	public static get INTERACT_WITH_LOOM(): Statistic {
		return this.$javaClass.INTERACT_WITH_LOOM;
	}
	public static get INTERACT_WITH_STONECUTTER(): Statistic {
		return this.$javaClass.INTERACT_WITH_STONECUTTER;
	}
	public static get BELL_RING(): Statistic {
		return this.$javaClass.BELL_RING;
	}
	public static get RAID_TRIGGER(): Statistic {
		return this.$javaClass.RAID_TRIGGER;
	}
	public static get RAID_WIN(): Statistic {
		return this.$javaClass.RAID_WIN;
	}
	public static get INTERACT_WITH_ANVIL(): Statistic {
		return this.$javaClass.INTERACT_WITH_ANVIL;
	}
	public static get INTERACT_WITH_GRINDSTONE(): Statistic {
		return this.$javaClass.INTERACT_WITH_GRINDSTONE;
	}
}

