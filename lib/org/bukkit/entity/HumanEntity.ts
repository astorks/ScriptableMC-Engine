declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PlayerInventory} from '../../../org/bukkit/inventory/PlayerInventory.js'
import {InventoryView} from '../../../org/bukkit/inventory/InventoryView.js'
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Villager} from '../../../org/bukkit/entity/Villager.js'
import {Merchant} from '../../../org/bukkit/inventory/Merchant.js'
import {MainHand} from '../../../org/bukkit/inventory/MainHand.js'
import {GameMode} from '../../../org/bukkit/GameMode.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {Block} from '../../../org/bukkit/block/Block.js'
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
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {AnimalTamer} from '../../../org/bukkit/entity/AnimalTamer.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'

export interface HumanEntity extends LivingEntity, AnimalTamer, InventoryHolder {
	getName(): string;
	sleep(location: Location, force: boolean): boolean;
	getInventory(): Inventory;
	getInventory(): PlayerInventory;
	getOpenInventory(): InventoryView;
	closeInventory(): void;
	openWorkbench(location: Location, force: boolean): InventoryView;
	openEnchanting(location: Location, force: boolean): InventoryView;
	setWindowProperty(prop: InventoryView$Property, value: number): boolean;
	getItemInHand(): ItemStack;
	openInventory(inventory: Inventory): InventoryView;
	openInventory(inventory: InventoryView): void;
	openMerchant(trader: Villager, force: boolean): InventoryView;
	openMerchant(merchant: Merchant, force: boolean): InventoryView;
	setItemInHand(item: ItemStack): void;
	getEnderChest(): Inventory;
	getMainHand(): MainHand;
	wakeup(setSpawnLocation: boolean): void;
	getGameMode(): GameMode;
	isBlocking(): boolean;
	discoverRecipe(recipe: NamespacedKey): boolean;
	getItemOnCursor(): ItemStack;
	hasCooldown(material: Material): boolean;
	setGameMode(mode: GameMode): void;
	setCooldown(material: Material, ticks: number): void;
	getBedLocation(): Location;
	getSleepTicks(): number;
	isHandRaised(): boolean;
	discoverRecipes(recipes: any): number;
	undiscoverRecipes(recipes: any): number;
	getCooldown(material: Material): number;
	getExpToLevel(): number;
	setItemOnCursor(item: ItemStack): void;
	undiscoverRecipe(recipe: NamespacedKey): boolean;
	getShoulderEntityLeft(): Entity;
	getShoulderEntityRight(): Entity;
	setBedSpawnLocation(location: Location): void;
	setBedSpawnLocation(location: Location, force: boolean): void;
	getBedSpawnLocation(): Location;
	setShoulderEntityLeft(entity: Entity): void;
	setShoulderEntityRight(entity: Entity): void;
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
	setVelocity(velocity: Vector): void;
	getEntityId(): number;
	getLastDamageCause(): EntityDamageEvent;
	getTicksLived(): number;
	setRotation(yaw: number, pitch: number): void;
	removePassenger(passenger: Entity): boolean;
	getUniqueId(): string;
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
}

export class HumanEntity {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.HumanEntity');
	}
}

