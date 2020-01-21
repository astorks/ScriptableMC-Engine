declare var Java: any;
import {GameRule} from '../../org/bukkit/GameRule.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {LightningStrike} from '../../org/bukkit/entity/LightningStrike.js'
import {Location} from '../../org/bukkit/Location.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {WorldType} from '../../org/bukkit/WorldType.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {Difficulty} from '../../org/bukkit/Difficulty.js'
import {RayTraceResult} from '../../org/bukkit/util/RayTraceResult.js'
import {Vector} from '../../org/bukkit/util/Vector.js'
import {TreeType} from '../../org/bukkit/TreeType.js'
import {BlockChangeDelegate} from '../../org/bukkit/BlockChangeDelegate.js'
import {Item} from '../../org/bukkit/entity/Item.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../org/bukkit/entity/EntityType.js'
import {Effect} from '../../org/bukkit/Effect.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {BoundingBox} from '../../org/bukkit/util/BoundingBox.js'
import {Arrow} from '../../org/bukkit/entity/Arrow.js'
import {AbstractArrow} from '../../org/bukkit/entity/AbstractArrow.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {FluidCollisionMode} from '../../org/bukkit/FluidCollisionMode.js'
import {Consumer} from '../../org/bukkit/util/Consumer.js'
import {Sound} from '../../org/bukkit/Sound.js'
import {SoundCategory} from '../../org/bukkit/SoundCategory.js'
import {FallingBlock} from '../../org/bukkit/entity/FallingBlock.js'
import {Material} from '../../org/bukkit/Material.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {Raid} from '../../org/bukkit/Raid.js'
import {Particle} from '../../org/bukkit/Particle.js'
import {WorldBorder} from '../../org/bukkit/WorldBorder.js'
import {MetadataValue} from '../../org/bukkit/metadata/MetadataValue.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import {Metadatable} from '../../org/bukkit/metadata/Metadatable.js'

export interface World extends PluginMessageRecipient, Metadatable {
	getName(): string;
	save(): void;
	getTime(): number;
	setTime(arg0: number): void;
	getGameRuleDefault(arg0: GameRule): any;
	setGameRuleValue(arg0: string, arg1: string): boolean;
	isGameRule(arg0: string): boolean;
	removePluginChunkTickets(arg0: Plugin): void;
	strikeLightningEffect(arg0: Location): LightningStrike;
	setChunkForceLoaded(arg0: number, arg1: number, arg2: boolean): void;
	getForceLoadedChunks(): any;
	addPluginChunkTicket(arg0: number, arg1: number, arg2: Plugin): boolean;
	removePluginChunkTicket(arg0: number, arg1: number, arg2: Plugin): boolean;
	getPluginChunkTickets(arg0: number, arg1: number): any;
	getPluginChunkTickets(): any;
	getEntitiesByClasses(arg0: Array<any>): any;
	getEmptyChunkSnapshot(arg0: number, arg1: number, arg2: boolean, arg3: boolean): ChunkSnapshot;
	getAnimalSpawnLimit(): number;
	getMonsterSpawnLimit(): number;
	getTicksPerMonsterSpawns(): number;
	getTicksPerAnimalSpawns(): number;
	getAmbientSpawnLimit(): number;
	getWaterAnimalSpawnLimit(): number;
	getViewDistance(): number;
	getWorldType(): WorldType;
	isHardcore(): boolean;
	getGameRuleValue(arg0: string): string;
	getGameRuleValue(arg0: GameRule): any;
	getHighestBlockAt(arg0: number, arg1: number): Block;
	getHighestBlockAt(arg0: Location): Block;
	getChunkAt(arg0: Location): Chunk;
	getChunkAt(arg0: Block): Chunk;
	getChunkAt(arg0: number, arg1: number): Chunk;
	isChunkLoaded(arg0: number, arg1: number): boolean;
	isChunkLoaded(arg0: Chunk): boolean;
	getBlockAt(arg0: Location): Block;
	getBlockAt(arg0: number, arg1: number, arg2: number): Block;
	getLoadedChunks(): Array<Chunk>;
	loadChunk(arg0: Chunk): void;
	loadChunk(arg0: number, arg1: number, arg2: boolean): boolean;
	loadChunk(arg0: number, arg1: number): void;
	getHighestBlockYAt(arg0: Location): number;
	getHighestBlockYAt(arg0: number, arg1: number): number;
	isChunkGenerated(arg0: number, arg1: number): boolean;
	isChunkInUse(arg0: number, arg1: number): boolean;
	unloadChunk(arg0: number, arg1: number): boolean;
	unloadChunk(arg0: Chunk): boolean;
	unloadChunk(arg0: number, arg1: number, arg2: boolean): boolean;
	unloadChunkRequest(arg0: number, arg1: number): boolean;
	regenerateChunk(arg0: number, arg1: number): boolean;
	refreshChunk(arg0: number, arg1: number): boolean;
	isChunkForceLoaded(arg0: number, arg1: number): boolean;
	getEntities(): any;
	setDifficulty(arg0: Difficulty): void;
	getThunderDuration(): number;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: any): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: number): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: number, arg4: any): RayTraceResult;
	generateTree(arg0: Location, arg1: TreeType, arg2: BlockChangeDelegate): boolean;
	generateTree(arg0: Location, arg1: TreeType): boolean;
	getEntitiesByClass(arg0: Array<any>): any;
	getEntitiesByClass(arg0: any): any;
	getUID(): string;
	setSpawnLocation(arg0: number, arg1: number, arg2: number): boolean;
	setSpawnLocation(arg0: Location): boolean;
	getWeatherDuration(): number;
	setThunderDuration(arg0: number): void;
	dropItemNaturally(arg0: Location, arg1: ItemStack): Item;
	spawnEntity(arg0: Location, arg1: EntityType): Entity;
	getSeed(): number;
	playEffect(arg0: Location, arg1: Effect, arg2: any, arg3: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: any): void;
	playEffect(arg0: Location, arg1: Effect, arg2: number, arg3: number): void;
	getFullTime(): number;
	setBiome(arg0: number, arg1: number, arg2: Biome): void;
	setBiome(arg0: number, arg1: number, arg2: number, arg3: Biome): void;
	getNearbyEntities(arg0: BoundingBox): any;
	getNearbyEntities(arg0: BoundingBox, arg1: any): any;
	getNearbyEntities(arg0: Location, arg1: number, arg2: number, arg3: number, arg4: any): any;
	getNearbyEntities(arg0: Location, arg1: number, arg2: number, arg3: number): any;
	getSeaLevel(): number;
	setAutoSave(arg0: boolean): void;
	getDifficulty(): Difficulty;
	dropItem(arg0: Location, arg1: ItemStack): Item;
	spawnArrow(arg0: Location, arg1: Vector, arg2: number, arg3: number): Arrow;
	spawnArrow(arg0: Location, arg1: Vector, arg2: number, arg3: number, arg4: any): AbstractArrow;
	getLivingEntities(): any;
	strikeLightning(arg0: Location): LightningStrike;
	setFullTime(arg0: number): void;
	getGenerator(): ChunkGenerator;
	getPopulators(): any;
	setThundering(arg0: boolean): void;
	setPVP(arg0: boolean): void;
	rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode, arg4: boolean, arg5: number, arg6: any): RayTraceResult;
	getHumidity(arg0: number, arg1: number, arg2: number): number;
	getHumidity(arg0: number, arg1: number): number;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean, arg3: boolean, arg4: Entity): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: Entity): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
	createExplosion(arg0: Location, arg1: number): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean, arg3: boolean): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
	getPlayers(): any;
	setStorm(arg0: boolean): void;
	setSpawnFlags(arg0: boolean, arg1: boolean): void;
	getAllowAnimals(): boolean;
	getMaxHeight(): number;
	spawn(arg0: Location, arg1: any, arg2: Consumer): Entity;
	spawn(arg0: Location, arg1: any): Entity;
	isAutoSave(): boolean;
	getWorldFolder(): any;
	setHardcore(arg0: boolean): void;
	getSpawnLocation(): Location;
	hasStorm(): boolean;
	playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void;
	playSound(arg0: Location, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void;
	playSound(arg0: Location, arg1: Sound, arg2: number, arg3: number): void;
	playSound(arg0: Location, arg1: string, arg2: number, arg3: number): void;
	getGameRules(): Array<string>;
	setWeatherDuration(arg0: number): void;
	spawnFallingBlock(arg0: Location, arg1: Material, arg2: number): FallingBlock;
	spawnFallingBlock(arg0: Location, arg1: BlockData): FallingBlock;
	spawnFallingBlock(arg0: Location, arg1: MaterialData): FallingBlock;
	getBiome(arg0: number, arg1: number): Biome;
	getBiome(arg0: number, arg1: number, arg2: number): Biome;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number): RayTraceResult;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode, arg4: boolean): RayTraceResult;
	isThundering(): boolean;
	getAllowMonsters(): boolean;
	getPVP(): boolean;
	getTemperature(arg0: number, arg1: number): number;
	getTemperature(arg0: number, arg1: number, arg2: number): number;
	getEnvironment(): World$Environment;
	setTicksPerMonsterSpawns(arg0: number): void;
	getKeepSpawnInMemory(): boolean;
	setKeepSpawnInMemory(arg0: boolean): void;
	canGenerateStructures(): boolean;
	setAnimalSpawnLimit(arg0: number): void;
	setAmbientSpawnLimit(arg0: number): void;
	setWaterAnimalSpawnLimit(arg0: number): void;
	locateNearestStructure(arg0: Location, arg1: StructureType, arg2: number, arg3: boolean): Location;
	setTicksPerAnimalSpawns(arg0: number): void;
	setMonsterSpawnLimit(arg0: number): void;
	locateNearestRaid(arg0: Location, arg1: number): Raid;
	setGameRule(arg0: GameRule, arg1: any): boolean;
	getRaids(): any;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any, arg10: boolean): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any, arg8: boolean): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
	getWorldBorder(): WorldBorder;
	getListeningPluginChannels(): any;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export class World {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World');
	}
}

