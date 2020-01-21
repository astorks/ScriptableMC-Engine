declare var Java: any;
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Location} from '../../../org/bukkit/Location.js'
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

export interface Damageable extends Entity {
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
}

export class Damageable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Damageable');
	}
}

