declare var Java: any;
import {WorldType} from '../../org/bukkit/WorldType.js'
import {GameRule} from '../../org/bukkit/GameRule.js'
import {Location} from '../../org/bukkit/Location.js'
import {Sound} from '../../org/bukkit/Sound.js'
import {SoundCategory} from '../../org/bukkit/SoundCategory.js'
import {Effect} from '../../org/bukkit/Effect.js'
import {Particle} from '../../org/bukkit/Particle.js'
import {RayTraceResult} from '../../org/bukkit/util/RayTraceResult.js'
import {Vector} from '../../org/bukkit/util/Vector.js'
import {FluidCollisionMode} from '../../org/bukkit/FluidCollisionMode.js'
import {BoundingBox} from '../../org/bukkit/util/BoundingBox.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {Consumer} from '../../org/bukkit/util/Consumer.js'
import {Difficulty} from '../../org/bukkit/Difficulty.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'
import {FallingBlock} from '../../org/bukkit/entity/FallingBlock.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../org/bukkit/Material.js'
import {WorldBorder} from '../../org/bukkit/WorldBorder.js'
import {Raid} from '../../org/bukkit/Raid.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {LightningStrike} from '../../org/bukkit/entity/LightningStrike.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {Item} from '../../org/bukkit/entity/Item.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {AbstractArrow} from '../../org/bukkit/entity/AbstractArrow.js'
import {Arrow} from '../../org/bukkit/entity/Arrow.js'
import {EntityType} from '../../org/bukkit/entity/EntityType.js'
import {TreeType} from '../../org/bukkit/TreeType.js'
import {BlockChangeDelegate} from '../../org/bukkit/BlockChangeDelegate.js'
import {MetadataValue} from '../../org/bukkit/metadata/MetadataValue.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import {Metadatable} from '../../org/bukkit/metadata/Metadatable.js'

export interface World extends PluginMessageRecipient, Metadatable {
	getName(): string;
	save(): void;
	getTicksPerMonsterSpawns(): number;
	getTicksPerAnimalSpawns(): number;
	getMonsterSpawnLimit(): number;
	getAnimalSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	getWaterAnimalSpawnLimit(): number;
	getTime(): number;
	setTime(time: number): void;
	getWorldType(): WorldType;
	isHardcore(): boolean;
	getGameRuleValue(rule: string): string;
	getGameRuleValue(rule: GameRule): any;
	playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, volume: number, pitch: number): void;
	playEffect(location: Location, effect: Effect, data: any): void;
	playEffect(location: Location, effect: Effect, data: number, radius: number): void;
	playEffect(location: Location, effect: Effect, data: number): void;
	playEffect(location: Location, effect: Effect, data: any, radius: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, data: any): void;
	setSpawnLocation(location: Location): boolean;
	setSpawnLocation(x: number, y: number, z: number): boolean;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number): RayTraceResult;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean): RayTraceResult;
	getNearbyEntities(location: Location, x: number, y: number, z: number, filter: any): any;
	getNearbyEntities(location: Location, x: number, y: number, z: number): any;
	getNearbyEntities(boundingBox: BoundingBox, filter: any): any;
	getNearbyEntities(boundingBox: BoundingBox): any;
	getChunkAt(block: Block): Chunk;
	getChunkAt(x: number, z: number): Chunk;
	getChunkAt(location: Location): Chunk;
	getUID(): string;
	getBlockAt(x: number, y: number, z: number): Block;
	getBlockAt(location: Location): Block;
	createExplosion(loc: Location, power: number, setFire: boolean, breakBlocks: boolean): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
	createExplosion(loc: Location, power: number): boolean;
	createExplosion(x: number, y: number, z: number, power: number): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
	getGenerator(): ChunkGenerator;
	getPopulators(): any;
	setWeatherDuration(duration: number): void;
	getMaxHeight(): number;
	getSeaLevel(): number;
	spawn(location: Location, clazz: any): Entity;
	spawn(location: Location, clazz: any, _function: Consumer): Entity;
	getWorldFolder(): any;
	setHardcore(hardcore: boolean): void;
	getGameRules(): Array<string>;
	setGameRuleValue(rule: string, value: string): boolean;
	getGameRuleDefault(rule: GameRule): any;
	getSpawnLocation(): Location;
	getRaids(): any;
	getThunderDuration(): number;
	isAutoSave(): boolean;
	getFullTime(): number;
	setDifficulty(difficulty: Difficulty): void;
	getEnvironment(): World$Environment;
	spawnFallingBlock(location: Location, data: MaterialData): FallingBlock;
	spawnFallingBlock(location: Location, data: BlockData): FallingBlock;
	spawnFallingBlock(location: Location, material: Material, data: number): FallingBlock;
	isThundering(): boolean;
	getAllowMonsters(): boolean;
	getAllowAnimals(): boolean;
	getWeatherDuration(): number;
	getPVP(): boolean;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, filter: any): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, raySize: number): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, raySize: number, filter: any): RayTraceResult;
	setFullTime(time: number): void;
	setStorm(hasStorm: boolean): void;
	setThunderDuration(duration: number): void;
	hasStorm(): boolean;
	setPVP(pvp: boolean): void;
	setSpawnFlags(allowMonsters: boolean, allowAnimals: boolean): void;
	getDifficulty(): Difficulty;
	isGameRule(rule: string): boolean;
	setGameRule(rule: GameRule, newValue: any): boolean;
	getWorldBorder(): WorldBorder;
	locateNearestRaid(location: Location, radius: number): Raid;
	setAutoSave(value: boolean): void;
	setThundering(thundering: boolean): void;
	setKeepSpawnInMemory(keepLoaded: boolean): void;
	setAnimalSpawnLimit(limit: number): void;
	setWaterAnimalSpawnLimit(limit: number): void;
	addPluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
	getEntitiesByClasses(classes: Array<any>): any;
	getForceLoadedChunks(): any;
	getPluginChunkTickets(x: number, z: number): any;
	getPluginChunkTickets(): any;
	strikeLightningEffect(loc: Location): LightningStrike;
	getKeepSpawnInMemory(): boolean;
	canGenerateStructures(): boolean;
	setTicksPerAnimalSpawns(ticksPerAnimalSpawns: number): void;
	setAmbientSpawnLimit(limit: number): void;
	getEmptyChunkSnapshot(x: number, z: number, includeBiome: boolean, includeBiomeTemp: boolean): ChunkSnapshot;
	removePluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
	removePluginChunkTickets(plugin: Plugin): void;
	setChunkForceLoaded(x: number, z: number, forced: boolean): void;
	setTicksPerMonsterSpawns(ticksPerMonsterSpawns: number): void;
	setMonsterSpawnLimit(limit: number): void;
	locateNearestStructure(origin: Location, structureType: StructureType, radius: number, findUnexplored: boolean): Location;
	getPlayers(): any;
	dropItemNaturally(location: Location, item: ItemStack): Item;
	getSeed(): number;
	getHumidity(x: number, z: number): number;
	getHumidity(x: number, y: number, z: number): number;
	rayTrace(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean, raySize: number, filter: any): RayTraceResult;
	setBiome(x: number, z: number, bio: Biome): void;
	setBiome(x: number, y: number, z: number, bio: Biome): void;
	getBiome(x: number, z: number): Biome;
	getBiome(x: number, y: number, z: number): Biome;
	getTemperature(x: number, y: number, z: number): number;
	getTemperature(x: number, z: number): number;
	getEntities(): any;
	getHighestBlockAt(location: Location): Block;
	getHighestBlockAt(x: number, z: number): Block;
	getLivingEntities(): any;
	getEntitiesByClass(cls: any): any;
	getEntitiesByClass(classes: Array<any>): any;
	getHighestBlockYAt(x: number, z: number): number;
	getHighestBlockYAt(location: Location): number;
	unloadChunkRequest(x: number, z: number): boolean;
	regenerateChunk(x: number, z: number): boolean;
	refreshChunk(x: number, z: number): boolean;
	isChunkForceLoaded(x: number, z: number): boolean;
	dropItem(location: Location, item: ItemStack): Item;
	spawnArrow(location: Location, direction: Vector, speed: number, spread: number, clazz: any): AbstractArrow;
	spawnArrow(location: Location, direction: Vector, speed: number, spread: number): Arrow;
	spawnEntity(loc: Location, type: EntityType): Entity;
	strikeLightning(loc: Location): LightningStrike;
	isChunkGenerated(x: number, z: number): boolean;
	isChunkInUse(x: number, z: number): boolean;
	getLoadedChunks(): Array<Chunk>;
	loadChunk(x: number, z: number, generate: boolean): boolean;
	loadChunk(x: number, z: number): void;
	loadChunk(chunk: Chunk): void;
	unloadChunk(x: number, z: number, save: boolean): boolean;
	unloadChunk(chunk: Chunk): boolean;
	unloadChunk(x: number, z: number): boolean;
	isChunkLoaded(x: number, z: number): boolean;
	isChunkLoaded(chunk: Chunk): boolean;
	generateTree(loc: Location, type: TreeType, delegate: BlockChangeDelegate): boolean;
	generateTree(location: Location, type: TreeType): boolean;
	getListeningPluginChannels(): any;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
}

export class World {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World');
	}
}

