declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {BlockState} from '../../../org/bukkit/block/BlockState.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {Biome} from '../../../org/bukkit/block/Biome.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Metadatable} from '../../../org/bukkit/metadata/Metadatable.js'

export interface Block extends Metadatable {
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getState(): BlockState;
	getType(): Material;
	getWorld(): World;
	setBiome(arg0: Biome): void;
	rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult;
	getHumidity(): number;
	getBiome(): Biome;
	getTemperature(): number;
	getPistonMoveReaction(): PistonMoveReaction;
	getChunk(): Chunk;
	getY(): number;
	getX(): number;
	getZ(): number;
	setType(arg0: Material): void;
	setType(arg0: Material, arg1: boolean): void;
	getData(): number;
	getBoundingBox(): BoundingBox;
	getBlockData(): BlockData;
	isBlockIndirectlyPowered(): boolean;
	isBlockFaceIndirectlyPowered(arg0: BlockFace): boolean;
	setBlockData(arg0: BlockData, arg1: boolean): void;
	setBlockData(arg0: BlockData): void;
	isBlockPowered(): boolean;
	getLightFromBlocks(): number;
	getFace(arg0: Block): BlockFace;
	getLightLevel(): number;
	getRelative(arg0: number, arg1: number, arg2: number): Block;
	getRelative(arg0: BlockFace, arg1: number): Block;
	getRelative(arg0: BlockFace): Block;
	isBlockFacePowered(arg0: BlockFace): boolean;
	isLiquid(): boolean;
	breakNaturally(arg0: ItemStack): boolean;
	breakNaturally(): boolean;
	getBlockPower(): number;
	getBlockPower(arg0: BlockFace): number;
	getLightFromSky(): number;
	isPassable(): boolean;
	getDrops(arg0: ItemStack): any;
	getDrops(): any;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export class Block {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Block');
	}
}

