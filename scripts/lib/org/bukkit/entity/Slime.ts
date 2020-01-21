declare var Java: any;
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {Location} from '../../../org/bukkit/Location.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'
import {Mob} from '../../../org/bukkit/entity/Mob.js'

export interface Slime extends Mob {
	getSize(): number;
	setSize(arg0: number): void;
	getTarget(): LivingEntity;
	setTarget(arg0: LivingEntity): void;
	setMemory(arg0: MemoryKey, arg1: any): void;
	getLastDamage(): number;
	rayTraceBlocks(arg0: number): RayTraceResult;
	rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult;
	getActivePotionEffects(): any;
	getRemoveWhenFarAway(): boolean;
	getTargetBlockExact(arg0: number): Block;
	getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
	setRemoveWhenFarAway(arg0: boolean): void;
	setMaximumNoDamageTicks(arg0: number): void;
	getLastTwoTargetBlocks(arg0: any, arg1: number): any;
	getMaximumNoDamageTicks(): number;
	setRemainingAir(arg0: number): void;
	getMaximumAir(): number;
	setMaximumAir(arg0: number): void;
	getLineOfSight(arg0: any, arg1: number): any;
	getEyeHeight(): number;
	getEyeHeight(arg0: boolean): number;
	getEyeLocation(): Location;
	getTargetBlock(arg0: any, arg1: number): Block;
	getRemainingAir(): number;
	setLastDamage(arg0: number): void;
	getCanPickupItems(): boolean;
	setCollidable(arg0: boolean): void;
	removePotionEffect(arg0: PotionEffectType): void;
	isSwimming(): boolean;
	setGliding(arg0: boolean): void;
	setLeashHolder(arg0: Entity): boolean;
	isSleeping(): boolean;
	getLeashHolder(): Entity;
	setCanPickupItems(arg0: boolean): void;
	isGliding(): boolean;
	setAI(arg0: boolean): void;
	isCollidable(): boolean;
	getNoDamageTicks(): number;
	getKiller(): Player;
	isRiptiding(): boolean;
	isLeashed(): boolean;
	getEquipment(): EntityEquipment;
	getPotionEffect(arg0: PotionEffectType): PotionEffect;
	getMemory(arg0: MemoryKey): any;
	hasPotionEffect(arg0: PotionEffectType): boolean;
	hasAI(): boolean;
	addPotionEffect(arg0: PotionEffect): boolean;
	addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
	addPotionEffects(arg0: any): boolean;
	setNoDamageTicks(arg0: number): void;
	hasLineOfSight(arg0: Entity): boolean;
	setSwimming(arg0: boolean): void;
	getAttribute(arg0: Attribute): AttributeInstance;
	getAbsorptionAmount(): number;
	setAbsorptionAmount(arg0: number): void;
	damage(arg0: number): void;
	damage(arg0: number, arg1: Entity): void;
	setMaxHealth(arg0: number): void;
	resetMaxHealth(): void;
	getHealth(): number;
	getMaxHealth(): number;
	setHealth(arg0: number): void;
	remove(): void;
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getType(): EntityType;
	getServer(): Server;
	getWorld(): World;
	playEffect(arg0: EntityEffect): void;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): any;
	isCustomNameVisible(): boolean;
	getPistonMoveReaction(): PistonMoveReaction;
	removeScoreboardTag(arg0: string): boolean;
	setCustomNameVisible(arg0: boolean): void;
	getUniqueId(): string;
	addScoreboardTag(arg0: string): boolean;
	getScoreboardTags(): any;
	getPose(): Pose;
	getFacing(): BlockFace;
	setVelocity(arg0: Vector): void;
	getMaxFireTicks(): number;
	getEntityId(): number;
	setPersistent(arg0: boolean): void;
	teleport(arg0: Location): boolean;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	getFireTicks(): number;
	getHeight(): number;
	getVelocity(): Vector;
	isOnGround(): boolean;
	setRotation(arg0: number, arg1: number): void;
	getWidth(): number;
	setFireTicks(arg0: number): void;
	isValid(): boolean;
	isPersistent(): boolean;
	getBoundingBox(): BoundingBox;
	getPassenger(): Entity;
	isDead(): boolean;
	isSilent(): boolean;
	setTicksLived(arg0: number): void;
	getPassengers(): any;
	leaveVehicle(): boolean;
	isInvulnerable(): boolean;
	removePassenger(arg0: Entity): boolean;
	getLastDamageCause(): EntityDamageEvent;
	setSilent(arg0: boolean): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	addPassenger(arg0: Entity): boolean;
	getVehicle(): Entity;
	setGravity(arg0: boolean): void;
	getTicksLived(): number;
	setInvulnerable(arg0: boolean): void;
	getPortalCooldown(): number;
	eject(): boolean;
	isInsideVehicle(): boolean;
	getFallDistance(): number;
	setPassenger(arg0: Entity): boolean;
	setPortalCooldown(arg0: number): void;
	setFallDistance(arg0: number): void;
	setGlowing(arg0: boolean): void;
	isGlowing(): boolean;
	hasGravity(): boolean;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	getName(): string;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string): void;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	getEffectivePermissions(): any;
	recalculatePermissions(): void;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	removeAttachment(arg0: PermissionAttachment): void;
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	setOp(arg0: boolean): void;
	isOp(): boolean;
	getCustomName(): string;
	setCustomName(arg0: string): void;
	getPersistentDataContainer(): PersistentDataContainer;
	launchProjectile(arg0: any): Projectile;
	launchProjectile(arg0: any, arg1: Vector): Projectile;
	getLootTable(): LootTable;
	getSeed(): number;
	setLootTable(arg0: LootTable): void;
	setSeed(arg0: number): void;
}

export class Slime {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Slime');
	}
}

