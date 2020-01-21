declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Effect} from '../../../org/bukkit/Effect.js'
import {Particle} from '../../../org/bukkit/Particle.js'
import {Sound} from '../../../org/bukkit/Sound.js'
import {SoundCategory} from '../../../org/bukkit/SoundCategory.js'
import {DyeColor} from '../../../org/bukkit/DyeColor.js'
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {Statistic} from '../../../org/bukkit/Statistic.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Material} from '../../../org/bukkit/Material.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {Instrument} from '../../../org/bukkit/Instrument.js'
import {Note} from '../../../org/bukkit/Note.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {WeatherType} from '../../../org/bukkit/WeatherType.js'
import {AdvancementProgress} from '../../../org/bukkit/advancement/AdvancementProgress.js'
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {GameMode} from '../../../org/bukkit/GameMode.js'
import {InventoryView} from '../../../org/bukkit/inventory/InventoryView.js'
import {PlayerInventory} from '../../../org/bukkit/inventory/PlayerInventory.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {Villager} from '../../../org/bukkit/entity/Villager.js'
import {Merchant} from '../../../org/bukkit/inventory/Merchant.js'
import {MainHand} from '../../../org/bukkit/inventory/MainHand.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
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
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
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
	setLevel(level: number): void;
	getLevel(): number;
	getDisplayName(): string;
	getAllowFlight(): boolean;
	canSee(player: Player): boolean;
	playEffect(loc: Location, effect: Effect, data: any): void;
	playEffect(loc: Location, effect: Effect, data: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, location: Location, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	playSound(location: Location, sound: string, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
	sendChunkChange(loc: Location, sx: number, sy: number, sz: number, data: Array<number>): boolean;
	sendSignChange(loc: Location, lines: Array<string>): void;
	sendSignChange(loc: Location, lines: Array<string>, dyeColor: DyeColor): void;
	sendMap(map: MapView): void;
	updateInventory(): void;
	saveData(): void;
	incrementStatistic(statistic: Statistic, entityType: EntityType, amount: number): void;
	incrementStatistic(statistic: Statistic, entityType: EntityType): void;
	incrementStatistic(statistic: Statistic, material: Material, amount: number): void;
	incrementStatistic(statistic: Statistic, material: Material): void;
	incrementStatistic(statistic: Statistic, amount: number): void;
	incrementStatistic(statistic: Statistic): void;
	setStatistic(statistic: Statistic, entityType: EntityType, newValue: number): void;
	setStatistic(statistic: Statistic, newValue: number): void;
	setStatistic(statistic: Statistic, material: Material, newValue: number): void;
	isSprinting(): boolean;
	setSprinting(sprinting: boolean): void;
	stopSound(sound: string, category: SoundCategory): void;
	stopSound(sound: string): void;
	stopSound(sound: Sound): void;
	stopSound(sound: Sound, category: SoundCategory): void;
	getPlayerTime(): number;
	isSleepingIgnored(): boolean;
	setCompassTarget(loc: Location): void;
	setDisplayName(_name: string): void;
	sendRawMessage(message: string): void;
	getCompassTarget(): Location;
	loadData(): void;
	decrementStatistic(statistic: Statistic, entityType: EntityType, amount: number): void;
	decrementStatistic(statistic: Statistic, entityType: EntityType): void;
	decrementStatistic(statistic: Statistic): void;
	decrementStatistic(statistic: Statistic, amount: number): void;
	decrementStatistic(statistic: Statistic, material: Material, amount: number): void;
	decrementStatistic(statistic: Statistic, material: Material): void;
	getStatistic(statistic: Statistic, material: Material): number;
	getStatistic(statistic: Statistic): number;
	getStatistic(statistic: Statistic, entityType: EntityType): number;
	getPlayerListName(): string;
	performCommand(command: string): boolean;
	setSneaking(sneak: boolean): void;
	setSleepingIgnored(isSleeping: boolean): void;
	setPlayerListName(_name: string): void;
	isSneaking(): boolean;
	setPlayerTime(time: number, relative: boolean): void;
	kickPlayer(message: string): void;
	sendBlockChange(loc: Location, block: BlockData): void;
	sendBlockChange(loc: Location, material: Material, data: number): void;
	chat(msg: string): void;
	playNote(loc: Location, instrument: Instrument, note: Note): void;
	playNote(loc: Location, instrument: number, note: number): void;
	setFoodLevel(value: number): void;
	getFlySpeed(): number;
	getScoreboard(): Scoreboard;
	isHealthScaled(): boolean;
	setSpectatorTarget(entity: Entity): void;
	setTotalExperience(exp: number): void;
	setAllowFlight(flight: boolean): void;
	setFlying(value: boolean): void;
	setExhaustion(value: number): void;
	hidePlayer(plugin: Plugin, player: Player): void;
	hidePlayer(player: Player): void;
	setSaturation(value: number): void;
	getWalkSpeed(): number;
	setHealthScaled(scale: boolean): void;
	getExhaustion(): number;
	setScoreboard(scoreboard: Scoreboard): void;
	getLocale(): string;
	openBook(book: ItemStack): void;
	getPlayerWeather(): WeatherType;
	getSaturation(): number;
	getSpectatorTarget(): Entity;
	getFoodLevel(): number;
	resetTitle(): void;
	resetPlayerTime(): void;
	resetPlayerWeather(): void;
	getExp(): number;
	showPlayer(player: Player): void;
	showPlayer(plugin: Plugin, player: Player): void;
	isFlying(): boolean;
	giveExp(amount: number): void;
	setFlySpeed(value: number): void;
	setTexturePack(url: string): void;
	setResourcePack(url: string, hash: Array<number>): void;
	setResourcePack(url: string): void;
	setPlayerWeather(type: WeatherType): void;
	setExp(exp: number): void;
	sendTitle(title: string, subtitle: string, fadeIn: number, stay: number, fadeOut: number): void;
	sendTitle(title: string, subtitle: string): void;
	setHealthScale(scale: number): void;
	getTotalExperience(): number;
	giveExpLevels(amount: number): void;
	getHealthScale(): number;
	setWalkSpeed(value: number): void;
	updateCommands(): void;
	getPlayerListFooter(): string;
	getClientViewDistance(): number;
	getPlayerListHeader(): string;
	isPlayerTimeRelative(): boolean;
	setPlayerListHeaderFooter(header: string, footer: string): void;
	getPlayerTimeOffset(): number;
	getAdvancementProgress(advancement: Advancement): AdvancementProgress;
	setPlayerListHeader(header: string): void;
	setPlayerListFooter(footer: string): void;
	getName(): string;
	getName(): string;
	sleep(location: Location, force: boolean): boolean;
	setItemInHand(item: ItemStack): void;
	setCooldown(material: Material, ticks: number): void;
	undiscoverRecipes(recipes: any): number;
	isHandRaised(): boolean;
	getBedLocation(): Location;
	isBlocking(): boolean;
	undiscoverRecipe(recipe: NamespacedKey): boolean;
	getItemOnCursor(): ItemStack;
	hasCooldown(material: Material): boolean;
	getGameMode(): GameMode;
	discoverRecipe(recipe: NamespacedKey): boolean;
	discoverRecipes(recipes: any): number;
	wakeup(setSpawnLocation: boolean): void;
	getItemInHand(): ItemStack;
	setGameMode(mode: GameMode): void;
	setItemOnCursor(item: ItemStack): void;
	getExpToLevel(): number;
	getCooldown(material: Material): number;
	getSleepTicks(): number;
	getOpenInventory(): InventoryView;
	closeInventory(): void;
	getInventory(): PlayerInventory;
	getInventory(): Inventory;
	setWindowProperty(prop: InventoryView$Property, value: number): boolean;
	openInventory(inventory: Inventory): InventoryView;
	openInventory(inventory: InventoryView): void;
	openWorkbench(location: Location, force: boolean): InventoryView;
	openEnchanting(location: Location, force: boolean): InventoryView;
	openMerchant(trader: Villager, force: boolean): InventoryView;
	openMerchant(merchant: Merchant, force: boolean): InventoryView;
	getEnderChest(): Inventory;
	getMainHand(): MainHand;
	setBedSpawnLocation(location: Location, force: boolean): void;
	setBedSpawnLocation(location: Location): void;
	getBedSpawnLocation(): Location;
	getBedSpawnLocation(): Location;
	setShoulderEntityLeft(entity: Entity): void;
	getShoulderEntityLeft(): Entity;
	setShoulderEntityRight(entity: Entity): void;
	getShoulderEntityRight(): Entity;
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
	isConversing(): boolean;
	beginConversation(conversation: Conversation): boolean;
	acceptConversationInput(input: string): void;
	abandonConversation(conversation: Conversation, details: ConversationAbandonedEvent): void;
	abandonConversation(conversation: Conversation): void;
	getPlayer(): Player;
	hasPlayedBefore(): boolean;
	getFirstPlayed(): number;
	setWhitelisted(value: boolean): void;
	getLastPlayed(): number;
	isOnline(): boolean;
	isWhitelisted(): boolean;
	isBanned(): boolean;
	serialize(): any;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	getListeningPluginChannels(): any;
}

export class Player {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Player');
	}
}

