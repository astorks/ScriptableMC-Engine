declare var Java: any;
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {Location} from '../../../org/bukkit/Location.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'
import {Animals} from '../../../org/bukkit/entity/Animals.js'
import {Vehicle} from '../../../org/bukkit/entity/Vehicle.js'

export interface Pig extends Animals, Vehicle {
	hasSaddle(): boolean;
	setSaddle(saddled: boolean): void;
	setLoveModeTicks(ticks: number): void;
	isLoveMode(): boolean;
	getBreedCause(): string;
	getLoveModeTicks(): number;
	setBreedCause(uuid: string): void;
	getAge(): number;
	setAge(age: number): void;
	setAgeLock(lock: boolean): void;
	getAgeLock(): boolean;
	setBaby(): void;
	isAdult(): boolean;
	canBreed(): boolean;
	setAdult(): void;
	setBreed(breed: boolean): void;
	getTarget(): LivingEntity;
	setTarget(target: LivingEntity): void;
	setMemory(memoryKey: MemoryKey, memoryValue: any): void;
	isSleeping(): boolean;
	getKiller(): Player;
	isRiptiding(): boolean;
	getPotionEffect(type: PotionEffectType): PotionEffect;
	setAI(ai: boolean): void;
	hasLineOfSight(other: Entity): boolean;
	getEquipment(): EntityEquipment;
	getTargetBlock(transparent: any, maxDistance: number): Block;
	getMaximumAir(): number;
	setMaximumAir(ticks: number): void;
	setNoDamageTicks(ticks: number): void;
	addPotionEffect(effect: PotionEffect, force: boolean): boolean;
	addPotionEffect(effect: PotionEffect): boolean;
	getCanPickupItems(): boolean;
	setLeashHolder(holder: Entity): boolean;
	setGliding(gliding: boolean): void;
	getRemainingAir(): number;
	getNoDamageTicks(): number;
	setCanPickupItems(pickup: boolean): void;
	getEyeHeight(): number;
	getEyeHeight(ignorePose: boolean): number;
	isLeashed(): boolean;
	setRemainingAir(ticks: number): void;
	setLastDamage(damage: number): void;
	getLeashHolder(): Entity;
	getLineOfSight(transparent: any, maxDistance: number): any;
	getEyeLocation(): Location;
	addPotionEffects(effects: any): boolean;
	removePotionEffect(type: PotionEffectType): void;
	isGliding(): boolean;
	getLastDamage(): number;
	isSwimming(): boolean;
	hasPotionEffect(type: PotionEffectType): boolean;
	rayTraceBlocks(maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	rayTraceBlocks(maxDistance: number): RayTraceResult;
	setSwimming(swimming: boolean): void;
	getMemory(memoryKey: MemoryKey): any;
	hasAI(): boolean;
	setCollidable(collidable: boolean): void;
	isCollidable(): boolean;
	getMaximumNoDamageTicks(): number;
	getRemoveWhenFarAway(): boolean;
	getLastTwoTargetBlocks(transparent: any, maxDistance: number): any;
	setRemoveWhenFarAway(remove: boolean): void;
	getActivePotionEffects(): any;
	getTargetBlockExact(maxDistance: number, fluidCollisionMode: FluidCollisionMode): Block;
	getTargetBlockExact(maxDistance: number): Block;
	setMaximumNoDamageTicks(ticks: number): void;
	getAttribute(attribute: Attribute): AttributeInstance;
	damage(amount: number): void;
	damage(amount: number, source: Entity): void;
	resetMaxHealth(): void;
	setHealth(health: number): void;
	getMaxHealth(): number;
	getHealth(): number;
	setMaxHealth(health: number): void;
	getAbsorptionAmount(): number;
	setAbsorptionAmount(amount: number): void;
	remove(): void;
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): EntityType;
	getServer(): Server;
	isValid(): boolean;
	getWorld(): World;
	playEffect(type: EntityEffect): void;
	getBoundingBox(): BoundingBox;
	getPassenger(): Entity;
	getHeight(): number;
	setVelocity(vel: Vector): void;
	getEntityId(): number;
	getLastDamageCause(): EntityDamageEvent;
	getTicksLived(): number;
	setRotation(yaw: number, pitch: number): void;
	removePassenger(passenger: Entity): boolean;
	getUniqueId(): string;
	getVelocity(): Vector;
	addPassenger(passenger: Entity): boolean;
	leaveVehicle(): boolean;
	isDead(): boolean;
	isOnGround(): boolean;
	setPersistent(persistent: boolean): void;
	getFireTicks(): number;
	eject(): boolean;
	getVehicle(): Entity;
	setGlowing(flag: boolean): void;
	isGlowing(): boolean;
	getPassengers(): any;
	isPersistent(): boolean;
	setFallDistance(distance: number): void;
	setInvulnerable(flag: boolean): void;
	setPassenger(passenger: Entity): boolean;
	teleport(location: Location): boolean;
	teleport(location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(destination: Entity): boolean;
	teleport(destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
	getWidth(): number;
	getNearbyEntities(x: number, y: number, z: number): any;
	setFireTicks(ticks: number): void;
	getMaxFireTicks(): number;
	getFallDistance(): number;
	setLastDamageCause(event: EntityDamageEvent): void;
	setTicksLived(value: number): void;
	isInsideVehicle(): boolean;
	addScoreboardTag(tag: string): boolean;
	setSilent(flag: boolean): void;
	setGravity(gravity: boolean): void;
	hasGravity(): boolean;
	getScoreboardTags(): any;
	getFacing(): BlockFace;
	getPose(): Pose;
	isSilent(): boolean;
	setPortalCooldown(cooldown: number): void;
	getPortalCooldown(): number;
	isInvulnerable(): boolean;
	getPistonMoveReaction(): PistonMoveReaction;
	setCustomNameVisible(flag: boolean): void;
	isCustomNameVisible(): boolean;
	removeScoreboardTag(tag: string): boolean;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	getName(): string;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	hasPermission(_name: string): boolean;
	hasPermission(perm: Permission): boolean;
	removeAttachment(attachment: PermissionAttachment): void;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	recalculatePermissions(): void;
	getEffectivePermissions(): any;
	isOp(): boolean;
	setOp(value: boolean): void;
	setCustomName(_name: string): void;
	getCustomName(): string;
	getPersistentDataContainer(): PersistentDataContainer;
	launchProjectile(projectile: any): Projectile;
	launchProjectile(projectile: any, velocity: Vector): Projectile;
	getLootTable(): LootTable;
	setLootTable(table: LootTable): void;
	setSeed(seed: number): void;
	getSeed(): number;
}

export class Pig {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Pig');
	}
}

