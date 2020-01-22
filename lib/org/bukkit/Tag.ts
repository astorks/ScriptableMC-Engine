declare var Java: any;
import {Keyed} from '../../org/bukkit/Keyed.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'

export interface Tag extends Keyed {
	getValues(): any;
	isTagged(item: Keyed): boolean;
	getKey(): NamespacedKey;
}

export class Tag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Tag');
	}
	public static get REGISTRY_BLOCKS(): string {
		return Tag.$javaClass.REGISTRY_BLOCKS;
	}
	public static get WOOL(): Tag {
		return Tag.$javaClass.WOOL;
	}
	public static get PLANKS(): Tag {
		return Tag.$javaClass.PLANKS;
	}
	public static get STONE_BRICKS(): Tag {
		return Tag.$javaClass.STONE_BRICKS;
	}
	public static get WOODEN_BUTTONS(): Tag {
		return Tag.$javaClass.WOODEN_BUTTONS;
	}
	public static get BUTTONS(): Tag {
		return Tag.$javaClass.BUTTONS;
	}
	public static get CARPETS(): Tag {
		return Tag.$javaClass.CARPETS;
	}
	public static get WOODEN_DOORS(): Tag {
		return Tag.$javaClass.WOODEN_DOORS;
	}
	public static get WOODEN_STAIRS(): Tag {
		return Tag.$javaClass.WOODEN_STAIRS;
	}
	public static get WOODEN_SLABS(): Tag {
		return Tag.$javaClass.WOODEN_SLABS;
	}
	public static get WOODEN_FENCES(): Tag {
		return Tag.$javaClass.WOODEN_FENCES;
	}
	public static get WOODEN_PRESSURE_PLATES(): Tag {
		return Tag.$javaClass.WOODEN_PRESSURE_PLATES;
	}
	public static get WOODEN_TRAPDOORS(): Tag {
		return Tag.$javaClass.WOODEN_TRAPDOORS;
	}
	public static get DOORS(): Tag {
		return Tag.$javaClass.DOORS;
	}
	public static get SAPLINGS(): Tag {
		return Tag.$javaClass.SAPLINGS;
	}
	public static get LOGS(): Tag {
		return Tag.$javaClass.LOGS;
	}
	public static get DARK_OAK_LOGS(): Tag {
		return Tag.$javaClass.DARK_OAK_LOGS;
	}
	public static get OAK_LOGS(): Tag {
		return Tag.$javaClass.OAK_LOGS;
	}
	public static get BIRCH_LOGS(): Tag {
		return Tag.$javaClass.BIRCH_LOGS;
	}
	public static get ACACIA_LOGS(): Tag {
		return Tag.$javaClass.ACACIA_LOGS;
	}
	public static get JUNGLE_LOGS(): Tag {
		return Tag.$javaClass.JUNGLE_LOGS;
	}
	public static get SPRUCE_LOGS(): Tag {
		return Tag.$javaClass.SPRUCE_LOGS;
	}
	public static get BANNERS(): Tag {
		return Tag.$javaClass.BANNERS;
	}
	public static get SAND(): Tag {
		return Tag.$javaClass.SAND;
	}
	public static get STAIRS(): Tag {
		return Tag.$javaClass.STAIRS;
	}
	public static get SLABS(): Tag {
		return Tag.$javaClass.SLABS;
	}
	public static get WALLS(): Tag {
		return Tag.$javaClass.WALLS;
	}
	public static get ANVIL(): Tag {
		return Tag.$javaClass.ANVIL;
	}
	public static get RAILS(): Tag {
		return Tag.$javaClass.RAILS;
	}
	public static get LEAVES(): Tag {
		return Tag.$javaClass.LEAVES;
	}
	public static get TRAPDOORS(): Tag {
		return Tag.$javaClass.TRAPDOORS;
	}
	public static get FLOWER_POTS(): Tag {
		return Tag.$javaClass.FLOWER_POTS;
	}
	public static get SMALL_FLOWERS(): Tag {
		return Tag.$javaClass.SMALL_FLOWERS;
	}
	public static get BEDS(): Tag {
		return Tag.$javaClass.BEDS;
	}
	public static get FENCES(): Tag {
		return Tag.$javaClass.FENCES;
	}
	public static get TALL_FLOWERS(): Tag {
		return Tag.$javaClass.TALL_FLOWERS;
	}
	public static get FLOWERS(): Tag {
		return Tag.$javaClass.FLOWERS;
	}
	public static get SHULKER_BOXES(): Tag {
		return Tag.$javaClass.SHULKER_BOXES;
	}
	public static get ENDERMAN_HOLDABLE(): Tag {
		return Tag.$javaClass.ENDERMAN_HOLDABLE;
	}
	public static get ICE(): Tag {
		return Tag.$javaClass.ICE;
	}
	public static get VALID_SPAWN(): Tag {
		return Tag.$javaClass.VALID_SPAWN;
	}
	public static get IMPERMEABLE(): Tag {
		return Tag.$javaClass.IMPERMEABLE;
	}
	public static get UNDERWATER_BONEMEALS(): Tag {
		return Tag.$javaClass.UNDERWATER_BONEMEALS;
	}
	public static get CORAL_BLOCKS(): Tag {
		return Tag.$javaClass.CORAL_BLOCKS;
	}
	public static get WALL_CORALS(): Tag {
		return Tag.$javaClass.WALL_CORALS;
	}
	public static get CORAL_PLANTS(): Tag {
		return Tag.$javaClass.CORAL_PLANTS;
	}
	public static get CORALS(): Tag {
		return Tag.$javaClass.CORALS;
	}
	public static get BAMBOO_PLANTABLE_ON(): Tag {
		return Tag.$javaClass.BAMBOO_PLANTABLE_ON;
	}
	public static get STANDING_SIGNS(): Tag {
		return Tag.$javaClass.STANDING_SIGNS;
	}
	public static get WALL_SIGNS(): Tag {
		return Tag.$javaClass.WALL_SIGNS;
	}
	public static get SIGNS(): Tag {
		return Tag.$javaClass.SIGNS;
	}
	public static get DRAGON_IMMUNE(): Tag {
		return Tag.$javaClass.DRAGON_IMMUNE;
	}
	public static get WITHER_IMMUNE(): Tag {
		return Tag.$javaClass.WITHER_IMMUNE;
	}
	public static get BEEHIVES(): Tag {
		return Tag.$javaClass.BEEHIVES;
	}
	public static get CROPS(): Tag {
		return Tag.$javaClass.CROPS;
	}
	public static get BEE_GROWABLES(): Tag {
		return Tag.$javaClass.BEE_GROWABLES;
	}
	public static get PORTALS(): Tag {
		return Tag.$javaClass.PORTALS;
	}
	public static get REGISTRY_ITEMS(): string {
		return Tag.$javaClass.REGISTRY_ITEMS;
	}
	public static get ITEMS_BANNERS(): Tag {
		return Tag.$javaClass.ITEMS_BANNERS;
	}
	public static get ITEMS_BOATS(): Tag {
		return Tag.$javaClass.ITEMS_BOATS;
	}
	public static get ITEMS_FISHES(): Tag {
		return Tag.$javaClass.ITEMS_FISHES;
	}
	public static get ITEMS_MUSIC_DISCS(): Tag {
		return Tag.$javaClass.ITEMS_MUSIC_DISCS;
	}
	public static get ITEMS_COALS(): Tag {
		return Tag.$javaClass.ITEMS_COALS;
	}
	public static get ITEMS_ARROWS(): Tag {
		return Tag.$javaClass.ITEMS_ARROWS;
	}
	public static get ITEMS_LECTERN_BOOKS(): Tag {
		return Tag.$javaClass.ITEMS_LECTERN_BOOKS;
	}
}

