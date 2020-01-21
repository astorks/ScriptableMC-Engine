declare var Java: any;
import {ProjectileSource} from '../../../org/bukkit/projectiles/ProjectileSource.js'
import {Color} from '../../../org/bukkit/Color.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionData} from '../../../org/bukkit/potion/PotionData.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {Particle} from '../../../org/bukkit/Particle.js'
import {Location} from '../../../org/bukkit/Location.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface AreaEffectCloud extends Entity {
	getSource(): ProjectileSource;
	setColor(arg0: Color): void;
	getColor(): Color;
	addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean;
	getBasePotionData(): PotionData;
	getCustomEffects(): any;
	removeCustomEffect(arg0: PotionEffectType): boolean;
	setBasePotionData(arg0: PotionData): void;
	hasCustomEffects(): boolean;
	clearCustomEffects(): void;
	hasCustomEffect(arg0: PotionEffectType): boolean;
	setRadius(arg0: number): void;
	getRadius(): number;
	getDuration(): number;
	getReapplicationDelay(): number;
	setReapplicationDelay(arg0: number): void;
	setSource(arg0: ProjectileSource): void;
	setDuration(arg0: number): void;
	getParticle(): Particle;
	getRadiusOnUse(): number;
	setWaitTime(arg0: number): void;
	getDurationOnUse(): number;
	setDurationOnUse(arg0: number): void;
	getRadiusPerTick(): number;
	setRadiusPerTick(arg0: number): void;
	setParticle(arg0: Particle): void;
	setParticle(arg0: Particle, arg1: any): void;
	setRadiusOnUse(arg0: number): void;
	getWaitTime(): number;
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
}

export class AreaEffectCloud {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AreaEffectCloud');
	}
}

