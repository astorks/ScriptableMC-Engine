declare var Java: any;
import {WorldType} from '../../org/bukkit/WorldType.js'
import {GameRule} from '../../org/bukkit/GameRule.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Location} from '../../org/bukkit/Location.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {Consumer} from '../../org/bukkit/util/Consumer.js'
import {FallingBlock} from '../../org/bukkit/entity/FallingBlock.js'
import {Material} from '../../org/bukkit/Material.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {Effect} from '../../org/bukkit/Effect.js'
import {BoundingBox} from '../../org/bukkit/util/BoundingBox.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'
import {Item} from '../../org/bukkit/entity/Item.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {AbstractArrow} from '../../org/bukkit/entity/AbstractArrow.js'
import {Vector} from '../../org/bukkit/util/Vector.js'
import {Arrow} from '../../org/bukkit/entity/Arrow.js'
import {TreeType} from '../../org/bukkit/TreeType.js'
import {BlockChangeDelegate} from '../../org/bukkit/BlockChangeDelegate.js'
import {EntityType} from '../../org/bukkit/entity/EntityType.js'
import {RayTraceResult} from '../../org/bukkit/util/RayTraceResult.js'
import {FluidCollisionMode} from '../../org/bukkit/FluidCollisionMode.js'
import {LightningStrike} from '../../org/bukkit/entity/LightningStrike.js'
import {WorldBorder} from '../../org/bukkit/WorldBorder.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {Particle} from '../../org/bukkit/Particle.js'
import {SoundCategory} from '../../org/bukkit/SoundCategory.js'
import {Sound} from '../../org/bukkit/Sound.js'
import {Difficulty} from '../../org/bukkit/Difficulty.js'
import {Raid} from '../../org/bukkit/Raid.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {MetadataValue} from '../../org/bukkit/metadata/MetadataValue.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import {Metadatable} from '../../org/bukkit/metadata/Metadatable.js'

export interface World extends PluginMessageRecipient, Metadatable {
	getName(): string;
	save(): void;
	getTime(): number;
	setTime(time: number): void;
	getWorldType(): WorldType;
	isHardcore(): boolean;
	getMonsterSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	getAnimalSpawnLimit(): number;
	getTicksPerAnimalSpawns(): number;
	getWaterAnimalSpawnLimit(): number;
	getTicksPerMonsterSpawns(): number;
	getGameRuleValue(rule: string): string;
	getGameRuleValue(rule: GameRule): any;
	getChunkAt(block: Block): Chunk;
	getChunkAt(location: Location): Chunk;
	getChunkAt(x: number, z: number): Chunk;
	isChunkLoaded(chunk: Chunk): boolean;
	isChunkLoaded(x: number, z: number): boolean;
	getLoadedChunks(): Array<Chunk>;
	loadChunk(chunk: Chunk): void;
	loadChunk(x: number, z: number): void;
	loadChunk(x: number, z: number, generate: boolean): boolean;
	getHighestBlockYAt(x: number, z: number): number;
	getHighestBlockYAt(location: Location): number;
	getHighestBlockAt(location: Location): Block;
	getHighestBlockAt(x: number, z: number): Block;
	getBlockAt(location: Location): Block;
	getBlockAt(x: number, y: number, z: number): Block;
	getThunderDuration(): number;
	setThunderDuration(duration: number): void;
	getPVP(): boolean;
	isThundering(): boolean;
	setPVP(pvp: boolean): void;
	getEntitiesByClass(classes: Array<any>): any;
	getEntitiesByClass(cls: any): any;
	getPopulators(): any;
	spawn(location: Location, clazz: any, _function: Consumer): Entity;
	spawn(location: Location, clazz: any): Entity;
	spawnFallingBlock(location: Location, material: Material, data: number): FallingBlock;
	spawnFallingBlock(location: Location, data: BlockData): FallingBlock;
	spawnFallingBlock(location: Location, data: MaterialData): FallingBlock;
	getGenerator(): ChunkGenerator;
	playEffect(location: Location, effect: Effect, data: number, radius: number): void;
	playEffect(location: Location, effect: Effect, data: any): void;
	playEffect(location: Location, effect: Effect, data: any, radius: number): void;
	playEffect(location: Location, effect: Effect, data: number): void;
	getNearbyEntities(boundingBox: BoundingBox): any;
	getNearbyEntities(boundingBox: BoundingBox, filter: any): any;
	getNearbyEntities(location: Location, x: number, y: number, z: number, filter: any): any;
	getNearbyEntities(location: Location, x: number, y: number, z: number): any;
	setWeatherDuration(duration: number): void;
	getUID(): string;
	getLivingEntities(): any;
	getEnvironment(): World$Environment;
	isChunkGenerated(x: number, z: number): boolean;
	unloadChunk(chunk: Chunk): boolean;
	unloadChunk(x: number, z: number): boolean;
	unloadChunk(x: number, z: number, save: boolean): boolean;
	dropItem(location: Location, item: ItemStack): Item;
	spawnArrow(location: Location, direction: Vector, speed: number, spread: number, clazz: any): AbstractArrow;
	spawnArrow(location: Location, direction: Vector, speed: number, spread: number): Arrow;
	unloadChunkRequest(x: number, z: number): boolean;
	setSpawnLocation(x: number, y: number, z: number): boolean;
	setSpawnLocation(location: Location): boolean;
	regenerateChunk(x: number, z: number): boolean;
	setThundering(thundering: boolean): void;
	getEntities(): any;
	generateTree(loc: Location, type: TreeType, delegate: BlockChangeDelegate): boolean;
	generateTree(location: Location, type: TreeType): boolean;
	setFullTime(time: number): void;
	getSpawnLocation(): Location;
	isChunkInUse(x: number, z: number): boolean;
	isChunkForceLoaded(x: number, z: number): boolean;
	setStorm(hasStorm: boolean): void;
	getPlayers(): any;
	spawnEntity(loc: Location, type: EntityType): Entity;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number): RayTraceResult;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean): RayTraceResult;
	rayTrace(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean, raySize: number, filter: any): RayTraceResult;
	refreshChunk(x: number, z: number): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean): boolean;
	createExplosion(x: number, y: number, z: number, power: number): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean, breakBlocks: boolean): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean): boolean;
	createExplosion(loc: Location, power: number): boolean;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, raySize: number): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, filter: any): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, raySize: number, filter: any): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number): RayTraceResult;
	dropItemNaturally(location: Location, item: ItemStack): Item;
	getSeed(): number;
	strikeLightning(loc: Location): LightningStrike;
	hasStorm(): boolean;
	getFullTime(): number;
	getWeatherDuration(): number;
	getTemperature(x: number, z: number): number;
	getTemperature(x: number, y: number, z: number): number;
	setGameRuleValue(rule: string, value: string): boolean;
	getGameRuleDefault(rule: GameRule): any;
	isGameRule(rule: string): boolean;
	getAllowAnimals(): boolean;
	getRaids(): any;
	getSeaLevel(): number;
	setAutoSave(value: boolean): void;
	setGameRule(rule: GameRule, newValue: any): boolean;
	getWorldBorder(): WorldBorder;
	getWorldFolder(): any;
	setBiome(x: number, y: number, z: number, bio: Biome): void;
	setBiome(x: number, z: number, bio: Biome): void;
	getGameRules(): Array<string>;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
	isAutoSave(): boolean;
	setSpawnFlags(allowMonsters: boolean, allowAnimals: boolean): void;
	getMaxHeight(): number;
	getBiome(x: number, z: number): Biome;
	getBiome(x: number, y: number, z: number): Biome;
	getHumidity(x: number, z: number): number;
	getHumidity(x: number, y: number, z: number): number;
	playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
	getDifficulty(): Difficulty;
	getAllowMonsters(): boolean;
	locateNearestRaid(location: Location, radius: number): Raid;
	setDifficulty(difficulty: Difficulty): void;
	setHardcore(hardcore: boolean): void;
	getKeepSpawnInMemory(): boolean;
	getForceLoadedChunks(): any;
	removePluginChunkTickets(plugin: Plugin): void;
	getEmptyChunkSnapshot(x: number, z: number, includeBiome: boolean, includeBiomeTemp: boolean): ChunkSnapshot;
	setKeepSpawnInMemory(keepLoaded: boolean): void;
	setTicksPerMonsterSpawns(ticksPerMonsterSpawns: number): void;
	strikeLightningEffect(loc: Location): LightningStrike;
	setAnimalSpawnLimit(limit: number): void;
	addPluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
	removePluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
	getEntitiesByClasses(classes: Array<any>): any;
	getPluginChunkTickets(x: number, z: number): any;
	getPluginChunkTickets(): any;
	setTicksPerAnimalSpawns(ticksPerAnimalSpawns: number): void;
	locateNearestStructure(origin: Location, structureType: StructureType, radius: number, findUnexplored: boolean): Location;
	setMonsterSpawnLimit(limit: number): void;
	setWaterAnimalSpawnLimit(limit: number): void;
	setAmbientSpawnLimit(limit: number): void;
	setChunkForceLoaded(x: number, z: number, forced: boolean): void;
	canGenerateStructures(): boolean;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	getListeningPluginChannels(): any;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
}

export class World {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World');
	}
}

