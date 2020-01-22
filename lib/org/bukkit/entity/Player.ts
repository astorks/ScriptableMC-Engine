declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Sound} from '../../../org/bukkit/Sound.js'
import {SoundCategory} from '../../../org/bukkit/SoundCategory.js'
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {Statistic} from '../../../org/bukkit/Statistic.js'
import {Material} from '../../../org/bukkit/Material.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {WeatherType} from '../../../org/bukkit/WeatherType.js'
import {Instrument} from '../../../org/bukkit/Instrument.js'
import {Note} from '../../../org/bukkit/Note.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {DyeColor} from '../../../org/bukkit/DyeColor.js'
import {Effect} from '../../../org/bukkit/Effect.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Particle} from '../../../org/bukkit/Particle.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {AdvancementProgress} from '../../../org/bukkit/advancement/AdvancementProgress.js'
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PlayerInventory} from '../../../org/bukkit/inventory/PlayerInventory.js'
import {InventoryView} from '../../../org/bukkit/inventory/InventoryView.js'
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {Villager} from '../../../org/bukkit/entity/Villager.js'
import {Merchant} from '../../../org/bukkit/inventory/Merchant.js'
import {MainHand} from '../../../org/bukkit/inventory/MainHand.js'
import {GameMode} from '../../../org/bukkit/GameMode.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
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
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'
import {ConversationAbandonedEvent} from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {Conversable} from '../../../org/bukkit/conversations/Conversable.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {PluginMessageRecipient} from '../../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'

export interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient {
	getAddress(): any;
	getDisplayName(): string;
	getAllowFlight(): boolean;
	canSee(player: Player): boolean;
	setDisplayName(_name: string): void;
	getPlayerListName(): string;
	setCompassTarget(loc: Location): void;
	setSneaking(sneak: boolean): void;
	stopSound(sound: Sound, category: SoundCategory): void;
	stopSound(sound: string, category: SoundCategory): void;
	stopSound(sound: string): void;
	stopSound(sound: Sound): void;
	sendMap(map: MapView): void;
	setPlayerTime(time: number, relative: boolean): void;
	setPlayerListName(_name: string): void;
	decrementStatistic(statistic: Statistic, material: Material, amount: number): void;
	decrementStatistic(statistic: Statistic, entityType: EntityType, amount: number): void;
	decrementStatistic(statistic: Statistic, material: Material): void;
	decrementStatistic(statistic: Statistic, amount: number): void;
	decrementStatistic(statistic: Statistic): void;
	decrementStatistic(statistic: Statistic, entityType: EntityType): void;
	getStatistic(statistic: Statistic, entityType: EntityType): number;
	getStatistic(statistic: Statistic): number;
	getStatistic(statistic: Statistic, material: Material): number;
	kickPlayer(message: string): void;
	setPlayerWeather(type: WeatherType): void;
	saveData(): void;
	playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, volume: number, pitch: number): void;
	updateInventory(): void;
	getCompassTarget(): Location;
	getPlayerWeather(): WeatherType;
	setStatistic(statistic: Statistic, material: Material, newValue: number): void;
	setStatistic(statistic: Statistic, entityType: EntityType, newValue: number): void;
	setStatistic(statistic: Statistic, newValue: number): void;
	resetPlayerWeather(): void;
	loadData(): void;
	isSprinting(): boolean;
	playNote(loc: Location, instrument: Instrument, note: Note): void;
	playNote(loc: Location, instrument: number, note: number): void;
	giveExpLevels(amount: number): void;
	getExp(): number;
	chat(msg: string): void;
	giveExp(amount: number): void;
	sendBlockChange(loc: Location, material: Material, data: number): void;
	sendBlockChange(loc: Location, block: BlockData): void;
	sendChunkChange(loc: Location, sx: number, sy: number, sz: number, data: Array<number>): boolean;
	sendSignChange(loc: Location, lines: Array<string>): void;
	sendSignChange(loc: Location, lines: Array<string>, dyeColor: DyeColor): void;
	incrementStatistic(statistic: Statistic, entityType: EntityType, amount: number): void;
	incrementStatistic(statistic: Statistic, entityType: EntityType): void;
	incrementStatistic(statistic: Statistic): void;
	incrementStatistic(statistic: Statistic, amount: number): void;
	incrementStatistic(statistic: Statistic, material: Material): void;
	incrementStatistic(statistic: Statistic, material: Material, amount: number): void;
	setSprinting(sprinting: boolean): void;
	isSleepingIgnored(): boolean;
	playEffect(loc: Location, effect: Effect, data: any): void;
	playEffect(loc: Location, effect: Effect, data: number): void;
	sendRawMessage(message: string): void;
	performCommand(command: string): boolean;
	setSleepingIgnored(isSleeping: boolean): void;
	getPlayerTime(): number;
	resetPlayerTime(): void;
	isSneaking(): boolean;
	setAllowFlight(flight: boolean): void;
	isHealthScaled(): boolean;
	updateCommands(): void;
	getSaturation(): number;
	getFlySpeed(): number;
	getScoreboard(): Scoreboard;
	setHealthScale(scale: number): void;
	setFlying(value: boolean): void;
	getLocale(): string;
	setSpectatorTarget(entity: Entity): void;
	getExhaustion(): number;
	setSaturation(value: number): void;
	setExp(exp: number): void;
	getHealthScale(): number;
	getSpectatorTarget(): Entity;
	getLevel(): number;
	isFlying(): boolean;
	getWalkSpeed(): number;
	setHealthScaled(scale: boolean): void;
	setTotalExperience(exp: number): void;
	setResourcePack(url: string): void;
	setResourcePack(url: string, hash: Array<number>): void;
	setTexturePack(url: string): void;
	hidePlayer(plugin: Plugin, player: Player): void;
	hidePlayer(player: Player): void;
	spawnParticle(particle: Particle, location: Location, count: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	setFlySpeed(value: number): void;
	getTotalExperience(): number;
	setScoreboard(scoreboard: Scoreboard): void;
	setLevel(level: number): void;
	setWalkSpeed(value: number): void;
	showPlayer(plugin: Plugin, player: Player): void;
	showPlayer(player: Player): void;
	resetTitle(): void;
	openBook(book: ItemStack): void;
	getFoodLevel(): number;
	setFoodLevel(value: number): void;
	setExhaustion(value: number): void;
	sendTitle(title: string, subtitle: string): void;
	sendTitle(title: string, subtitle: string, fadeIn: number, stay: number, fadeOut: number): void;
	getPlayerTimeOffset(): number;
	getPlayerListFooter(): string;
	setPlayerListFooter(footer: string): void;
	setPlayerListHeaderFooter(header: string, footer: string): void;
	getPlayerListHeader(): string;
	setPlayerListHeader(header: string): void;
	isPlayerTimeRelative(): boolean;
	getAdvancementProgress(advancement: Advancement): AdvancementProgress;
	getClientViewDistance(): number;
	getName(): string;
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
	isConversing(): boolean;
	beginConversation(conversation: Conversation): boolean;
	abandonConversation(conversation: Conversation): void;
	abandonConversation(conversation: Conversation, details: ConversationAbandonedEvent): void;
	acceptConversationInput(input: string): void;
	getPlayer(): Player;
	setWhitelisted(value: boolean): void;
	getLastPlayed(): number;
	isOnline(): boolean;
	getFirstPlayed(): number;
	hasPlayedBefore(): boolean;
	isBanned(): boolean;
	isWhitelisted(): boolean;
	serialize(): any;
	getListeningPluginChannels(): any;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
}

export class Player {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Player');
	}
}

