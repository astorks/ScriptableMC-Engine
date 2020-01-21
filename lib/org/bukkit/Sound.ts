declare var Java: any;

export interface Sound {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Sound {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Sound');
	}

	public static get AMBIENT_CAVE(): Sound {
		return this.$javaClass.AMBIENT_CAVE;
	}
	public static get AMBIENT_UNDERWATER_ENTER(): Sound {
		return this.$javaClass.AMBIENT_UNDERWATER_ENTER;
	}
	public static get AMBIENT_UNDERWATER_EXIT(): Sound {
		return this.$javaClass.AMBIENT_UNDERWATER_EXIT;
	}
	public static get AMBIENT_UNDERWATER_LOOP(): Sound {
		return this.$javaClass.AMBIENT_UNDERWATER_LOOP;
	}
	public static get AMBIENT_UNDERWATER_LOOP_ADDITIONS(): Sound {
		return this.$javaClass.AMBIENT_UNDERWATER_LOOP_ADDITIONS;
	}
	public static get AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE(): Sound {
		return this.$javaClass.AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE;
	}
	public static get AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE(): Sound {
		return this.$javaClass.AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE;
	}
	public static get BLOCK_ANVIL_BREAK(): Sound {
		return this.$javaClass.BLOCK_ANVIL_BREAK;
	}
	public static get BLOCK_ANVIL_DESTROY(): Sound {
		return this.$javaClass.BLOCK_ANVIL_DESTROY;
	}
	public static get BLOCK_ANVIL_FALL(): Sound {
		return this.$javaClass.BLOCK_ANVIL_FALL;
	}
	public static get BLOCK_ANVIL_HIT(): Sound {
		return this.$javaClass.BLOCK_ANVIL_HIT;
	}
	public static get BLOCK_ANVIL_LAND(): Sound {
		return this.$javaClass.BLOCK_ANVIL_LAND;
	}
	public static get BLOCK_ANVIL_PLACE(): Sound {
		return this.$javaClass.BLOCK_ANVIL_PLACE;
	}
	public static get BLOCK_ANVIL_STEP(): Sound {
		return this.$javaClass.BLOCK_ANVIL_STEP;
	}
	public static get BLOCK_ANVIL_USE(): Sound {
		return this.$javaClass.BLOCK_ANVIL_USE;
	}
	public static get BLOCK_BAMBOO_BREAK(): Sound {
		return this.$javaClass.BLOCK_BAMBOO_BREAK;
	}
	public static get BLOCK_BAMBOO_FALL(): Sound {
		return this.$javaClass.BLOCK_BAMBOO_FALL;
	}
	public static get BLOCK_BAMBOO_HIT(): Sound {
		return this.$javaClass.BLOCK_BAMBOO_HIT;
	}
	public static get BLOCK_BAMBOO_PLACE(): Sound {
		return this.$javaClass.BLOCK_BAMBOO_PLACE;
	}
	public static get BLOCK_BAMBOO_SAPLING_BREAK(): Sound {
		return this.$javaClass.BLOCK_BAMBOO_SAPLING_BREAK;
	}
	public static get BLOCK_BAMBOO_SAPLING_HIT(): Sound {
		return this.$javaClass.BLOCK_BAMBOO_SAPLING_HIT;
	}
	public static get BLOCK_BAMBOO_SAPLING_PLACE(): Sound {
		return this.$javaClass.BLOCK_BAMBOO_SAPLING_PLACE;
	}
	public static get BLOCK_BAMBOO_STEP(): Sound {
		return this.$javaClass.BLOCK_BAMBOO_STEP;
	}
	public static get BLOCK_BARREL_CLOSE(): Sound {
		return this.$javaClass.BLOCK_BARREL_CLOSE;
	}
	public static get BLOCK_BARREL_OPEN(): Sound {
		return this.$javaClass.BLOCK_BARREL_OPEN;
	}
	public static get BLOCK_BEACON_ACTIVATE(): Sound {
		return this.$javaClass.BLOCK_BEACON_ACTIVATE;
	}
	public static get BLOCK_BEACON_AMBIENT(): Sound {
		return this.$javaClass.BLOCK_BEACON_AMBIENT;
	}
	public static get BLOCK_BEACON_DEACTIVATE(): Sound {
		return this.$javaClass.BLOCK_BEACON_DEACTIVATE;
	}
	public static get BLOCK_BEACON_POWER_SELECT(): Sound {
		return this.$javaClass.BLOCK_BEACON_POWER_SELECT;
	}
	public static get BLOCK_BEEHIVE_DRIP(): Sound {
		return this.$javaClass.BLOCK_BEEHIVE_DRIP;
	}
	public static get BLOCK_BEEHIVE_ENTER(): Sound {
		return this.$javaClass.BLOCK_BEEHIVE_ENTER;
	}
	public static get BLOCK_BEEHIVE_EXIT(): Sound {
		return this.$javaClass.BLOCK_BEEHIVE_EXIT;
	}
	public static get BLOCK_BEEHIVE_SHEAR(): Sound {
		return this.$javaClass.BLOCK_BEEHIVE_SHEAR;
	}
	public static get BLOCK_BEEHIVE_WORK(): Sound {
		return this.$javaClass.BLOCK_BEEHIVE_WORK;
	}
	public static get BLOCK_BELL_RESONATE(): Sound {
		return this.$javaClass.BLOCK_BELL_RESONATE;
	}
	public static get BLOCK_BELL_USE(): Sound {
		return this.$javaClass.BLOCK_BELL_USE;
	}
	public static get BLOCK_BLASTFURNACE_FIRE_CRACKLE(): Sound {
		return this.$javaClass.BLOCK_BLASTFURNACE_FIRE_CRACKLE;
	}
	public static get BLOCK_BREWING_STAND_BREW(): Sound {
		return this.$javaClass.BLOCK_BREWING_STAND_BREW;
	}
	public static get BLOCK_BUBBLE_COLUMN_BUBBLE_POP(): Sound {
		return this.$javaClass.BLOCK_BUBBLE_COLUMN_BUBBLE_POP;
	}
	public static get BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT(): Sound {
		return this.$javaClass.BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT;
	}
	public static get BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE(): Sound {
		return this.$javaClass.BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE;
	}
	public static get BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT(): Sound {
		return this.$javaClass.BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT;
	}
	public static get BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE(): Sound {
		return this.$javaClass.BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE;
	}
	public static get BLOCK_CAMPFIRE_CRACKLE(): Sound {
		return this.$javaClass.BLOCK_CAMPFIRE_CRACKLE;
	}
	public static get BLOCK_CHEST_CLOSE(): Sound {
		return this.$javaClass.BLOCK_CHEST_CLOSE;
	}
	public static get BLOCK_CHEST_LOCKED(): Sound {
		return this.$javaClass.BLOCK_CHEST_LOCKED;
	}
	public static get BLOCK_CHEST_OPEN(): Sound {
		return this.$javaClass.BLOCK_CHEST_OPEN;
	}
	public static get BLOCK_CHORUS_FLOWER_DEATH(): Sound {
		return this.$javaClass.BLOCK_CHORUS_FLOWER_DEATH;
	}
	public static get BLOCK_CHORUS_FLOWER_GROW(): Sound {
		return this.$javaClass.BLOCK_CHORUS_FLOWER_GROW;
	}
	public static get BLOCK_COMPARATOR_CLICK(): Sound {
		return this.$javaClass.BLOCK_COMPARATOR_CLICK;
	}
	public static get BLOCK_COMPOSTER_EMPTY(): Sound {
		return this.$javaClass.BLOCK_COMPOSTER_EMPTY;
	}
	public static get BLOCK_COMPOSTER_FILL(): Sound {
		return this.$javaClass.BLOCK_COMPOSTER_FILL;
	}
	public static get BLOCK_COMPOSTER_FILL_SUCCESS(): Sound {
		return this.$javaClass.BLOCK_COMPOSTER_FILL_SUCCESS;
	}
	public static get BLOCK_COMPOSTER_READY(): Sound {
		return this.$javaClass.BLOCK_COMPOSTER_READY;
	}
	public static get BLOCK_CONDUIT_ACTIVATE(): Sound {
		return this.$javaClass.BLOCK_CONDUIT_ACTIVATE;
	}
	public static get BLOCK_CONDUIT_AMBIENT(): Sound {
		return this.$javaClass.BLOCK_CONDUIT_AMBIENT;
	}
	public static get BLOCK_CONDUIT_AMBIENT_SHORT(): Sound {
		return this.$javaClass.BLOCK_CONDUIT_AMBIENT_SHORT;
	}
	public static get BLOCK_CONDUIT_ATTACK_TARGET(): Sound {
		return this.$javaClass.BLOCK_CONDUIT_ATTACK_TARGET;
	}
	public static get BLOCK_CONDUIT_DEACTIVATE(): Sound {
		return this.$javaClass.BLOCK_CONDUIT_DEACTIVATE;
	}
	public static get BLOCK_CORAL_BLOCK_BREAK(): Sound {
		return this.$javaClass.BLOCK_CORAL_BLOCK_BREAK;
	}
	public static get BLOCK_CORAL_BLOCK_FALL(): Sound {
		return this.$javaClass.BLOCK_CORAL_BLOCK_FALL;
	}
	public static get BLOCK_CORAL_BLOCK_HIT(): Sound {
		return this.$javaClass.BLOCK_CORAL_BLOCK_HIT;
	}
	public static get BLOCK_CORAL_BLOCK_PLACE(): Sound {
		return this.$javaClass.BLOCK_CORAL_BLOCK_PLACE;
	}
	public static get BLOCK_CORAL_BLOCK_STEP(): Sound {
		return this.$javaClass.BLOCK_CORAL_BLOCK_STEP;
	}
	public static get BLOCK_CROP_BREAK(): Sound {
		return this.$javaClass.BLOCK_CROP_BREAK;
	}
	public static get BLOCK_DISPENSER_DISPENSE(): Sound {
		return this.$javaClass.BLOCK_DISPENSER_DISPENSE;
	}
	public static get BLOCK_DISPENSER_FAIL(): Sound {
		return this.$javaClass.BLOCK_DISPENSER_FAIL;
	}
	public static get BLOCK_DISPENSER_LAUNCH(): Sound {
		return this.$javaClass.BLOCK_DISPENSER_LAUNCH;
	}
	public static get BLOCK_ENCHANTMENT_TABLE_USE(): Sound {
		return this.$javaClass.BLOCK_ENCHANTMENT_TABLE_USE;
	}
	public static get BLOCK_ENDER_CHEST_CLOSE(): Sound {
		return this.$javaClass.BLOCK_ENDER_CHEST_CLOSE;
	}
	public static get BLOCK_ENDER_CHEST_OPEN(): Sound {
		return this.$javaClass.BLOCK_ENDER_CHEST_OPEN;
	}
	public static get BLOCK_END_GATEWAY_SPAWN(): Sound {
		return this.$javaClass.BLOCK_END_GATEWAY_SPAWN;
	}
	public static get BLOCK_END_PORTAL_FRAME_FILL(): Sound {
		return this.$javaClass.BLOCK_END_PORTAL_FRAME_FILL;
	}
	public static get BLOCK_END_PORTAL_SPAWN(): Sound {
		return this.$javaClass.BLOCK_END_PORTAL_SPAWN;
	}
	public static get BLOCK_FENCE_GATE_CLOSE(): Sound {
		return this.$javaClass.BLOCK_FENCE_GATE_CLOSE;
	}
	public static get BLOCK_FENCE_GATE_OPEN(): Sound {
		return this.$javaClass.BLOCK_FENCE_GATE_OPEN;
	}
	public static get BLOCK_FIRE_AMBIENT(): Sound {
		return this.$javaClass.BLOCK_FIRE_AMBIENT;
	}
	public static get BLOCK_FIRE_EXTINGUISH(): Sound {
		return this.$javaClass.BLOCK_FIRE_EXTINGUISH;
	}
	public static get BLOCK_FURNACE_FIRE_CRACKLE(): Sound {
		return this.$javaClass.BLOCK_FURNACE_FIRE_CRACKLE;
	}
	public static get BLOCK_GLASS_BREAK(): Sound {
		return this.$javaClass.BLOCK_GLASS_BREAK;
	}
	public static get BLOCK_GLASS_FALL(): Sound {
		return this.$javaClass.BLOCK_GLASS_FALL;
	}
	public static get BLOCK_GLASS_HIT(): Sound {
		return this.$javaClass.BLOCK_GLASS_HIT;
	}
	public static get BLOCK_GLASS_PLACE(): Sound {
		return this.$javaClass.BLOCK_GLASS_PLACE;
	}
	public static get BLOCK_GLASS_STEP(): Sound {
		return this.$javaClass.BLOCK_GLASS_STEP;
	}
	public static get BLOCK_GRASS_BREAK(): Sound {
		return this.$javaClass.BLOCK_GRASS_BREAK;
	}
	public static get BLOCK_GRASS_FALL(): Sound {
		return this.$javaClass.BLOCK_GRASS_FALL;
	}
	public static get BLOCK_GRASS_HIT(): Sound {
		return this.$javaClass.BLOCK_GRASS_HIT;
	}
	public static get BLOCK_GRASS_PLACE(): Sound {
		return this.$javaClass.BLOCK_GRASS_PLACE;
	}
	public static get BLOCK_GRASS_STEP(): Sound {
		return this.$javaClass.BLOCK_GRASS_STEP;
	}
	public static get BLOCK_GRAVEL_BREAK(): Sound {
		return this.$javaClass.BLOCK_GRAVEL_BREAK;
	}
	public static get BLOCK_GRAVEL_FALL(): Sound {
		return this.$javaClass.BLOCK_GRAVEL_FALL;
	}
	public static get BLOCK_GRAVEL_HIT(): Sound {
		return this.$javaClass.BLOCK_GRAVEL_HIT;
	}
	public static get BLOCK_GRAVEL_PLACE(): Sound {
		return this.$javaClass.BLOCK_GRAVEL_PLACE;
	}
	public static get BLOCK_GRAVEL_STEP(): Sound {
		return this.$javaClass.BLOCK_GRAVEL_STEP;
	}
	public static get BLOCK_GRINDSTONE_USE(): Sound {
		return this.$javaClass.BLOCK_GRINDSTONE_USE;
	}
	public static get BLOCK_HONEY_BLOCK_BREAK(): Sound {
		return this.$javaClass.BLOCK_HONEY_BLOCK_BREAK;
	}
	public static get BLOCK_HONEY_BLOCK_FALL(): Sound {
		return this.$javaClass.BLOCK_HONEY_BLOCK_FALL;
	}
	public static get BLOCK_HONEY_BLOCK_HIT(): Sound {
		return this.$javaClass.BLOCK_HONEY_BLOCK_HIT;
	}
	public static get BLOCK_HONEY_BLOCK_PLACE(): Sound {
		return this.$javaClass.BLOCK_HONEY_BLOCK_PLACE;
	}
	public static get BLOCK_HONEY_BLOCK_SLIDE(): Sound {
		return this.$javaClass.BLOCK_HONEY_BLOCK_SLIDE;
	}
	public static get BLOCK_HONEY_BLOCK_STEP(): Sound {
		return this.$javaClass.BLOCK_HONEY_BLOCK_STEP;
	}
	public static get BLOCK_IRON_DOOR_CLOSE(): Sound {
		return this.$javaClass.BLOCK_IRON_DOOR_CLOSE;
	}
	public static get BLOCK_IRON_DOOR_OPEN(): Sound {
		return this.$javaClass.BLOCK_IRON_DOOR_OPEN;
	}
	public static get BLOCK_IRON_TRAPDOOR_CLOSE(): Sound {
		return this.$javaClass.BLOCK_IRON_TRAPDOOR_CLOSE;
	}
	public static get BLOCK_IRON_TRAPDOOR_OPEN(): Sound {
		return this.$javaClass.BLOCK_IRON_TRAPDOOR_OPEN;
	}
	public static get BLOCK_LADDER_BREAK(): Sound {
		return this.$javaClass.BLOCK_LADDER_BREAK;
	}
	public static get BLOCK_LADDER_FALL(): Sound {
		return this.$javaClass.BLOCK_LADDER_FALL;
	}
	public static get BLOCK_LADDER_HIT(): Sound {
		return this.$javaClass.BLOCK_LADDER_HIT;
	}
	public static get BLOCK_LADDER_PLACE(): Sound {
		return this.$javaClass.BLOCK_LADDER_PLACE;
	}
	public static get BLOCK_LADDER_STEP(): Sound {
		return this.$javaClass.BLOCK_LADDER_STEP;
	}
	public static get BLOCK_LANTERN_BREAK(): Sound {
		return this.$javaClass.BLOCK_LANTERN_BREAK;
	}
	public static get BLOCK_LANTERN_FALL(): Sound {
		return this.$javaClass.BLOCK_LANTERN_FALL;
	}
	public static get BLOCK_LANTERN_HIT(): Sound {
		return this.$javaClass.BLOCK_LANTERN_HIT;
	}
	public static get BLOCK_LANTERN_PLACE(): Sound {
		return this.$javaClass.BLOCK_LANTERN_PLACE;
	}
	public static get BLOCK_LANTERN_STEP(): Sound {
		return this.$javaClass.BLOCK_LANTERN_STEP;
	}
	public static get BLOCK_LAVA_AMBIENT(): Sound {
		return this.$javaClass.BLOCK_LAVA_AMBIENT;
	}
	public static get BLOCK_LAVA_EXTINGUISH(): Sound {
		return this.$javaClass.BLOCK_LAVA_EXTINGUISH;
	}
	public static get BLOCK_LAVA_POP(): Sound {
		return this.$javaClass.BLOCK_LAVA_POP;
	}
	public static get BLOCK_LEVER_CLICK(): Sound {
		return this.$javaClass.BLOCK_LEVER_CLICK;
	}
	public static get BLOCK_LILY_PAD_PLACE(): Sound {
		return this.$javaClass.BLOCK_LILY_PAD_PLACE;
	}
	public static get BLOCK_METAL_BREAK(): Sound {
		return this.$javaClass.BLOCK_METAL_BREAK;
	}
	public static get BLOCK_METAL_FALL(): Sound {
		return this.$javaClass.BLOCK_METAL_FALL;
	}
	public static get BLOCK_METAL_HIT(): Sound {
		return this.$javaClass.BLOCK_METAL_HIT;
	}
	public static get BLOCK_METAL_PLACE(): Sound {
		return this.$javaClass.BLOCK_METAL_PLACE;
	}
	public static get BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF(): Sound {
		return this.$javaClass.BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF;
	}
	public static get BLOCK_METAL_PRESSURE_PLATE_CLICK_ON(): Sound {
		return this.$javaClass.BLOCK_METAL_PRESSURE_PLATE_CLICK_ON;
	}
	public static get BLOCK_METAL_STEP(): Sound {
		return this.$javaClass.BLOCK_METAL_STEP;
	}
	public static get BLOCK_NETHER_WART_BREAK(): Sound {
		return this.$javaClass.BLOCK_NETHER_WART_BREAK;
	}
	public static get BLOCK_NOTE_BLOCK_BANJO(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_BANJO;
	}
	public static get BLOCK_NOTE_BLOCK_BASEDRUM(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_BASEDRUM;
	}
	public static get BLOCK_NOTE_BLOCK_BASS(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_BASS;
	}
	public static get BLOCK_NOTE_BLOCK_BELL(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_BELL;
	}
	public static get BLOCK_NOTE_BLOCK_BIT(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_BIT;
	}
	public static get BLOCK_NOTE_BLOCK_CHIME(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_CHIME;
	}
	public static get BLOCK_NOTE_BLOCK_COW_BELL(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_COW_BELL;
	}
	public static get BLOCK_NOTE_BLOCK_DIDGERIDOO(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_DIDGERIDOO;
	}
	public static get BLOCK_NOTE_BLOCK_FLUTE(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_FLUTE;
	}
	public static get BLOCK_NOTE_BLOCK_GUITAR(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_GUITAR;
	}
	public static get BLOCK_NOTE_BLOCK_HARP(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_HARP;
	}
	public static get BLOCK_NOTE_BLOCK_HAT(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_HAT;
	}
	public static get BLOCK_NOTE_BLOCK_IRON_XYLOPHONE(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_IRON_XYLOPHONE;
	}
	public static get BLOCK_NOTE_BLOCK_PLING(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_PLING;
	}
	public static get BLOCK_NOTE_BLOCK_SNARE(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_SNARE;
	}
	public static get BLOCK_NOTE_BLOCK_XYLOPHONE(): Sound {
		return this.$javaClass.BLOCK_NOTE_BLOCK_XYLOPHONE;
	}
	public static get BLOCK_PISTON_CONTRACT(): Sound {
		return this.$javaClass.BLOCK_PISTON_CONTRACT;
	}
	public static get BLOCK_PISTON_EXTEND(): Sound {
		return this.$javaClass.BLOCK_PISTON_EXTEND;
	}
	public static get BLOCK_PORTAL_AMBIENT(): Sound {
		return this.$javaClass.BLOCK_PORTAL_AMBIENT;
	}
	public static get BLOCK_PORTAL_TRAVEL(): Sound {
		return this.$javaClass.BLOCK_PORTAL_TRAVEL;
	}
	public static get BLOCK_PORTAL_TRIGGER(): Sound {
		return this.$javaClass.BLOCK_PORTAL_TRIGGER;
	}
	public static get BLOCK_PUMPKIN_CARVE(): Sound {
		return this.$javaClass.BLOCK_PUMPKIN_CARVE;
	}
	public static get BLOCK_REDSTONE_TORCH_BURNOUT(): Sound {
		return this.$javaClass.BLOCK_REDSTONE_TORCH_BURNOUT;
	}
	public static get BLOCK_SAND_BREAK(): Sound {
		return this.$javaClass.BLOCK_SAND_BREAK;
	}
	public static get BLOCK_SAND_FALL(): Sound {
		return this.$javaClass.BLOCK_SAND_FALL;
	}
	public static get BLOCK_SAND_HIT(): Sound {
		return this.$javaClass.BLOCK_SAND_HIT;
	}
	public static get BLOCK_SAND_PLACE(): Sound {
		return this.$javaClass.BLOCK_SAND_PLACE;
	}
	public static get BLOCK_SAND_STEP(): Sound {
		return this.$javaClass.BLOCK_SAND_STEP;
	}
	public static get BLOCK_SCAFFOLDING_BREAK(): Sound {
		return this.$javaClass.BLOCK_SCAFFOLDING_BREAK;
	}
	public static get BLOCK_SCAFFOLDING_FALL(): Sound {
		return this.$javaClass.BLOCK_SCAFFOLDING_FALL;
	}
	public static get BLOCK_SCAFFOLDING_HIT(): Sound {
		return this.$javaClass.BLOCK_SCAFFOLDING_HIT;
	}
	public static get BLOCK_SCAFFOLDING_PLACE(): Sound {
		return this.$javaClass.BLOCK_SCAFFOLDING_PLACE;
	}
	public static get BLOCK_SCAFFOLDING_STEP(): Sound {
		return this.$javaClass.BLOCK_SCAFFOLDING_STEP;
	}
	public static get BLOCK_SHULKER_BOX_CLOSE(): Sound {
		return this.$javaClass.BLOCK_SHULKER_BOX_CLOSE;
	}
	public static get BLOCK_SHULKER_BOX_OPEN(): Sound {
		return this.$javaClass.BLOCK_SHULKER_BOX_OPEN;
	}
	public static get BLOCK_SLIME_BLOCK_BREAK(): Sound {
		return this.$javaClass.BLOCK_SLIME_BLOCK_BREAK;
	}
	public static get BLOCK_SLIME_BLOCK_FALL(): Sound {
		return this.$javaClass.BLOCK_SLIME_BLOCK_FALL;
	}
	public static get BLOCK_SLIME_BLOCK_HIT(): Sound {
		return this.$javaClass.BLOCK_SLIME_BLOCK_HIT;
	}
	public static get BLOCK_SLIME_BLOCK_PLACE(): Sound {
		return this.$javaClass.BLOCK_SLIME_BLOCK_PLACE;
	}
	public static get BLOCK_SLIME_BLOCK_STEP(): Sound {
		return this.$javaClass.BLOCK_SLIME_BLOCK_STEP;
	}
	public static get BLOCK_SMOKER_SMOKE(): Sound {
		return this.$javaClass.BLOCK_SMOKER_SMOKE;
	}
	public static get BLOCK_SNOW_BREAK(): Sound {
		return this.$javaClass.BLOCK_SNOW_BREAK;
	}
	public static get BLOCK_SNOW_FALL(): Sound {
		return this.$javaClass.BLOCK_SNOW_FALL;
	}
	public static get BLOCK_SNOW_HIT(): Sound {
		return this.$javaClass.BLOCK_SNOW_HIT;
	}
	public static get BLOCK_SNOW_PLACE(): Sound {
		return this.$javaClass.BLOCK_SNOW_PLACE;
	}
	public static get BLOCK_SNOW_STEP(): Sound {
		return this.$javaClass.BLOCK_SNOW_STEP;
	}
	public static get BLOCK_STONE_BREAK(): Sound {
		return this.$javaClass.BLOCK_STONE_BREAK;
	}
	public static get BLOCK_STONE_BUTTON_CLICK_OFF(): Sound {
		return this.$javaClass.BLOCK_STONE_BUTTON_CLICK_OFF;
	}
	public static get BLOCK_STONE_BUTTON_CLICK_ON(): Sound {
		return this.$javaClass.BLOCK_STONE_BUTTON_CLICK_ON;
	}
	public static get BLOCK_STONE_FALL(): Sound {
		return this.$javaClass.BLOCK_STONE_FALL;
	}
	public static get BLOCK_STONE_HIT(): Sound {
		return this.$javaClass.BLOCK_STONE_HIT;
	}
	public static get BLOCK_STONE_PLACE(): Sound {
		return this.$javaClass.BLOCK_STONE_PLACE;
	}
	public static get BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF(): Sound {
		return this.$javaClass.BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF;
	}
	public static get BLOCK_STONE_PRESSURE_PLATE_CLICK_ON(): Sound {
		return this.$javaClass.BLOCK_STONE_PRESSURE_PLATE_CLICK_ON;
	}
	public static get BLOCK_STONE_STEP(): Sound {
		return this.$javaClass.BLOCK_STONE_STEP;
	}
	public static get BLOCK_SWEET_BERRY_BUSH_BREAK(): Sound {
		return this.$javaClass.BLOCK_SWEET_BERRY_BUSH_BREAK;
	}
	public static get BLOCK_SWEET_BERRY_BUSH_PLACE(): Sound {
		return this.$javaClass.BLOCK_SWEET_BERRY_BUSH_PLACE;
	}
	public static get BLOCK_TRIPWIRE_ATTACH(): Sound {
		return this.$javaClass.BLOCK_TRIPWIRE_ATTACH;
	}
	public static get BLOCK_TRIPWIRE_CLICK_OFF(): Sound {
		return this.$javaClass.BLOCK_TRIPWIRE_CLICK_OFF;
	}
	public static get BLOCK_TRIPWIRE_CLICK_ON(): Sound {
		return this.$javaClass.BLOCK_TRIPWIRE_CLICK_ON;
	}
	public static get BLOCK_TRIPWIRE_DETACH(): Sound {
		return this.$javaClass.BLOCK_TRIPWIRE_DETACH;
	}
	public static get BLOCK_WATER_AMBIENT(): Sound {
		return this.$javaClass.BLOCK_WATER_AMBIENT;
	}
	public static get BLOCK_WET_GRASS_BREAK(): Sound {
		return this.$javaClass.BLOCK_WET_GRASS_BREAK;
	}
	public static get BLOCK_WET_GRASS_FALL(): Sound {
		return this.$javaClass.BLOCK_WET_GRASS_FALL;
	}
	public static get BLOCK_WET_GRASS_HIT(): Sound {
		return this.$javaClass.BLOCK_WET_GRASS_HIT;
	}
	public static get BLOCK_WET_GRASS_PLACE(): Sound {
		return this.$javaClass.BLOCK_WET_GRASS_PLACE;
	}
	public static get BLOCK_WET_GRASS_STEP(): Sound {
		return this.$javaClass.BLOCK_WET_GRASS_STEP;
	}
	public static get BLOCK_WOODEN_BUTTON_CLICK_OFF(): Sound {
		return this.$javaClass.BLOCK_WOODEN_BUTTON_CLICK_OFF;
	}
	public static get BLOCK_WOODEN_BUTTON_CLICK_ON(): Sound {
		return this.$javaClass.BLOCK_WOODEN_BUTTON_CLICK_ON;
	}
	public static get BLOCK_WOODEN_DOOR_CLOSE(): Sound {
		return this.$javaClass.BLOCK_WOODEN_DOOR_CLOSE;
	}
	public static get BLOCK_WOODEN_DOOR_OPEN(): Sound {
		return this.$javaClass.BLOCK_WOODEN_DOOR_OPEN;
	}
	public static get BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF(): Sound {
		return this.$javaClass.BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF;
	}
	public static get BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON(): Sound {
		return this.$javaClass.BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON;
	}
	public static get BLOCK_WOODEN_TRAPDOOR_CLOSE(): Sound {
		return this.$javaClass.BLOCK_WOODEN_TRAPDOOR_CLOSE;
	}
	public static get BLOCK_WOODEN_TRAPDOOR_OPEN(): Sound {
		return this.$javaClass.BLOCK_WOODEN_TRAPDOOR_OPEN;
	}
	public static get BLOCK_WOOD_BREAK(): Sound {
		return this.$javaClass.BLOCK_WOOD_BREAK;
	}
	public static get BLOCK_WOOD_FALL(): Sound {
		return this.$javaClass.BLOCK_WOOD_FALL;
	}
	public static get BLOCK_WOOD_HIT(): Sound {
		return this.$javaClass.BLOCK_WOOD_HIT;
	}
	public static get BLOCK_WOOD_PLACE(): Sound {
		return this.$javaClass.BLOCK_WOOD_PLACE;
	}
	public static get BLOCK_WOOD_STEP(): Sound {
		return this.$javaClass.BLOCK_WOOD_STEP;
	}
	public static get BLOCK_WOOL_BREAK(): Sound {
		return this.$javaClass.BLOCK_WOOL_BREAK;
	}
	public static get BLOCK_WOOL_FALL(): Sound {
		return this.$javaClass.BLOCK_WOOL_FALL;
	}
	public static get BLOCK_WOOL_HIT(): Sound {
		return this.$javaClass.BLOCK_WOOL_HIT;
	}
	public static get BLOCK_WOOL_PLACE(): Sound {
		return this.$javaClass.BLOCK_WOOL_PLACE;
	}
	public static get BLOCK_WOOL_STEP(): Sound {
		return this.$javaClass.BLOCK_WOOL_STEP;
	}
	public static get ENCHANT_THORNS_HIT(): Sound {
		return this.$javaClass.ENCHANT_THORNS_HIT;
	}
	public static get ENTITY_ARMOR_STAND_BREAK(): Sound {
		return this.$javaClass.ENTITY_ARMOR_STAND_BREAK;
	}
	public static get ENTITY_ARMOR_STAND_FALL(): Sound {
		return this.$javaClass.ENTITY_ARMOR_STAND_FALL;
	}
	public static get ENTITY_ARMOR_STAND_HIT(): Sound {
		return this.$javaClass.ENTITY_ARMOR_STAND_HIT;
	}
	public static get ENTITY_ARMOR_STAND_PLACE(): Sound {
		return this.$javaClass.ENTITY_ARMOR_STAND_PLACE;
	}
	public static get ENTITY_ARROW_HIT(): Sound {
		return this.$javaClass.ENTITY_ARROW_HIT;
	}
	public static get ENTITY_ARROW_HIT_PLAYER(): Sound {
		return this.$javaClass.ENTITY_ARROW_HIT_PLAYER;
	}
	public static get ENTITY_ARROW_SHOOT(): Sound {
		return this.$javaClass.ENTITY_ARROW_SHOOT;
	}
	public static get ENTITY_BAT_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_BAT_AMBIENT;
	}
	public static get ENTITY_BAT_DEATH(): Sound {
		return this.$javaClass.ENTITY_BAT_DEATH;
	}
	public static get ENTITY_BAT_HURT(): Sound {
		return this.$javaClass.ENTITY_BAT_HURT;
	}
	public static get ENTITY_BAT_LOOP(): Sound {
		return this.$javaClass.ENTITY_BAT_LOOP;
	}
	public static get ENTITY_BAT_TAKEOFF(): Sound {
		return this.$javaClass.ENTITY_BAT_TAKEOFF;
	}
	public static get ENTITY_BEE_DEATH(): Sound {
		return this.$javaClass.ENTITY_BEE_DEATH;
	}
	public static get ENTITY_BEE_HURT(): Sound {
		return this.$javaClass.ENTITY_BEE_HURT;
	}
	public static get ENTITY_BEE_LOOP(): Sound {
		return this.$javaClass.ENTITY_BEE_LOOP;
	}
	public static get ENTITY_BEE_LOOP_AGGRESSIVE(): Sound {
		return this.$javaClass.ENTITY_BEE_LOOP_AGGRESSIVE;
	}
	public static get ENTITY_BEE_POLLINATE(): Sound {
		return this.$javaClass.ENTITY_BEE_POLLINATE;
	}
	public static get ENTITY_BEE_STING(): Sound {
		return this.$javaClass.ENTITY_BEE_STING;
	}
	public static get ENTITY_BLAZE_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_BLAZE_AMBIENT;
	}
	public static get ENTITY_BLAZE_BURN(): Sound {
		return this.$javaClass.ENTITY_BLAZE_BURN;
	}
	public static get ENTITY_BLAZE_DEATH(): Sound {
		return this.$javaClass.ENTITY_BLAZE_DEATH;
	}
	public static get ENTITY_BLAZE_HURT(): Sound {
		return this.$javaClass.ENTITY_BLAZE_HURT;
	}
	public static get ENTITY_BLAZE_SHOOT(): Sound {
		return this.$javaClass.ENTITY_BLAZE_SHOOT;
	}
	public static get ENTITY_BOAT_PADDLE_LAND(): Sound {
		return this.$javaClass.ENTITY_BOAT_PADDLE_LAND;
	}
	public static get ENTITY_BOAT_PADDLE_WATER(): Sound {
		return this.$javaClass.ENTITY_BOAT_PADDLE_WATER;
	}
	public static get ENTITY_CAT_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_CAT_AMBIENT;
	}
	public static get ENTITY_CAT_BEG_FOR_FOOD(): Sound {
		return this.$javaClass.ENTITY_CAT_BEG_FOR_FOOD;
	}
	public static get ENTITY_CAT_DEATH(): Sound {
		return this.$javaClass.ENTITY_CAT_DEATH;
	}
	public static get ENTITY_CAT_EAT(): Sound {
		return this.$javaClass.ENTITY_CAT_EAT;
	}
	public static get ENTITY_CAT_HISS(): Sound {
		return this.$javaClass.ENTITY_CAT_HISS;
	}
	public static get ENTITY_CAT_HURT(): Sound {
		return this.$javaClass.ENTITY_CAT_HURT;
	}
	public static get ENTITY_CAT_PURR(): Sound {
		return this.$javaClass.ENTITY_CAT_PURR;
	}
	public static get ENTITY_CAT_PURREOW(): Sound {
		return this.$javaClass.ENTITY_CAT_PURREOW;
	}
	public static get ENTITY_CAT_STRAY_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_CAT_STRAY_AMBIENT;
	}
	public static get ENTITY_CHICKEN_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_CHICKEN_AMBIENT;
	}
	public static get ENTITY_CHICKEN_DEATH(): Sound {
		return this.$javaClass.ENTITY_CHICKEN_DEATH;
	}
	public static get ENTITY_CHICKEN_EGG(): Sound {
		return this.$javaClass.ENTITY_CHICKEN_EGG;
	}
	public static get ENTITY_CHICKEN_HURT(): Sound {
		return this.$javaClass.ENTITY_CHICKEN_HURT;
	}
	public static get ENTITY_CHICKEN_STEP(): Sound {
		return this.$javaClass.ENTITY_CHICKEN_STEP;
	}
	public static get ENTITY_COD_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_COD_AMBIENT;
	}
	public static get ENTITY_COD_DEATH(): Sound {
		return this.$javaClass.ENTITY_COD_DEATH;
	}
	public static get ENTITY_COD_FLOP(): Sound {
		return this.$javaClass.ENTITY_COD_FLOP;
	}
	public static get ENTITY_COD_HURT(): Sound {
		return this.$javaClass.ENTITY_COD_HURT;
	}
	public static get ENTITY_COW_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_COW_AMBIENT;
	}
	public static get ENTITY_COW_DEATH(): Sound {
		return this.$javaClass.ENTITY_COW_DEATH;
	}
	public static get ENTITY_COW_HURT(): Sound {
		return this.$javaClass.ENTITY_COW_HURT;
	}
	public static get ENTITY_COW_MILK(): Sound {
		return this.$javaClass.ENTITY_COW_MILK;
	}
	public static get ENTITY_COW_STEP(): Sound {
		return this.$javaClass.ENTITY_COW_STEP;
	}
	public static get ENTITY_CREEPER_DEATH(): Sound {
		return this.$javaClass.ENTITY_CREEPER_DEATH;
	}
	public static get ENTITY_CREEPER_HURT(): Sound {
		return this.$javaClass.ENTITY_CREEPER_HURT;
	}
	public static get ENTITY_CREEPER_PRIMED(): Sound {
		return this.$javaClass.ENTITY_CREEPER_PRIMED;
	}
	public static get ENTITY_DOLPHIN_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_AMBIENT;
	}
	public static get ENTITY_DOLPHIN_AMBIENT_WATER(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_AMBIENT_WATER;
	}
	public static get ENTITY_DOLPHIN_ATTACK(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_ATTACK;
	}
	public static get ENTITY_DOLPHIN_DEATH(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_DEATH;
	}
	public static get ENTITY_DOLPHIN_EAT(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_EAT;
	}
	public static get ENTITY_DOLPHIN_HURT(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_HURT;
	}
	public static get ENTITY_DOLPHIN_JUMP(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_JUMP;
	}
	public static get ENTITY_DOLPHIN_PLAY(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_PLAY;
	}
	public static get ENTITY_DOLPHIN_SPLASH(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_SPLASH;
	}
	public static get ENTITY_DOLPHIN_SWIM(): Sound {
		return this.$javaClass.ENTITY_DOLPHIN_SWIM;
	}
	public static get ENTITY_DONKEY_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_DONKEY_AMBIENT;
	}
	public static get ENTITY_DONKEY_ANGRY(): Sound {
		return this.$javaClass.ENTITY_DONKEY_ANGRY;
	}
	public static get ENTITY_DONKEY_CHEST(): Sound {
		return this.$javaClass.ENTITY_DONKEY_CHEST;
	}
	public static get ENTITY_DONKEY_DEATH(): Sound {
		return this.$javaClass.ENTITY_DONKEY_DEATH;
	}
	public static get ENTITY_DONKEY_HURT(): Sound {
		return this.$javaClass.ENTITY_DONKEY_HURT;
	}
	public static get ENTITY_DRAGON_FIREBALL_EXPLODE(): Sound {
		return this.$javaClass.ENTITY_DRAGON_FIREBALL_EXPLODE;
	}
	public static get ENTITY_DROWNED_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_DROWNED_AMBIENT;
	}
	public static get ENTITY_DROWNED_AMBIENT_WATER(): Sound {
		return this.$javaClass.ENTITY_DROWNED_AMBIENT_WATER;
	}
	public static get ENTITY_DROWNED_DEATH(): Sound {
		return this.$javaClass.ENTITY_DROWNED_DEATH;
	}
	public static get ENTITY_DROWNED_DEATH_WATER(): Sound {
		return this.$javaClass.ENTITY_DROWNED_DEATH_WATER;
	}
	public static get ENTITY_DROWNED_HURT(): Sound {
		return this.$javaClass.ENTITY_DROWNED_HURT;
	}
	public static get ENTITY_DROWNED_HURT_WATER(): Sound {
		return this.$javaClass.ENTITY_DROWNED_HURT_WATER;
	}
	public static get ENTITY_DROWNED_SHOOT(): Sound {
		return this.$javaClass.ENTITY_DROWNED_SHOOT;
	}
	public static get ENTITY_DROWNED_STEP(): Sound {
		return this.$javaClass.ENTITY_DROWNED_STEP;
	}
	public static get ENTITY_DROWNED_SWIM(): Sound {
		return this.$javaClass.ENTITY_DROWNED_SWIM;
	}
	public static get ENTITY_EGG_THROW(): Sound {
		return this.$javaClass.ENTITY_EGG_THROW;
	}
	public static get ENTITY_ELDER_GUARDIAN_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ELDER_GUARDIAN_AMBIENT;
	}
	public static get ENTITY_ELDER_GUARDIAN_AMBIENT_LAND(): Sound {
		return this.$javaClass.ENTITY_ELDER_GUARDIAN_AMBIENT_LAND;
	}
	public static get ENTITY_ELDER_GUARDIAN_CURSE(): Sound {
		return this.$javaClass.ENTITY_ELDER_GUARDIAN_CURSE;
	}
	public static get ENTITY_ELDER_GUARDIAN_DEATH(): Sound {
		return this.$javaClass.ENTITY_ELDER_GUARDIAN_DEATH;
	}
	public static get ENTITY_ELDER_GUARDIAN_DEATH_LAND(): Sound {
		return this.$javaClass.ENTITY_ELDER_GUARDIAN_DEATH_LAND;
	}
	public static get ENTITY_ELDER_GUARDIAN_FLOP(): Sound {
		return this.$javaClass.ENTITY_ELDER_GUARDIAN_FLOP;
	}
	public static get ENTITY_ELDER_GUARDIAN_HURT(): Sound {
		return this.$javaClass.ENTITY_ELDER_GUARDIAN_HURT;
	}
	public static get ENTITY_ELDER_GUARDIAN_HURT_LAND(): Sound {
		return this.$javaClass.ENTITY_ELDER_GUARDIAN_HURT_LAND;
	}
	public static get ENTITY_ENDERMAN_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ENDERMAN_AMBIENT;
	}
	public static get ENTITY_ENDERMAN_DEATH(): Sound {
		return this.$javaClass.ENTITY_ENDERMAN_DEATH;
	}
	public static get ENTITY_ENDERMAN_HURT(): Sound {
		return this.$javaClass.ENTITY_ENDERMAN_HURT;
	}
	public static get ENTITY_ENDERMAN_SCREAM(): Sound {
		return this.$javaClass.ENTITY_ENDERMAN_SCREAM;
	}
	public static get ENTITY_ENDERMAN_STARE(): Sound {
		return this.$javaClass.ENTITY_ENDERMAN_STARE;
	}
	public static get ENTITY_ENDERMAN_TELEPORT(): Sound {
		return this.$javaClass.ENTITY_ENDERMAN_TELEPORT;
	}
	public static get ENTITY_ENDERMITE_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ENDERMITE_AMBIENT;
	}
	public static get ENTITY_ENDERMITE_DEATH(): Sound {
		return this.$javaClass.ENTITY_ENDERMITE_DEATH;
	}
	public static get ENTITY_ENDERMITE_HURT(): Sound {
		return this.$javaClass.ENTITY_ENDERMITE_HURT;
	}
	public static get ENTITY_ENDERMITE_STEP(): Sound {
		return this.$javaClass.ENTITY_ENDERMITE_STEP;
	}
	public static get ENTITY_ENDER_DRAGON_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ENDER_DRAGON_AMBIENT;
	}
	public static get ENTITY_ENDER_DRAGON_DEATH(): Sound {
		return this.$javaClass.ENTITY_ENDER_DRAGON_DEATH;
	}
	public static get ENTITY_ENDER_DRAGON_FLAP(): Sound {
		return this.$javaClass.ENTITY_ENDER_DRAGON_FLAP;
	}
	public static get ENTITY_ENDER_DRAGON_GROWL(): Sound {
		return this.$javaClass.ENTITY_ENDER_DRAGON_GROWL;
	}
	public static get ENTITY_ENDER_DRAGON_HURT(): Sound {
		return this.$javaClass.ENTITY_ENDER_DRAGON_HURT;
	}
	public static get ENTITY_ENDER_DRAGON_SHOOT(): Sound {
		return this.$javaClass.ENTITY_ENDER_DRAGON_SHOOT;
	}
	public static get ENTITY_ENDER_EYE_DEATH(): Sound {
		return this.$javaClass.ENTITY_ENDER_EYE_DEATH;
	}
	public static get ENTITY_ENDER_EYE_LAUNCH(): Sound {
		return this.$javaClass.ENTITY_ENDER_EYE_LAUNCH;
	}
	public static get ENTITY_ENDER_PEARL_THROW(): Sound {
		return this.$javaClass.ENTITY_ENDER_PEARL_THROW;
	}
	public static get ENTITY_EVOKER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_EVOKER_AMBIENT;
	}
	public static get ENTITY_EVOKER_CAST_SPELL(): Sound {
		return this.$javaClass.ENTITY_EVOKER_CAST_SPELL;
	}
	public static get ENTITY_EVOKER_CELEBRATE(): Sound {
		return this.$javaClass.ENTITY_EVOKER_CELEBRATE;
	}
	public static get ENTITY_EVOKER_DEATH(): Sound {
		return this.$javaClass.ENTITY_EVOKER_DEATH;
	}
	public static get ENTITY_EVOKER_FANGS_ATTACK(): Sound {
		return this.$javaClass.ENTITY_EVOKER_FANGS_ATTACK;
	}
	public static get ENTITY_EVOKER_HURT(): Sound {
		return this.$javaClass.ENTITY_EVOKER_HURT;
	}
	public static get ENTITY_EVOKER_PREPARE_ATTACK(): Sound {
		return this.$javaClass.ENTITY_EVOKER_PREPARE_ATTACK;
	}
	public static get ENTITY_EVOKER_PREPARE_SUMMON(): Sound {
		return this.$javaClass.ENTITY_EVOKER_PREPARE_SUMMON;
	}
	public static get ENTITY_EVOKER_PREPARE_WOLOLO(): Sound {
		return this.$javaClass.ENTITY_EVOKER_PREPARE_WOLOLO;
	}
	public static get ENTITY_EXPERIENCE_BOTTLE_THROW(): Sound {
		return this.$javaClass.ENTITY_EXPERIENCE_BOTTLE_THROW;
	}
	public static get ENTITY_EXPERIENCE_ORB_PICKUP(): Sound {
		return this.$javaClass.ENTITY_EXPERIENCE_ORB_PICKUP;
	}
	public static get ENTITY_FIREWORK_ROCKET_BLAST(): Sound {
		return this.$javaClass.ENTITY_FIREWORK_ROCKET_BLAST;
	}
	public static get ENTITY_FIREWORK_ROCKET_BLAST_FAR(): Sound {
		return this.$javaClass.ENTITY_FIREWORK_ROCKET_BLAST_FAR;
	}
	public static get ENTITY_FIREWORK_ROCKET_LARGE_BLAST(): Sound {
		return this.$javaClass.ENTITY_FIREWORK_ROCKET_LARGE_BLAST;
	}
	public static get ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR(): Sound {
		return this.$javaClass.ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR;
	}
	public static get ENTITY_FIREWORK_ROCKET_LAUNCH(): Sound {
		return this.$javaClass.ENTITY_FIREWORK_ROCKET_LAUNCH;
	}
	public static get ENTITY_FIREWORK_ROCKET_SHOOT(): Sound {
		return this.$javaClass.ENTITY_FIREWORK_ROCKET_SHOOT;
	}
	public static get ENTITY_FIREWORK_ROCKET_TWINKLE(): Sound {
		return this.$javaClass.ENTITY_FIREWORK_ROCKET_TWINKLE;
	}
	public static get ENTITY_FIREWORK_ROCKET_TWINKLE_FAR(): Sound {
		return this.$javaClass.ENTITY_FIREWORK_ROCKET_TWINKLE_FAR;
	}
	public static get ENTITY_FISHING_BOBBER_RETRIEVE(): Sound {
		return this.$javaClass.ENTITY_FISHING_BOBBER_RETRIEVE;
	}
	public static get ENTITY_FISHING_BOBBER_SPLASH(): Sound {
		return this.$javaClass.ENTITY_FISHING_BOBBER_SPLASH;
	}
	public static get ENTITY_FISHING_BOBBER_THROW(): Sound {
		return this.$javaClass.ENTITY_FISHING_BOBBER_THROW;
	}
	public static get ENTITY_FISH_SWIM(): Sound {
		return this.$javaClass.ENTITY_FISH_SWIM;
	}
	public static get ENTITY_FOX_AGGRO(): Sound {
		return this.$javaClass.ENTITY_FOX_AGGRO;
	}
	public static get ENTITY_FOX_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_FOX_AMBIENT;
	}
	public static get ENTITY_FOX_BITE(): Sound {
		return this.$javaClass.ENTITY_FOX_BITE;
	}
	public static get ENTITY_FOX_DEATH(): Sound {
		return this.$javaClass.ENTITY_FOX_DEATH;
	}
	public static get ENTITY_FOX_EAT(): Sound {
		return this.$javaClass.ENTITY_FOX_EAT;
	}
	public static get ENTITY_FOX_HURT(): Sound {
		return this.$javaClass.ENTITY_FOX_HURT;
	}
	public static get ENTITY_FOX_SCREECH(): Sound {
		return this.$javaClass.ENTITY_FOX_SCREECH;
	}
	public static get ENTITY_FOX_SLEEP(): Sound {
		return this.$javaClass.ENTITY_FOX_SLEEP;
	}
	public static get ENTITY_FOX_SNIFF(): Sound {
		return this.$javaClass.ENTITY_FOX_SNIFF;
	}
	public static get ENTITY_FOX_SPIT(): Sound {
		return this.$javaClass.ENTITY_FOX_SPIT;
	}
	public static get ENTITY_GENERIC_BIG_FALL(): Sound {
		return this.$javaClass.ENTITY_GENERIC_BIG_FALL;
	}
	public static get ENTITY_GENERIC_BURN(): Sound {
		return this.$javaClass.ENTITY_GENERIC_BURN;
	}
	public static get ENTITY_GENERIC_DEATH(): Sound {
		return this.$javaClass.ENTITY_GENERIC_DEATH;
	}
	public static get ENTITY_GENERIC_DRINK(): Sound {
		return this.$javaClass.ENTITY_GENERIC_DRINK;
	}
	public static get ENTITY_GENERIC_EAT(): Sound {
		return this.$javaClass.ENTITY_GENERIC_EAT;
	}
	public static get ENTITY_GENERIC_EXPLODE(): Sound {
		return this.$javaClass.ENTITY_GENERIC_EXPLODE;
	}
	public static get ENTITY_GENERIC_EXTINGUISH_FIRE(): Sound {
		return this.$javaClass.ENTITY_GENERIC_EXTINGUISH_FIRE;
	}
	public static get ENTITY_GENERIC_HURT(): Sound {
		return this.$javaClass.ENTITY_GENERIC_HURT;
	}
	public static get ENTITY_GENERIC_SMALL_FALL(): Sound {
		return this.$javaClass.ENTITY_GENERIC_SMALL_FALL;
	}
	public static get ENTITY_GENERIC_SPLASH(): Sound {
		return this.$javaClass.ENTITY_GENERIC_SPLASH;
	}
	public static get ENTITY_GENERIC_SWIM(): Sound {
		return this.$javaClass.ENTITY_GENERIC_SWIM;
	}
	public static get ENTITY_GHAST_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_GHAST_AMBIENT;
	}
	public static get ENTITY_GHAST_DEATH(): Sound {
		return this.$javaClass.ENTITY_GHAST_DEATH;
	}
	public static get ENTITY_GHAST_HURT(): Sound {
		return this.$javaClass.ENTITY_GHAST_HURT;
	}
	public static get ENTITY_GHAST_SCREAM(): Sound {
		return this.$javaClass.ENTITY_GHAST_SCREAM;
	}
	public static get ENTITY_GHAST_SHOOT(): Sound {
		return this.$javaClass.ENTITY_GHAST_SHOOT;
	}
	public static get ENTITY_GHAST_WARN(): Sound {
		return this.$javaClass.ENTITY_GHAST_WARN;
	}
	public static get ENTITY_GUARDIAN_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_GUARDIAN_AMBIENT;
	}
	public static get ENTITY_GUARDIAN_AMBIENT_LAND(): Sound {
		return this.$javaClass.ENTITY_GUARDIAN_AMBIENT_LAND;
	}
	public static get ENTITY_GUARDIAN_ATTACK(): Sound {
		return this.$javaClass.ENTITY_GUARDIAN_ATTACK;
	}
	public static get ENTITY_GUARDIAN_DEATH(): Sound {
		return this.$javaClass.ENTITY_GUARDIAN_DEATH;
	}
	public static get ENTITY_GUARDIAN_DEATH_LAND(): Sound {
		return this.$javaClass.ENTITY_GUARDIAN_DEATH_LAND;
	}
	public static get ENTITY_GUARDIAN_FLOP(): Sound {
		return this.$javaClass.ENTITY_GUARDIAN_FLOP;
	}
	public static get ENTITY_GUARDIAN_HURT(): Sound {
		return this.$javaClass.ENTITY_GUARDIAN_HURT;
	}
	public static get ENTITY_GUARDIAN_HURT_LAND(): Sound {
		return this.$javaClass.ENTITY_GUARDIAN_HURT_LAND;
	}
	public static get ENTITY_HORSE_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_HORSE_AMBIENT;
	}
	public static get ENTITY_HORSE_ANGRY(): Sound {
		return this.$javaClass.ENTITY_HORSE_ANGRY;
	}
	public static get ENTITY_HORSE_ARMOR(): Sound {
		return this.$javaClass.ENTITY_HORSE_ARMOR;
	}
	public static get ENTITY_HORSE_BREATHE(): Sound {
		return this.$javaClass.ENTITY_HORSE_BREATHE;
	}
	public static get ENTITY_HORSE_DEATH(): Sound {
		return this.$javaClass.ENTITY_HORSE_DEATH;
	}
	public static get ENTITY_HORSE_EAT(): Sound {
		return this.$javaClass.ENTITY_HORSE_EAT;
	}
	public static get ENTITY_HORSE_GALLOP(): Sound {
		return this.$javaClass.ENTITY_HORSE_GALLOP;
	}
	public static get ENTITY_HORSE_HURT(): Sound {
		return this.$javaClass.ENTITY_HORSE_HURT;
	}
	public static get ENTITY_HORSE_JUMP(): Sound {
		return this.$javaClass.ENTITY_HORSE_JUMP;
	}
	public static get ENTITY_HORSE_LAND(): Sound {
		return this.$javaClass.ENTITY_HORSE_LAND;
	}
	public static get ENTITY_HORSE_SADDLE(): Sound {
		return this.$javaClass.ENTITY_HORSE_SADDLE;
	}
	public static get ENTITY_HORSE_STEP(): Sound {
		return this.$javaClass.ENTITY_HORSE_STEP;
	}
	public static get ENTITY_HORSE_STEP_WOOD(): Sound {
		return this.$javaClass.ENTITY_HORSE_STEP_WOOD;
	}
	public static get ENTITY_HOSTILE_BIG_FALL(): Sound {
		return this.$javaClass.ENTITY_HOSTILE_BIG_FALL;
	}
	public static get ENTITY_HOSTILE_DEATH(): Sound {
		return this.$javaClass.ENTITY_HOSTILE_DEATH;
	}
	public static get ENTITY_HOSTILE_HURT(): Sound {
		return this.$javaClass.ENTITY_HOSTILE_HURT;
	}
	public static get ENTITY_HOSTILE_SMALL_FALL(): Sound {
		return this.$javaClass.ENTITY_HOSTILE_SMALL_FALL;
	}
	public static get ENTITY_HOSTILE_SPLASH(): Sound {
		return this.$javaClass.ENTITY_HOSTILE_SPLASH;
	}
	public static get ENTITY_HOSTILE_SWIM(): Sound {
		return this.$javaClass.ENTITY_HOSTILE_SWIM;
	}
	public static get ENTITY_HUSK_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_HUSK_AMBIENT;
	}
	public static get ENTITY_HUSK_CONVERTED_TO_ZOMBIE(): Sound {
		return this.$javaClass.ENTITY_HUSK_CONVERTED_TO_ZOMBIE;
	}
	public static get ENTITY_HUSK_DEATH(): Sound {
		return this.$javaClass.ENTITY_HUSK_DEATH;
	}
	public static get ENTITY_HUSK_HURT(): Sound {
		return this.$javaClass.ENTITY_HUSK_HURT;
	}
	public static get ENTITY_HUSK_STEP(): Sound {
		return this.$javaClass.ENTITY_HUSK_STEP;
	}
	public static get ENTITY_ILLUSIONER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ILLUSIONER_AMBIENT;
	}
	public static get ENTITY_ILLUSIONER_CAST_SPELL(): Sound {
		return this.$javaClass.ENTITY_ILLUSIONER_CAST_SPELL;
	}
	public static get ENTITY_ILLUSIONER_DEATH(): Sound {
		return this.$javaClass.ENTITY_ILLUSIONER_DEATH;
	}
	public static get ENTITY_ILLUSIONER_HURT(): Sound {
		return this.$javaClass.ENTITY_ILLUSIONER_HURT;
	}
	public static get ENTITY_ILLUSIONER_MIRROR_MOVE(): Sound {
		return this.$javaClass.ENTITY_ILLUSIONER_MIRROR_MOVE;
	}
	public static get ENTITY_ILLUSIONER_PREPARE_BLINDNESS(): Sound {
		return this.$javaClass.ENTITY_ILLUSIONER_PREPARE_BLINDNESS;
	}
	public static get ENTITY_ILLUSIONER_PREPARE_MIRROR(): Sound {
		return this.$javaClass.ENTITY_ILLUSIONER_PREPARE_MIRROR;
	}
	public static get ENTITY_IRON_GOLEM_ATTACK(): Sound {
		return this.$javaClass.ENTITY_IRON_GOLEM_ATTACK;
	}
	public static get ENTITY_IRON_GOLEM_DAMAGE(): Sound {
		return this.$javaClass.ENTITY_IRON_GOLEM_DAMAGE;
	}
	public static get ENTITY_IRON_GOLEM_DEATH(): Sound {
		return this.$javaClass.ENTITY_IRON_GOLEM_DEATH;
	}
	public static get ENTITY_IRON_GOLEM_HURT(): Sound {
		return this.$javaClass.ENTITY_IRON_GOLEM_HURT;
	}
	public static get ENTITY_IRON_GOLEM_REPAIR(): Sound {
		return this.$javaClass.ENTITY_IRON_GOLEM_REPAIR;
	}
	public static get ENTITY_IRON_GOLEM_STEP(): Sound {
		return this.$javaClass.ENTITY_IRON_GOLEM_STEP;
	}
	public static get ENTITY_ITEM_BREAK(): Sound {
		return this.$javaClass.ENTITY_ITEM_BREAK;
	}
	public static get ENTITY_ITEM_FRAME_ADD_ITEM(): Sound {
		return this.$javaClass.ENTITY_ITEM_FRAME_ADD_ITEM;
	}
	public static get ENTITY_ITEM_FRAME_BREAK(): Sound {
		return this.$javaClass.ENTITY_ITEM_FRAME_BREAK;
	}
	public static get ENTITY_ITEM_FRAME_PLACE(): Sound {
		return this.$javaClass.ENTITY_ITEM_FRAME_PLACE;
	}
	public static get ENTITY_ITEM_FRAME_REMOVE_ITEM(): Sound {
		return this.$javaClass.ENTITY_ITEM_FRAME_REMOVE_ITEM;
	}
	public static get ENTITY_ITEM_FRAME_ROTATE_ITEM(): Sound {
		return this.$javaClass.ENTITY_ITEM_FRAME_ROTATE_ITEM;
	}
	public static get ENTITY_ITEM_PICKUP(): Sound {
		return this.$javaClass.ENTITY_ITEM_PICKUP;
	}
	public static get ENTITY_LEASH_KNOT_BREAK(): Sound {
		return this.$javaClass.ENTITY_LEASH_KNOT_BREAK;
	}
	public static get ENTITY_LEASH_KNOT_PLACE(): Sound {
		return this.$javaClass.ENTITY_LEASH_KNOT_PLACE;
	}
	public static get ENTITY_LIGHTNING_BOLT_IMPACT(): Sound {
		return this.$javaClass.ENTITY_LIGHTNING_BOLT_IMPACT;
	}
	public static get ENTITY_LIGHTNING_BOLT_THUNDER(): Sound {
		return this.$javaClass.ENTITY_LIGHTNING_BOLT_THUNDER;
	}
	public static get ENTITY_LINGERING_POTION_THROW(): Sound {
		return this.$javaClass.ENTITY_LINGERING_POTION_THROW;
	}
	public static get ENTITY_LLAMA_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_LLAMA_AMBIENT;
	}
	public static get ENTITY_LLAMA_ANGRY(): Sound {
		return this.$javaClass.ENTITY_LLAMA_ANGRY;
	}
	public static get ENTITY_LLAMA_CHEST(): Sound {
		return this.$javaClass.ENTITY_LLAMA_CHEST;
	}
	public static get ENTITY_LLAMA_DEATH(): Sound {
		return this.$javaClass.ENTITY_LLAMA_DEATH;
	}
	public static get ENTITY_LLAMA_EAT(): Sound {
		return this.$javaClass.ENTITY_LLAMA_EAT;
	}
	public static get ENTITY_LLAMA_HURT(): Sound {
		return this.$javaClass.ENTITY_LLAMA_HURT;
	}
	public static get ENTITY_LLAMA_SPIT(): Sound {
		return this.$javaClass.ENTITY_LLAMA_SPIT;
	}
	public static get ENTITY_LLAMA_STEP(): Sound {
		return this.$javaClass.ENTITY_LLAMA_STEP;
	}
	public static get ENTITY_LLAMA_SWAG(): Sound {
		return this.$javaClass.ENTITY_LLAMA_SWAG;
	}
	public static get ENTITY_MAGMA_CUBE_DEATH(): Sound {
		return this.$javaClass.ENTITY_MAGMA_CUBE_DEATH;
	}
	public static get ENTITY_MAGMA_CUBE_DEATH_SMALL(): Sound {
		return this.$javaClass.ENTITY_MAGMA_CUBE_DEATH_SMALL;
	}
	public static get ENTITY_MAGMA_CUBE_HURT(): Sound {
		return this.$javaClass.ENTITY_MAGMA_CUBE_HURT;
	}
	public static get ENTITY_MAGMA_CUBE_HURT_SMALL(): Sound {
		return this.$javaClass.ENTITY_MAGMA_CUBE_HURT_SMALL;
	}
	public static get ENTITY_MAGMA_CUBE_JUMP(): Sound {
		return this.$javaClass.ENTITY_MAGMA_CUBE_JUMP;
	}
	public static get ENTITY_MAGMA_CUBE_SQUISH(): Sound {
		return this.$javaClass.ENTITY_MAGMA_CUBE_SQUISH;
	}
	public static get ENTITY_MAGMA_CUBE_SQUISH_SMALL(): Sound {
		return this.$javaClass.ENTITY_MAGMA_CUBE_SQUISH_SMALL;
	}
	public static get ENTITY_MINECART_INSIDE(): Sound {
		return this.$javaClass.ENTITY_MINECART_INSIDE;
	}
	public static get ENTITY_MINECART_RIDING(): Sound {
		return this.$javaClass.ENTITY_MINECART_RIDING;
	}
	public static get ENTITY_MOOSHROOM_CONVERT(): Sound {
		return this.$javaClass.ENTITY_MOOSHROOM_CONVERT;
	}
	public static get ENTITY_MOOSHROOM_EAT(): Sound {
		return this.$javaClass.ENTITY_MOOSHROOM_EAT;
	}
	public static get ENTITY_MOOSHROOM_MILK(): Sound {
		return this.$javaClass.ENTITY_MOOSHROOM_MILK;
	}
	public static get ENTITY_MOOSHROOM_SHEAR(): Sound {
		return this.$javaClass.ENTITY_MOOSHROOM_SHEAR;
	}
	public static get ENTITY_MOOSHROOM_SUSPICIOUS_MILK(): Sound {
		return this.$javaClass.ENTITY_MOOSHROOM_SUSPICIOUS_MILK;
	}
	public static get ENTITY_MULE_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_MULE_AMBIENT;
	}
	public static get ENTITY_MULE_CHEST(): Sound {
		return this.$javaClass.ENTITY_MULE_CHEST;
	}
	public static get ENTITY_MULE_DEATH(): Sound {
		return this.$javaClass.ENTITY_MULE_DEATH;
	}
	public static get ENTITY_MULE_HURT(): Sound {
		return this.$javaClass.ENTITY_MULE_HURT;
	}
	public static get ENTITY_OCELOT_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_OCELOT_AMBIENT;
	}
	public static get ENTITY_OCELOT_DEATH(): Sound {
		return this.$javaClass.ENTITY_OCELOT_DEATH;
	}
	public static get ENTITY_OCELOT_HURT(): Sound {
		return this.$javaClass.ENTITY_OCELOT_HURT;
	}
	public static get ENTITY_PAINTING_BREAK(): Sound {
		return this.$javaClass.ENTITY_PAINTING_BREAK;
	}
	public static get ENTITY_PAINTING_PLACE(): Sound {
		return this.$javaClass.ENTITY_PAINTING_PLACE;
	}
	public static get ENTITY_PANDA_AGGRESSIVE_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_PANDA_AGGRESSIVE_AMBIENT;
	}
	public static get ENTITY_PANDA_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_PANDA_AMBIENT;
	}
	public static get ENTITY_PANDA_BITE(): Sound {
		return this.$javaClass.ENTITY_PANDA_BITE;
	}
	public static get ENTITY_PANDA_CANT_BREED(): Sound {
		return this.$javaClass.ENTITY_PANDA_CANT_BREED;
	}
	public static get ENTITY_PANDA_DEATH(): Sound {
		return this.$javaClass.ENTITY_PANDA_DEATH;
	}
	public static get ENTITY_PANDA_EAT(): Sound {
		return this.$javaClass.ENTITY_PANDA_EAT;
	}
	public static get ENTITY_PANDA_HURT(): Sound {
		return this.$javaClass.ENTITY_PANDA_HURT;
	}
	public static get ENTITY_PANDA_PRE_SNEEZE(): Sound {
		return this.$javaClass.ENTITY_PANDA_PRE_SNEEZE;
	}
	public static get ENTITY_PANDA_SNEEZE(): Sound {
		return this.$javaClass.ENTITY_PANDA_SNEEZE;
	}
	public static get ENTITY_PANDA_STEP(): Sound {
		return this.$javaClass.ENTITY_PANDA_STEP;
	}
	public static get ENTITY_PANDA_WORRIED_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_PANDA_WORRIED_AMBIENT;
	}
	public static get ENTITY_PARROT_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_PARROT_AMBIENT;
	}
	public static get ENTITY_PARROT_DEATH(): Sound {
		return this.$javaClass.ENTITY_PARROT_DEATH;
	}
	public static get ENTITY_PARROT_EAT(): Sound {
		return this.$javaClass.ENTITY_PARROT_EAT;
	}
	public static get ENTITY_PARROT_FLY(): Sound {
		return this.$javaClass.ENTITY_PARROT_FLY;
	}
	public static get ENTITY_PARROT_HURT(): Sound {
		return this.$javaClass.ENTITY_PARROT_HURT;
	}
	public static get ENTITY_PARROT_IMITATE_BLAZE(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_BLAZE;
	}
	public static get ENTITY_PARROT_IMITATE_CREEPER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_CREEPER;
	}
	public static get ENTITY_PARROT_IMITATE_DROWNED(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_DROWNED;
	}
	public static get ENTITY_PARROT_IMITATE_ELDER_GUARDIAN(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_ELDER_GUARDIAN;
	}
	public static get ENTITY_PARROT_IMITATE_ENDERMITE(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_ENDERMITE;
	}
	public static get ENTITY_PARROT_IMITATE_ENDER_DRAGON(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_ENDER_DRAGON;
	}
	public static get ENTITY_PARROT_IMITATE_EVOKER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_EVOKER;
	}
	public static get ENTITY_PARROT_IMITATE_GHAST(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_GHAST;
	}
	public static get ENTITY_PARROT_IMITATE_GUARDIAN(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_GUARDIAN;
	}
	public static get ENTITY_PARROT_IMITATE_HUSK(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_HUSK;
	}
	public static get ENTITY_PARROT_IMITATE_ILLUSIONER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_ILLUSIONER;
	}
	public static get ENTITY_PARROT_IMITATE_MAGMA_CUBE(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_MAGMA_CUBE;
	}
	public static get ENTITY_PARROT_IMITATE_PHANTOM(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_PHANTOM;
	}
	public static get ENTITY_PARROT_IMITATE_PILLAGER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_PILLAGER;
	}
	public static get ENTITY_PARROT_IMITATE_RAVAGER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_RAVAGER;
	}
	public static get ENTITY_PARROT_IMITATE_SHULKER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_SHULKER;
	}
	public static get ENTITY_PARROT_IMITATE_SILVERFISH(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_SILVERFISH;
	}
	public static get ENTITY_PARROT_IMITATE_SKELETON(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_SKELETON;
	}
	public static get ENTITY_PARROT_IMITATE_SLIME(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_SLIME;
	}
	public static get ENTITY_PARROT_IMITATE_SPIDER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_SPIDER;
	}
	public static get ENTITY_PARROT_IMITATE_STRAY(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_STRAY;
	}
	public static get ENTITY_PARROT_IMITATE_VEX(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_VEX;
	}
	public static get ENTITY_PARROT_IMITATE_VINDICATOR(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_VINDICATOR;
	}
	public static get ENTITY_PARROT_IMITATE_WITCH(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_WITCH;
	}
	public static get ENTITY_PARROT_IMITATE_WITHER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_WITHER;
	}
	public static get ENTITY_PARROT_IMITATE_WITHER_SKELETON(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_WITHER_SKELETON;
	}
	public static get ENTITY_PARROT_IMITATE_ZOMBIE(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_ZOMBIE;
	}
	public static get ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER(): Sound {
		return this.$javaClass.ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER;
	}
	public static get ENTITY_PARROT_STEP(): Sound {
		return this.$javaClass.ENTITY_PARROT_STEP;
	}
	public static get ENTITY_PHANTOM_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_PHANTOM_AMBIENT;
	}
	public static get ENTITY_PHANTOM_BITE(): Sound {
		return this.$javaClass.ENTITY_PHANTOM_BITE;
	}
	public static get ENTITY_PHANTOM_DEATH(): Sound {
		return this.$javaClass.ENTITY_PHANTOM_DEATH;
	}
	public static get ENTITY_PHANTOM_FLAP(): Sound {
		return this.$javaClass.ENTITY_PHANTOM_FLAP;
	}
	public static get ENTITY_PHANTOM_HURT(): Sound {
		return this.$javaClass.ENTITY_PHANTOM_HURT;
	}
	public static get ENTITY_PHANTOM_SWOOP(): Sound {
		return this.$javaClass.ENTITY_PHANTOM_SWOOP;
	}
	public static get ENTITY_PIG_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_PIG_AMBIENT;
	}
	public static get ENTITY_PIG_DEATH(): Sound {
		return this.$javaClass.ENTITY_PIG_DEATH;
	}
	public static get ENTITY_PIG_HURT(): Sound {
		return this.$javaClass.ENTITY_PIG_HURT;
	}
	public static get ENTITY_PIG_SADDLE(): Sound {
		return this.$javaClass.ENTITY_PIG_SADDLE;
	}
	public static get ENTITY_PIG_STEP(): Sound {
		return this.$javaClass.ENTITY_PIG_STEP;
	}
	public static get ENTITY_PILLAGER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_PILLAGER_AMBIENT;
	}
	public static get ENTITY_PILLAGER_CELEBRATE(): Sound {
		return this.$javaClass.ENTITY_PILLAGER_CELEBRATE;
	}
	public static get ENTITY_PILLAGER_DEATH(): Sound {
		return this.$javaClass.ENTITY_PILLAGER_DEATH;
	}
	public static get ENTITY_PILLAGER_HURT(): Sound {
		return this.$javaClass.ENTITY_PILLAGER_HURT;
	}
	public static get ENTITY_PLAYER_ATTACK_CRIT(): Sound {
		return this.$javaClass.ENTITY_PLAYER_ATTACK_CRIT;
	}
	public static get ENTITY_PLAYER_ATTACK_KNOCKBACK(): Sound {
		return this.$javaClass.ENTITY_PLAYER_ATTACK_KNOCKBACK;
	}
	public static get ENTITY_PLAYER_ATTACK_NODAMAGE(): Sound {
		return this.$javaClass.ENTITY_PLAYER_ATTACK_NODAMAGE;
	}
	public static get ENTITY_PLAYER_ATTACK_STRONG(): Sound {
		return this.$javaClass.ENTITY_PLAYER_ATTACK_STRONG;
	}
	public static get ENTITY_PLAYER_ATTACK_SWEEP(): Sound {
		return this.$javaClass.ENTITY_PLAYER_ATTACK_SWEEP;
	}
	public static get ENTITY_PLAYER_ATTACK_WEAK(): Sound {
		return this.$javaClass.ENTITY_PLAYER_ATTACK_WEAK;
	}
	public static get ENTITY_PLAYER_BIG_FALL(): Sound {
		return this.$javaClass.ENTITY_PLAYER_BIG_FALL;
	}
	public static get ENTITY_PLAYER_BREATH(): Sound {
		return this.$javaClass.ENTITY_PLAYER_BREATH;
	}
	public static get ENTITY_PLAYER_BURP(): Sound {
		return this.$javaClass.ENTITY_PLAYER_BURP;
	}
	public static get ENTITY_PLAYER_DEATH(): Sound {
		return this.$javaClass.ENTITY_PLAYER_DEATH;
	}
	public static get ENTITY_PLAYER_HURT(): Sound {
		return this.$javaClass.ENTITY_PLAYER_HURT;
	}
	public static get ENTITY_PLAYER_HURT_DROWN(): Sound {
		return this.$javaClass.ENTITY_PLAYER_HURT_DROWN;
	}
	public static get ENTITY_PLAYER_HURT_ON_FIRE(): Sound {
		return this.$javaClass.ENTITY_PLAYER_HURT_ON_FIRE;
	}
	public static get ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH(): Sound {
		return this.$javaClass.ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH;
	}
	public static get ENTITY_PLAYER_LEVELUP(): Sound {
		return this.$javaClass.ENTITY_PLAYER_LEVELUP;
	}
	public static get ENTITY_PLAYER_SMALL_FALL(): Sound {
		return this.$javaClass.ENTITY_PLAYER_SMALL_FALL;
	}
	public static get ENTITY_PLAYER_SPLASH(): Sound {
		return this.$javaClass.ENTITY_PLAYER_SPLASH;
	}
	public static get ENTITY_PLAYER_SPLASH_HIGH_SPEED(): Sound {
		return this.$javaClass.ENTITY_PLAYER_SPLASH_HIGH_SPEED;
	}
	public static get ENTITY_PLAYER_SWIM(): Sound {
		return this.$javaClass.ENTITY_PLAYER_SWIM;
	}
	public static get ENTITY_POLAR_BEAR_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_POLAR_BEAR_AMBIENT;
	}
	public static get ENTITY_POLAR_BEAR_AMBIENT_BABY(): Sound {
		return this.$javaClass.ENTITY_POLAR_BEAR_AMBIENT_BABY;
	}
	public static get ENTITY_POLAR_BEAR_DEATH(): Sound {
		return this.$javaClass.ENTITY_POLAR_BEAR_DEATH;
	}
	public static get ENTITY_POLAR_BEAR_HURT(): Sound {
		return this.$javaClass.ENTITY_POLAR_BEAR_HURT;
	}
	public static get ENTITY_POLAR_BEAR_STEP(): Sound {
		return this.$javaClass.ENTITY_POLAR_BEAR_STEP;
	}
	public static get ENTITY_POLAR_BEAR_WARNING(): Sound {
		return this.$javaClass.ENTITY_POLAR_BEAR_WARNING;
	}
	public static get ENTITY_PUFFER_FISH_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_PUFFER_FISH_AMBIENT;
	}
	public static get ENTITY_PUFFER_FISH_BLOW_OUT(): Sound {
		return this.$javaClass.ENTITY_PUFFER_FISH_BLOW_OUT;
	}
	public static get ENTITY_PUFFER_FISH_BLOW_UP(): Sound {
		return this.$javaClass.ENTITY_PUFFER_FISH_BLOW_UP;
	}
	public static get ENTITY_PUFFER_FISH_DEATH(): Sound {
		return this.$javaClass.ENTITY_PUFFER_FISH_DEATH;
	}
	public static get ENTITY_PUFFER_FISH_FLOP(): Sound {
		return this.$javaClass.ENTITY_PUFFER_FISH_FLOP;
	}
	public static get ENTITY_PUFFER_FISH_HURT(): Sound {
		return this.$javaClass.ENTITY_PUFFER_FISH_HURT;
	}
	public static get ENTITY_PUFFER_FISH_STING(): Sound {
		return this.$javaClass.ENTITY_PUFFER_FISH_STING;
	}
	public static get ENTITY_RABBIT_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_RABBIT_AMBIENT;
	}
	public static get ENTITY_RABBIT_ATTACK(): Sound {
		return this.$javaClass.ENTITY_RABBIT_ATTACK;
	}
	public static get ENTITY_RABBIT_DEATH(): Sound {
		return this.$javaClass.ENTITY_RABBIT_DEATH;
	}
	public static get ENTITY_RABBIT_HURT(): Sound {
		return this.$javaClass.ENTITY_RABBIT_HURT;
	}
	public static get ENTITY_RABBIT_JUMP(): Sound {
		return this.$javaClass.ENTITY_RABBIT_JUMP;
	}
	public static get ENTITY_RAVAGER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_RAVAGER_AMBIENT;
	}
	public static get ENTITY_RAVAGER_ATTACK(): Sound {
		return this.$javaClass.ENTITY_RAVAGER_ATTACK;
	}
	public static get ENTITY_RAVAGER_CELEBRATE(): Sound {
		return this.$javaClass.ENTITY_RAVAGER_CELEBRATE;
	}
	public static get ENTITY_RAVAGER_DEATH(): Sound {
		return this.$javaClass.ENTITY_RAVAGER_DEATH;
	}
	public static get ENTITY_RAVAGER_HURT(): Sound {
		return this.$javaClass.ENTITY_RAVAGER_HURT;
	}
	public static get ENTITY_RAVAGER_ROAR(): Sound {
		return this.$javaClass.ENTITY_RAVAGER_ROAR;
	}
	public static get ENTITY_RAVAGER_STEP(): Sound {
		return this.$javaClass.ENTITY_RAVAGER_STEP;
	}
	public static get ENTITY_RAVAGER_STUNNED(): Sound {
		return this.$javaClass.ENTITY_RAVAGER_STUNNED;
	}
	public static get ENTITY_SALMON_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SALMON_AMBIENT;
	}
	public static get ENTITY_SALMON_DEATH(): Sound {
		return this.$javaClass.ENTITY_SALMON_DEATH;
	}
	public static get ENTITY_SALMON_FLOP(): Sound {
		return this.$javaClass.ENTITY_SALMON_FLOP;
	}
	public static get ENTITY_SALMON_HURT(): Sound {
		return this.$javaClass.ENTITY_SALMON_HURT;
	}
	public static get ENTITY_SHEEP_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SHEEP_AMBIENT;
	}
	public static get ENTITY_SHEEP_DEATH(): Sound {
		return this.$javaClass.ENTITY_SHEEP_DEATH;
	}
	public static get ENTITY_SHEEP_HURT(): Sound {
		return this.$javaClass.ENTITY_SHEEP_HURT;
	}
	public static get ENTITY_SHEEP_SHEAR(): Sound {
		return this.$javaClass.ENTITY_SHEEP_SHEAR;
	}
	public static get ENTITY_SHEEP_STEP(): Sound {
		return this.$javaClass.ENTITY_SHEEP_STEP;
	}
	public static get ENTITY_SHULKER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SHULKER_AMBIENT;
	}
	public static get ENTITY_SHULKER_BULLET_HIT(): Sound {
		return this.$javaClass.ENTITY_SHULKER_BULLET_HIT;
	}
	public static get ENTITY_SHULKER_BULLET_HURT(): Sound {
		return this.$javaClass.ENTITY_SHULKER_BULLET_HURT;
	}
	public static get ENTITY_SHULKER_CLOSE(): Sound {
		return this.$javaClass.ENTITY_SHULKER_CLOSE;
	}
	public static get ENTITY_SHULKER_DEATH(): Sound {
		return this.$javaClass.ENTITY_SHULKER_DEATH;
	}
	public static get ENTITY_SHULKER_HURT(): Sound {
		return this.$javaClass.ENTITY_SHULKER_HURT;
	}
	public static get ENTITY_SHULKER_HURT_CLOSED(): Sound {
		return this.$javaClass.ENTITY_SHULKER_HURT_CLOSED;
	}
	public static get ENTITY_SHULKER_OPEN(): Sound {
		return this.$javaClass.ENTITY_SHULKER_OPEN;
	}
	public static get ENTITY_SHULKER_SHOOT(): Sound {
		return this.$javaClass.ENTITY_SHULKER_SHOOT;
	}
	public static get ENTITY_SHULKER_TELEPORT(): Sound {
		return this.$javaClass.ENTITY_SHULKER_TELEPORT;
	}
	public static get ENTITY_SILVERFISH_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SILVERFISH_AMBIENT;
	}
	public static get ENTITY_SILVERFISH_DEATH(): Sound {
		return this.$javaClass.ENTITY_SILVERFISH_DEATH;
	}
	public static get ENTITY_SILVERFISH_HURT(): Sound {
		return this.$javaClass.ENTITY_SILVERFISH_HURT;
	}
	public static get ENTITY_SILVERFISH_STEP(): Sound {
		return this.$javaClass.ENTITY_SILVERFISH_STEP;
	}
	public static get ENTITY_SKELETON_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SKELETON_AMBIENT;
	}
	public static get ENTITY_SKELETON_DEATH(): Sound {
		return this.$javaClass.ENTITY_SKELETON_DEATH;
	}
	public static get ENTITY_SKELETON_HORSE_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HORSE_AMBIENT;
	}
	public static get ENTITY_SKELETON_HORSE_AMBIENT_WATER(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HORSE_AMBIENT_WATER;
	}
	public static get ENTITY_SKELETON_HORSE_DEATH(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HORSE_DEATH;
	}
	public static get ENTITY_SKELETON_HORSE_GALLOP_WATER(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HORSE_GALLOP_WATER;
	}
	public static get ENTITY_SKELETON_HORSE_HURT(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HORSE_HURT;
	}
	public static get ENTITY_SKELETON_HORSE_JUMP_WATER(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HORSE_JUMP_WATER;
	}
	public static get ENTITY_SKELETON_HORSE_STEP_WATER(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HORSE_STEP_WATER;
	}
	public static get ENTITY_SKELETON_HORSE_SWIM(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HORSE_SWIM;
	}
	public static get ENTITY_SKELETON_HURT(): Sound {
		return this.$javaClass.ENTITY_SKELETON_HURT;
	}
	public static get ENTITY_SKELETON_SHOOT(): Sound {
		return this.$javaClass.ENTITY_SKELETON_SHOOT;
	}
	public static get ENTITY_SKELETON_STEP(): Sound {
		return this.$javaClass.ENTITY_SKELETON_STEP;
	}
	public static get ENTITY_SLIME_ATTACK(): Sound {
		return this.$javaClass.ENTITY_SLIME_ATTACK;
	}
	public static get ENTITY_SLIME_DEATH(): Sound {
		return this.$javaClass.ENTITY_SLIME_DEATH;
	}
	public static get ENTITY_SLIME_DEATH_SMALL(): Sound {
		return this.$javaClass.ENTITY_SLIME_DEATH_SMALL;
	}
	public static get ENTITY_SLIME_HURT(): Sound {
		return this.$javaClass.ENTITY_SLIME_HURT;
	}
	public static get ENTITY_SLIME_HURT_SMALL(): Sound {
		return this.$javaClass.ENTITY_SLIME_HURT_SMALL;
	}
	public static get ENTITY_SLIME_JUMP(): Sound {
		return this.$javaClass.ENTITY_SLIME_JUMP;
	}
	public static get ENTITY_SLIME_JUMP_SMALL(): Sound {
		return this.$javaClass.ENTITY_SLIME_JUMP_SMALL;
	}
	public static get ENTITY_SLIME_SQUISH(): Sound {
		return this.$javaClass.ENTITY_SLIME_SQUISH;
	}
	public static get ENTITY_SLIME_SQUISH_SMALL(): Sound {
		return this.$javaClass.ENTITY_SLIME_SQUISH_SMALL;
	}
	public static get ENTITY_SNOWBALL_THROW(): Sound {
		return this.$javaClass.ENTITY_SNOWBALL_THROW;
	}
	public static get ENTITY_SNOW_GOLEM_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SNOW_GOLEM_AMBIENT;
	}
	public static get ENTITY_SNOW_GOLEM_DEATH(): Sound {
		return this.$javaClass.ENTITY_SNOW_GOLEM_DEATH;
	}
	public static get ENTITY_SNOW_GOLEM_HURT(): Sound {
		return this.$javaClass.ENTITY_SNOW_GOLEM_HURT;
	}
	public static get ENTITY_SNOW_GOLEM_SHOOT(): Sound {
		return this.$javaClass.ENTITY_SNOW_GOLEM_SHOOT;
	}
	public static get ENTITY_SPIDER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SPIDER_AMBIENT;
	}
	public static get ENTITY_SPIDER_DEATH(): Sound {
		return this.$javaClass.ENTITY_SPIDER_DEATH;
	}
	public static get ENTITY_SPIDER_HURT(): Sound {
		return this.$javaClass.ENTITY_SPIDER_HURT;
	}
	public static get ENTITY_SPIDER_STEP(): Sound {
		return this.$javaClass.ENTITY_SPIDER_STEP;
	}
	public static get ENTITY_SPLASH_POTION_BREAK(): Sound {
		return this.$javaClass.ENTITY_SPLASH_POTION_BREAK;
	}
	public static get ENTITY_SPLASH_POTION_THROW(): Sound {
		return this.$javaClass.ENTITY_SPLASH_POTION_THROW;
	}
	public static get ENTITY_SQUID_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_SQUID_AMBIENT;
	}
	public static get ENTITY_SQUID_DEATH(): Sound {
		return this.$javaClass.ENTITY_SQUID_DEATH;
	}
	public static get ENTITY_SQUID_HURT(): Sound {
		return this.$javaClass.ENTITY_SQUID_HURT;
	}
	public static get ENTITY_SQUID_SQUIRT(): Sound {
		return this.$javaClass.ENTITY_SQUID_SQUIRT;
	}
	public static get ENTITY_STRAY_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_STRAY_AMBIENT;
	}
	public static get ENTITY_STRAY_DEATH(): Sound {
		return this.$javaClass.ENTITY_STRAY_DEATH;
	}
	public static get ENTITY_STRAY_HURT(): Sound {
		return this.$javaClass.ENTITY_STRAY_HURT;
	}
	public static get ENTITY_STRAY_STEP(): Sound {
		return this.$javaClass.ENTITY_STRAY_STEP;
	}
	public static get ENTITY_TNT_PRIMED(): Sound {
		return this.$javaClass.ENTITY_TNT_PRIMED;
	}
	public static get ENTITY_TROPICAL_FISH_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_TROPICAL_FISH_AMBIENT;
	}
	public static get ENTITY_TROPICAL_FISH_DEATH(): Sound {
		return this.$javaClass.ENTITY_TROPICAL_FISH_DEATH;
	}
	public static get ENTITY_TROPICAL_FISH_FLOP(): Sound {
		return this.$javaClass.ENTITY_TROPICAL_FISH_FLOP;
	}
	public static get ENTITY_TROPICAL_FISH_HURT(): Sound {
		return this.$javaClass.ENTITY_TROPICAL_FISH_HURT;
	}
	public static get ENTITY_TURTLE_AMBIENT_LAND(): Sound {
		return this.$javaClass.ENTITY_TURTLE_AMBIENT_LAND;
	}
	public static get ENTITY_TURTLE_DEATH(): Sound {
		return this.$javaClass.ENTITY_TURTLE_DEATH;
	}
	public static get ENTITY_TURTLE_DEATH_BABY(): Sound {
		return this.$javaClass.ENTITY_TURTLE_DEATH_BABY;
	}
	public static get ENTITY_TURTLE_EGG_BREAK(): Sound {
		return this.$javaClass.ENTITY_TURTLE_EGG_BREAK;
	}
	public static get ENTITY_TURTLE_EGG_CRACK(): Sound {
		return this.$javaClass.ENTITY_TURTLE_EGG_CRACK;
	}
	public static get ENTITY_TURTLE_EGG_HATCH(): Sound {
		return this.$javaClass.ENTITY_TURTLE_EGG_HATCH;
	}
	public static get ENTITY_TURTLE_HURT(): Sound {
		return this.$javaClass.ENTITY_TURTLE_HURT;
	}
	public static get ENTITY_TURTLE_HURT_BABY(): Sound {
		return this.$javaClass.ENTITY_TURTLE_HURT_BABY;
	}
	public static get ENTITY_TURTLE_LAY_EGG(): Sound {
		return this.$javaClass.ENTITY_TURTLE_LAY_EGG;
	}
	public static get ENTITY_TURTLE_SHAMBLE(): Sound {
		return this.$javaClass.ENTITY_TURTLE_SHAMBLE;
	}
	public static get ENTITY_TURTLE_SHAMBLE_BABY(): Sound {
		return this.$javaClass.ENTITY_TURTLE_SHAMBLE_BABY;
	}
	public static get ENTITY_TURTLE_SWIM(): Sound {
		return this.$javaClass.ENTITY_TURTLE_SWIM;
	}
	public static get ENTITY_VEX_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_VEX_AMBIENT;
	}
	public static get ENTITY_VEX_CHARGE(): Sound {
		return this.$javaClass.ENTITY_VEX_CHARGE;
	}
	public static get ENTITY_VEX_DEATH(): Sound {
		return this.$javaClass.ENTITY_VEX_DEATH;
	}
	public static get ENTITY_VEX_HURT(): Sound {
		return this.$javaClass.ENTITY_VEX_HURT;
	}
	public static get ENTITY_VILLAGER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_AMBIENT;
	}
	public static get ENTITY_VILLAGER_CELEBRATE(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_CELEBRATE;
	}
	public static get ENTITY_VILLAGER_DEATH(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_DEATH;
	}
	public static get ENTITY_VILLAGER_HURT(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_HURT;
	}
	public static get ENTITY_VILLAGER_NO(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_NO;
	}
	public static get ENTITY_VILLAGER_TRADE(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_TRADE;
	}
	public static get ENTITY_VILLAGER_WORK_ARMORER(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_ARMORER;
	}
	public static get ENTITY_VILLAGER_WORK_BUTCHER(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_BUTCHER;
	}
	public static get ENTITY_VILLAGER_WORK_CARTOGRAPHER(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_CARTOGRAPHER;
	}
	public static get ENTITY_VILLAGER_WORK_CLERIC(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_CLERIC;
	}
	public static get ENTITY_VILLAGER_WORK_FARMER(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_FARMER;
	}
	public static get ENTITY_VILLAGER_WORK_FISHERMAN(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_FISHERMAN;
	}
	public static get ENTITY_VILLAGER_WORK_FLETCHER(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_FLETCHER;
	}
	public static get ENTITY_VILLAGER_WORK_LEATHERWORKER(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_LEATHERWORKER;
	}
	public static get ENTITY_VILLAGER_WORK_LIBRARIAN(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_LIBRARIAN;
	}
	public static get ENTITY_VILLAGER_WORK_MASON(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_MASON;
	}
	public static get ENTITY_VILLAGER_WORK_SHEPHERD(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_SHEPHERD;
	}
	public static get ENTITY_VILLAGER_WORK_TOOLSMITH(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_TOOLSMITH;
	}
	public static get ENTITY_VILLAGER_WORK_WEAPONSMITH(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_WORK_WEAPONSMITH;
	}
	public static get ENTITY_VILLAGER_YES(): Sound {
		return this.$javaClass.ENTITY_VILLAGER_YES;
	}
	public static get ENTITY_VINDICATOR_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_VINDICATOR_AMBIENT;
	}
	public static get ENTITY_VINDICATOR_CELEBRATE(): Sound {
		return this.$javaClass.ENTITY_VINDICATOR_CELEBRATE;
	}
	public static get ENTITY_VINDICATOR_DEATH(): Sound {
		return this.$javaClass.ENTITY_VINDICATOR_DEATH;
	}
	public static get ENTITY_VINDICATOR_HURT(): Sound {
		return this.$javaClass.ENTITY_VINDICATOR_HURT;
	}
	public static get ENTITY_WANDERING_TRADER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_AMBIENT;
	}
	public static get ENTITY_WANDERING_TRADER_DEATH(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_DEATH;
	}
	public static get ENTITY_WANDERING_TRADER_DISAPPEARED(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_DISAPPEARED;
	}
	public static get ENTITY_WANDERING_TRADER_DRINK_MILK(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_DRINK_MILK;
	}
	public static get ENTITY_WANDERING_TRADER_DRINK_POTION(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_DRINK_POTION;
	}
	public static get ENTITY_WANDERING_TRADER_HURT(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_HURT;
	}
	public static get ENTITY_WANDERING_TRADER_NO(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_NO;
	}
	public static get ENTITY_WANDERING_TRADER_REAPPEARED(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_REAPPEARED;
	}
	public static get ENTITY_WANDERING_TRADER_TRADE(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_TRADE;
	}
	public static get ENTITY_WANDERING_TRADER_YES(): Sound {
		return this.$javaClass.ENTITY_WANDERING_TRADER_YES;
	}
	public static get ENTITY_WITCH_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_WITCH_AMBIENT;
	}
	public static get ENTITY_WITCH_CELEBRATE(): Sound {
		return this.$javaClass.ENTITY_WITCH_CELEBRATE;
	}
	public static get ENTITY_WITCH_DEATH(): Sound {
		return this.$javaClass.ENTITY_WITCH_DEATH;
	}
	public static get ENTITY_WITCH_DRINK(): Sound {
		return this.$javaClass.ENTITY_WITCH_DRINK;
	}
	public static get ENTITY_WITCH_HURT(): Sound {
		return this.$javaClass.ENTITY_WITCH_HURT;
	}
	public static get ENTITY_WITCH_THROW(): Sound {
		return this.$javaClass.ENTITY_WITCH_THROW;
	}
	public static get ENTITY_WITHER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_WITHER_AMBIENT;
	}
	public static get ENTITY_WITHER_BREAK_BLOCK(): Sound {
		return this.$javaClass.ENTITY_WITHER_BREAK_BLOCK;
	}
	public static get ENTITY_WITHER_DEATH(): Sound {
		return this.$javaClass.ENTITY_WITHER_DEATH;
	}
	public static get ENTITY_WITHER_HURT(): Sound {
		return this.$javaClass.ENTITY_WITHER_HURT;
	}
	public static get ENTITY_WITHER_SHOOT(): Sound {
		return this.$javaClass.ENTITY_WITHER_SHOOT;
	}
	public static get ENTITY_WITHER_SKELETON_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_WITHER_SKELETON_AMBIENT;
	}
	public static get ENTITY_WITHER_SKELETON_DEATH(): Sound {
		return this.$javaClass.ENTITY_WITHER_SKELETON_DEATH;
	}
	public static get ENTITY_WITHER_SKELETON_HURT(): Sound {
		return this.$javaClass.ENTITY_WITHER_SKELETON_HURT;
	}
	public static get ENTITY_WITHER_SKELETON_STEP(): Sound {
		return this.$javaClass.ENTITY_WITHER_SKELETON_STEP;
	}
	public static get ENTITY_WITHER_SPAWN(): Sound {
		return this.$javaClass.ENTITY_WITHER_SPAWN;
	}
	public static get ENTITY_WOLF_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_WOLF_AMBIENT;
	}
	public static get ENTITY_WOLF_DEATH(): Sound {
		return this.$javaClass.ENTITY_WOLF_DEATH;
	}
	public static get ENTITY_WOLF_GROWL(): Sound {
		return this.$javaClass.ENTITY_WOLF_GROWL;
	}
	public static get ENTITY_WOLF_HOWL(): Sound {
		return this.$javaClass.ENTITY_WOLF_HOWL;
	}
	public static get ENTITY_WOLF_HURT(): Sound {
		return this.$javaClass.ENTITY_WOLF_HURT;
	}
	public static get ENTITY_WOLF_PANT(): Sound {
		return this.$javaClass.ENTITY_WOLF_PANT;
	}
	public static get ENTITY_WOLF_SHAKE(): Sound {
		return this.$javaClass.ENTITY_WOLF_SHAKE;
	}
	public static get ENTITY_WOLF_STEP(): Sound {
		return this.$javaClass.ENTITY_WOLF_STEP;
	}
	public static get ENTITY_WOLF_WHINE(): Sound {
		return this.$javaClass.ENTITY_WOLF_WHINE;
	}
	public static get ENTITY_ZOMBIE_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_AMBIENT;
	}
	public static get ENTITY_ZOMBIE_ATTACK_IRON_DOOR(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_ATTACK_IRON_DOOR;
	}
	public static get ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR;
	}
	public static get ENTITY_ZOMBIE_BREAK_WOODEN_DOOR(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_BREAK_WOODEN_DOOR;
	}
	public static get ENTITY_ZOMBIE_CONVERTED_TO_DROWNED(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_CONVERTED_TO_DROWNED;
	}
	public static get ENTITY_ZOMBIE_DEATH(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_DEATH;
	}
	public static get ENTITY_ZOMBIE_DESTROY_EGG(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_DESTROY_EGG;
	}
	public static get ENTITY_ZOMBIE_HORSE_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_HORSE_AMBIENT;
	}
	public static get ENTITY_ZOMBIE_HORSE_DEATH(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_HORSE_DEATH;
	}
	public static get ENTITY_ZOMBIE_HORSE_HURT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_HORSE_HURT;
	}
	public static get ENTITY_ZOMBIE_HURT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_HURT;
	}
	public static get ENTITY_ZOMBIE_INFECT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_INFECT;
	}
	public static get ENTITY_ZOMBIE_PIGMAN_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_PIGMAN_AMBIENT;
	}
	public static get ENTITY_ZOMBIE_PIGMAN_ANGRY(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_PIGMAN_ANGRY;
	}
	public static get ENTITY_ZOMBIE_PIGMAN_DEATH(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_PIGMAN_DEATH;
	}
	public static get ENTITY_ZOMBIE_PIGMAN_HURT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_PIGMAN_HURT;
	}
	public static get ENTITY_ZOMBIE_STEP(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_STEP;
	}
	public static get ENTITY_ZOMBIE_VILLAGER_AMBIENT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_VILLAGER_AMBIENT;
	}
	public static get ENTITY_ZOMBIE_VILLAGER_CONVERTED(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_VILLAGER_CONVERTED;
	}
	public static get ENTITY_ZOMBIE_VILLAGER_CURE(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_VILLAGER_CURE;
	}
	public static get ENTITY_ZOMBIE_VILLAGER_DEATH(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_VILLAGER_DEATH;
	}
	public static get ENTITY_ZOMBIE_VILLAGER_HURT(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_VILLAGER_HURT;
	}
	public static get ENTITY_ZOMBIE_VILLAGER_STEP(): Sound {
		return this.$javaClass.ENTITY_ZOMBIE_VILLAGER_STEP;
	}
	public static get EVENT_RAID_HORN(): Sound {
		return this.$javaClass.EVENT_RAID_HORN;
	}
	public static get ITEM_ARMOR_EQUIP_CHAIN(): Sound {
		return this.$javaClass.ITEM_ARMOR_EQUIP_CHAIN;
	}
	public static get ITEM_ARMOR_EQUIP_DIAMOND(): Sound {
		return this.$javaClass.ITEM_ARMOR_EQUIP_DIAMOND;
	}
	public static get ITEM_ARMOR_EQUIP_ELYTRA(): Sound {
		return this.$javaClass.ITEM_ARMOR_EQUIP_ELYTRA;
	}
	public static get ITEM_ARMOR_EQUIP_GENERIC(): Sound {
		return this.$javaClass.ITEM_ARMOR_EQUIP_GENERIC;
	}
	public static get ITEM_ARMOR_EQUIP_GOLD(): Sound {
		return this.$javaClass.ITEM_ARMOR_EQUIP_GOLD;
	}
	public static get ITEM_ARMOR_EQUIP_IRON(): Sound {
		return this.$javaClass.ITEM_ARMOR_EQUIP_IRON;
	}
	public static get ITEM_ARMOR_EQUIP_LEATHER(): Sound {
		return this.$javaClass.ITEM_ARMOR_EQUIP_LEATHER;
	}
	public static get ITEM_ARMOR_EQUIP_TURTLE(): Sound {
		return this.$javaClass.ITEM_ARMOR_EQUIP_TURTLE;
	}
	public static get ITEM_AXE_STRIP(): Sound {
		return this.$javaClass.ITEM_AXE_STRIP;
	}
	public static get ITEM_BOOK_PAGE_TURN(): Sound {
		return this.$javaClass.ITEM_BOOK_PAGE_TURN;
	}
	public static get ITEM_BOOK_PUT(): Sound {
		return this.$javaClass.ITEM_BOOK_PUT;
	}
	public static get ITEM_BOTTLE_EMPTY(): Sound {
		return this.$javaClass.ITEM_BOTTLE_EMPTY;
	}
	public static get ITEM_BOTTLE_FILL(): Sound {
		return this.$javaClass.ITEM_BOTTLE_FILL;
	}
	public static get ITEM_BOTTLE_FILL_DRAGONBREATH(): Sound {
		return this.$javaClass.ITEM_BOTTLE_FILL_DRAGONBREATH;
	}
	public static get ITEM_BUCKET_EMPTY(): Sound {
		return this.$javaClass.ITEM_BUCKET_EMPTY;
	}
	public static get ITEM_BUCKET_EMPTY_FISH(): Sound {
		return this.$javaClass.ITEM_BUCKET_EMPTY_FISH;
	}
	public static get ITEM_BUCKET_EMPTY_LAVA(): Sound {
		return this.$javaClass.ITEM_BUCKET_EMPTY_LAVA;
	}
	public static get ITEM_BUCKET_FILL(): Sound {
		return this.$javaClass.ITEM_BUCKET_FILL;
	}
	public static get ITEM_BUCKET_FILL_FISH(): Sound {
		return this.$javaClass.ITEM_BUCKET_FILL_FISH;
	}
	public static get ITEM_BUCKET_FILL_LAVA(): Sound {
		return this.$javaClass.ITEM_BUCKET_FILL_LAVA;
	}
	public static get ITEM_CHORUS_FRUIT_TELEPORT(): Sound {
		return this.$javaClass.ITEM_CHORUS_FRUIT_TELEPORT;
	}
	public static get ITEM_CROP_PLANT(): Sound {
		return this.$javaClass.ITEM_CROP_PLANT;
	}
	public static get ITEM_CROSSBOW_HIT(): Sound {
		return this.$javaClass.ITEM_CROSSBOW_HIT;
	}
	public static get ITEM_CROSSBOW_LOADING_END(): Sound {
		return this.$javaClass.ITEM_CROSSBOW_LOADING_END;
	}
	public static get ITEM_CROSSBOW_LOADING_MIDDLE(): Sound {
		return this.$javaClass.ITEM_CROSSBOW_LOADING_MIDDLE;
	}
	public static get ITEM_CROSSBOW_LOADING_START(): Sound {
		return this.$javaClass.ITEM_CROSSBOW_LOADING_START;
	}
	public static get ITEM_CROSSBOW_QUICK_CHARGE_1(): Sound {
		return this.$javaClass.ITEM_CROSSBOW_QUICK_CHARGE_1;
	}
	public static get ITEM_CROSSBOW_QUICK_CHARGE_2(): Sound {
		return this.$javaClass.ITEM_CROSSBOW_QUICK_CHARGE_2;
	}
	public static get ITEM_CROSSBOW_QUICK_CHARGE_3(): Sound {
		return this.$javaClass.ITEM_CROSSBOW_QUICK_CHARGE_3;
	}
	public static get ITEM_CROSSBOW_SHOOT(): Sound {
		return this.$javaClass.ITEM_CROSSBOW_SHOOT;
	}
	public static get ITEM_ELYTRA_FLYING(): Sound {
		return this.$javaClass.ITEM_ELYTRA_FLYING;
	}
	public static get ITEM_FIRECHARGE_USE(): Sound {
		return this.$javaClass.ITEM_FIRECHARGE_USE;
	}
	public static get ITEM_FLINTANDSTEEL_USE(): Sound {
		return this.$javaClass.ITEM_FLINTANDSTEEL_USE;
	}
	public static get ITEM_HOE_TILL(): Sound {
		return this.$javaClass.ITEM_HOE_TILL;
	}
	public static get ITEM_HONEY_BOTTLE_DRINK(): Sound {
		return this.$javaClass.ITEM_HONEY_BOTTLE_DRINK;
	}
	public static get ITEM_NETHER_WART_PLANT(): Sound {
		return this.$javaClass.ITEM_NETHER_WART_PLANT;
	}
	public static get ITEM_SHIELD_BLOCK(): Sound {
		return this.$javaClass.ITEM_SHIELD_BLOCK;
	}
	public static get ITEM_SHIELD_BREAK(): Sound {
		return this.$javaClass.ITEM_SHIELD_BREAK;
	}
	public static get ITEM_SHOVEL_FLATTEN(): Sound {
		return this.$javaClass.ITEM_SHOVEL_FLATTEN;
	}
	public static get ITEM_SWEET_BERRIES_PICK_FROM_BUSH(): Sound {
		return this.$javaClass.ITEM_SWEET_BERRIES_PICK_FROM_BUSH;
	}
	public static get ITEM_TOTEM_USE(): Sound {
		return this.$javaClass.ITEM_TOTEM_USE;
	}
	public static get ITEM_TRIDENT_HIT(): Sound {
		return this.$javaClass.ITEM_TRIDENT_HIT;
	}
	public static get ITEM_TRIDENT_HIT_GROUND(): Sound {
		return this.$javaClass.ITEM_TRIDENT_HIT_GROUND;
	}
	public static get ITEM_TRIDENT_RETURN(): Sound {
		return this.$javaClass.ITEM_TRIDENT_RETURN;
	}
	public static get ITEM_TRIDENT_RIPTIDE_1(): Sound {
		return this.$javaClass.ITEM_TRIDENT_RIPTIDE_1;
	}
	public static get ITEM_TRIDENT_RIPTIDE_2(): Sound {
		return this.$javaClass.ITEM_TRIDENT_RIPTIDE_2;
	}
	public static get ITEM_TRIDENT_RIPTIDE_3(): Sound {
		return this.$javaClass.ITEM_TRIDENT_RIPTIDE_3;
	}
	public static get ITEM_TRIDENT_THROW(): Sound {
		return this.$javaClass.ITEM_TRIDENT_THROW;
	}
	public static get ITEM_TRIDENT_THUNDER(): Sound {
		return this.$javaClass.ITEM_TRIDENT_THUNDER;
	}
	public static get MUSIC_CREATIVE(): Sound {
		return this.$javaClass.MUSIC_CREATIVE;
	}
	public static get MUSIC_CREDITS(): Sound {
		return this.$javaClass.MUSIC_CREDITS;
	}
	public static get MUSIC_DISC_11(): Sound {
		return this.$javaClass.MUSIC_DISC_11;
	}
	public static get MUSIC_DISC_13(): Sound {
		return this.$javaClass.MUSIC_DISC_13;
	}
	public static get MUSIC_DISC_BLOCKS(): Sound {
		return this.$javaClass.MUSIC_DISC_BLOCKS;
	}
	public static get MUSIC_DISC_CAT(): Sound {
		return this.$javaClass.MUSIC_DISC_CAT;
	}
	public static get MUSIC_DISC_CHIRP(): Sound {
		return this.$javaClass.MUSIC_DISC_CHIRP;
	}
	public static get MUSIC_DISC_FAR(): Sound {
		return this.$javaClass.MUSIC_DISC_FAR;
	}
	public static get MUSIC_DISC_MALL(): Sound {
		return this.$javaClass.MUSIC_DISC_MALL;
	}
	public static get MUSIC_DISC_MELLOHI(): Sound {
		return this.$javaClass.MUSIC_DISC_MELLOHI;
	}
	public static get MUSIC_DISC_STAL(): Sound {
		return this.$javaClass.MUSIC_DISC_STAL;
	}
	public static get MUSIC_DISC_STRAD(): Sound {
		return this.$javaClass.MUSIC_DISC_STRAD;
	}
	public static get MUSIC_DISC_WAIT(): Sound {
		return this.$javaClass.MUSIC_DISC_WAIT;
	}
	public static get MUSIC_DISC_WARD(): Sound {
		return this.$javaClass.MUSIC_DISC_WARD;
	}
	public static get MUSIC_DRAGON(): Sound {
		return this.$javaClass.MUSIC_DRAGON;
	}
	public static get MUSIC_END(): Sound {
		return this.$javaClass.MUSIC_END;
	}
	public static get MUSIC_GAME(): Sound {
		return this.$javaClass.MUSIC_GAME;
	}
	public static get MUSIC_MENU(): Sound {
		return this.$javaClass.MUSIC_MENU;
	}
	public static get MUSIC_NETHER(): Sound {
		return this.$javaClass.MUSIC_NETHER;
	}
	public static get MUSIC_UNDER_WATER(): Sound {
		return this.$javaClass.MUSIC_UNDER_WATER;
	}
	public static get UI_BUTTON_CLICK(): Sound {
		return this.$javaClass.UI_BUTTON_CLICK;
	}
	public static get UI_CARTOGRAPHY_TABLE_TAKE_RESULT(): Sound {
		return this.$javaClass.UI_CARTOGRAPHY_TABLE_TAKE_RESULT;
	}
	public static get UI_LOOM_SELECT_PATTERN(): Sound {
		return this.$javaClass.UI_LOOM_SELECT_PATTERN;
	}
	public static get UI_LOOM_TAKE_RESULT(): Sound {
		return this.$javaClass.UI_LOOM_TAKE_RESULT;
	}
	public static get UI_STONECUTTER_SELECT_RECIPE(): Sound {
		return this.$javaClass.UI_STONECUTTER_SELECT_RECIPE;
	}
	public static get UI_STONECUTTER_TAKE_RESULT(): Sound {
		return this.$javaClass.UI_STONECUTTER_TAKE_RESULT;
	}
	public static get UI_TOAST_CHALLENGE_COMPLETE(): Sound {
		return this.$javaClass.UI_TOAST_CHALLENGE_COMPLETE;
	}
	public static get UI_TOAST_IN(): Sound {
		return this.$javaClass.UI_TOAST_IN;
	}
	public static get UI_TOAST_OUT(): Sound {
		return this.$javaClass.UI_TOAST_OUT;
	}
	public static get WEATHER_RAIN(): Sound {
		return this.$javaClass.WEATHER_RAIN;
	}
	public static get WEATHER_RAIN_ABOVE(): Sound {
		return this.$javaClass.WEATHER_RAIN_ABOVE;
	}
}

