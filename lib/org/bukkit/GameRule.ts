declare var Java: any;

export interface GameRule {
	getName(): string;
	getType(): any;
}

export class GameRule {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GameRule');
	}
	public static get ANNOUNCE_ADVANCEMENTS(): GameRule {
		return GameRule.$javaClass.ANNOUNCE_ADVANCEMENTS;
	}
	public static get COMMAND_BLOCK_OUTPUT(): GameRule {
		return GameRule.$javaClass.COMMAND_BLOCK_OUTPUT;
	}
	public static get DISABLE_ELYTRA_MOVEMENT_CHECK(): GameRule {
		return GameRule.$javaClass.DISABLE_ELYTRA_MOVEMENT_CHECK;
	}
	public static get DO_DAYLIGHT_CYCLE(): GameRule {
		return GameRule.$javaClass.DO_DAYLIGHT_CYCLE;
	}
	public static get DO_ENTITY_DROPS(): GameRule {
		return GameRule.$javaClass.DO_ENTITY_DROPS;
	}
	public static get DO_FIRE_TICK(): GameRule {
		return GameRule.$javaClass.DO_FIRE_TICK;
	}
	public static get DO_LIMITED_CRAFTING(): GameRule {
		return GameRule.$javaClass.DO_LIMITED_CRAFTING;
	}
	public static get DO_MOB_LOOT(): GameRule {
		return GameRule.$javaClass.DO_MOB_LOOT;
	}
	public static get DO_MOB_SPAWNING(): GameRule {
		return GameRule.$javaClass.DO_MOB_SPAWNING;
	}
	public static get DO_TILE_DROPS(): GameRule {
		return GameRule.$javaClass.DO_TILE_DROPS;
	}
	public static get DO_WEATHER_CYCLE(): GameRule {
		return GameRule.$javaClass.DO_WEATHER_CYCLE;
	}
	public static get KEEP_INVENTORY(): GameRule {
		return GameRule.$javaClass.KEEP_INVENTORY;
	}
	public static get LOG_ADMIN_COMMANDS(): GameRule {
		return GameRule.$javaClass.LOG_ADMIN_COMMANDS;
	}
	public static get MOB_GRIEFING(): GameRule {
		return GameRule.$javaClass.MOB_GRIEFING;
	}
	public static get NATURAL_REGENERATION(): GameRule {
		return GameRule.$javaClass.NATURAL_REGENERATION;
	}
	public static get REDUCED_DEBUG_INFO(): GameRule {
		return GameRule.$javaClass.REDUCED_DEBUG_INFO;
	}
	public static get SEND_COMMAND_FEEDBACK(): GameRule {
		return GameRule.$javaClass.SEND_COMMAND_FEEDBACK;
	}
	public static get SHOW_DEATH_MESSAGES(): GameRule {
		return GameRule.$javaClass.SHOW_DEATH_MESSAGES;
	}
	public static get SPECTATORS_GENERATE_CHUNKS(): GameRule {
		return GameRule.$javaClass.SPECTATORS_GENERATE_CHUNKS;
	}
	public static get DISABLE_RAIDS(): GameRule {
		return GameRule.$javaClass.DISABLE_RAIDS;
	}
	public static get DO_INSOMNIA(): GameRule {
		return GameRule.$javaClass.DO_INSOMNIA;
	}
	public static get DO_IMMEDIATE_RESPAWN(): GameRule {
		return GameRule.$javaClass.DO_IMMEDIATE_RESPAWN;
	}
	public static get DROWNING_DAMAGE(): GameRule {
		return GameRule.$javaClass.DROWNING_DAMAGE;
	}
	public static get FALL_DAMAGE(): GameRule {
		return GameRule.$javaClass.FALL_DAMAGE;
	}
	public static get FIRE_DAMAGE(): GameRule {
		return GameRule.$javaClass.FIRE_DAMAGE;
	}
	public static get RANDOM_TICK_SPEED(): GameRule {
		return GameRule.$javaClass.RANDOM_TICK_SPEED;
	}
	public static get SPAWN_RADIUS(): GameRule {
		return GameRule.$javaClass.SPAWN_RADIUS;
	}
	public static get MAX_ENTITY_CRAMMING(): GameRule {
		return GameRule.$javaClass.MAX_ENTITY_CRAMMING;
	}
	public static get MAX_COMMAND_CHAIN_LENGTH(): GameRule {
		return GameRule.$javaClass.MAX_COMMAND_CHAIN_LENGTH;
	}
}

