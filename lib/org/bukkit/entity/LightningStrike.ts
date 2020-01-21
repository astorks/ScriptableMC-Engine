declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {World} from '../../../org/bukkit/World.js'
import {Server} from '../../../org/bukkit/Server.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
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

export interface LightningStrike extends Entity {
	isEffect(): boolean;
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
}

export class LightningStrike {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.LightningStrike');
	}
}

