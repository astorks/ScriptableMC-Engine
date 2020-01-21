declare var Java: any;
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {Keyed} from '../../org/bukkit/Keyed.js'

export interface Material extends Keyed {
	getKey(): NamespacedKey;
	getId(): number;
	createBlockData(data: string): BlockData;
	createBlockData(consumer: any): BlockData;
	createBlockData(): BlockData;
	hasGravity(): boolean;
	getData(): any;
	isLegacy(): boolean;
	getNewData(raw: number): MaterialData;
	getMaxStackSize(): number;
	getMaxDurability(): number;
	isTransparent(): boolean;
	isItem(): boolean;
	getBlastResistance(): number;
	isRecord(): boolean;
	isEdible(): boolean;
	isFlammable(): boolean;
	isInteractable(): boolean;
	isBurnable(): boolean;
	isSolid(): boolean;
	isFuel(): boolean;
	isOccluding(): boolean;
	getHardness(): number;
	isBlock(): boolean;
	isAir(): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Material {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Material');
	}

	public static get ACACIA_BOAT(): Material {
		return this.$javaClass.ACACIA_BOAT;
	}
	public static get ACACIA_BUTTON(): Material {
		return this.$javaClass.ACACIA_BUTTON;
	}
	public static get ACACIA_DOOR(): Material {
		return this.$javaClass.ACACIA_DOOR;
	}
	public static get ACACIA_FENCE(): Material {
		return this.$javaClass.ACACIA_FENCE;
	}
	public static get ACACIA_FENCE_GATE(): Material {
		return this.$javaClass.ACACIA_FENCE_GATE;
	}
	public static get ACACIA_LEAVES(): Material {
		return this.$javaClass.ACACIA_LEAVES;
	}
	public static get ACACIA_LOG(): Material {
		return this.$javaClass.ACACIA_LOG;
	}
	public static get ACACIA_PLANKS(): Material {
		return this.$javaClass.ACACIA_PLANKS;
	}
	public static get ACACIA_PRESSURE_PLATE(): Material {
		return this.$javaClass.ACACIA_PRESSURE_PLATE;
	}
	public static get ACACIA_SAPLING(): Material {
		return this.$javaClass.ACACIA_SAPLING;
	}
	public static get ACACIA_SIGN(): Material {
		return this.$javaClass.ACACIA_SIGN;
	}
	public static get ACACIA_SLAB(): Material {
		return this.$javaClass.ACACIA_SLAB;
	}
	public static get ACACIA_STAIRS(): Material {
		return this.$javaClass.ACACIA_STAIRS;
	}
	public static get ACACIA_TRAPDOOR(): Material {
		return this.$javaClass.ACACIA_TRAPDOOR;
	}
	public static get ACACIA_WALL_SIGN(): Material {
		return this.$javaClass.ACACIA_WALL_SIGN;
	}
	public static get ACACIA_WOOD(): Material {
		return this.$javaClass.ACACIA_WOOD;
	}
	public static get ACTIVATOR_RAIL(): Material {
		return this.$javaClass.ACTIVATOR_RAIL;
	}
	public static get AIR(): Material {
		return this.$javaClass.AIR;
	}
	public static get ALLIUM(): Material {
		return this.$javaClass.ALLIUM;
	}
	public static get ANDESITE(): Material {
		return this.$javaClass.ANDESITE;
	}
	public static get ANDESITE_SLAB(): Material {
		return this.$javaClass.ANDESITE_SLAB;
	}
	public static get ANDESITE_STAIRS(): Material {
		return this.$javaClass.ANDESITE_STAIRS;
	}
	public static get ANDESITE_WALL(): Material {
		return this.$javaClass.ANDESITE_WALL;
	}
	public static get ANVIL(): Material {
		return this.$javaClass.ANVIL;
	}
	public static get APPLE(): Material {
		return this.$javaClass.APPLE;
	}
	public static get ARMOR_STAND(): Material {
		return this.$javaClass.ARMOR_STAND;
	}
	public static get ARROW(): Material {
		return this.$javaClass.ARROW;
	}
	public static get ATTACHED_MELON_STEM(): Material {
		return this.$javaClass.ATTACHED_MELON_STEM;
	}
	public static get ATTACHED_PUMPKIN_STEM(): Material {
		return this.$javaClass.ATTACHED_PUMPKIN_STEM;
	}
	public static get AZURE_BLUET(): Material {
		return this.$javaClass.AZURE_BLUET;
	}
	public static get BAKED_POTATO(): Material {
		return this.$javaClass.BAKED_POTATO;
	}
	public static get BAMBOO(): Material {
		return this.$javaClass.BAMBOO;
	}
	public static get BAMBOO_SAPLING(): Material {
		return this.$javaClass.BAMBOO_SAPLING;
	}
	public static get BARREL(): Material {
		return this.$javaClass.BARREL;
	}
	public static get BARRIER(): Material {
		return this.$javaClass.BARRIER;
	}
	public static get BAT_SPAWN_EGG(): Material {
		return this.$javaClass.BAT_SPAWN_EGG;
	}
	public static get BEACON(): Material {
		return this.$javaClass.BEACON;
	}
	public static get BEDROCK(): Material {
		return this.$javaClass.BEDROCK;
	}
	public static get BEEF(): Material {
		return this.$javaClass.BEEF;
	}
	public static get BEEHIVE(): Material {
		return this.$javaClass.BEEHIVE;
	}
	public static get BEETROOT(): Material {
		return this.$javaClass.BEETROOT;
	}
	public static get BEETROOTS(): Material {
		return this.$javaClass.BEETROOTS;
	}
	public static get BEETROOT_SEEDS(): Material {
		return this.$javaClass.BEETROOT_SEEDS;
	}
	public static get BEETROOT_SOUP(): Material {
		return this.$javaClass.BEETROOT_SOUP;
	}
	public static get BEE_NEST(): Material {
		return this.$javaClass.BEE_NEST;
	}
	public static get BEE_SPAWN_EGG(): Material {
		return this.$javaClass.BEE_SPAWN_EGG;
	}
	public static get BELL(): Material {
		return this.$javaClass.BELL;
	}
	public static get BIRCH_BOAT(): Material {
		return this.$javaClass.BIRCH_BOAT;
	}
	public static get BIRCH_BUTTON(): Material {
		return this.$javaClass.BIRCH_BUTTON;
	}
	public static get BIRCH_DOOR(): Material {
		return this.$javaClass.BIRCH_DOOR;
	}
	public static get BIRCH_FENCE(): Material {
		return this.$javaClass.BIRCH_FENCE;
	}
	public static get BIRCH_FENCE_GATE(): Material {
		return this.$javaClass.BIRCH_FENCE_GATE;
	}
	public static get BIRCH_LEAVES(): Material {
		return this.$javaClass.BIRCH_LEAVES;
	}
	public static get BIRCH_LOG(): Material {
		return this.$javaClass.BIRCH_LOG;
	}
	public static get BIRCH_PLANKS(): Material {
		return this.$javaClass.BIRCH_PLANKS;
	}
	public static get BIRCH_PRESSURE_PLATE(): Material {
		return this.$javaClass.BIRCH_PRESSURE_PLATE;
	}
	public static get BIRCH_SAPLING(): Material {
		return this.$javaClass.BIRCH_SAPLING;
	}
	public static get BIRCH_SIGN(): Material {
		return this.$javaClass.BIRCH_SIGN;
	}
	public static get BIRCH_SLAB(): Material {
		return this.$javaClass.BIRCH_SLAB;
	}
	public static get BIRCH_STAIRS(): Material {
		return this.$javaClass.BIRCH_STAIRS;
	}
	public static get BIRCH_TRAPDOOR(): Material {
		return this.$javaClass.BIRCH_TRAPDOOR;
	}
	public static get BIRCH_WALL_SIGN(): Material {
		return this.$javaClass.BIRCH_WALL_SIGN;
	}
	public static get BIRCH_WOOD(): Material {
		return this.$javaClass.BIRCH_WOOD;
	}
	public static get BLACK_BANNER(): Material {
		return this.$javaClass.BLACK_BANNER;
	}
	public static get BLACK_BED(): Material {
		return this.$javaClass.BLACK_BED;
	}
	public static get BLACK_CARPET(): Material {
		return this.$javaClass.BLACK_CARPET;
	}
	public static get BLACK_CONCRETE(): Material {
		return this.$javaClass.BLACK_CONCRETE;
	}
	public static get BLACK_CONCRETE_POWDER(): Material {
		return this.$javaClass.BLACK_CONCRETE_POWDER;
	}
	public static get BLACK_DYE(): Material {
		return this.$javaClass.BLACK_DYE;
	}
	public static get BLACK_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.BLACK_GLAZED_TERRACOTTA;
	}
	public static get BLACK_SHULKER_BOX(): Material {
		return this.$javaClass.BLACK_SHULKER_BOX;
	}
	public static get BLACK_STAINED_GLASS(): Material {
		return this.$javaClass.BLACK_STAINED_GLASS;
	}
	public static get BLACK_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.BLACK_STAINED_GLASS_PANE;
	}
	public static get BLACK_TERRACOTTA(): Material {
		return this.$javaClass.BLACK_TERRACOTTA;
	}
	public static get BLACK_WALL_BANNER(): Material {
		return this.$javaClass.BLACK_WALL_BANNER;
	}
	public static get BLACK_WOOL(): Material {
		return this.$javaClass.BLACK_WOOL;
	}
	public static get BLAST_FURNACE(): Material {
		return this.$javaClass.BLAST_FURNACE;
	}
	public static get BLAZE_POWDER(): Material {
		return this.$javaClass.BLAZE_POWDER;
	}
	public static get BLAZE_ROD(): Material {
		return this.$javaClass.BLAZE_ROD;
	}
	public static get BLAZE_SPAWN_EGG(): Material {
		return this.$javaClass.BLAZE_SPAWN_EGG;
	}
	public static get BLUE_BANNER(): Material {
		return this.$javaClass.BLUE_BANNER;
	}
	public static get BLUE_BED(): Material {
		return this.$javaClass.BLUE_BED;
	}
	public static get BLUE_CARPET(): Material {
		return this.$javaClass.BLUE_CARPET;
	}
	public static get BLUE_CONCRETE(): Material {
		return this.$javaClass.BLUE_CONCRETE;
	}
	public static get BLUE_CONCRETE_POWDER(): Material {
		return this.$javaClass.BLUE_CONCRETE_POWDER;
	}
	public static get BLUE_DYE(): Material {
		return this.$javaClass.BLUE_DYE;
	}
	public static get BLUE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.BLUE_GLAZED_TERRACOTTA;
	}
	public static get BLUE_ICE(): Material {
		return this.$javaClass.BLUE_ICE;
	}
	public static get BLUE_ORCHID(): Material {
		return this.$javaClass.BLUE_ORCHID;
	}
	public static get BLUE_SHULKER_BOX(): Material {
		return this.$javaClass.BLUE_SHULKER_BOX;
	}
	public static get BLUE_STAINED_GLASS(): Material {
		return this.$javaClass.BLUE_STAINED_GLASS;
	}
	public static get BLUE_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.BLUE_STAINED_GLASS_PANE;
	}
	public static get BLUE_TERRACOTTA(): Material {
		return this.$javaClass.BLUE_TERRACOTTA;
	}
	public static get BLUE_WALL_BANNER(): Material {
		return this.$javaClass.BLUE_WALL_BANNER;
	}
	public static get BLUE_WOOL(): Material {
		return this.$javaClass.BLUE_WOOL;
	}
	public static get BONE(): Material {
		return this.$javaClass.BONE;
	}
	public static get BONE_BLOCK(): Material {
		return this.$javaClass.BONE_BLOCK;
	}
	public static get BONE_MEAL(): Material {
		return this.$javaClass.BONE_MEAL;
	}
	public static get BOOK(): Material {
		return this.$javaClass.BOOK;
	}
	public static get BOOKSHELF(): Material {
		return this.$javaClass.BOOKSHELF;
	}
	public static get BOW(): Material {
		return this.$javaClass.BOW;
	}
	public static get BOWL(): Material {
		return this.$javaClass.BOWL;
	}
	public static get BRAIN_CORAL(): Material {
		return this.$javaClass.BRAIN_CORAL;
	}
	public static get BRAIN_CORAL_BLOCK(): Material {
		return this.$javaClass.BRAIN_CORAL_BLOCK;
	}
	public static get BRAIN_CORAL_FAN(): Material {
		return this.$javaClass.BRAIN_CORAL_FAN;
	}
	public static get BRAIN_CORAL_WALL_FAN(): Material {
		return this.$javaClass.BRAIN_CORAL_WALL_FAN;
	}
	public static get BREAD(): Material {
		return this.$javaClass.BREAD;
	}
	public static get BREWING_STAND(): Material {
		return this.$javaClass.BREWING_STAND;
	}
	public static get BRICK(): Material {
		return this.$javaClass.BRICK;
	}
	public static get BRICKS(): Material {
		return this.$javaClass.BRICKS;
	}
	public static get BRICK_SLAB(): Material {
		return this.$javaClass.BRICK_SLAB;
	}
	public static get BRICK_STAIRS(): Material {
		return this.$javaClass.BRICK_STAIRS;
	}
	public static get BRICK_WALL(): Material {
		return this.$javaClass.BRICK_WALL;
	}
	public static get BROWN_BANNER(): Material {
		return this.$javaClass.BROWN_BANNER;
	}
	public static get BROWN_BED(): Material {
		return this.$javaClass.BROWN_BED;
	}
	public static get BROWN_CARPET(): Material {
		return this.$javaClass.BROWN_CARPET;
	}
	public static get BROWN_CONCRETE(): Material {
		return this.$javaClass.BROWN_CONCRETE;
	}
	public static get BROWN_CONCRETE_POWDER(): Material {
		return this.$javaClass.BROWN_CONCRETE_POWDER;
	}
	public static get BROWN_DYE(): Material {
		return this.$javaClass.BROWN_DYE;
	}
	public static get BROWN_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.BROWN_GLAZED_TERRACOTTA;
	}
	public static get BROWN_MUSHROOM(): Material {
		return this.$javaClass.BROWN_MUSHROOM;
	}
	public static get BROWN_MUSHROOM_BLOCK(): Material {
		return this.$javaClass.BROWN_MUSHROOM_BLOCK;
	}
	public static get BROWN_SHULKER_BOX(): Material {
		return this.$javaClass.BROWN_SHULKER_BOX;
	}
	public static get BROWN_STAINED_GLASS(): Material {
		return this.$javaClass.BROWN_STAINED_GLASS;
	}
	public static get BROWN_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.BROWN_STAINED_GLASS_PANE;
	}
	public static get BROWN_TERRACOTTA(): Material {
		return this.$javaClass.BROWN_TERRACOTTA;
	}
	public static get BROWN_WALL_BANNER(): Material {
		return this.$javaClass.BROWN_WALL_BANNER;
	}
	public static get BROWN_WOOL(): Material {
		return this.$javaClass.BROWN_WOOL;
	}
	public static get BUBBLE_COLUMN(): Material {
		return this.$javaClass.BUBBLE_COLUMN;
	}
	public static get BUBBLE_CORAL(): Material {
		return this.$javaClass.BUBBLE_CORAL;
	}
	public static get BUBBLE_CORAL_BLOCK(): Material {
		return this.$javaClass.BUBBLE_CORAL_BLOCK;
	}
	public static get BUBBLE_CORAL_FAN(): Material {
		return this.$javaClass.BUBBLE_CORAL_FAN;
	}
	public static get BUBBLE_CORAL_WALL_FAN(): Material {
		return this.$javaClass.BUBBLE_CORAL_WALL_FAN;
	}
	public static get BUCKET(): Material {
		return this.$javaClass.BUCKET;
	}
	public static get CACTUS(): Material {
		return this.$javaClass.CACTUS;
	}
	public static get CAKE(): Material {
		return this.$javaClass.CAKE;
	}
	public static get CAMPFIRE(): Material {
		return this.$javaClass.CAMPFIRE;
	}
	public static get CARROT(): Material {
		return this.$javaClass.CARROT;
	}
	public static get CARROTS(): Material {
		return this.$javaClass.CARROTS;
	}
	public static get CARROT_ON_A_STICK(): Material {
		return this.$javaClass.CARROT_ON_A_STICK;
	}
	public static get CARTOGRAPHY_TABLE(): Material {
		return this.$javaClass.CARTOGRAPHY_TABLE;
	}
	public static get CARVED_PUMPKIN(): Material {
		return this.$javaClass.CARVED_PUMPKIN;
	}
	public static get CAT_SPAWN_EGG(): Material {
		return this.$javaClass.CAT_SPAWN_EGG;
	}
	public static get CAULDRON(): Material {
		return this.$javaClass.CAULDRON;
	}
	public static get CAVE_AIR(): Material {
		return this.$javaClass.CAVE_AIR;
	}
	public static get CAVE_SPIDER_SPAWN_EGG(): Material {
		return this.$javaClass.CAVE_SPIDER_SPAWN_EGG;
	}
	public static get CHAINMAIL_BOOTS(): Material {
		return this.$javaClass.CHAINMAIL_BOOTS;
	}
	public static get CHAINMAIL_CHESTPLATE(): Material {
		return this.$javaClass.CHAINMAIL_CHESTPLATE;
	}
	public static get CHAINMAIL_HELMET(): Material {
		return this.$javaClass.CHAINMAIL_HELMET;
	}
	public static get CHAINMAIL_LEGGINGS(): Material {
		return this.$javaClass.CHAINMAIL_LEGGINGS;
	}
	public static get CHAIN_COMMAND_BLOCK(): Material {
		return this.$javaClass.CHAIN_COMMAND_BLOCK;
	}
	public static get CHARCOAL(): Material {
		return this.$javaClass.CHARCOAL;
	}
	public static get CHEST(): Material {
		return this.$javaClass.CHEST;
	}
	public static get CHEST_MINECART(): Material {
		return this.$javaClass.CHEST_MINECART;
	}
	public static get CHICKEN(): Material {
		return this.$javaClass.CHICKEN;
	}
	public static get CHICKEN_SPAWN_EGG(): Material {
		return this.$javaClass.CHICKEN_SPAWN_EGG;
	}
	public static get CHIPPED_ANVIL(): Material {
		return this.$javaClass.CHIPPED_ANVIL;
	}
	public static get CHISELED_QUARTZ_BLOCK(): Material {
		return this.$javaClass.CHISELED_QUARTZ_BLOCK;
	}
	public static get CHISELED_RED_SANDSTONE(): Material {
		return this.$javaClass.CHISELED_RED_SANDSTONE;
	}
	public static get CHISELED_SANDSTONE(): Material {
		return this.$javaClass.CHISELED_SANDSTONE;
	}
	public static get CHISELED_STONE_BRICKS(): Material {
		return this.$javaClass.CHISELED_STONE_BRICKS;
	}
	public static get CHORUS_FLOWER(): Material {
		return this.$javaClass.CHORUS_FLOWER;
	}
	public static get CHORUS_FRUIT(): Material {
		return this.$javaClass.CHORUS_FRUIT;
	}
	public static get CHORUS_PLANT(): Material {
		return this.$javaClass.CHORUS_PLANT;
	}
	public static get CLAY(): Material {
		return this.$javaClass.CLAY;
	}
	public static get CLAY_BALL(): Material {
		return this.$javaClass.CLAY_BALL;
	}
	public static get CLOCK(): Material {
		return this.$javaClass.CLOCK;
	}
	public static get COAL(): Material {
		return this.$javaClass.COAL;
	}
	public static get COAL_BLOCK(): Material {
		return this.$javaClass.COAL_BLOCK;
	}
	public static get COAL_ORE(): Material {
		return this.$javaClass.COAL_ORE;
	}
	public static get COARSE_DIRT(): Material {
		return this.$javaClass.COARSE_DIRT;
	}
	public static get COBBLESTONE(): Material {
		return this.$javaClass.COBBLESTONE;
	}
	public static get COBBLESTONE_SLAB(): Material {
		return this.$javaClass.COBBLESTONE_SLAB;
	}
	public static get COBBLESTONE_STAIRS(): Material {
		return this.$javaClass.COBBLESTONE_STAIRS;
	}
	public static get COBBLESTONE_WALL(): Material {
		return this.$javaClass.COBBLESTONE_WALL;
	}
	public static get COBWEB(): Material {
		return this.$javaClass.COBWEB;
	}
	public static get COCOA(): Material {
		return this.$javaClass.COCOA;
	}
	public static get COCOA_BEANS(): Material {
		return this.$javaClass.COCOA_BEANS;
	}
	public static get COD(): Material {
		return this.$javaClass.COD;
	}
	public static get COD_BUCKET(): Material {
		return this.$javaClass.COD_BUCKET;
	}
	public static get COD_SPAWN_EGG(): Material {
		return this.$javaClass.COD_SPAWN_EGG;
	}
	public static get COMMAND_BLOCK(): Material {
		return this.$javaClass.COMMAND_BLOCK;
	}
	public static get COMMAND_BLOCK_MINECART(): Material {
		return this.$javaClass.COMMAND_BLOCK_MINECART;
	}
	public static get COMPARATOR(): Material {
		return this.$javaClass.COMPARATOR;
	}
	public static get COMPASS(): Material {
		return this.$javaClass.COMPASS;
	}
	public static get COMPOSTER(): Material {
		return this.$javaClass.COMPOSTER;
	}
	public static get CONDUIT(): Material {
		return this.$javaClass.CONDUIT;
	}
	public static get COOKED_BEEF(): Material {
		return this.$javaClass.COOKED_BEEF;
	}
	public static get COOKED_CHICKEN(): Material {
		return this.$javaClass.COOKED_CHICKEN;
	}
	public static get COOKED_COD(): Material {
		return this.$javaClass.COOKED_COD;
	}
	public static get COOKED_MUTTON(): Material {
		return this.$javaClass.COOKED_MUTTON;
	}
	public static get COOKED_PORKCHOP(): Material {
		return this.$javaClass.COOKED_PORKCHOP;
	}
	public static get COOKED_RABBIT(): Material {
		return this.$javaClass.COOKED_RABBIT;
	}
	public static get COOKED_SALMON(): Material {
		return this.$javaClass.COOKED_SALMON;
	}
	public static get COOKIE(): Material {
		return this.$javaClass.COOKIE;
	}
	public static get CORNFLOWER(): Material {
		return this.$javaClass.CORNFLOWER;
	}
	public static get COW_SPAWN_EGG(): Material {
		return this.$javaClass.COW_SPAWN_EGG;
	}
	public static get CRACKED_STONE_BRICKS(): Material {
		return this.$javaClass.CRACKED_STONE_BRICKS;
	}
	public static get CRAFTING_TABLE(): Material {
		return this.$javaClass.CRAFTING_TABLE;
	}
	public static get CREEPER_BANNER_PATTERN(): Material {
		return this.$javaClass.CREEPER_BANNER_PATTERN;
	}
	public static get CREEPER_HEAD(): Material {
		return this.$javaClass.CREEPER_HEAD;
	}
	public static get CREEPER_SPAWN_EGG(): Material {
		return this.$javaClass.CREEPER_SPAWN_EGG;
	}
	public static get CREEPER_WALL_HEAD(): Material {
		return this.$javaClass.CREEPER_WALL_HEAD;
	}
	public static get CROSSBOW(): Material {
		return this.$javaClass.CROSSBOW;
	}
	public static get CUT_RED_SANDSTONE(): Material {
		return this.$javaClass.CUT_RED_SANDSTONE;
	}
	public static get CUT_RED_SANDSTONE_SLAB(): Material {
		return this.$javaClass.CUT_RED_SANDSTONE_SLAB;
	}
	public static get CUT_SANDSTONE(): Material {
		return this.$javaClass.CUT_SANDSTONE;
	}
	public static get CUT_SANDSTONE_SLAB(): Material {
		return this.$javaClass.CUT_SANDSTONE_SLAB;
	}
	public static get CYAN_BANNER(): Material {
		return this.$javaClass.CYAN_BANNER;
	}
	public static get CYAN_BED(): Material {
		return this.$javaClass.CYAN_BED;
	}
	public static get CYAN_CARPET(): Material {
		return this.$javaClass.CYAN_CARPET;
	}
	public static get CYAN_CONCRETE(): Material {
		return this.$javaClass.CYAN_CONCRETE;
	}
	public static get CYAN_CONCRETE_POWDER(): Material {
		return this.$javaClass.CYAN_CONCRETE_POWDER;
	}
	public static get CYAN_DYE(): Material {
		return this.$javaClass.CYAN_DYE;
	}
	public static get CYAN_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.CYAN_GLAZED_TERRACOTTA;
	}
	public static get CYAN_SHULKER_BOX(): Material {
		return this.$javaClass.CYAN_SHULKER_BOX;
	}
	public static get CYAN_STAINED_GLASS(): Material {
		return this.$javaClass.CYAN_STAINED_GLASS;
	}
	public static get CYAN_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.CYAN_STAINED_GLASS_PANE;
	}
	public static get CYAN_TERRACOTTA(): Material {
		return this.$javaClass.CYAN_TERRACOTTA;
	}
	public static get CYAN_WALL_BANNER(): Material {
		return this.$javaClass.CYAN_WALL_BANNER;
	}
	public static get CYAN_WOOL(): Material {
		return this.$javaClass.CYAN_WOOL;
	}
	public static get DAMAGED_ANVIL(): Material {
		return this.$javaClass.DAMAGED_ANVIL;
	}
	public static get DANDELION(): Material {
		return this.$javaClass.DANDELION;
	}
	public static get DARK_OAK_BOAT(): Material {
		return this.$javaClass.DARK_OAK_BOAT;
	}
	public static get DARK_OAK_BUTTON(): Material {
		return this.$javaClass.DARK_OAK_BUTTON;
	}
	public static get DARK_OAK_DOOR(): Material {
		return this.$javaClass.DARK_OAK_DOOR;
	}
	public static get DARK_OAK_FENCE(): Material {
		return this.$javaClass.DARK_OAK_FENCE;
	}
	public static get DARK_OAK_FENCE_GATE(): Material {
		return this.$javaClass.DARK_OAK_FENCE_GATE;
	}
	public static get DARK_OAK_LEAVES(): Material {
		return this.$javaClass.DARK_OAK_LEAVES;
	}
	public static get DARK_OAK_LOG(): Material {
		return this.$javaClass.DARK_OAK_LOG;
	}
	public static get DARK_OAK_PLANKS(): Material {
		return this.$javaClass.DARK_OAK_PLANKS;
	}
	public static get DARK_OAK_PRESSURE_PLATE(): Material {
		return this.$javaClass.DARK_OAK_PRESSURE_PLATE;
	}
	public static get DARK_OAK_SAPLING(): Material {
		return this.$javaClass.DARK_OAK_SAPLING;
	}
	public static get DARK_OAK_SIGN(): Material {
		return this.$javaClass.DARK_OAK_SIGN;
	}
	public static get DARK_OAK_SLAB(): Material {
		return this.$javaClass.DARK_OAK_SLAB;
	}
	public static get DARK_OAK_STAIRS(): Material {
		return this.$javaClass.DARK_OAK_STAIRS;
	}
	public static get DARK_OAK_TRAPDOOR(): Material {
		return this.$javaClass.DARK_OAK_TRAPDOOR;
	}
	public static get DARK_OAK_WALL_SIGN(): Material {
		return this.$javaClass.DARK_OAK_WALL_SIGN;
	}
	public static get DARK_OAK_WOOD(): Material {
		return this.$javaClass.DARK_OAK_WOOD;
	}
	public static get DARK_PRISMARINE(): Material {
		return this.$javaClass.DARK_PRISMARINE;
	}
	public static get DARK_PRISMARINE_SLAB(): Material {
		return this.$javaClass.DARK_PRISMARINE_SLAB;
	}
	public static get DARK_PRISMARINE_STAIRS(): Material {
		return this.$javaClass.DARK_PRISMARINE_STAIRS;
	}
	public static get DAYLIGHT_DETECTOR(): Material {
		return this.$javaClass.DAYLIGHT_DETECTOR;
	}
	public static get DEAD_BRAIN_CORAL(): Material {
		return this.$javaClass.DEAD_BRAIN_CORAL;
	}
	public static get DEAD_BRAIN_CORAL_BLOCK(): Material {
		return this.$javaClass.DEAD_BRAIN_CORAL_BLOCK;
	}
	public static get DEAD_BRAIN_CORAL_FAN(): Material {
		return this.$javaClass.DEAD_BRAIN_CORAL_FAN;
	}
	public static get DEAD_BRAIN_CORAL_WALL_FAN(): Material {
		return this.$javaClass.DEAD_BRAIN_CORAL_WALL_FAN;
	}
	public static get DEAD_BUBBLE_CORAL(): Material {
		return this.$javaClass.DEAD_BUBBLE_CORAL;
	}
	public static get DEAD_BUBBLE_CORAL_BLOCK(): Material {
		return this.$javaClass.DEAD_BUBBLE_CORAL_BLOCK;
	}
	public static get DEAD_BUBBLE_CORAL_FAN(): Material {
		return this.$javaClass.DEAD_BUBBLE_CORAL_FAN;
	}
	public static get DEAD_BUBBLE_CORAL_WALL_FAN(): Material {
		return this.$javaClass.DEAD_BUBBLE_CORAL_WALL_FAN;
	}
	public static get DEAD_BUSH(): Material {
		return this.$javaClass.DEAD_BUSH;
	}
	public static get DEAD_FIRE_CORAL(): Material {
		return this.$javaClass.DEAD_FIRE_CORAL;
	}
	public static get DEAD_FIRE_CORAL_BLOCK(): Material {
		return this.$javaClass.DEAD_FIRE_CORAL_BLOCK;
	}
	public static get DEAD_FIRE_CORAL_FAN(): Material {
		return this.$javaClass.DEAD_FIRE_CORAL_FAN;
	}
	public static get DEAD_FIRE_CORAL_WALL_FAN(): Material {
		return this.$javaClass.DEAD_FIRE_CORAL_WALL_FAN;
	}
	public static get DEAD_HORN_CORAL(): Material {
		return this.$javaClass.DEAD_HORN_CORAL;
	}
	public static get DEAD_HORN_CORAL_BLOCK(): Material {
		return this.$javaClass.DEAD_HORN_CORAL_BLOCK;
	}
	public static get DEAD_HORN_CORAL_FAN(): Material {
		return this.$javaClass.DEAD_HORN_CORAL_FAN;
	}
	public static get DEAD_HORN_CORAL_WALL_FAN(): Material {
		return this.$javaClass.DEAD_HORN_CORAL_WALL_FAN;
	}
	public static get DEAD_TUBE_CORAL(): Material {
		return this.$javaClass.DEAD_TUBE_CORAL;
	}
	public static get DEAD_TUBE_CORAL_BLOCK(): Material {
		return this.$javaClass.DEAD_TUBE_CORAL_BLOCK;
	}
	public static get DEAD_TUBE_CORAL_FAN(): Material {
		return this.$javaClass.DEAD_TUBE_CORAL_FAN;
	}
	public static get DEAD_TUBE_CORAL_WALL_FAN(): Material {
		return this.$javaClass.DEAD_TUBE_CORAL_WALL_FAN;
	}
	public static get DEBUG_STICK(): Material {
		return this.$javaClass.DEBUG_STICK;
	}
	public static get DETECTOR_RAIL(): Material {
		return this.$javaClass.DETECTOR_RAIL;
	}
	public static get DIAMOND(): Material {
		return this.$javaClass.DIAMOND;
	}
	public static get DIAMOND_AXE(): Material {
		return this.$javaClass.DIAMOND_AXE;
	}
	public static get DIAMOND_BLOCK(): Material {
		return this.$javaClass.DIAMOND_BLOCK;
	}
	public static get DIAMOND_BOOTS(): Material {
		return this.$javaClass.DIAMOND_BOOTS;
	}
	public static get DIAMOND_CHESTPLATE(): Material {
		return this.$javaClass.DIAMOND_CHESTPLATE;
	}
	public static get DIAMOND_HELMET(): Material {
		return this.$javaClass.DIAMOND_HELMET;
	}
	public static get DIAMOND_HOE(): Material {
		return this.$javaClass.DIAMOND_HOE;
	}
	public static get DIAMOND_HORSE_ARMOR(): Material {
		return this.$javaClass.DIAMOND_HORSE_ARMOR;
	}
	public static get DIAMOND_LEGGINGS(): Material {
		return this.$javaClass.DIAMOND_LEGGINGS;
	}
	public static get DIAMOND_ORE(): Material {
		return this.$javaClass.DIAMOND_ORE;
	}
	public static get DIAMOND_PICKAXE(): Material {
		return this.$javaClass.DIAMOND_PICKAXE;
	}
	public static get DIAMOND_SHOVEL(): Material {
		return this.$javaClass.DIAMOND_SHOVEL;
	}
	public static get DIAMOND_SWORD(): Material {
		return this.$javaClass.DIAMOND_SWORD;
	}
	public static get DIORITE(): Material {
		return this.$javaClass.DIORITE;
	}
	public static get DIORITE_SLAB(): Material {
		return this.$javaClass.DIORITE_SLAB;
	}
	public static get DIORITE_STAIRS(): Material {
		return this.$javaClass.DIORITE_STAIRS;
	}
	public static get DIORITE_WALL(): Material {
		return this.$javaClass.DIORITE_WALL;
	}
	public static get DIRT(): Material {
		return this.$javaClass.DIRT;
	}
	public static get DISPENSER(): Material {
		return this.$javaClass.DISPENSER;
	}
	public static get DOLPHIN_SPAWN_EGG(): Material {
		return this.$javaClass.DOLPHIN_SPAWN_EGG;
	}
	public static get DONKEY_SPAWN_EGG(): Material {
		return this.$javaClass.DONKEY_SPAWN_EGG;
	}
	public static get DRAGON_BREATH(): Material {
		return this.$javaClass.DRAGON_BREATH;
	}
	public static get DRAGON_EGG(): Material {
		return this.$javaClass.DRAGON_EGG;
	}
	public static get DRAGON_HEAD(): Material {
		return this.$javaClass.DRAGON_HEAD;
	}
	public static get DRAGON_WALL_HEAD(): Material {
		return this.$javaClass.DRAGON_WALL_HEAD;
	}
	public static get DRIED_KELP(): Material {
		return this.$javaClass.DRIED_KELP;
	}
	public static get DRIED_KELP_BLOCK(): Material {
		return this.$javaClass.DRIED_KELP_BLOCK;
	}
	public static get DROPPER(): Material {
		return this.$javaClass.DROPPER;
	}
	public static get DROWNED_SPAWN_EGG(): Material {
		return this.$javaClass.DROWNED_SPAWN_EGG;
	}
	public static get EGG(): Material {
		return this.$javaClass.EGG;
	}
	public static get ELDER_GUARDIAN_SPAWN_EGG(): Material {
		return this.$javaClass.ELDER_GUARDIAN_SPAWN_EGG;
	}
	public static get ELYTRA(): Material {
		return this.$javaClass.ELYTRA;
	}
	public static get EMERALD(): Material {
		return this.$javaClass.EMERALD;
	}
	public static get EMERALD_BLOCK(): Material {
		return this.$javaClass.EMERALD_BLOCK;
	}
	public static get EMERALD_ORE(): Material {
		return this.$javaClass.EMERALD_ORE;
	}
	public static get ENCHANTED_BOOK(): Material {
		return this.$javaClass.ENCHANTED_BOOK;
	}
	public static get ENCHANTED_GOLDEN_APPLE(): Material {
		return this.$javaClass.ENCHANTED_GOLDEN_APPLE;
	}
	public static get ENCHANTING_TABLE(): Material {
		return this.$javaClass.ENCHANTING_TABLE;
	}
	public static get ENDERMAN_SPAWN_EGG(): Material {
		return this.$javaClass.ENDERMAN_SPAWN_EGG;
	}
	public static get ENDERMITE_SPAWN_EGG(): Material {
		return this.$javaClass.ENDERMITE_SPAWN_EGG;
	}
	public static get ENDER_CHEST(): Material {
		return this.$javaClass.ENDER_CHEST;
	}
	public static get ENDER_EYE(): Material {
		return this.$javaClass.ENDER_EYE;
	}
	public static get ENDER_PEARL(): Material {
		return this.$javaClass.ENDER_PEARL;
	}
	public static get END_CRYSTAL(): Material {
		return this.$javaClass.END_CRYSTAL;
	}
	public static get END_GATEWAY(): Material {
		return this.$javaClass.END_GATEWAY;
	}
	public static get END_PORTAL(): Material {
		return this.$javaClass.END_PORTAL;
	}
	public static get END_PORTAL_FRAME(): Material {
		return this.$javaClass.END_PORTAL_FRAME;
	}
	public static get END_ROD(): Material {
		return this.$javaClass.END_ROD;
	}
	public static get END_STONE(): Material {
		return this.$javaClass.END_STONE;
	}
	public static get END_STONE_BRICKS(): Material {
		return this.$javaClass.END_STONE_BRICKS;
	}
	public static get END_STONE_BRICK_SLAB(): Material {
		return this.$javaClass.END_STONE_BRICK_SLAB;
	}
	public static get END_STONE_BRICK_STAIRS(): Material {
		return this.$javaClass.END_STONE_BRICK_STAIRS;
	}
	public static get END_STONE_BRICK_WALL(): Material {
		return this.$javaClass.END_STONE_BRICK_WALL;
	}
	public static get EVOKER_SPAWN_EGG(): Material {
		return this.$javaClass.EVOKER_SPAWN_EGG;
	}
	public static get EXPERIENCE_BOTTLE(): Material {
		return this.$javaClass.EXPERIENCE_BOTTLE;
	}
	public static get FARMLAND(): Material {
		return this.$javaClass.FARMLAND;
	}
	public static get FEATHER(): Material {
		return this.$javaClass.FEATHER;
	}
	public static get FERMENTED_SPIDER_EYE(): Material {
		return this.$javaClass.FERMENTED_SPIDER_EYE;
	}
	public static get FERN(): Material {
		return this.$javaClass.FERN;
	}
	public static get FILLED_MAP(): Material {
		return this.$javaClass.FILLED_MAP;
	}
	public static get FIRE(): Material {
		return this.$javaClass.FIRE;
	}
	public static get FIREWORK_ROCKET(): Material {
		return this.$javaClass.FIREWORK_ROCKET;
	}
	public static get FIREWORK_STAR(): Material {
		return this.$javaClass.FIREWORK_STAR;
	}
	public static get FIRE_CHARGE(): Material {
		return this.$javaClass.FIRE_CHARGE;
	}
	public static get FIRE_CORAL(): Material {
		return this.$javaClass.FIRE_CORAL;
	}
	public static get FIRE_CORAL_BLOCK(): Material {
		return this.$javaClass.FIRE_CORAL_BLOCK;
	}
	public static get FIRE_CORAL_FAN(): Material {
		return this.$javaClass.FIRE_CORAL_FAN;
	}
	public static get FIRE_CORAL_WALL_FAN(): Material {
		return this.$javaClass.FIRE_CORAL_WALL_FAN;
	}
	public static get FISHING_ROD(): Material {
		return this.$javaClass.FISHING_ROD;
	}
	public static get FLETCHING_TABLE(): Material {
		return this.$javaClass.FLETCHING_TABLE;
	}
	public static get FLINT(): Material {
		return this.$javaClass.FLINT;
	}
	public static get FLINT_AND_STEEL(): Material {
		return this.$javaClass.FLINT_AND_STEEL;
	}
	public static get FLOWER_BANNER_PATTERN(): Material {
		return this.$javaClass.FLOWER_BANNER_PATTERN;
	}
	public static get FLOWER_POT(): Material {
		return this.$javaClass.FLOWER_POT;
	}
	public static get FOX_SPAWN_EGG(): Material {
		return this.$javaClass.FOX_SPAWN_EGG;
	}
	public static get FROSTED_ICE(): Material {
		return this.$javaClass.FROSTED_ICE;
	}
	public static get FURNACE(): Material {
		return this.$javaClass.FURNACE;
	}
	public static get FURNACE_MINECART(): Material {
		return this.$javaClass.FURNACE_MINECART;
	}
	public static get GHAST_SPAWN_EGG(): Material {
		return this.$javaClass.GHAST_SPAWN_EGG;
	}
	public static get GHAST_TEAR(): Material {
		return this.$javaClass.GHAST_TEAR;
	}
	public static get GLASS(): Material {
		return this.$javaClass.GLASS;
	}
	public static get GLASS_BOTTLE(): Material {
		return this.$javaClass.GLASS_BOTTLE;
	}
	public static get GLASS_PANE(): Material {
		return this.$javaClass.GLASS_PANE;
	}
	public static get GLISTERING_MELON_SLICE(): Material {
		return this.$javaClass.GLISTERING_MELON_SLICE;
	}
	public static get GLOBE_BANNER_PATTERN(): Material {
		return this.$javaClass.GLOBE_BANNER_PATTERN;
	}
	public static get GLOWSTONE(): Material {
		return this.$javaClass.GLOWSTONE;
	}
	public static get GLOWSTONE_DUST(): Material {
		return this.$javaClass.GLOWSTONE_DUST;
	}
	public static get GOLDEN_APPLE(): Material {
		return this.$javaClass.GOLDEN_APPLE;
	}
	public static get GOLDEN_AXE(): Material {
		return this.$javaClass.GOLDEN_AXE;
	}
	public static get GOLDEN_BOOTS(): Material {
		return this.$javaClass.GOLDEN_BOOTS;
	}
	public static get GOLDEN_CARROT(): Material {
		return this.$javaClass.GOLDEN_CARROT;
	}
	public static get GOLDEN_CHESTPLATE(): Material {
		return this.$javaClass.GOLDEN_CHESTPLATE;
	}
	public static get GOLDEN_HELMET(): Material {
		return this.$javaClass.GOLDEN_HELMET;
	}
	public static get GOLDEN_HOE(): Material {
		return this.$javaClass.GOLDEN_HOE;
	}
	public static get GOLDEN_HORSE_ARMOR(): Material {
		return this.$javaClass.GOLDEN_HORSE_ARMOR;
	}
	public static get GOLDEN_LEGGINGS(): Material {
		return this.$javaClass.GOLDEN_LEGGINGS;
	}
	public static get GOLDEN_PICKAXE(): Material {
		return this.$javaClass.GOLDEN_PICKAXE;
	}
	public static get GOLDEN_SHOVEL(): Material {
		return this.$javaClass.GOLDEN_SHOVEL;
	}
	public static get GOLDEN_SWORD(): Material {
		return this.$javaClass.GOLDEN_SWORD;
	}
	public static get GOLD_BLOCK(): Material {
		return this.$javaClass.GOLD_BLOCK;
	}
	public static get GOLD_INGOT(): Material {
		return this.$javaClass.GOLD_INGOT;
	}
	public static get GOLD_NUGGET(): Material {
		return this.$javaClass.GOLD_NUGGET;
	}
	public static get GOLD_ORE(): Material {
		return this.$javaClass.GOLD_ORE;
	}
	public static get GRANITE(): Material {
		return this.$javaClass.GRANITE;
	}
	public static get GRANITE_SLAB(): Material {
		return this.$javaClass.GRANITE_SLAB;
	}
	public static get GRANITE_STAIRS(): Material {
		return this.$javaClass.GRANITE_STAIRS;
	}
	public static get GRANITE_WALL(): Material {
		return this.$javaClass.GRANITE_WALL;
	}
	public static get GRASS(): Material {
		return this.$javaClass.GRASS;
	}
	public static get GRASS_BLOCK(): Material {
		return this.$javaClass.GRASS_BLOCK;
	}
	public static get GRASS_PATH(): Material {
		return this.$javaClass.GRASS_PATH;
	}
	public static get GRAVEL(): Material {
		return this.$javaClass.GRAVEL;
	}
	public static get GRAY_BANNER(): Material {
		return this.$javaClass.GRAY_BANNER;
	}
	public static get GRAY_BED(): Material {
		return this.$javaClass.GRAY_BED;
	}
	public static get GRAY_CARPET(): Material {
		return this.$javaClass.GRAY_CARPET;
	}
	public static get GRAY_CONCRETE(): Material {
		return this.$javaClass.GRAY_CONCRETE;
	}
	public static get GRAY_CONCRETE_POWDER(): Material {
		return this.$javaClass.GRAY_CONCRETE_POWDER;
	}
	public static get GRAY_DYE(): Material {
		return this.$javaClass.GRAY_DYE;
	}
	public static get GRAY_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.GRAY_GLAZED_TERRACOTTA;
	}
	public static get GRAY_SHULKER_BOX(): Material {
		return this.$javaClass.GRAY_SHULKER_BOX;
	}
	public static get GRAY_STAINED_GLASS(): Material {
		return this.$javaClass.GRAY_STAINED_GLASS;
	}
	public static get GRAY_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.GRAY_STAINED_GLASS_PANE;
	}
	public static get GRAY_TERRACOTTA(): Material {
		return this.$javaClass.GRAY_TERRACOTTA;
	}
	public static get GRAY_WALL_BANNER(): Material {
		return this.$javaClass.GRAY_WALL_BANNER;
	}
	public static get GRAY_WOOL(): Material {
		return this.$javaClass.GRAY_WOOL;
	}
	public static get GREEN_BANNER(): Material {
		return this.$javaClass.GREEN_BANNER;
	}
	public static get GREEN_BED(): Material {
		return this.$javaClass.GREEN_BED;
	}
	public static get GREEN_CARPET(): Material {
		return this.$javaClass.GREEN_CARPET;
	}
	public static get GREEN_CONCRETE(): Material {
		return this.$javaClass.GREEN_CONCRETE;
	}
	public static get GREEN_CONCRETE_POWDER(): Material {
		return this.$javaClass.GREEN_CONCRETE_POWDER;
	}
	public static get GREEN_DYE(): Material {
		return this.$javaClass.GREEN_DYE;
	}
	public static get GREEN_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.GREEN_GLAZED_TERRACOTTA;
	}
	public static get GREEN_SHULKER_BOX(): Material {
		return this.$javaClass.GREEN_SHULKER_BOX;
	}
	public static get GREEN_STAINED_GLASS(): Material {
		return this.$javaClass.GREEN_STAINED_GLASS;
	}
	public static get GREEN_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.GREEN_STAINED_GLASS_PANE;
	}
	public static get GREEN_TERRACOTTA(): Material {
		return this.$javaClass.GREEN_TERRACOTTA;
	}
	public static get GREEN_WALL_BANNER(): Material {
		return this.$javaClass.GREEN_WALL_BANNER;
	}
	public static get GREEN_WOOL(): Material {
		return this.$javaClass.GREEN_WOOL;
	}
	public static get GRINDSTONE(): Material {
		return this.$javaClass.GRINDSTONE;
	}
	public static get GUARDIAN_SPAWN_EGG(): Material {
		return this.$javaClass.GUARDIAN_SPAWN_EGG;
	}
	public static get GUNPOWDER(): Material {
		return this.$javaClass.GUNPOWDER;
	}
	public static get HAY_BLOCK(): Material {
		return this.$javaClass.HAY_BLOCK;
	}
	public static get HEART_OF_THE_SEA(): Material {
		return this.$javaClass.HEART_OF_THE_SEA;
	}
	public static get HEAVY_WEIGHTED_PRESSURE_PLATE(): Material {
		return this.$javaClass.HEAVY_WEIGHTED_PRESSURE_PLATE;
	}
	public static get HONEYCOMB(): Material {
		return this.$javaClass.HONEYCOMB;
	}
	public static get HONEYCOMB_BLOCK(): Material {
		return this.$javaClass.HONEYCOMB_BLOCK;
	}
	public static get HONEY_BLOCK(): Material {
		return this.$javaClass.HONEY_BLOCK;
	}
	public static get HONEY_BOTTLE(): Material {
		return this.$javaClass.HONEY_BOTTLE;
	}
	public static get HOPPER(): Material {
		return this.$javaClass.HOPPER;
	}
	public static get HOPPER_MINECART(): Material {
		return this.$javaClass.HOPPER_MINECART;
	}
	public static get HORN_CORAL(): Material {
		return this.$javaClass.HORN_CORAL;
	}
	public static get HORN_CORAL_BLOCK(): Material {
		return this.$javaClass.HORN_CORAL_BLOCK;
	}
	public static get HORN_CORAL_FAN(): Material {
		return this.$javaClass.HORN_CORAL_FAN;
	}
	public static get HORN_CORAL_WALL_FAN(): Material {
		return this.$javaClass.HORN_CORAL_WALL_FAN;
	}
	public static get HORSE_SPAWN_EGG(): Material {
		return this.$javaClass.HORSE_SPAWN_EGG;
	}
	public static get HUSK_SPAWN_EGG(): Material {
		return this.$javaClass.HUSK_SPAWN_EGG;
	}
	public static get ICE(): Material {
		return this.$javaClass.ICE;
	}
	public static get INFESTED_CHISELED_STONE_BRICKS(): Material {
		return this.$javaClass.INFESTED_CHISELED_STONE_BRICKS;
	}
	public static get INFESTED_COBBLESTONE(): Material {
		return this.$javaClass.INFESTED_COBBLESTONE;
	}
	public static get INFESTED_CRACKED_STONE_BRICKS(): Material {
		return this.$javaClass.INFESTED_CRACKED_STONE_BRICKS;
	}
	public static get INFESTED_MOSSY_STONE_BRICKS(): Material {
		return this.$javaClass.INFESTED_MOSSY_STONE_BRICKS;
	}
	public static get INFESTED_STONE(): Material {
		return this.$javaClass.INFESTED_STONE;
	}
	public static get INFESTED_STONE_BRICKS(): Material {
		return this.$javaClass.INFESTED_STONE_BRICKS;
	}
	public static get INK_SAC(): Material {
		return this.$javaClass.INK_SAC;
	}
	public static get IRON_AXE(): Material {
		return this.$javaClass.IRON_AXE;
	}
	public static get IRON_BARS(): Material {
		return this.$javaClass.IRON_BARS;
	}
	public static get IRON_BLOCK(): Material {
		return this.$javaClass.IRON_BLOCK;
	}
	public static get IRON_BOOTS(): Material {
		return this.$javaClass.IRON_BOOTS;
	}
	public static get IRON_CHESTPLATE(): Material {
		return this.$javaClass.IRON_CHESTPLATE;
	}
	public static get IRON_DOOR(): Material {
		return this.$javaClass.IRON_DOOR;
	}
	public static get IRON_HELMET(): Material {
		return this.$javaClass.IRON_HELMET;
	}
	public static get IRON_HOE(): Material {
		return this.$javaClass.IRON_HOE;
	}
	public static get IRON_HORSE_ARMOR(): Material {
		return this.$javaClass.IRON_HORSE_ARMOR;
	}
	public static get IRON_INGOT(): Material {
		return this.$javaClass.IRON_INGOT;
	}
	public static get IRON_LEGGINGS(): Material {
		return this.$javaClass.IRON_LEGGINGS;
	}
	public static get IRON_NUGGET(): Material {
		return this.$javaClass.IRON_NUGGET;
	}
	public static get IRON_ORE(): Material {
		return this.$javaClass.IRON_ORE;
	}
	public static get IRON_PICKAXE(): Material {
		return this.$javaClass.IRON_PICKAXE;
	}
	public static get IRON_SHOVEL(): Material {
		return this.$javaClass.IRON_SHOVEL;
	}
	public static get IRON_SWORD(): Material {
		return this.$javaClass.IRON_SWORD;
	}
	public static get IRON_TRAPDOOR(): Material {
		return this.$javaClass.IRON_TRAPDOOR;
	}
	public static get ITEM_FRAME(): Material {
		return this.$javaClass.ITEM_FRAME;
	}
	public static get JACK_O_LANTERN(): Material {
		return this.$javaClass.JACK_O_LANTERN;
	}
	public static get JIGSAW(): Material {
		return this.$javaClass.JIGSAW;
	}
	public static get JUKEBOX(): Material {
		return this.$javaClass.JUKEBOX;
	}
	public static get JUNGLE_BOAT(): Material {
		return this.$javaClass.JUNGLE_BOAT;
	}
	public static get JUNGLE_BUTTON(): Material {
		return this.$javaClass.JUNGLE_BUTTON;
	}
	public static get JUNGLE_DOOR(): Material {
		return this.$javaClass.JUNGLE_DOOR;
	}
	public static get JUNGLE_FENCE(): Material {
		return this.$javaClass.JUNGLE_FENCE;
	}
	public static get JUNGLE_FENCE_GATE(): Material {
		return this.$javaClass.JUNGLE_FENCE_GATE;
	}
	public static get JUNGLE_LEAVES(): Material {
		return this.$javaClass.JUNGLE_LEAVES;
	}
	public static get JUNGLE_LOG(): Material {
		return this.$javaClass.JUNGLE_LOG;
	}
	public static get JUNGLE_PLANKS(): Material {
		return this.$javaClass.JUNGLE_PLANKS;
	}
	public static get JUNGLE_PRESSURE_PLATE(): Material {
		return this.$javaClass.JUNGLE_PRESSURE_PLATE;
	}
	public static get JUNGLE_SAPLING(): Material {
		return this.$javaClass.JUNGLE_SAPLING;
	}
	public static get JUNGLE_SIGN(): Material {
		return this.$javaClass.JUNGLE_SIGN;
	}
	public static get JUNGLE_SLAB(): Material {
		return this.$javaClass.JUNGLE_SLAB;
	}
	public static get JUNGLE_STAIRS(): Material {
		return this.$javaClass.JUNGLE_STAIRS;
	}
	public static get JUNGLE_TRAPDOOR(): Material {
		return this.$javaClass.JUNGLE_TRAPDOOR;
	}
	public static get JUNGLE_WALL_SIGN(): Material {
		return this.$javaClass.JUNGLE_WALL_SIGN;
	}
	public static get JUNGLE_WOOD(): Material {
		return this.$javaClass.JUNGLE_WOOD;
	}
	public static get KELP(): Material {
		return this.$javaClass.KELP;
	}
	public static get KELP_PLANT(): Material {
		return this.$javaClass.KELP_PLANT;
	}
	public static get KNOWLEDGE_BOOK(): Material {
		return this.$javaClass.KNOWLEDGE_BOOK;
	}
	public static get LADDER(): Material {
		return this.$javaClass.LADDER;
	}
	public static get LANTERN(): Material {
		return this.$javaClass.LANTERN;
	}
	public static get LAPIS_BLOCK(): Material {
		return this.$javaClass.LAPIS_BLOCK;
	}
	public static get LAPIS_LAZULI(): Material {
		return this.$javaClass.LAPIS_LAZULI;
	}
	public static get LAPIS_ORE(): Material {
		return this.$javaClass.LAPIS_ORE;
	}
	public static get LARGE_FERN(): Material {
		return this.$javaClass.LARGE_FERN;
	}
	public static get LAVA(): Material {
		return this.$javaClass.LAVA;
	}
	public static get LAVA_BUCKET(): Material {
		return this.$javaClass.LAVA_BUCKET;
	}
	public static get LEAD(): Material {
		return this.$javaClass.LEAD;
	}
	public static get LEATHER(): Material {
		return this.$javaClass.LEATHER;
	}
	public static get LEATHER_BOOTS(): Material {
		return this.$javaClass.LEATHER_BOOTS;
	}
	public static get LEATHER_CHESTPLATE(): Material {
		return this.$javaClass.LEATHER_CHESTPLATE;
	}
	public static get LEATHER_HELMET(): Material {
		return this.$javaClass.LEATHER_HELMET;
	}
	public static get LEATHER_HORSE_ARMOR(): Material {
		return this.$javaClass.LEATHER_HORSE_ARMOR;
	}
	public static get LEATHER_LEGGINGS(): Material {
		return this.$javaClass.LEATHER_LEGGINGS;
	}
	public static get LECTERN(): Material {
		return this.$javaClass.LECTERN;
	}
	public static get LEVER(): Material {
		return this.$javaClass.LEVER;
	}
	public static get LIGHT_BLUE_BANNER(): Material {
		return this.$javaClass.LIGHT_BLUE_BANNER;
	}
	public static get LIGHT_BLUE_BED(): Material {
		return this.$javaClass.LIGHT_BLUE_BED;
	}
	public static get LIGHT_BLUE_CARPET(): Material {
		return this.$javaClass.LIGHT_BLUE_CARPET;
	}
	public static get LIGHT_BLUE_CONCRETE(): Material {
		return this.$javaClass.LIGHT_BLUE_CONCRETE;
	}
	public static get LIGHT_BLUE_CONCRETE_POWDER(): Material {
		return this.$javaClass.LIGHT_BLUE_CONCRETE_POWDER;
	}
	public static get LIGHT_BLUE_DYE(): Material {
		return this.$javaClass.LIGHT_BLUE_DYE;
	}
	public static get LIGHT_BLUE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LIGHT_BLUE_GLAZED_TERRACOTTA;
	}
	public static get LIGHT_BLUE_SHULKER_BOX(): Material {
		return this.$javaClass.LIGHT_BLUE_SHULKER_BOX;
	}
	public static get LIGHT_BLUE_STAINED_GLASS(): Material {
		return this.$javaClass.LIGHT_BLUE_STAINED_GLASS;
	}
	public static get LIGHT_BLUE_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.LIGHT_BLUE_STAINED_GLASS_PANE;
	}
	public static get LIGHT_BLUE_TERRACOTTA(): Material {
		return this.$javaClass.LIGHT_BLUE_TERRACOTTA;
	}
	public static get LIGHT_BLUE_WALL_BANNER(): Material {
		return this.$javaClass.LIGHT_BLUE_WALL_BANNER;
	}
	public static get LIGHT_BLUE_WOOL(): Material {
		return this.$javaClass.LIGHT_BLUE_WOOL;
	}
	public static get LIGHT_GRAY_BANNER(): Material {
		return this.$javaClass.LIGHT_GRAY_BANNER;
	}
	public static get LIGHT_GRAY_BED(): Material {
		return this.$javaClass.LIGHT_GRAY_BED;
	}
	public static get LIGHT_GRAY_CARPET(): Material {
		return this.$javaClass.LIGHT_GRAY_CARPET;
	}
	public static get LIGHT_GRAY_CONCRETE(): Material {
		return this.$javaClass.LIGHT_GRAY_CONCRETE;
	}
	public static get LIGHT_GRAY_CONCRETE_POWDER(): Material {
		return this.$javaClass.LIGHT_GRAY_CONCRETE_POWDER;
	}
	public static get LIGHT_GRAY_DYE(): Material {
		return this.$javaClass.LIGHT_GRAY_DYE;
	}
	public static get LIGHT_GRAY_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LIGHT_GRAY_GLAZED_TERRACOTTA;
	}
	public static get LIGHT_GRAY_SHULKER_BOX(): Material {
		return this.$javaClass.LIGHT_GRAY_SHULKER_BOX;
	}
	public static get LIGHT_GRAY_STAINED_GLASS(): Material {
		return this.$javaClass.LIGHT_GRAY_STAINED_GLASS;
	}
	public static get LIGHT_GRAY_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.LIGHT_GRAY_STAINED_GLASS_PANE;
	}
	public static get LIGHT_GRAY_TERRACOTTA(): Material {
		return this.$javaClass.LIGHT_GRAY_TERRACOTTA;
	}
	public static get LIGHT_GRAY_WALL_BANNER(): Material {
		return this.$javaClass.LIGHT_GRAY_WALL_BANNER;
	}
	public static get LIGHT_GRAY_WOOL(): Material {
		return this.$javaClass.LIGHT_GRAY_WOOL;
	}
	public static get LIGHT_WEIGHTED_PRESSURE_PLATE(): Material {
		return this.$javaClass.LIGHT_WEIGHTED_PRESSURE_PLATE;
	}
	public static get LILAC(): Material {
		return this.$javaClass.LILAC;
	}
	public static get LILY_OF_THE_VALLEY(): Material {
		return this.$javaClass.LILY_OF_THE_VALLEY;
	}
	public static get LILY_PAD(): Material {
		return this.$javaClass.LILY_PAD;
	}
	public static get LIME_BANNER(): Material {
		return this.$javaClass.LIME_BANNER;
	}
	public static get LIME_BED(): Material {
		return this.$javaClass.LIME_BED;
	}
	public static get LIME_CARPET(): Material {
		return this.$javaClass.LIME_CARPET;
	}
	public static get LIME_CONCRETE(): Material {
		return this.$javaClass.LIME_CONCRETE;
	}
	public static get LIME_CONCRETE_POWDER(): Material {
		return this.$javaClass.LIME_CONCRETE_POWDER;
	}
	public static get LIME_DYE(): Material {
		return this.$javaClass.LIME_DYE;
	}
	public static get LIME_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LIME_GLAZED_TERRACOTTA;
	}
	public static get LIME_SHULKER_BOX(): Material {
		return this.$javaClass.LIME_SHULKER_BOX;
	}
	public static get LIME_STAINED_GLASS(): Material {
		return this.$javaClass.LIME_STAINED_GLASS;
	}
	public static get LIME_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.LIME_STAINED_GLASS_PANE;
	}
	public static get LIME_TERRACOTTA(): Material {
		return this.$javaClass.LIME_TERRACOTTA;
	}
	public static get LIME_WALL_BANNER(): Material {
		return this.$javaClass.LIME_WALL_BANNER;
	}
	public static get LIME_WOOL(): Material {
		return this.$javaClass.LIME_WOOL;
	}
	public static get LINGERING_POTION(): Material {
		return this.$javaClass.LINGERING_POTION;
	}
	public static get LLAMA_SPAWN_EGG(): Material {
		return this.$javaClass.LLAMA_SPAWN_EGG;
	}
	public static get LOOM(): Material {
		return this.$javaClass.LOOM;
	}
	public static get MAGENTA_BANNER(): Material {
		return this.$javaClass.MAGENTA_BANNER;
	}
	public static get MAGENTA_BED(): Material {
		return this.$javaClass.MAGENTA_BED;
	}
	public static get MAGENTA_CARPET(): Material {
		return this.$javaClass.MAGENTA_CARPET;
	}
	public static get MAGENTA_CONCRETE(): Material {
		return this.$javaClass.MAGENTA_CONCRETE;
	}
	public static get MAGENTA_CONCRETE_POWDER(): Material {
		return this.$javaClass.MAGENTA_CONCRETE_POWDER;
	}
	public static get MAGENTA_DYE(): Material {
		return this.$javaClass.MAGENTA_DYE;
	}
	public static get MAGENTA_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.MAGENTA_GLAZED_TERRACOTTA;
	}
	public static get MAGENTA_SHULKER_BOX(): Material {
		return this.$javaClass.MAGENTA_SHULKER_BOX;
	}
	public static get MAGENTA_STAINED_GLASS(): Material {
		return this.$javaClass.MAGENTA_STAINED_GLASS;
	}
	public static get MAGENTA_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.MAGENTA_STAINED_GLASS_PANE;
	}
	public static get MAGENTA_TERRACOTTA(): Material {
		return this.$javaClass.MAGENTA_TERRACOTTA;
	}
	public static get MAGENTA_WALL_BANNER(): Material {
		return this.$javaClass.MAGENTA_WALL_BANNER;
	}
	public static get MAGENTA_WOOL(): Material {
		return this.$javaClass.MAGENTA_WOOL;
	}
	public static get MAGMA_BLOCK(): Material {
		return this.$javaClass.MAGMA_BLOCK;
	}
	public static get MAGMA_CREAM(): Material {
		return this.$javaClass.MAGMA_CREAM;
	}
	public static get MAGMA_CUBE_SPAWN_EGG(): Material {
		return this.$javaClass.MAGMA_CUBE_SPAWN_EGG;
	}
	public static get MAP(): Material {
		return this.$javaClass.MAP;
	}
	public static get MELON(): Material {
		return this.$javaClass.MELON;
	}
	public static get MELON_SEEDS(): Material {
		return this.$javaClass.MELON_SEEDS;
	}
	public static get MELON_SLICE(): Material {
		return this.$javaClass.MELON_SLICE;
	}
	public static get MELON_STEM(): Material {
		return this.$javaClass.MELON_STEM;
	}
	public static get MILK_BUCKET(): Material {
		return this.$javaClass.MILK_BUCKET;
	}
	public static get MINECART(): Material {
		return this.$javaClass.MINECART;
	}
	public static get MOJANG_BANNER_PATTERN(): Material {
		return this.$javaClass.MOJANG_BANNER_PATTERN;
	}
	public static get MOOSHROOM_SPAWN_EGG(): Material {
		return this.$javaClass.MOOSHROOM_SPAWN_EGG;
	}
	public static get MOSSY_COBBLESTONE(): Material {
		return this.$javaClass.MOSSY_COBBLESTONE;
	}
	public static get MOSSY_COBBLESTONE_SLAB(): Material {
		return this.$javaClass.MOSSY_COBBLESTONE_SLAB;
	}
	public static get MOSSY_COBBLESTONE_STAIRS(): Material {
		return this.$javaClass.MOSSY_COBBLESTONE_STAIRS;
	}
	public static get MOSSY_COBBLESTONE_WALL(): Material {
		return this.$javaClass.MOSSY_COBBLESTONE_WALL;
	}
	public static get MOSSY_STONE_BRICKS(): Material {
		return this.$javaClass.MOSSY_STONE_BRICKS;
	}
	public static get MOSSY_STONE_BRICK_SLAB(): Material {
		return this.$javaClass.MOSSY_STONE_BRICK_SLAB;
	}
	public static get MOSSY_STONE_BRICK_STAIRS(): Material {
		return this.$javaClass.MOSSY_STONE_BRICK_STAIRS;
	}
	public static get MOSSY_STONE_BRICK_WALL(): Material {
		return this.$javaClass.MOSSY_STONE_BRICK_WALL;
	}
	public static get MOVING_PISTON(): Material {
		return this.$javaClass.MOVING_PISTON;
	}
	public static get MULE_SPAWN_EGG(): Material {
		return this.$javaClass.MULE_SPAWN_EGG;
	}
	public static get MUSHROOM_STEM(): Material {
		return this.$javaClass.MUSHROOM_STEM;
	}
	public static get MUSHROOM_STEW(): Material {
		return this.$javaClass.MUSHROOM_STEW;
	}
	public static get MUSIC_DISC_11(): Material {
		return this.$javaClass.MUSIC_DISC_11;
	}
	public static get MUSIC_DISC_13(): Material {
		return this.$javaClass.MUSIC_DISC_13;
	}
	public static get MUSIC_DISC_BLOCKS(): Material {
		return this.$javaClass.MUSIC_DISC_BLOCKS;
	}
	public static get MUSIC_DISC_CAT(): Material {
		return this.$javaClass.MUSIC_DISC_CAT;
	}
	public static get MUSIC_DISC_CHIRP(): Material {
		return this.$javaClass.MUSIC_DISC_CHIRP;
	}
	public static get MUSIC_DISC_FAR(): Material {
		return this.$javaClass.MUSIC_DISC_FAR;
	}
	public static get MUSIC_DISC_MALL(): Material {
		return this.$javaClass.MUSIC_DISC_MALL;
	}
	public static get MUSIC_DISC_MELLOHI(): Material {
		return this.$javaClass.MUSIC_DISC_MELLOHI;
	}
	public static get MUSIC_DISC_STAL(): Material {
		return this.$javaClass.MUSIC_DISC_STAL;
	}
	public static get MUSIC_DISC_STRAD(): Material {
		return this.$javaClass.MUSIC_DISC_STRAD;
	}
	public static get MUSIC_DISC_WAIT(): Material {
		return this.$javaClass.MUSIC_DISC_WAIT;
	}
	public static get MUSIC_DISC_WARD(): Material {
		return this.$javaClass.MUSIC_DISC_WARD;
	}
	public static get MUTTON(): Material {
		return this.$javaClass.MUTTON;
	}
	public static get MYCELIUM(): Material {
		return this.$javaClass.MYCELIUM;
	}
	public static get NAME_TAG(): Material {
		return this.$javaClass.NAME_TAG;
	}
	public static get NAUTILUS_SHELL(): Material {
		return this.$javaClass.NAUTILUS_SHELL;
	}
	public static get NETHERRACK(): Material {
		return this.$javaClass.NETHERRACK;
	}
	public static get NETHER_BRICK(): Material {
		return this.$javaClass.NETHER_BRICK;
	}
	public static get NETHER_BRICKS(): Material {
		return this.$javaClass.NETHER_BRICKS;
	}
	public static get NETHER_BRICK_FENCE(): Material {
		return this.$javaClass.NETHER_BRICK_FENCE;
	}
	public static get NETHER_BRICK_SLAB(): Material {
		return this.$javaClass.NETHER_BRICK_SLAB;
	}
	public static get NETHER_BRICK_STAIRS(): Material {
		return this.$javaClass.NETHER_BRICK_STAIRS;
	}
	public static get NETHER_BRICK_WALL(): Material {
		return this.$javaClass.NETHER_BRICK_WALL;
	}
	public static get NETHER_PORTAL(): Material {
		return this.$javaClass.NETHER_PORTAL;
	}
	public static get NETHER_QUARTZ_ORE(): Material {
		return this.$javaClass.NETHER_QUARTZ_ORE;
	}
	public static get NETHER_STAR(): Material {
		return this.$javaClass.NETHER_STAR;
	}
	public static get NETHER_WART(): Material {
		return this.$javaClass.NETHER_WART;
	}
	public static get NETHER_WART_BLOCK(): Material {
		return this.$javaClass.NETHER_WART_BLOCK;
	}
	public static get NOTE_BLOCK(): Material {
		return this.$javaClass.NOTE_BLOCK;
	}
	public static get OAK_BOAT(): Material {
		return this.$javaClass.OAK_BOAT;
	}
	public static get OAK_BUTTON(): Material {
		return this.$javaClass.OAK_BUTTON;
	}
	public static get OAK_DOOR(): Material {
		return this.$javaClass.OAK_DOOR;
	}
	public static get OAK_FENCE(): Material {
		return this.$javaClass.OAK_FENCE;
	}
	public static get OAK_FENCE_GATE(): Material {
		return this.$javaClass.OAK_FENCE_GATE;
	}
	public static get OAK_LEAVES(): Material {
		return this.$javaClass.OAK_LEAVES;
	}
	public static get OAK_LOG(): Material {
		return this.$javaClass.OAK_LOG;
	}
	public static get OAK_PLANKS(): Material {
		return this.$javaClass.OAK_PLANKS;
	}
	public static get OAK_PRESSURE_PLATE(): Material {
		return this.$javaClass.OAK_PRESSURE_PLATE;
	}
	public static get OAK_SAPLING(): Material {
		return this.$javaClass.OAK_SAPLING;
	}
	public static get OAK_SIGN(): Material {
		return this.$javaClass.OAK_SIGN;
	}
	public static get OAK_SLAB(): Material {
		return this.$javaClass.OAK_SLAB;
	}
	public static get OAK_STAIRS(): Material {
		return this.$javaClass.OAK_STAIRS;
	}
	public static get OAK_TRAPDOOR(): Material {
		return this.$javaClass.OAK_TRAPDOOR;
	}
	public static get OAK_WALL_SIGN(): Material {
		return this.$javaClass.OAK_WALL_SIGN;
	}
	public static get OAK_WOOD(): Material {
		return this.$javaClass.OAK_WOOD;
	}
	public static get OBSERVER(): Material {
		return this.$javaClass.OBSERVER;
	}
	public static get OBSIDIAN(): Material {
		return this.$javaClass.OBSIDIAN;
	}
	public static get OCELOT_SPAWN_EGG(): Material {
		return this.$javaClass.OCELOT_SPAWN_EGG;
	}
	public static get ORANGE_BANNER(): Material {
		return this.$javaClass.ORANGE_BANNER;
	}
	public static get ORANGE_BED(): Material {
		return this.$javaClass.ORANGE_BED;
	}
	public static get ORANGE_CARPET(): Material {
		return this.$javaClass.ORANGE_CARPET;
	}
	public static get ORANGE_CONCRETE(): Material {
		return this.$javaClass.ORANGE_CONCRETE;
	}
	public static get ORANGE_CONCRETE_POWDER(): Material {
		return this.$javaClass.ORANGE_CONCRETE_POWDER;
	}
	public static get ORANGE_DYE(): Material {
		return this.$javaClass.ORANGE_DYE;
	}
	public static get ORANGE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.ORANGE_GLAZED_TERRACOTTA;
	}
	public static get ORANGE_SHULKER_BOX(): Material {
		return this.$javaClass.ORANGE_SHULKER_BOX;
	}
	public static get ORANGE_STAINED_GLASS(): Material {
		return this.$javaClass.ORANGE_STAINED_GLASS;
	}
	public static get ORANGE_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.ORANGE_STAINED_GLASS_PANE;
	}
	public static get ORANGE_TERRACOTTA(): Material {
		return this.$javaClass.ORANGE_TERRACOTTA;
	}
	public static get ORANGE_TULIP(): Material {
		return this.$javaClass.ORANGE_TULIP;
	}
	public static get ORANGE_WALL_BANNER(): Material {
		return this.$javaClass.ORANGE_WALL_BANNER;
	}
	public static get ORANGE_WOOL(): Material {
		return this.$javaClass.ORANGE_WOOL;
	}
	public static get OXEYE_DAISY(): Material {
		return this.$javaClass.OXEYE_DAISY;
	}
	public static get PACKED_ICE(): Material {
		return this.$javaClass.PACKED_ICE;
	}
	public static get PAINTING(): Material {
		return this.$javaClass.PAINTING;
	}
	public static get PANDA_SPAWN_EGG(): Material {
		return this.$javaClass.PANDA_SPAWN_EGG;
	}
	public static get PAPER(): Material {
		return this.$javaClass.PAPER;
	}
	public static get PARROT_SPAWN_EGG(): Material {
		return this.$javaClass.PARROT_SPAWN_EGG;
	}
	public static get PEONY(): Material {
		return this.$javaClass.PEONY;
	}
	public static get PETRIFIED_OAK_SLAB(): Material {
		return this.$javaClass.PETRIFIED_OAK_SLAB;
	}
	public static get PHANTOM_MEMBRANE(): Material {
		return this.$javaClass.PHANTOM_MEMBRANE;
	}
	public static get PHANTOM_SPAWN_EGG(): Material {
		return this.$javaClass.PHANTOM_SPAWN_EGG;
	}
	public static get PIG_SPAWN_EGG(): Material {
		return this.$javaClass.PIG_SPAWN_EGG;
	}
	public static get PILLAGER_SPAWN_EGG(): Material {
		return this.$javaClass.PILLAGER_SPAWN_EGG;
	}
	public static get PINK_BANNER(): Material {
		return this.$javaClass.PINK_BANNER;
	}
	public static get PINK_BED(): Material {
		return this.$javaClass.PINK_BED;
	}
	public static get PINK_CARPET(): Material {
		return this.$javaClass.PINK_CARPET;
	}
	public static get PINK_CONCRETE(): Material {
		return this.$javaClass.PINK_CONCRETE;
	}
	public static get PINK_CONCRETE_POWDER(): Material {
		return this.$javaClass.PINK_CONCRETE_POWDER;
	}
	public static get PINK_DYE(): Material {
		return this.$javaClass.PINK_DYE;
	}
	public static get PINK_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.PINK_GLAZED_TERRACOTTA;
	}
	public static get PINK_SHULKER_BOX(): Material {
		return this.$javaClass.PINK_SHULKER_BOX;
	}
	public static get PINK_STAINED_GLASS(): Material {
		return this.$javaClass.PINK_STAINED_GLASS;
	}
	public static get PINK_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.PINK_STAINED_GLASS_PANE;
	}
	public static get PINK_TERRACOTTA(): Material {
		return this.$javaClass.PINK_TERRACOTTA;
	}
	public static get PINK_TULIP(): Material {
		return this.$javaClass.PINK_TULIP;
	}
	public static get PINK_WALL_BANNER(): Material {
		return this.$javaClass.PINK_WALL_BANNER;
	}
	public static get PINK_WOOL(): Material {
		return this.$javaClass.PINK_WOOL;
	}
	public static get PISTON(): Material {
		return this.$javaClass.PISTON;
	}
	public static get PISTON_HEAD(): Material {
		return this.$javaClass.PISTON_HEAD;
	}
	public static get PLAYER_HEAD(): Material {
		return this.$javaClass.PLAYER_HEAD;
	}
	public static get PLAYER_WALL_HEAD(): Material {
		return this.$javaClass.PLAYER_WALL_HEAD;
	}
	public static get PODZOL(): Material {
		return this.$javaClass.PODZOL;
	}
	public static get POISONOUS_POTATO(): Material {
		return this.$javaClass.POISONOUS_POTATO;
	}
	public static get POLAR_BEAR_SPAWN_EGG(): Material {
		return this.$javaClass.POLAR_BEAR_SPAWN_EGG;
	}
	public static get POLISHED_ANDESITE(): Material {
		return this.$javaClass.POLISHED_ANDESITE;
	}
	public static get POLISHED_ANDESITE_SLAB(): Material {
		return this.$javaClass.POLISHED_ANDESITE_SLAB;
	}
	public static get POLISHED_ANDESITE_STAIRS(): Material {
		return this.$javaClass.POLISHED_ANDESITE_STAIRS;
	}
	public static get POLISHED_DIORITE(): Material {
		return this.$javaClass.POLISHED_DIORITE;
	}
	public static get POLISHED_DIORITE_SLAB(): Material {
		return this.$javaClass.POLISHED_DIORITE_SLAB;
	}
	public static get POLISHED_DIORITE_STAIRS(): Material {
		return this.$javaClass.POLISHED_DIORITE_STAIRS;
	}
	public static get POLISHED_GRANITE(): Material {
		return this.$javaClass.POLISHED_GRANITE;
	}
	public static get POLISHED_GRANITE_SLAB(): Material {
		return this.$javaClass.POLISHED_GRANITE_SLAB;
	}
	public static get POLISHED_GRANITE_STAIRS(): Material {
		return this.$javaClass.POLISHED_GRANITE_STAIRS;
	}
	public static get POPPED_CHORUS_FRUIT(): Material {
		return this.$javaClass.POPPED_CHORUS_FRUIT;
	}
	public static get POPPY(): Material {
		return this.$javaClass.POPPY;
	}
	public static get PORKCHOP(): Material {
		return this.$javaClass.PORKCHOP;
	}
	public static get POTATO(): Material {
		return this.$javaClass.POTATO;
	}
	public static get POTATOES(): Material {
		return this.$javaClass.POTATOES;
	}
	public static get POTION(): Material {
		return this.$javaClass.POTION;
	}
	public static get POTTED_ACACIA_SAPLING(): Material {
		return this.$javaClass.POTTED_ACACIA_SAPLING;
	}
	public static get POTTED_ALLIUM(): Material {
		return this.$javaClass.POTTED_ALLIUM;
	}
	public static get POTTED_AZURE_BLUET(): Material {
		return this.$javaClass.POTTED_AZURE_BLUET;
	}
	public static get POTTED_BAMBOO(): Material {
		return this.$javaClass.POTTED_BAMBOO;
	}
	public static get POTTED_BIRCH_SAPLING(): Material {
		return this.$javaClass.POTTED_BIRCH_SAPLING;
	}
	public static get POTTED_BLUE_ORCHID(): Material {
		return this.$javaClass.POTTED_BLUE_ORCHID;
	}
	public static get POTTED_BROWN_MUSHROOM(): Material {
		return this.$javaClass.POTTED_BROWN_MUSHROOM;
	}
	public static get POTTED_CACTUS(): Material {
		return this.$javaClass.POTTED_CACTUS;
	}
	public static get POTTED_CORNFLOWER(): Material {
		return this.$javaClass.POTTED_CORNFLOWER;
	}
	public static get POTTED_DANDELION(): Material {
		return this.$javaClass.POTTED_DANDELION;
	}
	public static get POTTED_DARK_OAK_SAPLING(): Material {
		return this.$javaClass.POTTED_DARK_OAK_SAPLING;
	}
	public static get POTTED_DEAD_BUSH(): Material {
		return this.$javaClass.POTTED_DEAD_BUSH;
	}
	public static get POTTED_FERN(): Material {
		return this.$javaClass.POTTED_FERN;
	}
	public static get POTTED_JUNGLE_SAPLING(): Material {
		return this.$javaClass.POTTED_JUNGLE_SAPLING;
	}
	public static get POTTED_LILY_OF_THE_VALLEY(): Material {
		return this.$javaClass.POTTED_LILY_OF_THE_VALLEY;
	}
	public static get POTTED_OAK_SAPLING(): Material {
		return this.$javaClass.POTTED_OAK_SAPLING;
	}
	public static get POTTED_ORANGE_TULIP(): Material {
		return this.$javaClass.POTTED_ORANGE_TULIP;
	}
	public static get POTTED_OXEYE_DAISY(): Material {
		return this.$javaClass.POTTED_OXEYE_DAISY;
	}
	public static get POTTED_PINK_TULIP(): Material {
		return this.$javaClass.POTTED_PINK_TULIP;
	}
	public static get POTTED_POPPY(): Material {
		return this.$javaClass.POTTED_POPPY;
	}
	public static get POTTED_RED_MUSHROOM(): Material {
		return this.$javaClass.POTTED_RED_MUSHROOM;
	}
	public static get POTTED_RED_TULIP(): Material {
		return this.$javaClass.POTTED_RED_TULIP;
	}
	public static get POTTED_SPRUCE_SAPLING(): Material {
		return this.$javaClass.POTTED_SPRUCE_SAPLING;
	}
	public static get POTTED_WHITE_TULIP(): Material {
		return this.$javaClass.POTTED_WHITE_TULIP;
	}
	public static get POTTED_WITHER_ROSE(): Material {
		return this.$javaClass.POTTED_WITHER_ROSE;
	}
	public static get POWERED_RAIL(): Material {
		return this.$javaClass.POWERED_RAIL;
	}
	public static get PRISMARINE(): Material {
		return this.$javaClass.PRISMARINE;
	}
	public static get PRISMARINE_BRICKS(): Material {
		return this.$javaClass.PRISMARINE_BRICKS;
	}
	public static get PRISMARINE_BRICK_SLAB(): Material {
		return this.$javaClass.PRISMARINE_BRICK_SLAB;
	}
	public static get PRISMARINE_BRICK_STAIRS(): Material {
		return this.$javaClass.PRISMARINE_BRICK_STAIRS;
	}
	public static get PRISMARINE_CRYSTALS(): Material {
		return this.$javaClass.PRISMARINE_CRYSTALS;
	}
	public static get PRISMARINE_SHARD(): Material {
		return this.$javaClass.PRISMARINE_SHARD;
	}
	public static get PRISMARINE_SLAB(): Material {
		return this.$javaClass.PRISMARINE_SLAB;
	}
	public static get PRISMARINE_STAIRS(): Material {
		return this.$javaClass.PRISMARINE_STAIRS;
	}
	public static get PRISMARINE_WALL(): Material {
		return this.$javaClass.PRISMARINE_WALL;
	}
	public static get PUFFERFISH(): Material {
		return this.$javaClass.PUFFERFISH;
	}
	public static get PUFFERFISH_BUCKET(): Material {
		return this.$javaClass.PUFFERFISH_BUCKET;
	}
	public static get PUFFERFISH_SPAWN_EGG(): Material {
		return this.$javaClass.PUFFERFISH_SPAWN_EGG;
	}
	public static get PUMPKIN(): Material {
		return this.$javaClass.PUMPKIN;
	}
	public static get PUMPKIN_PIE(): Material {
		return this.$javaClass.PUMPKIN_PIE;
	}
	public static get PUMPKIN_SEEDS(): Material {
		return this.$javaClass.PUMPKIN_SEEDS;
	}
	public static get PUMPKIN_STEM(): Material {
		return this.$javaClass.PUMPKIN_STEM;
	}
	public static get PURPLE_BANNER(): Material {
		return this.$javaClass.PURPLE_BANNER;
	}
	public static get PURPLE_BED(): Material {
		return this.$javaClass.PURPLE_BED;
	}
	public static get PURPLE_CARPET(): Material {
		return this.$javaClass.PURPLE_CARPET;
	}
	public static get PURPLE_CONCRETE(): Material {
		return this.$javaClass.PURPLE_CONCRETE;
	}
	public static get PURPLE_CONCRETE_POWDER(): Material {
		return this.$javaClass.PURPLE_CONCRETE_POWDER;
	}
	public static get PURPLE_DYE(): Material {
		return this.$javaClass.PURPLE_DYE;
	}
	public static get PURPLE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.PURPLE_GLAZED_TERRACOTTA;
	}
	public static get PURPLE_SHULKER_BOX(): Material {
		return this.$javaClass.PURPLE_SHULKER_BOX;
	}
	public static get PURPLE_STAINED_GLASS(): Material {
		return this.$javaClass.PURPLE_STAINED_GLASS;
	}
	public static get PURPLE_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.PURPLE_STAINED_GLASS_PANE;
	}
	public static get PURPLE_TERRACOTTA(): Material {
		return this.$javaClass.PURPLE_TERRACOTTA;
	}
	public static get PURPLE_WALL_BANNER(): Material {
		return this.$javaClass.PURPLE_WALL_BANNER;
	}
	public static get PURPLE_WOOL(): Material {
		return this.$javaClass.PURPLE_WOOL;
	}
	public static get PURPUR_BLOCK(): Material {
		return this.$javaClass.PURPUR_BLOCK;
	}
	public static get PURPUR_PILLAR(): Material {
		return this.$javaClass.PURPUR_PILLAR;
	}
	public static get PURPUR_SLAB(): Material {
		return this.$javaClass.PURPUR_SLAB;
	}
	public static get PURPUR_STAIRS(): Material {
		return this.$javaClass.PURPUR_STAIRS;
	}
	public static get QUARTZ(): Material {
		return this.$javaClass.QUARTZ;
	}
	public static get QUARTZ_BLOCK(): Material {
		return this.$javaClass.QUARTZ_BLOCK;
	}
	public static get QUARTZ_PILLAR(): Material {
		return this.$javaClass.QUARTZ_PILLAR;
	}
	public static get QUARTZ_SLAB(): Material {
		return this.$javaClass.QUARTZ_SLAB;
	}
	public static get QUARTZ_STAIRS(): Material {
		return this.$javaClass.QUARTZ_STAIRS;
	}
	public static get RABBIT(): Material {
		return this.$javaClass.RABBIT;
	}
	public static get RABBIT_FOOT(): Material {
		return this.$javaClass.RABBIT_FOOT;
	}
	public static get RABBIT_HIDE(): Material {
		return this.$javaClass.RABBIT_HIDE;
	}
	public static get RABBIT_SPAWN_EGG(): Material {
		return this.$javaClass.RABBIT_SPAWN_EGG;
	}
	public static get RABBIT_STEW(): Material {
		return this.$javaClass.RABBIT_STEW;
	}
	public static get RAIL(): Material {
		return this.$javaClass.RAIL;
	}
	public static get RAVAGER_SPAWN_EGG(): Material {
		return this.$javaClass.RAVAGER_SPAWN_EGG;
	}
	public static get REDSTONE(): Material {
		return this.$javaClass.REDSTONE;
	}
	public static get REDSTONE_BLOCK(): Material {
		return this.$javaClass.REDSTONE_BLOCK;
	}
	public static get REDSTONE_LAMP(): Material {
		return this.$javaClass.REDSTONE_LAMP;
	}
	public static get REDSTONE_ORE(): Material {
		return this.$javaClass.REDSTONE_ORE;
	}
	public static get REDSTONE_TORCH(): Material {
		return this.$javaClass.REDSTONE_TORCH;
	}
	public static get REDSTONE_WALL_TORCH(): Material {
		return this.$javaClass.REDSTONE_WALL_TORCH;
	}
	public static get REDSTONE_WIRE(): Material {
		return this.$javaClass.REDSTONE_WIRE;
	}
	public static get RED_BANNER(): Material {
		return this.$javaClass.RED_BANNER;
	}
	public static get RED_BED(): Material {
		return this.$javaClass.RED_BED;
	}
	public static get RED_CARPET(): Material {
		return this.$javaClass.RED_CARPET;
	}
	public static get RED_CONCRETE(): Material {
		return this.$javaClass.RED_CONCRETE;
	}
	public static get RED_CONCRETE_POWDER(): Material {
		return this.$javaClass.RED_CONCRETE_POWDER;
	}
	public static get RED_DYE(): Material {
		return this.$javaClass.RED_DYE;
	}
	public static get RED_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.RED_GLAZED_TERRACOTTA;
	}
	public static get RED_MUSHROOM(): Material {
		return this.$javaClass.RED_MUSHROOM;
	}
	public static get RED_MUSHROOM_BLOCK(): Material {
		return this.$javaClass.RED_MUSHROOM_BLOCK;
	}
	public static get RED_NETHER_BRICKS(): Material {
		return this.$javaClass.RED_NETHER_BRICKS;
	}
	public static get RED_NETHER_BRICK_SLAB(): Material {
		return this.$javaClass.RED_NETHER_BRICK_SLAB;
	}
	public static get RED_NETHER_BRICK_STAIRS(): Material {
		return this.$javaClass.RED_NETHER_BRICK_STAIRS;
	}
	public static get RED_NETHER_BRICK_WALL(): Material {
		return this.$javaClass.RED_NETHER_BRICK_WALL;
	}
	public static get RED_SAND(): Material {
		return this.$javaClass.RED_SAND;
	}
	public static get RED_SANDSTONE(): Material {
		return this.$javaClass.RED_SANDSTONE;
	}
	public static get RED_SANDSTONE_SLAB(): Material {
		return this.$javaClass.RED_SANDSTONE_SLAB;
	}
	public static get RED_SANDSTONE_STAIRS(): Material {
		return this.$javaClass.RED_SANDSTONE_STAIRS;
	}
	public static get RED_SANDSTONE_WALL(): Material {
		return this.$javaClass.RED_SANDSTONE_WALL;
	}
	public static get RED_SHULKER_BOX(): Material {
		return this.$javaClass.RED_SHULKER_BOX;
	}
	public static get RED_STAINED_GLASS(): Material {
		return this.$javaClass.RED_STAINED_GLASS;
	}
	public static get RED_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.RED_STAINED_GLASS_PANE;
	}
	public static get RED_TERRACOTTA(): Material {
		return this.$javaClass.RED_TERRACOTTA;
	}
	public static get RED_TULIP(): Material {
		return this.$javaClass.RED_TULIP;
	}
	public static get RED_WALL_BANNER(): Material {
		return this.$javaClass.RED_WALL_BANNER;
	}
	public static get RED_WOOL(): Material {
		return this.$javaClass.RED_WOOL;
	}
	public static get REPEATER(): Material {
		return this.$javaClass.REPEATER;
	}
	public static get REPEATING_COMMAND_BLOCK(): Material {
		return this.$javaClass.REPEATING_COMMAND_BLOCK;
	}
	public static get ROSE_BUSH(): Material {
		return this.$javaClass.ROSE_BUSH;
	}
	public static get ROTTEN_FLESH(): Material {
		return this.$javaClass.ROTTEN_FLESH;
	}
	public static get SADDLE(): Material {
		return this.$javaClass.SADDLE;
	}
	public static get SALMON(): Material {
		return this.$javaClass.SALMON;
	}
	public static get SALMON_BUCKET(): Material {
		return this.$javaClass.SALMON_BUCKET;
	}
	public static get SALMON_SPAWN_EGG(): Material {
		return this.$javaClass.SALMON_SPAWN_EGG;
	}
	public static get SAND(): Material {
		return this.$javaClass.SAND;
	}
	public static get SANDSTONE(): Material {
		return this.$javaClass.SANDSTONE;
	}
	public static get SANDSTONE_SLAB(): Material {
		return this.$javaClass.SANDSTONE_SLAB;
	}
	public static get SANDSTONE_STAIRS(): Material {
		return this.$javaClass.SANDSTONE_STAIRS;
	}
	public static get SANDSTONE_WALL(): Material {
		return this.$javaClass.SANDSTONE_WALL;
	}
	public static get SCAFFOLDING(): Material {
		return this.$javaClass.SCAFFOLDING;
	}
	public static get SCUTE(): Material {
		return this.$javaClass.SCUTE;
	}
	public static get SEAGRASS(): Material {
		return this.$javaClass.SEAGRASS;
	}
	public static get SEA_LANTERN(): Material {
		return this.$javaClass.SEA_LANTERN;
	}
	public static get SEA_PICKLE(): Material {
		return this.$javaClass.SEA_PICKLE;
	}
	public static get SHEARS(): Material {
		return this.$javaClass.SHEARS;
	}
	public static get SHEEP_SPAWN_EGG(): Material {
		return this.$javaClass.SHEEP_SPAWN_EGG;
	}
	public static get SHIELD(): Material {
		return this.$javaClass.SHIELD;
	}
	public static get SHULKER_BOX(): Material {
		return this.$javaClass.SHULKER_BOX;
	}
	public static get SHULKER_SHELL(): Material {
		return this.$javaClass.SHULKER_SHELL;
	}
	public static get SHULKER_SPAWN_EGG(): Material {
		return this.$javaClass.SHULKER_SPAWN_EGG;
	}
	public static get SILVERFISH_SPAWN_EGG(): Material {
		return this.$javaClass.SILVERFISH_SPAWN_EGG;
	}
	public static get SKELETON_HORSE_SPAWN_EGG(): Material {
		return this.$javaClass.SKELETON_HORSE_SPAWN_EGG;
	}
	public static get SKELETON_SKULL(): Material {
		return this.$javaClass.SKELETON_SKULL;
	}
	public static get SKELETON_SPAWN_EGG(): Material {
		return this.$javaClass.SKELETON_SPAWN_EGG;
	}
	public static get SKELETON_WALL_SKULL(): Material {
		return this.$javaClass.SKELETON_WALL_SKULL;
	}
	public static get SKULL_BANNER_PATTERN(): Material {
		return this.$javaClass.SKULL_BANNER_PATTERN;
	}
	public static get SLIME_BALL(): Material {
		return this.$javaClass.SLIME_BALL;
	}
	public static get SLIME_BLOCK(): Material {
		return this.$javaClass.SLIME_BLOCK;
	}
	public static get SLIME_SPAWN_EGG(): Material {
		return this.$javaClass.SLIME_SPAWN_EGG;
	}
	public static get SMITHING_TABLE(): Material {
		return this.$javaClass.SMITHING_TABLE;
	}
	public static get SMOKER(): Material {
		return this.$javaClass.SMOKER;
	}
	public static get SMOOTH_QUARTZ(): Material {
		return this.$javaClass.SMOOTH_QUARTZ;
	}
	public static get SMOOTH_QUARTZ_SLAB(): Material {
		return this.$javaClass.SMOOTH_QUARTZ_SLAB;
	}
	public static get SMOOTH_QUARTZ_STAIRS(): Material {
		return this.$javaClass.SMOOTH_QUARTZ_STAIRS;
	}
	public static get SMOOTH_RED_SANDSTONE(): Material {
		return this.$javaClass.SMOOTH_RED_SANDSTONE;
	}
	public static get SMOOTH_RED_SANDSTONE_SLAB(): Material {
		return this.$javaClass.SMOOTH_RED_SANDSTONE_SLAB;
	}
	public static get SMOOTH_RED_SANDSTONE_STAIRS(): Material {
		return this.$javaClass.SMOOTH_RED_SANDSTONE_STAIRS;
	}
	public static get SMOOTH_SANDSTONE(): Material {
		return this.$javaClass.SMOOTH_SANDSTONE;
	}
	public static get SMOOTH_SANDSTONE_SLAB(): Material {
		return this.$javaClass.SMOOTH_SANDSTONE_SLAB;
	}
	public static get SMOOTH_SANDSTONE_STAIRS(): Material {
		return this.$javaClass.SMOOTH_SANDSTONE_STAIRS;
	}
	public static get SMOOTH_STONE(): Material {
		return this.$javaClass.SMOOTH_STONE;
	}
	public static get SMOOTH_STONE_SLAB(): Material {
		return this.$javaClass.SMOOTH_STONE_SLAB;
	}
	public static get SNOW(): Material {
		return this.$javaClass.SNOW;
	}
	public static get SNOWBALL(): Material {
		return this.$javaClass.SNOWBALL;
	}
	public static get SNOW_BLOCK(): Material {
		return this.$javaClass.SNOW_BLOCK;
	}
	public static get SOUL_SAND(): Material {
		return this.$javaClass.SOUL_SAND;
	}
	public static get SPAWNER(): Material {
		return this.$javaClass.SPAWNER;
	}
	public static get SPECTRAL_ARROW(): Material {
		return this.$javaClass.SPECTRAL_ARROW;
	}
	public static get SPIDER_EYE(): Material {
		return this.$javaClass.SPIDER_EYE;
	}
	public static get SPIDER_SPAWN_EGG(): Material {
		return this.$javaClass.SPIDER_SPAWN_EGG;
	}
	public static get SPLASH_POTION(): Material {
		return this.$javaClass.SPLASH_POTION;
	}
	public static get SPONGE(): Material {
		return this.$javaClass.SPONGE;
	}
	public static get SPRUCE_BOAT(): Material {
		return this.$javaClass.SPRUCE_BOAT;
	}
	public static get SPRUCE_BUTTON(): Material {
		return this.$javaClass.SPRUCE_BUTTON;
	}
	public static get SPRUCE_DOOR(): Material {
		return this.$javaClass.SPRUCE_DOOR;
	}
	public static get SPRUCE_FENCE(): Material {
		return this.$javaClass.SPRUCE_FENCE;
	}
	public static get SPRUCE_FENCE_GATE(): Material {
		return this.$javaClass.SPRUCE_FENCE_GATE;
	}
	public static get SPRUCE_LEAVES(): Material {
		return this.$javaClass.SPRUCE_LEAVES;
	}
	public static get SPRUCE_LOG(): Material {
		return this.$javaClass.SPRUCE_LOG;
	}
	public static get SPRUCE_PLANKS(): Material {
		return this.$javaClass.SPRUCE_PLANKS;
	}
	public static get SPRUCE_PRESSURE_PLATE(): Material {
		return this.$javaClass.SPRUCE_PRESSURE_PLATE;
	}
	public static get SPRUCE_SAPLING(): Material {
		return this.$javaClass.SPRUCE_SAPLING;
	}
	public static get SPRUCE_SIGN(): Material {
		return this.$javaClass.SPRUCE_SIGN;
	}
	public static get SPRUCE_SLAB(): Material {
		return this.$javaClass.SPRUCE_SLAB;
	}
	public static get SPRUCE_STAIRS(): Material {
		return this.$javaClass.SPRUCE_STAIRS;
	}
	public static get SPRUCE_TRAPDOOR(): Material {
		return this.$javaClass.SPRUCE_TRAPDOOR;
	}
	public static get SPRUCE_WALL_SIGN(): Material {
		return this.$javaClass.SPRUCE_WALL_SIGN;
	}
	public static get SPRUCE_WOOD(): Material {
		return this.$javaClass.SPRUCE_WOOD;
	}
	public static get SQUID_SPAWN_EGG(): Material {
		return this.$javaClass.SQUID_SPAWN_EGG;
	}
	public static get STICK(): Material {
		return this.$javaClass.STICK;
	}
	public static get STICKY_PISTON(): Material {
		return this.$javaClass.STICKY_PISTON;
	}
	public static get STONE(): Material {
		return this.$javaClass.STONE;
	}
	public static get STONECUTTER(): Material {
		return this.$javaClass.STONECUTTER;
	}
	public static get STONE_AXE(): Material {
		return this.$javaClass.STONE_AXE;
	}
	public static get STONE_BRICKS(): Material {
		return this.$javaClass.STONE_BRICKS;
	}
	public static get STONE_BRICK_SLAB(): Material {
		return this.$javaClass.STONE_BRICK_SLAB;
	}
	public static get STONE_BRICK_STAIRS(): Material {
		return this.$javaClass.STONE_BRICK_STAIRS;
	}
	public static get STONE_BRICK_WALL(): Material {
		return this.$javaClass.STONE_BRICK_WALL;
	}
	public static get STONE_BUTTON(): Material {
		return this.$javaClass.STONE_BUTTON;
	}
	public static get STONE_HOE(): Material {
		return this.$javaClass.STONE_HOE;
	}
	public static get STONE_PICKAXE(): Material {
		return this.$javaClass.STONE_PICKAXE;
	}
	public static get STONE_PRESSURE_PLATE(): Material {
		return this.$javaClass.STONE_PRESSURE_PLATE;
	}
	public static get STONE_SHOVEL(): Material {
		return this.$javaClass.STONE_SHOVEL;
	}
	public static get STONE_SLAB(): Material {
		return this.$javaClass.STONE_SLAB;
	}
	public static get STONE_STAIRS(): Material {
		return this.$javaClass.STONE_STAIRS;
	}
	public static get STONE_SWORD(): Material {
		return this.$javaClass.STONE_SWORD;
	}
	public static get STRAY_SPAWN_EGG(): Material {
		return this.$javaClass.STRAY_SPAWN_EGG;
	}
	public static get STRING(): Material {
		return this.$javaClass.STRING;
	}
	public static get STRIPPED_ACACIA_LOG(): Material {
		return this.$javaClass.STRIPPED_ACACIA_LOG;
	}
	public static get STRIPPED_ACACIA_WOOD(): Material {
		return this.$javaClass.STRIPPED_ACACIA_WOOD;
	}
	public static get STRIPPED_BIRCH_LOG(): Material {
		return this.$javaClass.STRIPPED_BIRCH_LOG;
	}
	public static get STRIPPED_BIRCH_WOOD(): Material {
		return this.$javaClass.STRIPPED_BIRCH_WOOD;
	}
	public static get STRIPPED_DARK_OAK_LOG(): Material {
		return this.$javaClass.STRIPPED_DARK_OAK_LOG;
	}
	public static get STRIPPED_DARK_OAK_WOOD(): Material {
		return this.$javaClass.STRIPPED_DARK_OAK_WOOD;
	}
	public static get STRIPPED_JUNGLE_LOG(): Material {
		return this.$javaClass.STRIPPED_JUNGLE_LOG;
	}
	public static get STRIPPED_JUNGLE_WOOD(): Material {
		return this.$javaClass.STRIPPED_JUNGLE_WOOD;
	}
	public static get STRIPPED_OAK_LOG(): Material {
		return this.$javaClass.STRIPPED_OAK_LOG;
	}
	public static get STRIPPED_OAK_WOOD(): Material {
		return this.$javaClass.STRIPPED_OAK_WOOD;
	}
	public static get STRIPPED_SPRUCE_LOG(): Material {
		return this.$javaClass.STRIPPED_SPRUCE_LOG;
	}
	public static get STRIPPED_SPRUCE_WOOD(): Material {
		return this.$javaClass.STRIPPED_SPRUCE_WOOD;
	}
	public static get STRUCTURE_BLOCK(): Material {
		return this.$javaClass.STRUCTURE_BLOCK;
	}
	public static get STRUCTURE_VOID(): Material {
		return this.$javaClass.STRUCTURE_VOID;
	}
	public static get SUGAR(): Material {
		return this.$javaClass.SUGAR;
	}
	public static get SUGAR_CANE(): Material {
		return this.$javaClass.SUGAR_CANE;
	}
	public static get SUNFLOWER(): Material {
		return this.$javaClass.SUNFLOWER;
	}
	public static get SUSPICIOUS_STEW(): Material {
		return this.$javaClass.SUSPICIOUS_STEW;
	}
	public static get SWEET_BERRIES(): Material {
		return this.$javaClass.SWEET_BERRIES;
	}
	public static get SWEET_BERRY_BUSH(): Material {
		return this.$javaClass.SWEET_BERRY_BUSH;
	}
	public static get TALL_GRASS(): Material {
		return this.$javaClass.TALL_GRASS;
	}
	public static get TALL_SEAGRASS(): Material {
		return this.$javaClass.TALL_SEAGRASS;
	}
	public static get TERRACOTTA(): Material {
		return this.$javaClass.TERRACOTTA;
	}
	public static get TIPPED_ARROW(): Material {
		return this.$javaClass.TIPPED_ARROW;
	}
	public static get TNT(): Material {
		return this.$javaClass.TNT;
	}
	public static get TNT_MINECART(): Material {
		return this.$javaClass.TNT_MINECART;
	}
	public static get TORCH(): Material {
		return this.$javaClass.TORCH;
	}
	public static get TOTEM_OF_UNDYING(): Material {
		return this.$javaClass.TOTEM_OF_UNDYING;
	}
	public static get TRADER_LLAMA_SPAWN_EGG(): Material {
		return this.$javaClass.TRADER_LLAMA_SPAWN_EGG;
	}
	public static get TRAPPED_CHEST(): Material {
		return this.$javaClass.TRAPPED_CHEST;
	}
	public static get TRIDENT(): Material {
		return this.$javaClass.TRIDENT;
	}
	public static get TRIPWIRE(): Material {
		return this.$javaClass.TRIPWIRE;
	}
	public static get TRIPWIRE_HOOK(): Material {
		return this.$javaClass.TRIPWIRE_HOOK;
	}
	public static get TROPICAL_FISH(): Material {
		return this.$javaClass.TROPICAL_FISH;
	}
	public static get TROPICAL_FISH_BUCKET(): Material {
		return this.$javaClass.TROPICAL_FISH_BUCKET;
	}
	public static get TROPICAL_FISH_SPAWN_EGG(): Material {
		return this.$javaClass.TROPICAL_FISH_SPAWN_EGG;
	}
	public static get TUBE_CORAL(): Material {
		return this.$javaClass.TUBE_CORAL;
	}
	public static get TUBE_CORAL_BLOCK(): Material {
		return this.$javaClass.TUBE_CORAL_BLOCK;
	}
	public static get TUBE_CORAL_FAN(): Material {
		return this.$javaClass.TUBE_CORAL_FAN;
	}
	public static get TUBE_CORAL_WALL_FAN(): Material {
		return this.$javaClass.TUBE_CORAL_WALL_FAN;
	}
	public static get TURTLE_EGG(): Material {
		return this.$javaClass.TURTLE_EGG;
	}
	public static get TURTLE_HELMET(): Material {
		return this.$javaClass.TURTLE_HELMET;
	}
	public static get TURTLE_SPAWN_EGG(): Material {
		return this.$javaClass.TURTLE_SPAWN_EGG;
	}
	public static get VEX_SPAWN_EGG(): Material {
		return this.$javaClass.VEX_SPAWN_EGG;
	}
	public static get VILLAGER_SPAWN_EGG(): Material {
		return this.$javaClass.VILLAGER_SPAWN_EGG;
	}
	public static get VINDICATOR_SPAWN_EGG(): Material {
		return this.$javaClass.VINDICATOR_SPAWN_EGG;
	}
	public static get VINE(): Material {
		return this.$javaClass.VINE;
	}
	public static get VOID_AIR(): Material {
		return this.$javaClass.VOID_AIR;
	}
	public static get WALL_TORCH(): Material {
		return this.$javaClass.WALL_TORCH;
	}
	public static get WANDERING_TRADER_SPAWN_EGG(): Material {
		return this.$javaClass.WANDERING_TRADER_SPAWN_EGG;
	}
	public static get WATER(): Material {
		return this.$javaClass.WATER;
	}
	public static get WATER_BUCKET(): Material {
		return this.$javaClass.WATER_BUCKET;
	}
	public static get WET_SPONGE(): Material {
		return this.$javaClass.WET_SPONGE;
	}
	public static get WHEAT(): Material {
		return this.$javaClass.WHEAT;
	}
	public static get WHEAT_SEEDS(): Material {
		return this.$javaClass.WHEAT_SEEDS;
	}
	public static get WHITE_BANNER(): Material {
		return this.$javaClass.WHITE_BANNER;
	}
	public static get WHITE_BED(): Material {
		return this.$javaClass.WHITE_BED;
	}
	public static get WHITE_CARPET(): Material {
		return this.$javaClass.WHITE_CARPET;
	}
	public static get WHITE_CONCRETE(): Material {
		return this.$javaClass.WHITE_CONCRETE;
	}
	public static get WHITE_CONCRETE_POWDER(): Material {
		return this.$javaClass.WHITE_CONCRETE_POWDER;
	}
	public static get WHITE_DYE(): Material {
		return this.$javaClass.WHITE_DYE;
	}
	public static get WHITE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.WHITE_GLAZED_TERRACOTTA;
	}
	public static get WHITE_SHULKER_BOX(): Material {
		return this.$javaClass.WHITE_SHULKER_BOX;
	}
	public static get WHITE_STAINED_GLASS(): Material {
		return this.$javaClass.WHITE_STAINED_GLASS;
	}
	public static get WHITE_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.WHITE_STAINED_GLASS_PANE;
	}
	public static get WHITE_TERRACOTTA(): Material {
		return this.$javaClass.WHITE_TERRACOTTA;
	}
	public static get WHITE_TULIP(): Material {
		return this.$javaClass.WHITE_TULIP;
	}
	public static get WHITE_WALL_BANNER(): Material {
		return this.$javaClass.WHITE_WALL_BANNER;
	}
	public static get WHITE_WOOL(): Material {
		return this.$javaClass.WHITE_WOOL;
	}
	public static get WITCH_SPAWN_EGG(): Material {
		return this.$javaClass.WITCH_SPAWN_EGG;
	}
	public static get WITHER_ROSE(): Material {
		return this.$javaClass.WITHER_ROSE;
	}
	public static get WITHER_SKELETON_SKULL(): Material {
		return this.$javaClass.WITHER_SKELETON_SKULL;
	}
	public static get WITHER_SKELETON_SPAWN_EGG(): Material {
		return this.$javaClass.WITHER_SKELETON_SPAWN_EGG;
	}
	public static get WITHER_SKELETON_WALL_SKULL(): Material {
		return this.$javaClass.WITHER_SKELETON_WALL_SKULL;
	}
	public static get WOLF_SPAWN_EGG(): Material {
		return this.$javaClass.WOLF_SPAWN_EGG;
	}
	public static get WOODEN_AXE(): Material {
		return this.$javaClass.WOODEN_AXE;
	}
	public static get WOODEN_HOE(): Material {
		return this.$javaClass.WOODEN_HOE;
	}
	public static get WOODEN_PICKAXE(): Material {
		return this.$javaClass.WOODEN_PICKAXE;
	}
	public static get WOODEN_SHOVEL(): Material {
		return this.$javaClass.WOODEN_SHOVEL;
	}
	public static get WOODEN_SWORD(): Material {
		return this.$javaClass.WOODEN_SWORD;
	}
	public static get WRITABLE_BOOK(): Material {
		return this.$javaClass.WRITABLE_BOOK;
	}
	public static get WRITTEN_BOOK(): Material {
		return this.$javaClass.WRITTEN_BOOK;
	}
	public static get YELLOW_BANNER(): Material {
		return this.$javaClass.YELLOW_BANNER;
	}
	public static get YELLOW_BED(): Material {
		return this.$javaClass.YELLOW_BED;
	}
	public static get YELLOW_CARPET(): Material {
		return this.$javaClass.YELLOW_CARPET;
	}
	public static get YELLOW_CONCRETE(): Material {
		return this.$javaClass.YELLOW_CONCRETE;
	}
	public static get YELLOW_CONCRETE_POWDER(): Material {
		return this.$javaClass.YELLOW_CONCRETE_POWDER;
	}
	public static get YELLOW_DYE(): Material {
		return this.$javaClass.YELLOW_DYE;
	}
	public static get YELLOW_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.YELLOW_GLAZED_TERRACOTTA;
	}
	public static get YELLOW_SHULKER_BOX(): Material {
		return this.$javaClass.YELLOW_SHULKER_BOX;
	}
	public static get YELLOW_STAINED_GLASS(): Material {
		return this.$javaClass.YELLOW_STAINED_GLASS;
	}
	public static get YELLOW_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.YELLOW_STAINED_GLASS_PANE;
	}
	public static get YELLOW_TERRACOTTA(): Material {
		return this.$javaClass.YELLOW_TERRACOTTA;
	}
	public static get YELLOW_WALL_BANNER(): Material {
		return this.$javaClass.YELLOW_WALL_BANNER;
	}
	public static get YELLOW_WOOL(): Material {
		return this.$javaClass.YELLOW_WOOL;
	}
	public static get ZOMBIE_HEAD(): Material {
		return this.$javaClass.ZOMBIE_HEAD;
	}
	public static get ZOMBIE_HORSE_SPAWN_EGG(): Material {
		return this.$javaClass.ZOMBIE_HORSE_SPAWN_EGG;
	}
	public static get ZOMBIE_PIGMAN_SPAWN_EGG(): Material {
		return this.$javaClass.ZOMBIE_PIGMAN_SPAWN_EGG;
	}
	public static get ZOMBIE_SPAWN_EGG(): Material {
		return this.$javaClass.ZOMBIE_SPAWN_EGG;
	}
	public static get ZOMBIE_VILLAGER_SPAWN_EGG(): Material {
		return this.$javaClass.ZOMBIE_VILLAGER_SPAWN_EGG;
	}
	public static get ZOMBIE_WALL_HEAD(): Material {
		return this.$javaClass.ZOMBIE_WALL_HEAD;
	}
	public static get LEGACY_AIR(): Material {
		return this.$javaClass.LEGACY_AIR;
	}
	public static get LEGACY_STONE(): Material {
		return this.$javaClass.LEGACY_STONE;
	}
	public static get LEGACY_GRASS(): Material {
		return this.$javaClass.LEGACY_GRASS;
	}
	public static get LEGACY_DIRT(): Material {
		return this.$javaClass.LEGACY_DIRT;
	}
	public static get LEGACY_COBBLESTONE(): Material {
		return this.$javaClass.LEGACY_COBBLESTONE;
	}
	public static get LEGACY_WOOD(): Material {
		return this.$javaClass.LEGACY_WOOD;
	}
	public static get LEGACY_SAPLING(): Material {
		return this.$javaClass.LEGACY_SAPLING;
	}
	public static get LEGACY_BEDROCK(): Material {
		return this.$javaClass.LEGACY_BEDROCK;
	}
	public static get LEGACY_WATER(): Material {
		return this.$javaClass.LEGACY_WATER;
	}
	public static get LEGACY_STATIONARY_WATER(): Material {
		return this.$javaClass.LEGACY_STATIONARY_WATER;
	}
	public static get LEGACY_LAVA(): Material {
		return this.$javaClass.LEGACY_LAVA;
	}
	public static get LEGACY_STATIONARY_LAVA(): Material {
		return this.$javaClass.LEGACY_STATIONARY_LAVA;
	}
	public static get LEGACY_SAND(): Material {
		return this.$javaClass.LEGACY_SAND;
	}
	public static get LEGACY_GRAVEL(): Material {
		return this.$javaClass.LEGACY_GRAVEL;
	}
	public static get LEGACY_GOLD_ORE(): Material {
		return this.$javaClass.LEGACY_GOLD_ORE;
	}
	public static get LEGACY_IRON_ORE(): Material {
		return this.$javaClass.LEGACY_IRON_ORE;
	}
	public static get LEGACY_COAL_ORE(): Material {
		return this.$javaClass.LEGACY_COAL_ORE;
	}
	public static get LEGACY_LOG(): Material {
		return this.$javaClass.LEGACY_LOG;
	}
	public static get LEGACY_LEAVES(): Material {
		return this.$javaClass.LEGACY_LEAVES;
	}
	public static get LEGACY_SPONGE(): Material {
		return this.$javaClass.LEGACY_SPONGE;
	}
	public static get LEGACY_GLASS(): Material {
		return this.$javaClass.LEGACY_GLASS;
	}
	public static get LEGACY_LAPIS_ORE(): Material {
		return this.$javaClass.LEGACY_LAPIS_ORE;
	}
	public static get LEGACY_LAPIS_BLOCK(): Material {
		return this.$javaClass.LEGACY_LAPIS_BLOCK;
	}
	public static get LEGACY_DISPENSER(): Material {
		return this.$javaClass.LEGACY_DISPENSER;
	}
	public static get LEGACY_SANDSTONE(): Material {
		return this.$javaClass.LEGACY_SANDSTONE;
	}
	public static get LEGACY_NOTE_BLOCK(): Material {
		return this.$javaClass.LEGACY_NOTE_BLOCK;
	}
	public static get LEGACY_BED_BLOCK(): Material {
		return this.$javaClass.LEGACY_BED_BLOCK;
	}
	public static get LEGACY_POWERED_RAIL(): Material {
		return this.$javaClass.LEGACY_POWERED_RAIL;
	}
	public static get LEGACY_DETECTOR_RAIL(): Material {
		return this.$javaClass.LEGACY_DETECTOR_RAIL;
	}
	public static get LEGACY_PISTON_STICKY_BASE(): Material {
		return this.$javaClass.LEGACY_PISTON_STICKY_BASE;
	}
	public static get LEGACY_WEB(): Material {
		return this.$javaClass.LEGACY_WEB;
	}
	public static get LEGACY_LONG_GRASS(): Material {
		return this.$javaClass.LEGACY_LONG_GRASS;
	}
	public static get LEGACY_DEAD_BUSH(): Material {
		return this.$javaClass.LEGACY_DEAD_BUSH;
	}
	public static get LEGACY_PISTON_BASE(): Material {
		return this.$javaClass.LEGACY_PISTON_BASE;
	}
	public static get LEGACY_PISTON_EXTENSION(): Material {
		return this.$javaClass.LEGACY_PISTON_EXTENSION;
	}
	public static get LEGACY_WOOL(): Material {
		return this.$javaClass.LEGACY_WOOL;
	}
	public static get LEGACY_PISTON_MOVING_PIECE(): Material {
		return this.$javaClass.LEGACY_PISTON_MOVING_PIECE;
	}
	public static get LEGACY_YELLOW_FLOWER(): Material {
		return this.$javaClass.LEGACY_YELLOW_FLOWER;
	}
	public static get LEGACY_RED_ROSE(): Material {
		return this.$javaClass.LEGACY_RED_ROSE;
	}
	public static get LEGACY_BROWN_MUSHROOM(): Material {
		return this.$javaClass.LEGACY_BROWN_MUSHROOM;
	}
	public static get LEGACY_RED_MUSHROOM(): Material {
		return this.$javaClass.LEGACY_RED_MUSHROOM;
	}
	public static get LEGACY_GOLD_BLOCK(): Material {
		return this.$javaClass.LEGACY_GOLD_BLOCK;
	}
	public static get LEGACY_IRON_BLOCK(): Material {
		return this.$javaClass.LEGACY_IRON_BLOCK;
	}
	public static get LEGACY_DOUBLE_STEP(): Material {
		return this.$javaClass.LEGACY_DOUBLE_STEP;
	}
	public static get LEGACY_STEP(): Material {
		return this.$javaClass.LEGACY_STEP;
	}
	public static get LEGACY_BRICK(): Material {
		return this.$javaClass.LEGACY_BRICK;
	}
	public static get LEGACY_TNT(): Material {
		return this.$javaClass.LEGACY_TNT;
	}
	public static get LEGACY_BOOKSHELF(): Material {
		return this.$javaClass.LEGACY_BOOKSHELF;
	}
	public static get LEGACY_MOSSY_COBBLESTONE(): Material {
		return this.$javaClass.LEGACY_MOSSY_COBBLESTONE;
	}
	public static get LEGACY_OBSIDIAN(): Material {
		return this.$javaClass.LEGACY_OBSIDIAN;
	}
	public static get LEGACY_TORCH(): Material {
		return this.$javaClass.LEGACY_TORCH;
	}
	public static get LEGACY_FIRE(): Material {
		return this.$javaClass.LEGACY_FIRE;
	}
	public static get LEGACY_MOB_SPAWNER(): Material {
		return this.$javaClass.LEGACY_MOB_SPAWNER;
	}
	public static get LEGACY_WOOD_STAIRS(): Material {
		return this.$javaClass.LEGACY_WOOD_STAIRS;
	}
	public static get LEGACY_CHEST(): Material {
		return this.$javaClass.LEGACY_CHEST;
	}
	public static get LEGACY_REDSTONE_WIRE(): Material {
		return this.$javaClass.LEGACY_REDSTONE_WIRE;
	}
	public static get LEGACY_DIAMOND_ORE(): Material {
		return this.$javaClass.LEGACY_DIAMOND_ORE;
	}
	public static get LEGACY_DIAMOND_BLOCK(): Material {
		return this.$javaClass.LEGACY_DIAMOND_BLOCK;
	}
	public static get LEGACY_WORKBENCH(): Material {
		return this.$javaClass.LEGACY_WORKBENCH;
	}
	public static get LEGACY_CROPS(): Material {
		return this.$javaClass.LEGACY_CROPS;
	}
	public static get LEGACY_SOIL(): Material {
		return this.$javaClass.LEGACY_SOIL;
	}
	public static get LEGACY_FURNACE(): Material {
		return this.$javaClass.LEGACY_FURNACE;
	}
	public static get LEGACY_BURNING_FURNACE(): Material {
		return this.$javaClass.LEGACY_BURNING_FURNACE;
	}
	public static get LEGACY_SIGN_POST(): Material {
		return this.$javaClass.LEGACY_SIGN_POST;
	}
	public static get LEGACY_WOODEN_DOOR(): Material {
		return this.$javaClass.LEGACY_WOODEN_DOOR;
	}
	public static get LEGACY_LADDER(): Material {
		return this.$javaClass.LEGACY_LADDER;
	}
	public static get LEGACY_RAILS(): Material {
		return this.$javaClass.LEGACY_RAILS;
	}
	public static get LEGACY_COBBLESTONE_STAIRS(): Material {
		return this.$javaClass.LEGACY_COBBLESTONE_STAIRS;
	}
	public static get LEGACY_WALL_SIGN(): Material {
		return this.$javaClass.LEGACY_WALL_SIGN;
	}
	public static get LEGACY_LEVER(): Material {
		return this.$javaClass.LEGACY_LEVER;
	}
	public static get LEGACY_STONE_PLATE(): Material {
		return this.$javaClass.LEGACY_STONE_PLATE;
	}
	public static get LEGACY_IRON_DOOR_BLOCK(): Material {
		return this.$javaClass.LEGACY_IRON_DOOR_BLOCK;
	}
	public static get LEGACY_WOOD_PLATE(): Material {
		return this.$javaClass.LEGACY_WOOD_PLATE;
	}
	public static get LEGACY_REDSTONE_ORE(): Material {
		return this.$javaClass.LEGACY_REDSTONE_ORE;
	}
	public static get LEGACY_GLOWING_REDSTONE_ORE(): Material {
		return this.$javaClass.LEGACY_GLOWING_REDSTONE_ORE;
	}
	public static get LEGACY_REDSTONE_TORCH_OFF(): Material {
		return this.$javaClass.LEGACY_REDSTONE_TORCH_OFF;
	}
	public static get LEGACY_REDSTONE_TORCH_ON(): Material {
		return this.$javaClass.LEGACY_REDSTONE_TORCH_ON;
	}
	public static get LEGACY_STONE_BUTTON(): Material {
		return this.$javaClass.LEGACY_STONE_BUTTON;
	}
	public static get LEGACY_SNOW(): Material {
		return this.$javaClass.LEGACY_SNOW;
	}
	public static get LEGACY_ICE(): Material {
		return this.$javaClass.LEGACY_ICE;
	}
	public static get LEGACY_SNOW_BLOCK(): Material {
		return this.$javaClass.LEGACY_SNOW_BLOCK;
	}
	public static get LEGACY_CACTUS(): Material {
		return this.$javaClass.LEGACY_CACTUS;
	}
	public static get LEGACY_CLAY(): Material {
		return this.$javaClass.LEGACY_CLAY;
	}
	public static get LEGACY_SUGAR_CANE_BLOCK(): Material {
		return this.$javaClass.LEGACY_SUGAR_CANE_BLOCK;
	}
	public static get LEGACY_JUKEBOX(): Material {
		return this.$javaClass.LEGACY_JUKEBOX;
	}
	public static get LEGACY_FENCE(): Material {
		return this.$javaClass.LEGACY_FENCE;
	}
	public static get LEGACY_PUMPKIN(): Material {
		return this.$javaClass.LEGACY_PUMPKIN;
	}
	public static get LEGACY_NETHERRACK(): Material {
		return this.$javaClass.LEGACY_NETHERRACK;
	}
	public static get LEGACY_SOUL_SAND(): Material {
		return this.$javaClass.LEGACY_SOUL_SAND;
	}
	public static get LEGACY_GLOWSTONE(): Material {
		return this.$javaClass.LEGACY_GLOWSTONE;
	}
	public static get LEGACY_PORTAL(): Material {
		return this.$javaClass.LEGACY_PORTAL;
	}
	public static get LEGACY_JACK_O_LANTERN(): Material {
		return this.$javaClass.LEGACY_JACK_O_LANTERN;
	}
	public static get LEGACY_CAKE_BLOCK(): Material {
		return this.$javaClass.LEGACY_CAKE_BLOCK;
	}
	public static get LEGACY_DIODE_BLOCK_OFF(): Material {
		return this.$javaClass.LEGACY_DIODE_BLOCK_OFF;
	}
	public static get LEGACY_DIODE_BLOCK_ON(): Material {
		return this.$javaClass.LEGACY_DIODE_BLOCK_ON;
	}
	public static get LEGACY_STAINED_GLASS(): Material {
		return this.$javaClass.LEGACY_STAINED_GLASS;
	}
	public static get LEGACY_TRAP_DOOR(): Material {
		return this.$javaClass.LEGACY_TRAP_DOOR;
	}
	public static get LEGACY_MONSTER_EGGS(): Material {
		return this.$javaClass.LEGACY_MONSTER_EGGS;
	}
	public static get LEGACY_SMOOTH_BRICK(): Material {
		return this.$javaClass.LEGACY_SMOOTH_BRICK;
	}
	public static get LEGACY_HUGE_MUSHROOM_1(): Material {
		return this.$javaClass.LEGACY_HUGE_MUSHROOM_1;
	}
	public static get LEGACY_HUGE_MUSHROOM_2(): Material {
		return this.$javaClass.LEGACY_HUGE_MUSHROOM_2;
	}
	public static get LEGACY_IRON_FENCE(): Material {
		return this.$javaClass.LEGACY_IRON_FENCE;
	}
	public static get LEGACY_THIN_GLASS(): Material {
		return this.$javaClass.LEGACY_THIN_GLASS;
	}
	public static get LEGACY_MELON_BLOCK(): Material {
		return this.$javaClass.LEGACY_MELON_BLOCK;
	}
	public static get LEGACY_PUMPKIN_STEM(): Material {
		return this.$javaClass.LEGACY_PUMPKIN_STEM;
	}
	public static get LEGACY_MELON_STEM(): Material {
		return this.$javaClass.LEGACY_MELON_STEM;
	}
	public static get LEGACY_VINE(): Material {
		return this.$javaClass.LEGACY_VINE;
	}
	public static get LEGACY_FENCE_GATE(): Material {
		return this.$javaClass.LEGACY_FENCE_GATE;
	}
	public static get LEGACY_BRICK_STAIRS(): Material {
		return this.$javaClass.LEGACY_BRICK_STAIRS;
	}
	public static get LEGACY_SMOOTH_STAIRS(): Material {
		return this.$javaClass.LEGACY_SMOOTH_STAIRS;
	}
	public static get LEGACY_MYCEL(): Material {
		return this.$javaClass.LEGACY_MYCEL;
	}
	public static get LEGACY_WATER_LILY(): Material {
		return this.$javaClass.LEGACY_WATER_LILY;
	}
	public static get LEGACY_NETHER_BRICK(): Material {
		return this.$javaClass.LEGACY_NETHER_BRICK;
	}
	public static get LEGACY_NETHER_FENCE(): Material {
		return this.$javaClass.LEGACY_NETHER_FENCE;
	}
	public static get LEGACY_NETHER_BRICK_STAIRS(): Material {
		return this.$javaClass.LEGACY_NETHER_BRICK_STAIRS;
	}
	public static get LEGACY_NETHER_WARTS(): Material {
		return this.$javaClass.LEGACY_NETHER_WARTS;
	}
	public static get LEGACY_ENCHANTMENT_TABLE(): Material {
		return this.$javaClass.LEGACY_ENCHANTMENT_TABLE;
	}
	public static get LEGACY_BREWING_STAND(): Material {
		return this.$javaClass.LEGACY_BREWING_STAND;
	}
	public static get LEGACY_CAULDRON(): Material {
		return this.$javaClass.LEGACY_CAULDRON;
	}
	public static get LEGACY_ENDER_PORTAL(): Material {
		return this.$javaClass.LEGACY_ENDER_PORTAL;
	}
	public static get LEGACY_ENDER_PORTAL_FRAME(): Material {
		return this.$javaClass.LEGACY_ENDER_PORTAL_FRAME;
	}
	public static get LEGACY_ENDER_STONE(): Material {
		return this.$javaClass.LEGACY_ENDER_STONE;
	}
	public static get LEGACY_DRAGON_EGG(): Material {
		return this.$javaClass.LEGACY_DRAGON_EGG;
	}
	public static get LEGACY_REDSTONE_LAMP_OFF(): Material {
		return this.$javaClass.LEGACY_REDSTONE_LAMP_OFF;
	}
	public static get LEGACY_REDSTONE_LAMP_ON(): Material {
		return this.$javaClass.LEGACY_REDSTONE_LAMP_ON;
	}
	public static get LEGACY_WOOD_DOUBLE_STEP(): Material {
		return this.$javaClass.LEGACY_WOOD_DOUBLE_STEP;
	}
	public static get LEGACY_WOOD_STEP(): Material {
		return this.$javaClass.LEGACY_WOOD_STEP;
	}
	public static get LEGACY_COCOA(): Material {
		return this.$javaClass.LEGACY_COCOA;
	}
	public static get LEGACY_SANDSTONE_STAIRS(): Material {
		return this.$javaClass.LEGACY_SANDSTONE_STAIRS;
	}
	public static get LEGACY_EMERALD_ORE(): Material {
		return this.$javaClass.LEGACY_EMERALD_ORE;
	}
	public static get LEGACY_ENDER_CHEST(): Material {
		return this.$javaClass.LEGACY_ENDER_CHEST;
	}
	public static get LEGACY_TRIPWIRE_HOOK(): Material {
		return this.$javaClass.LEGACY_TRIPWIRE_HOOK;
	}
	public static get LEGACY_TRIPWIRE(): Material {
		return this.$javaClass.LEGACY_TRIPWIRE;
	}
	public static get LEGACY_EMERALD_BLOCK(): Material {
		return this.$javaClass.LEGACY_EMERALD_BLOCK;
	}
	public static get LEGACY_SPRUCE_WOOD_STAIRS(): Material {
		return this.$javaClass.LEGACY_SPRUCE_WOOD_STAIRS;
	}
	public static get LEGACY_BIRCH_WOOD_STAIRS(): Material {
		return this.$javaClass.LEGACY_BIRCH_WOOD_STAIRS;
	}
	public static get LEGACY_JUNGLE_WOOD_STAIRS(): Material {
		return this.$javaClass.LEGACY_JUNGLE_WOOD_STAIRS;
	}
	public static get LEGACY_COMMAND(): Material {
		return this.$javaClass.LEGACY_COMMAND;
	}
	public static get LEGACY_BEACON(): Material {
		return this.$javaClass.LEGACY_BEACON;
	}
	public static get LEGACY_COBBLE_WALL(): Material {
		return this.$javaClass.LEGACY_COBBLE_WALL;
	}
	public static get LEGACY_FLOWER_POT(): Material {
		return this.$javaClass.LEGACY_FLOWER_POT;
	}
	public static get LEGACY_CARROT(): Material {
		return this.$javaClass.LEGACY_CARROT;
	}
	public static get LEGACY_POTATO(): Material {
		return this.$javaClass.LEGACY_POTATO;
	}
	public static get LEGACY_WOOD_BUTTON(): Material {
		return this.$javaClass.LEGACY_WOOD_BUTTON;
	}
	public static get LEGACY_SKULL(): Material {
		return this.$javaClass.LEGACY_SKULL;
	}
	public static get LEGACY_ANVIL(): Material {
		return this.$javaClass.LEGACY_ANVIL;
	}
	public static get LEGACY_TRAPPED_CHEST(): Material {
		return this.$javaClass.LEGACY_TRAPPED_CHEST;
	}
	public static get LEGACY_GOLD_PLATE(): Material {
		return this.$javaClass.LEGACY_GOLD_PLATE;
	}
	public static get LEGACY_IRON_PLATE(): Material {
		return this.$javaClass.LEGACY_IRON_PLATE;
	}
	public static get LEGACY_REDSTONE_COMPARATOR_OFF(): Material {
		return this.$javaClass.LEGACY_REDSTONE_COMPARATOR_OFF;
	}
	public static get LEGACY_REDSTONE_COMPARATOR_ON(): Material {
		return this.$javaClass.LEGACY_REDSTONE_COMPARATOR_ON;
	}
	public static get LEGACY_DAYLIGHT_DETECTOR(): Material {
		return this.$javaClass.LEGACY_DAYLIGHT_DETECTOR;
	}
	public static get LEGACY_REDSTONE_BLOCK(): Material {
		return this.$javaClass.LEGACY_REDSTONE_BLOCK;
	}
	public static get LEGACY_QUARTZ_ORE(): Material {
		return this.$javaClass.LEGACY_QUARTZ_ORE;
	}
	public static get LEGACY_HOPPER(): Material {
		return this.$javaClass.LEGACY_HOPPER;
	}
	public static get LEGACY_QUARTZ_BLOCK(): Material {
		return this.$javaClass.LEGACY_QUARTZ_BLOCK;
	}
	public static get LEGACY_QUARTZ_STAIRS(): Material {
		return this.$javaClass.LEGACY_QUARTZ_STAIRS;
	}
	public static get LEGACY_ACTIVATOR_RAIL(): Material {
		return this.$javaClass.LEGACY_ACTIVATOR_RAIL;
	}
	public static get LEGACY_DROPPER(): Material {
		return this.$javaClass.LEGACY_DROPPER;
	}
	public static get LEGACY_STAINED_CLAY(): Material {
		return this.$javaClass.LEGACY_STAINED_CLAY;
	}
	public static get LEGACY_STAINED_GLASS_PANE(): Material {
		return this.$javaClass.LEGACY_STAINED_GLASS_PANE;
	}
	public static get LEGACY_LEAVES_2(): Material {
		return this.$javaClass.LEGACY_LEAVES_2;
	}
	public static get LEGACY_LOG_2(): Material {
		return this.$javaClass.LEGACY_LOG_2;
	}
	public static get LEGACY_ACACIA_STAIRS(): Material {
		return this.$javaClass.LEGACY_ACACIA_STAIRS;
	}
	public static get LEGACY_DARK_OAK_STAIRS(): Material {
		return this.$javaClass.LEGACY_DARK_OAK_STAIRS;
	}
	public static get LEGACY_SLIME_BLOCK(): Material {
		return this.$javaClass.LEGACY_SLIME_BLOCK;
	}
	public static get LEGACY_BARRIER(): Material {
		return this.$javaClass.LEGACY_BARRIER;
	}
	public static get LEGACY_IRON_TRAPDOOR(): Material {
		return this.$javaClass.LEGACY_IRON_TRAPDOOR;
	}
	public static get LEGACY_PRISMARINE(): Material {
		return this.$javaClass.LEGACY_PRISMARINE;
	}
	public static get LEGACY_SEA_LANTERN(): Material {
		return this.$javaClass.LEGACY_SEA_LANTERN;
	}
	public static get LEGACY_HAY_BLOCK(): Material {
		return this.$javaClass.LEGACY_HAY_BLOCK;
	}
	public static get LEGACY_CARPET(): Material {
		return this.$javaClass.LEGACY_CARPET;
	}
	public static get LEGACY_HARD_CLAY(): Material {
		return this.$javaClass.LEGACY_HARD_CLAY;
	}
	public static get LEGACY_COAL_BLOCK(): Material {
		return this.$javaClass.LEGACY_COAL_BLOCK;
	}
	public static get LEGACY_PACKED_ICE(): Material {
		return this.$javaClass.LEGACY_PACKED_ICE;
	}
	public static get LEGACY_DOUBLE_PLANT(): Material {
		return this.$javaClass.LEGACY_DOUBLE_PLANT;
	}
	public static get LEGACY_STANDING_BANNER(): Material {
		return this.$javaClass.LEGACY_STANDING_BANNER;
	}
	public static get LEGACY_WALL_BANNER(): Material {
		return this.$javaClass.LEGACY_WALL_BANNER;
	}
	public static get LEGACY_DAYLIGHT_DETECTOR_INVERTED(): Material {
		return this.$javaClass.LEGACY_DAYLIGHT_DETECTOR_INVERTED;
	}
	public static get LEGACY_RED_SANDSTONE(): Material {
		return this.$javaClass.LEGACY_RED_SANDSTONE;
	}
	public static get LEGACY_RED_SANDSTONE_STAIRS(): Material {
		return this.$javaClass.LEGACY_RED_SANDSTONE_STAIRS;
	}
	public static get LEGACY_DOUBLE_STONE_SLAB2(): Material {
		return this.$javaClass.LEGACY_DOUBLE_STONE_SLAB2;
	}
	public static get LEGACY_STONE_SLAB2(): Material {
		return this.$javaClass.LEGACY_STONE_SLAB2;
	}
	public static get LEGACY_SPRUCE_FENCE_GATE(): Material {
		return this.$javaClass.LEGACY_SPRUCE_FENCE_GATE;
	}
	public static get LEGACY_BIRCH_FENCE_GATE(): Material {
		return this.$javaClass.LEGACY_BIRCH_FENCE_GATE;
	}
	public static get LEGACY_JUNGLE_FENCE_GATE(): Material {
		return this.$javaClass.LEGACY_JUNGLE_FENCE_GATE;
	}
	public static get LEGACY_DARK_OAK_FENCE_GATE(): Material {
		return this.$javaClass.LEGACY_DARK_OAK_FENCE_GATE;
	}
	public static get LEGACY_ACACIA_FENCE_GATE(): Material {
		return this.$javaClass.LEGACY_ACACIA_FENCE_GATE;
	}
	public static get LEGACY_SPRUCE_FENCE(): Material {
		return this.$javaClass.LEGACY_SPRUCE_FENCE;
	}
	public static get LEGACY_BIRCH_FENCE(): Material {
		return this.$javaClass.LEGACY_BIRCH_FENCE;
	}
	public static get LEGACY_JUNGLE_FENCE(): Material {
		return this.$javaClass.LEGACY_JUNGLE_FENCE;
	}
	public static get LEGACY_DARK_OAK_FENCE(): Material {
		return this.$javaClass.LEGACY_DARK_OAK_FENCE;
	}
	public static get LEGACY_ACACIA_FENCE(): Material {
		return this.$javaClass.LEGACY_ACACIA_FENCE;
	}
	public static get LEGACY_SPRUCE_DOOR(): Material {
		return this.$javaClass.LEGACY_SPRUCE_DOOR;
	}
	public static get LEGACY_BIRCH_DOOR(): Material {
		return this.$javaClass.LEGACY_BIRCH_DOOR;
	}
	public static get LEGACY_JUNGLE_DOOR(): Material {
		return this.$javaClass.LEGACY_JUNGLE_DOOR;
	}
	public static get LEGACY_ACACIA_DOOR(): Material {
		return this.$javaClass.LEGACY_ACACIA_DOOR;
	}
	public static get LEGACY_DARK_OAK_DOOR(): Material {
		return this.$javaClass.LEGACY_DARK_OAK_DOOR;
	}
	public static get LEGACY_END_ROD(): Material {
		return this.$javaClass.LEGACY_END_ROD;
	}
	public static get LEGACY_CHORUS_PLANT(): Material {
		return this.$javaClass.LEGACY_CHORUS_PLANT;
	}
	public static get LEGACY_CHORUS_FLOWER(): Material {
		return this.$javaClass.LEGACY_CHORUS_FLOWER;
	}
	public static get LEGACY_PURPUR_BLOCK(): Material {
		return this.$javaClass.LEGACY_PURPUR_BLOCK;
	}
	public static get LEGACY_PURPUR_PILLAR(): Material {
		return this.$javaClass.LEGACY_PURPUR_PILLAR;
	}
	public static get LEGACY_PURPUR_STAIRS(): Material {
		return this.$javaClass.LEGACY_PURPUR_STAIRS;
	}
	public static get LEGACY_PURPUR_DOUBLE_SLAB(): Material {
		return this.$javaClass.LEGACY_PURPUR_DOUBLE_SLAB;
	}
	public static get LEGACY_PURPUR_SLAB(): Material {
		return this.$javaClass.LEGACY_PURPUR_SLAB;
	}
	public static get LEGACY_END_BRICKS(): Material {
		return this.$javaClass.LEGACY_END_BRICKS;
	}
	public static get LEGACY_BEETROOT_BLOCK(): Material {
		return this.$javaClass.LEGACY_BEETROOT_BLOCK;
	}
	public static get LEGACY_GRASS_PATH(): Material {
		return this.$javaClass.LEGACY_GRASS_PATH;
	}
	public static get LEGACY_END_GATEWAY(): Material {
		return this.$javaClass.LEGACY_END_GATEWAY;
	}
	public static get LEGACY_COMMAND_REPEATING(): Material {
		return this.$javaClass.LEGACY_COMMAND_REPEATING;
	}
	public static get LEGACY_COMMAND_CHAIN(): Material {
		return this.$javaClass.LEGACY_COMMAND_CHAIN;
	}
	public static get LEGACY_FROSTED_ICE(): Material {
		return this.$javaClass.LEGACY_FROSTED_ICE;
	}
	public static get LEGACY_MAGMA(): Material {
		return this.$javaClass.LEGACY_MAGMA;
	}
	public static get LEGACY_NETHER_WART_BLOCK(): Material {
		return this.$javaClass.LEGACY_NETHER_WART_BLOCK;
	}
	public static get LEGACY_RED_NETHER_BRICK(): Material {
		return this.$javaClass.LEGACY_RED_NETHER_BRICK;
	}
	public static get LEGACY_BONE_BLOCK(): Material {
		return this.$javaClass.LEGACY_BONE_BLOCK;
	}
	public static get LEGACY_STRUCTURE_VOID(): Material {
		return this.$javaClass.LEGACY_STRUCTURE_VOID;
	}
	public static get LEGACY_OBSERVER(): Material {
		return this.$javaClass.LEGACY_OBSERVER;
	}
	public static get LEGACY_WHITE_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_WHITE_SHULKER_BOX;
	}
	public static get LEGACY_ORANGE_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_ORANGE_SHULKER_BOX;
	}
	public static get LEGACY_MAGENTA_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_MAGENTA_SHULKER_BOX;
	}
	public static get LEGACY_LIGHT_BLUE_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_LIGHT_BLUE_SHULKER_BOX;
	}
	public static get LEGACY_YELLOW_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_YELLOW_SHULKER_BOX;
	}
	public static get LEGACY_LIME_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_LIME_SHULKER_BOX;
	}
	public static get LEGACY_PINK_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_PINK_SHULKER_BOX;
	}
	public static get LEGACY_GRAY_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_GRAY_SHULKER_BOX;
	}
	public static get LEGACY_SILVER_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_SILVER_SHULKER_BOX;
	}
	public static get LEGACY_CYAN_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_CYAN_SHULKER_BOX;
	}
	public static get LEGACY_PURPLE_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_PURPLE_SHULKER_BOX;
	}
	public static get LEGACY_BLUE_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_BLUE_SHULKER_BOX;
	}
	public static get LEGACY_BROWN_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_BROWN_SHULKER_BOX;
	}
	public static get LEGACY_GREEN_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_GREEN_SHULKER_BOX;
	}
	public static get LEGACY_RED_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_RED_SHULKER_BOX;
	}
	public static get LEGACY_BLACK_SHULKER_BOX(): Material {
		return this.$javaClass.LEGACY_BLACK_SHULKER_BOX;
	}
	public static get LEGACY_WHITE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_WHITE_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_ORANGE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_ORANGE_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_MAGENTA_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_MAGENTA_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_YELLOW_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_YELLOW_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_LIME_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_LIME_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_PINK_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_PINK_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_GRAY_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_GRAY_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_SILVER_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_SILVER_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_CYAN_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_CYAN_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_PURPLE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_PURPLE_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_BLUE_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_BLUE_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_BROWN_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_BROWN_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_GREEN_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_GREEN_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_RED_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_RED_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_BLACK_GLAZED_TERRACOTTA(): Material {
		return this.$javaClass.LEGACY_BLACK_GLAZED_TERRACOTTA;
	}
	public static get LEGACY_CONCRETE(): Material {
		return this.$javaClass.LEGACY_CONCRETE;
	}
	public static get LEGACY_CONCRETE_POWDER(): Material {
		return this.$javaClass.LEGACY_CONCRETE_POWDER;
	}
	public static get LEGACY_STRUCTURE_BLOCK(): Material {
		return this.$javaClass.LEGACY_STRUCTURE_BLOCK;
	}
	public static get LEGACY_IRON_SPADE(): Material {
		return this.$javaClass.LEGACY_IRON_SPADE;
	}
	public static get LEGACY_IRON_PICKAXE(): Material {
		return this.$javaClass.LEGACY_IRON_PICKAXE;
	}
	public static get LEGACY_IRON_AXE(): Material {
		return this.$javaClass.LEGACY_IRON_AXE;
	}
	public static get LEGACY_FLINT_AND_STEEL(): Material {
		return this.$javaClass.LEGACY_FLINT_AND_STEEL;
	}
	public static get LEGACY_APPLE(): Material {
		return this.$javaClass.LEGACY_APPLE;
	}
	public static get LEGACY_BOW(): Material {
		return this.$javaClass.LEGACY_BOW;
	}
	public static get LEGACY_ARROW(): Material {
		return this.$javaClass.LEGACY_ARROW;
	}
	public static get LEGACY_COAL(): Material {
		return this.$javaClass.LEGACY_COAL;
	}
	public static get LEGACY_DIAMOND(): Material {
		return this.$javaClass.LEGACY_DIAMOND;
	}
	public static get LEGACY_IRON_INGOT(): Material {
		return this.$javaClass.LEGACY_IRON_INGOT;
	}
	public static get LEGACY_GOLD_INGOT(): Material {
		return this.$javaClass.LEGACY_GOLD_INGOT;
	}
	public static get LEGACY_IRON_SWORD(): Material {
		return this.$javaClass.LEGACY_IRON_SWORD;
	}
	public static get LEGACY_WOOD_SWORD(): Material {
		return this.$javaClass.LEGACY_WOOD_SWORD;
	}
	public static get LEGACY_WOOD_SPADE(): Material {
		return this.$javaClass.LEGACY_WOOD_SPADE;
	}
	public static get LEGACY_WOOD_PICKAXE(): Material {
		return this.$javaClass.LEGACY_WOOD_PICKAXE;
	}
	public static get LEGACY_WOOD_AXE(): Material {
		return this.$javaClass.LEGACY_WOOD_AXE;
	}
	public static get LEGACY_STONE_SWORD(): Material {
		return this.$javaClass.LEGACY_STONE_SWORD;
	}
	public static get LEGACY_STONE_SPADE(): Material {
		return this.$javaClass.LEGACY_STONE_SPADE;
	}
	public static get LEGACY_STONE_PICKAXE(): Material {
		return this.$javaClass.LEGACY_STONE_PICKAXE;
	}
	public static get LEGACY_STONE_AXE(): Material {
		return this.$javaClass.LEGACY_STONE_AXE;
	}
	public static get LEGACY_DIAMOND_SWORD(): Material {
		return this.$javaClass.LEGACY_DIAMOND_SWORD;
	}
	public static get LEGACY_DIAMOND_SPADE(): Material {
		return this.$javaClass.LEGACY_DIAMOND_SPADE;
	}
	public static get LEGACY_DIAMOND_PICKAXE(): Material {
		return this.$javaClass.LEGACY_DIAMOND_PICKAXE;
	}
	public static get LEGACY_DIAMOND_AXE(): Material {
		return this.$javaClass.LEGACY_DIAMOND_AXE;
	}
	public static get LEGACY_STICK(): Material {
		return this.$javaClass.LEGACY_STICK;
	}
	public static get LEGACY_BOWL(): Material {
		return this.$javaClass.LEGACY_BOWL;
	}
	public static get LEGACY_MUSHROOM_SOUP(): Material {
		return this.$javaClass.LEGACY_MUSHROOM_SOUP;
	}
	public static get LEGACY_GOLD_SWORD(): Material {
		return this.$javaClass.LEGACY_GOLD_SWORD;
	}
	public static get LEGACY_GOLD_SPADE(): Material {
		return this.$javaClass.LEGACY_GOLD_SPADE;
	}
	public static get LEGACY_GOLD_PICKAXE(): Material {
		return this.$javaClass.LEGACY_GOLD_PICKAXE;
	}
	public static get LEGACY_GOLD_AXE(): Material {
		return this.$javaClass.LEGACY_GOLD_AXE;
	}
	public static get LEGACY_STRING(): Material {
		return this.$javaClass.LEGACY_STRING;
	}
	public static get LEGACY_FEATHER(): Material {
		return this.$javaClass.LEGACY_FEATHER;
	}
	public static get LEGACY_SULPHUR(): Material {
		return this.$javaClass.LEGACY_SULPHUR;
	}
	public static get LEGACY_WOOD_HOE(): Material {
		return this.$javaClass.LEGACY_WOOD_HOE;
	}
	public static get LEGACY_STONE_HOE(): Material {
		return this.$javaClass.LEGACY_STONE_HOE;
	}
	public static get LEGACY_IRON_HOE(): Material {
		return this.$javaClass.LEGACY_IRON_HOE;
	}
	public static get LEGACY_DIAMOND_HOE(): Material {
		return this.$javaClass.LEGACY_DIAMOND_HOE;
	}
	public static get LEGACY_GOLD_HOE(): Material {
		return this.$javaClass.LEGACY_GOLD_HOE;
	}
	public static get LEGACY_SEEDS(): Material {
		return this.$javaClass.LEGACY_SEEDS;
	}
	public static get LEGACY_WHEAT(): Material {
		return this.$javaClass.LEGACY_WHEAT;
	}
	public static get LEGACY_BREAD(): Material {
		return this.$javaClass.LEGACY_BREAD;
	}
	public static get LEGACY_LEATHER_HELMET(): Material {
		return this.$javaClass.LEGACY_LEATHER_HELMET;
	}
	public static get LEGACY_LEATHER_CHESTPLATE(): Material {
		return this.$javaClass.LEGACY_LEATHER_CHESTPLATE;
	}
	public static get LEGACY_LEATHER_LEGGINGS(): Material {
		return this.$javaClass.LEGACY_LEATHER_LEGGINGS;
	}
	public static get LEGACY_LEATHER_BOOTS(): Material {
		return this.$javaClass.LEGACY_LEATHER_BOOTS;
	}
	public static get LEGACY_CHAINMAIL_HELMET(): Material {
		return this.$javaClass.LEGACY_CHAINMAIL_HELMET;
	}
	public static get LEGACY_CHAINMAIL_CHESTPLATE(): Material {
		return this.$javaClass.LEGACY_CHAINMAIL_CHESTPLATE;
	}
	public static get LEGACY_CHAINMAIL_LEGGINGS(): Material {
		return this.$javaClass.LEGACY_CHAINMAIL_LEGGINGS;
	}
	public static get LEGACY_CHAINMAIL_BOOTS(): Material {
		return this.$javaClass.LEGACY_CHAINMAIL_BOOTS;
	}
	public static get LEGACY_IRON_HELMET(): Material {
		return this.$javaClass.LEGACY_IRON_HELMET;
	}
	public static get LEGACY_IRON_CHESTPLATE(): Material {
		return this.$javaClass.LEGACY_IRON_CHESTPLATE;
	}
	public static get LEGACY_IRON_LEGGINGS(): Material {
		return this.$javaClass.LEGACY_IRON_LEGGINGS;
	}
	public static get LEGACY_IRON_BOOTS(): Material {
		return this.$javaClass.LEGACY_IRON_BOOTS;
	}
	public static get LEGACY_DIAMOND_HELMET(): Material {
		return this.$javaClass.LEGACY_DIAMOND_HELMET;
	}
	public static get LEGACY_DIAMOND_CHESTPLATE(): Material {
		return this.$javaClass.LEGACY_DIAMOND_CHESTPLATE;
	}
	public static get LEGACY_DIAMOND_LEGGINGS(): Material {
		return this.$javaClass.LEGACY_DIAMOND_LEGGINGS;
	}
	public static get LEGACY_DIAMOND_BOOTS(): Material {
		return this.$javaClass.LEGACY_DIAMOND_BOOTS;
	}
	public static get LEGACY_GOLD_HELMET(): Material {
		return this.$javaClass.LEGACY_GOLD_HELMET;
	}
	public static get LEGACY_GOLD_CHESTPLATE(): Material {
		return this.$javaClass.LEGACY_GOLD_CHESTPLATE;
	}
	public static get LEGACY_GOLD_LEGGINGS(): Material {
		return this.$javaClass.LEGACY_GOLD_LEGGINGS;
	}
	public static get LEGACY_GOLD_BOOTS(): Material {
		return this.$javaClass.LEGACY_GOLD_BOOTS;
	}
	public static get LEGACY_FLINT(): Material {
		return this.$javaClass.LEGACY_FLINT;
	}
	public static get LEGACY_PORK(): Material {
		return this.$javaClass.LEGACY_PORK;
	}
	public static get LEGACY_GRILLED_PORK(): Material {
		return this.$javaClass.LEGACY_GRILLED_PORK;
	}
	public static get LEGACY_PAINTING(): Material {
		return this.$javaClass.LEGACY_PAINTING;
	}
	public static get LEGACY_GOLDEN_APPLE(): Material {
		return this.$javaClass.LEGACY_GOLDEN_APPLE;
	}
	public static get LEGACY_SIGN(): Material {
		return this.$javaClass.LEGACY_SIGN;
	}
	public static get LEGACY_WOOD_DOOR(): Material {
		return this.$javaClass.LEGACY_WOOD_DOOR;
	}
	public static get LEGACY_BUCKET(): Material {
		return this.$javaClass.LEGACY_BUCKET;
	}
	public static get LEGACY_WATER_BUCKET(): Material {
		return this.$javaClass.LEGACY_WATER_BUCKET;
	}
	public static get LEGACY_LAVA_BUCKET(): Material {
		return this.$javaClass.LEGACY_LAVA_BUCKET;
	}
	public static get LEGACY_MINECART(): Material {
		return this.$javaClass.LEGACY_MINECART;
	}
	public static get LEGACY_SADDLE(): Material {
		return this.$javaClass.LEGACY_SADDLE;
	}
	public static get LEGACY_IRON_DOOR(): Material {
		return this.$javaClass.LEGACY_IRON_DOOR;
	}
	public static get LEGACY_REDSTONE(): Material {
		return this.$javaClass.LEGACY_REDSTONE;
	}
	public static get LEGACY_SNOW_BALL(): Material {
		return this.$javaClass.LEGACY_SNOW_BALL;
	}
	public static get LEGACY_BOAT(): Material {
		return this.$javaClass.LEGACY_BOAT;
	}
	public static get LEGACY_LEATHER(): Material {
		return this.$javaClass.LEGACY_LEATHER;
	}
	public static get LEGACY_MILK_BUCKET(): Material {
		return this.$javaClass.LEGACY_MILK_BUCKET;
	}
	public static get LEGACY_CLAY_BRICK(): Material {
		return this.$javaClass.LEGACY_CLAY_BRICK;
	}
	public static get LEGACY_CLAY_BALL(): Material {
		return this.$javaClass.LEGACY_CLAY_BALL;
	}
	public static get LEGACY_SUGAR_CANE(): Material {
		return this.$javaClass.LEGACY_SUGAR_CANE;
	}
	public static get LEGACY_PAPER(): Material {
		return this.$javaClass.LEGACY_PAPER;
	}
	public static get LEGACY_BOOK(): Material {
		return this.$javaClass.LEGACY_BOOK;
	}
	public static get LEGACY_SLIME_BALL(): Material {
		return this.$javaClass.LEGACY_SLIME_BALL;
	}
	public static get LEGACY_STORAGE_MINECART(): Material {
		return this.$javaClass.LEGACY_STORAGE_MINECART;
	}
	public static get LEGACY_POWERED_MINECART(): Material {
		return this.$javaClass.LEGACY_POWERED_MINECART;
	}
	public static get LEGACY_EGG(): Material {
		return this.$javaClass.LEGACY_EGG;
	}
	public static get LEGACY_COMPASS(): Material {
		return this.$javaClass.LEGACY_COMPASS;
	}
	public static get LEGACY_FISHING_ROD(): Material {
		return this.$javaClass.LEGACY_FISHING_ROD;
	}
	public static get LEGACY_WATCH(): Material {
		return this.$javaClass.LEGACY_WATCH;
	}
	public static get LEGACY_GLOWSTONE_DUST(): Material {
		return this.$javaClass.LEGACY_GLOWSTONE_DUST;
	}
	public static get LEGACY_RAW_FISH(): Material {
		return this.$javaClass.LEGACY_RAW_FISH;
	}
	public static get LEGACY_COOKED_FISH(): Material {
		return this.$javaClass.LEGACY_COOKED_FISH;
	}
	public static get LEGACY_INK_SACK(): Material {
		return this.$javaClass.LEGACY_INK_SACK;
	}
	public static get LEGACY_BONE(): Material {
		return this.$javaClass.LEGACY_BONE;
	}
	public static get LEGACY_SUGAR(): Material {
		return this.$javaClass.LEGACY_SUGAR;
	}
	public static get LEGACY_CAKE(): Material {
		return this.$javaClass.LEGACY_CAKE;
	}
	public static get LEGACY_BED(): Material {
		return this.$javaClass.LEGACY_BED;
	}
	public static get LEGACY_DIODE(): Material {
		return this.$javaClass.LEGACY_DIODE;
	}
	public static get LEGACY_COOKIE(): Material {
		return this.$javaClass.LEGACY_COOKIE;
	}
	public static get LEGACY_MAP(): Material {
		return this.$javaClass.LEGACY_MAP;
	}
	public static get LEGACY_SHEARS(): Material {
		return this.$javaClass.LEGACY_SHEARS;
	}
	public static get LEGACY_MELON(): Material {
		return this.$javaClass.LEGACY_MELON;
	}
	public static get LEGACY_PUMPKIN_SEEDS(): Material {
		return this.$javaClass.LEGACY_PUMPKIN_SEEDS;
	}
	public static get LEGACY_MELON_SEEDS(): Material {
		return this.$javaClass.LEGACY_MELON_SEEDS;
	}
	public static get LEGACY_RAW_BEEF(): Material {
		return this.$javaClass.LEGACY_RAW_BEEF;
	}
	public static get LEGACY_COOKED_BEEF(): Material {
		return this.$javaClass.LEGACY_COOKED_BEEF;
	}
	public static get LEGACY_RAW_CHICKEN(): Material {
		return this.$javaClass.LEGACY_RAW_CHICKEN;
	}
	public static get LEGACY_COOKED_CHICKEN(): Material {
		return this.$javaClass.LEGACY_COOKED_CHICKEN;
	}
	public static get LEGACY_ROTTEN_FLESH(): Material {
		return this.$javaClass.LEGACY_ROTTEN_FLESH;
	}
	public static get LEGACY_ENDER_PEARL(): Material {
		return this.$javaClass.LEGACY_ENDER_PEARL;
	}
	public static get LEGACY_BLAZE_ROD(): Material {
		return this.$javaClass.LEGACY_BLAZE_ROD;
	}
	public static get LEGACY_GHAST_TEAR(): Material {
		return this.$javaClass.LEGACY_GHAST_TEAR;
	}
	public static get LEGACY_GOLD_NUGGET(): Material {
		return this.$javaClass.LEGACY_GOLD_NUGGET;
	}
	public static get LEGACY_NETHER_STALK(): Material {
		return this.$javaClass.LEGACY_NETHER_STALK;
	}
	public static get LEGACY_POTION(): Material {
		return this.$javaClass.LEGACY_POTION;
	}
	public static get LEGACY_GLASS_BOTTLE(): Material {
		return this.$javaClass.LEGACY_GLASS_BOTTLE;
	}
	public static get LEGACY_SPIDER_EYE(): Material {
		return this.$javaClass.LEGACY_SPIDER_EYE;
	}
	public static get LEGACY_FERMENTED_SPIDER_EYE(): Material {
		return this.$javaClass.LEGACY_FERMENTED_SPIDER_EYE;
	}
	public static get LEGACY_BLAZE_POWDER(): Material {
		return this.$javaClass.LEGACY_BLAZE_POWDER;
	}
	public static get LEGACY_MAGMA_CREAM(): Material {
		return this.$javaClass.LEGACY_MAGMA_CREAM;
	}
	public static get LEGACY_BREWING_STAND_ITEM(): Material {
		return this.$javaClass.LEGACY_BREWING_STAND_ITEM;
	}
	public static get LEGACY_CAULDRON_ITEM(): Material {
		return this.$javaClass.LEGACY_CAULDRON_ITEM;
	}
	public static get LEGACY_EYE_OF_ENDER(): Material {
		return this.$javaClass.LEGACY_EYE_OF_ENDER;
	}
	public static get LEGACY_SPECKLED_MELON(): Material {
		return this.$javaClass.LEGACY_SPECKLED_MELON;
	}
	public static get LEGACY_MONSTER_EGG(): Material {
		return this.$javaClass.LEGACY_MONSTER_EGG;
	}
	public static get LEGACY_EXP_BOTTLE(): Material {
		return this.$javaClass.LEGACY_EXP_BOTTLE;
	}
	public static get LEGACY_FIREBALL(): Material {
		return this.$javaClass.LEGACY_FIREBALL;
	}
	public static get LEGACY_BOOK_AND_QUILL(): Material {
		return this.$javaClass.LEGACY_BOOK_AND_QUILL;
	}
	public static get LEGACY_WRITTEN_BOOK(): Material {
		return this.$javaClass.LEGACY_WRITTEN_BOOK;
	}
	public static get LEGACY_EMERALD(): Material {
		return this.$javaClass.LEGACY_EMERALD;
	}
	public static get LEGACY_ITEM_FRAME(): Material {
		return this.$javaClass.LEGACY_ITEM_FRAME;
	}
	public static get LEGACY_FLOWER_POT_ITEM(): Material {
		return this.$javaClass.LEGACY_FLOWER_POT_ITEM;
	}
	public static get LEGACY_CARROT_ITEM(): Material {
		return this.$javaClass.LEGACY_CARROT_ITEM;
	}
	public static get LEGACY_POTATO_ITEM(): Material {
		return this.$javaClass.LEGACY_POTATO_ITEM;
	}
	public static get LEGACY_BAKED_POTATO(): Material {
		return this.$javaClass.LEGACY_BAKED_POTATO;
	}
	public static get LEGACY_POISONOUS_POTATO(): Material {
		return this.$javaClass.LEGACY_POISONOUS_POTATO;
	}
	public static get LEGACY_EMPTY_MAP(): Material {
		return this.$javaClass.LEGACY_EMPTY_MAP;
	}
	public static get LEGACY_GOLDEN_CARROT(): Material {
		return this.$javaClass.LEGACY_GOLDEN_CARROT;
	}
	public static get LEGACY_SKULL_ITEM(): Material {
		return this.$javaClass.LEGACY_SKULL_ITEM;
	}
	public static get LEGACY_CARROT_STICK(): Material {
		return this.$javaClass.LEGACY_CARROT_STICK;
	}
	public static get LEGACY_NETHER_STAR(): Material {
		return this.$javaClass.LEGACY_NETHER_STAR;
	}
	public static get LEGACY_PUMPKIN_PIE(): Material {
		return this.$javaClass.LEGACY_PUMPKIN_PIE;
	}
	public static get LEGACY_FIREWORK(): Material {
		return this.$javaClass.LEGACY_FIREWORK;
	}
	public static get LEGACY_FIREWORK_CHARGE(): Material {
		return this.$javaClass.LEGACY_FIREWORK_CHARGE;
	}
	public static get LEGACY_ENCHANTED_BOOK(): Material {
		return this.$javaClass.LEGACY_ENCHANTED_BOOK;
	}
	public static get LEGACY_REDSTONE_COMPARATOR(): Material {
		return this.$javaClass.LEGACY_REDSTONE_COMPARATOR;
	}
	public static get LEGACY_NETHER_BRICK_ITEM(): Material {
		return this.$javaClass.LEGACY_NETHER_BRICK_ITEM;
	}
	public static get LEGACY_QUARTZ(): Material {
		return this.$javaClass.LEGACY_QUARTZ;
	}
	public static get LEGACY_EXPLOSIVE_MINECART(): Material {
		return this.$javaClass.LEGACY_EXPLOSIVE_MINECART;
	}
	public static get LEGACY_HOPPER_MINECART(): Material {
		return this.$javaClass.LEGACY_HOPPER_MINECART;
	}
	public static get LEGACY_PRISMARINE_SHARD(): Material {
		return this.$javaClass.LEGACY_PRISMARINE_SHARD;
	}
	public static get LEGACY_PRISMARINE_CRYSTALS(): Material {
		return this.$javaClass.LEGACY_PRISMARINE_CRYSTALS;
	}
	public static get LEGACY_RABBIT(): Material {
		return this.$javaClass.LEGACY_RABBIT;
	}
	public static get LEGACY_COOKED_RABBIT(): Material {
		return this.$javaClass.LEGACY_COOKED_RABBIT;
	}
	public static get LEGACY_RABBIT_STEW(): Material {
		return this.$javaClass.LEGACY_RABBIT_STEW;
	}
	public static get LEGACY_RABBIT_FOOT(): Material {
		return this.$javaClass.LEGACY_RABBIT_FOOT;
	}
	public static get LEGACY_RABBIT_HIDE(): Material {
		return this.$javaClass.LEGACY_RABBIT_HIDE;
	}
	public static get LEGACY_ARMOR_STAND(): Material {
		return this.$javaClass.LEGACY_ARMOR_STAND;
	}
	public static get LEGACY_IRON_BARDING(): Material {
		return this.$javaClass.LEGACY_IRON_BARDING;
	}
	public static get LEGACY_GOLD_BARDING(): Material {
		return this.$javaClass.LEGACY_GOLD_BARDING;
	}
	public static get LEGACY_DIAMOND_BARDING(): Material {
		return this.$javaClass.LEGACY_DIAMOND_BARDING;
	}
	public static get LEGACY_LEASH(): Material {
		return this.$javaClass.LEGACY_LEASH;
	}
	public static get LEGACY_NAME_TAG(): Material {
		return this.$javaClass.LEGACY_NAME_TAG;
	}
	public static get LEGACY_COMMAND_MINECART(): Material {
		return this.$javaClass.LEGACY_COMMAND_MINECART;
	}
	public static get LEGACY_MUTTON(): Material {
		return this.$javaClass.LEGACY_MUTTON;
	}
	public static get LEGACY_COOKED_MUTTON(): Material {
		return this.$javaClass.LEGACY_COOKED_MUTTON;
	}
	public static get LEGACY_BANNER(): Material {
		return this.$javaClass.LEGACY_BANNER;
	}
	public static get LEGACY_END_CRYSTAL(): Material {
		return this.$javaClass.LEGACY_END_CRYSTAL;
	}
	public static get LEGACY_SPRUCE_DOOR_ITEM(): Material {
		return this.$javaClass.LEGACY_SPRUCE_DOOR_ITEM;
	}
	public static get LEGACY_BIRCH_DOOR_ITEM(): Material {
		return this.$javaClass.LEGACY_BIRCH_DOOR_ITEM;
	}
	public static get LEGACY_JUNGLE_DOOR_ITEM(): Material {
		return this.$javaClass.LEGACY_JUNGLE_DOOR_ITEM;
	}
	public static get LEGACY_ACACIA_DOOR_ITEM(): Material {
		return this.$javaClass.LEGACY_ACACIA_DOOR_ITEM;
	}
	public static get LEGACY_DARK_OAK_DOOR_ITEM(): Material {
		return this.$javaClass.LEGACY_DARK_OAK_DOOR_ITEM;
	}
	public static get LEGACY_CHORUS_FRUIT(): Material {
		return this.$javaClass.LEGACY_CHORUS_FRUIT;
	}
	public static get LEGACY_CHORUS_FRUIT_POPPED(): Material {
		return this.$javaClass.LEGACY_CHORUS_FRUIT_POPPED;
	}
	public static get LEGACY_BEETROOT(): Material {
		return this.$javaClass.LEGACY_BEETROOT;
	}
	public static get LEGACY_BEETROOT_SEEDS(): Material {
		return this.$javaClass.LEGACY_BEETROOT_SEEDS;
	}
	public static get LEGACY_BEETROOT_SOUP(): Material {
		return this.$javaClass.LEGACY_BEETROOT_SOUP;
	}
	public static get LEGACY_DRAGONS_BREATH(): Material {
		return this.$javaClass.LEGACY_DRAGONS_BREATH;
	}
	public static get LEGACY_SPLASH_POTION(): Material {
		return this.$javaClass.LEGACY_SPLASH_POTION;
	}
	public static get LEGACY_SPECTRAL_ARROW(): Material {
		return this.$javaClass.LEGACY_SPECTRAL_ARROW;
	}
	public static get LEGACY_TIPPED_ARROW(): Material {
		return this.$javaClass.LEGACY_TIPPED_ARROW;
	}
	public static get LEGACY_LINGERING_POTION(): Material {
		return this.$javaClass.LEGACY_LINGERING_POTION;
	}
	public static get LEGACY_SHIELD(): Material {
		return this.$javaClass.LEGACY_SHIELD;
	}
	public static get LEGACY_ELYTRA(): Material {
		return this.$javaClass.LEGACY_ELYTRA;
	}
	public static get LEGACY_BOAT_SPRUCE(): Material {
		return this.$javaClass.LEGACY_BOAT_SPRUCE;
	}
	public static get LEGACY_BOAT_BIRCH(): Material {
		return this.$javaClass.LEGACY_BOAT_BIRCH;
	}
	public static get LEGACY_BOAT_JUNGLE(): Material {
		return this.$javaClass.LEGACY_BOAT_JUNGLE;
	}
	public static get LEGACY_BOAT_ACACIA(): Material {
		return this.$javaClass.LEGACY_BOAT_ACACIA;
	}
	public static get LEGACY_BOAT_DARK_OAK(): Material {
		return this.$javaClass.LEGACY_BOAT_DARK_OAK;
	}
	public static get LEGACY_TOTEM(): Material {
		return this.$javaClass.LEGACY_TOTEM;
	}
	public static get LEGACY_SHULKER_SHELL(): Material {
		return this.$javaClass.LEGACY_SHULKER_SHELL;
	}
	public static get LEGACY_IRON_NUGGET(): Material {
		return this.$javaClass.LEGACY_IRON_NUGGET;
	}
	public static get LEGACY_KNOWLEDGE_BOOK(): Material {
		return this.$javaClass.LEGACY_KNOWLEDGE_BOOK;
	}
	public static get LEGACY_GOLD_RECORD(): Material {
		return this.$javaClass.LEGACY_GOLD_RECORD;
	}
	public static get LEGACY_GREEN_RECORD(): Material {
		return this.$javaClass.LEGACY_GREEN_RECORD;
	}
	public static get LEGACY_RECORD_3(): Material {
		return this.$javaClass.LEGACY_RECORD_3;
	}
	public static get LEGACY_RECORD_4(): Material {
		return this.$javaClass.LEGACY_RECORD_4;
	}
	public static get LEGACY_RECORD_5(): Material {
		return this.$javaClass.LEGACY_RECORD_5;
	}
	public static get LEGACY_RECORD_6(): Material {
		return this.$javaClass.LEGACY_RECORD_6;
	}
	public static get LEGACY_RECORD_7(): Material {
		return this.$javaClass.LEGACY_RECORD_7;
	}
	public static get LEGACY_RECORD_8(): Material {
		return this.$javaClass.LEGACY_RECORD_8;
	}
	public static get LEGACY_RECORD_9(): Material {
		return this.$javaClass.LEGACY_RECORD_9;
	}
	public static get LEGACY_RECORD_10(): Material {
		return this.$javaClass.LEGACY_RECORD_10;
	}
	public static get LEGACY_RECORD_11(): Material {
		return this.$javaClass.LEGACY_RECORD_11;
	}
	public static get LEGACY_RECORD_12(): Material {
		return this.$javaClass.LEGACY_RECORD_12;
	}
}

