declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {BlockState} from '../../../org/bukkit/block/BlockState.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {Biome} from '../../../org/bukkit/block/Biome.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Metadatable} from '../../../org/bukkit/metadata/Metadatable.js'

export interface Block extends Metadatable {
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getState(): BlockState;
	getType(): Material;
	getWorld(): World;
	getData(): number;
	setType(type: Material): void;
	setType(type: Material, applyPhysics: boolean): void;
	getBoundingBox(): BoundingBox;
	getChunk(): Chunk;
	getY(): number;
	getZ(): number;
	getX(): number;
	getPistonMoveReaction(): PistonMoveReaction;
	isBlockFaceIndirectlyPowered(face: BlockFace): boolean;
	isBlockIndirectlyPowered(): boolean;
	getRelative(modX: number, modY: number, modZ: number): Block;
	getRelative(face: BlockFace, distance: number): Block;
	getRelative(face: BlockFace): Block;
	getLightLevel(): number;
	getBlockData(): BlockData;
	getLightFromSky(): number;
	setBlockData(data: BlockData): void;
	setBlockData(data: BlockData, applyPhysics: boolean): void;
	getLightFromBlocks(): number;
	isLiquid(): boolean;
	breakNaturally(): boolean;
	breakNaturally(tool: ItemStack): boolean;
	getHumidity(): number;
	getDrops(tool: ItemStack): any;
	getDrops(): any;
	isBlockPowered(): boolean;
	rayTrace(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	isBlockFacePowered(face: BlockFace): boolean;
	setBiome(bio: Biome): void;
	getBiome(): Biome;
	getFace(block: Block): BlockFace;
	getBlockPower(): number;
	getBlockPower(face: BlockFace): number;
	isPassable(): boolean;
	getTemperature(): number;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
}

export class Block {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Block');
	}
}

