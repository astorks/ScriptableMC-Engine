declare var Java: any;
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {World} from '../../../org/bukkit/World.js'
import {Server} from '../../../org/bukkit/Server.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'
import {Creature} from '../../../org/bukkit/entity/Creature.js'

export interface Ageable extends Creature {
	setBaby(): void;
	getAge(): number;
	canBreed(): boolean;
	setBreed(breed: boolean): void;
	isAdult(): boolean;
	setAge(age: number): void;
	getAgeLock(): boolean;
	setAdult(): void;
	setAgeLock(lock: boolean): void;
	getTarget(): LivingEntity;
	setTarget(target: LivingEntity): void;
	setMemory(memoryKey: MemoryKey, memoryValue: any): void;
	getLineOfSight(transparent: any, maxDistance: number): any;
	getEyeHeight(): number;
	getEyeHeight(ignorePose: boolean): number;
	getRemainingAir(): number;
	getMaximumAir(): number;
	getKiller(): Player;
	addPotionEffect(effect: PotionEffect, force: boolean): boolean;
	addPotionEffect(effect: PotionEffect): boolean;
	getPotionEffect(type: PotionEffectType): PotionEffect;
	removePotionEffect(type: PotionEffectType): void;
	hasLineOfSight(other: Entity): boolean;
	getEquipment(): EntityEquipment;
	setCanPickupItems(pickup: boolean): void;
	setRemainingAir(ticks: number): void;
	getCanPickupItems(): boolean;
	getLastDamage(): number;
	isLeashed(): boolean;
	setLeashHolder(holder: Entity): boolean;
	setNoDamageTicks(ticks: number): void;
	getEyeLocation(): Location;
	getNoDamageTicks(): number;
	isGliding(): boolean;
	addPotionEffects(effects: any): boolean;
	hasPotionEffect(type: PotionEffectType): boolean;
	setGliding(gliding: boolean): void;
	isSwimming(): boolean;
	setSwimming(swimming: boolean): void;
	getTargetBlock(transparent: any, maxDistance: number): Block;
	isRiptiding(): boolean;
	setAI(ai: boolean): void;
	setMaximumAir(ticks: number): void;
	getLeashHolder(): Entity;
	setLastDamage(damage: number): void;
	setCollidable(collidable: boolean): void;
	isCollidable(): boolean;
	hasAI(): boolean;
	getMemory(memoryKey: MemoryKey): any;
	rayTraceBlocks(maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	rayTraceBlocks(maxDistance: number): RayTraceResult;
	isSleeping(): boolean;
	getActivePotionEffects(): any;
	setRemoveWhenFarAway(remove: boolean): void;
	setMaximumNoDamageTicks(ticks: number): void;
	getTargetBlockExact(maxDistance: number, fluidCollisionMode: FluidCollisionMode): Block;
	getTargetBlockExact(maxDistance: number): Block;
	getLastTwoTargetBlocks(transparent: any, maxDistance: number): any;
	getMaximumNoDamageTicks(): number;
	getRemoveWhenFarAway(): boolean;
	getAttribute(attribute: Attribute): AttributeInstance;
	damage(amount: number): void;
	damage(amount: number, source: Entity): void;
	getHealth(): number;
	setMaxHealth(health: number): void;
	setHealth(health: number): void;
	getMaxHealth(): number;
	resetMaxHealth(): void;
	setAbsorptionAmount(amount: number): void;
	getAbsorptionAmount(): number;
	remove(): void;
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): EntityType;
	getWorld(): World;
	getServer(): Server;
	getHeight(): number;
	isOnGround(): boolean;
	getFireTicks(): number;
	getMaxFireTicks(): number;
	setPersistent(persistent: boolean): void;
	setPassenger(passenger: Entity): boolean;
	addPassenger(passenger: Entity): boolean;
	eject(): boolean;
	setLastDamageCause(event: EntityDamageEvent): void;
	setTicksLived(value: number): void;
	getVehicle(): Entity;
	setGlowing(flag: boolean): void;
	setRotation(yaw: number, pitch: number): void;
	getVelocity(): Vector;
	isPersistent(): boolean;
	isDead(): boolean;
	getPassenger(): Entity;
	getPassengers(): any;
	removePassenger(passenger: Entity): boolean;
	setFallDistance(distance: number): void;
	getLastDamageCause(): EntityDamageEvent;
	getUniqueId(): string;
	isValid(): boolean;
	getFallDistance(): number;
	isGlowing(): boolean;
	setInvulnerable(flag: boolean): void;
	teleport(location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(destination: Entity): boolean;
	teleport(destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(location: Location): boolean;
	getTicksLived(): number;
	isInsideVehicle(): boolean;
	leaveVehicle(): boolean;
	getEntityId(): number;
	getWidth(): number;
	setFireTicks(ticks: number): void;
	getBoundingBox(): BoundingBox;
	setVelocity(velocity: Vector): void;
	getPortalCooldown(): number;
	getPose(): Pose;
	isSilent(): boolean;
	hasGravity(): boolean;
	isInvulnerable(): boolean;
	setSilent(flag: boolean): void;
	setGravity(gravity: boolean): void;
	addScoreboardTag(tag: string): boolean;
	setPortalCooldown(cooldown: number): void;
	getScoreboardTags(): any;
	getFacing(): BlockFace;
	playEffect(type: EntityEffect): void;
	getNearbyEntities(x: number, y: number, z: number): any;
	getPistonMoveReaction(): PistonMoveReaction;
	isCustomNameVisible(): boolean;
	removeScoreboardTag(tag: string): boolean;
	setCustomNameVisible(flag: boolean): void;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	hasMetadata(metadataKey: string): boolean;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	getName(): string;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	removeAttachment(attachment: PermissionAttachment): void;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	hasPermission(_name: string): boolean;
	hasPermission(perm: Permission): boolean;
	recalculatePermissions(): void;
	getEffectivePermissions(): any;
	isOp(): boolean;
	setOp(value: boolean): void;
	getCustomName(): string;
	setCustomName(_name: string): void;
	getPersistentDataContainer(): PersistentDataContainer;
	launchProjectile(projectile: any): Projectile;
	launchProjectile(projectile: any, velocity: Vector): Projectile;
	setSeed(seed: number): void;
	getLootTable(): LootTable;
	getSeed(): number;
	setLootTable(table: LootTable): void;
}

export class Ageable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Ageable');
	}
}

