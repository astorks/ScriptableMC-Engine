declare var Java: any;
import {UnsafeValues} from '../../org/bukkit/UnsafeValues.js'
import {MapView} from '../../org/bukkit/map/MapView.js'
import {World} from '../../org/bukkit/World.js'
import {ScoreboardManager} from '../../org/bukkit/scoreboard/ScoreboardManager.js'
import {Messenger} from '../../org/bukkit/plugin/messaging/Messenger.js'
import {PluginManager} from '../../org/bukkit/plugin/PluginManager.js'
import {PluginCommand} from '../../org/bukkit/command/PluginCommand.js'
import {Player} from '../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {WorldCreator} from '../../org/bukkit/WorldCreator.js'
import {OfflinePlayer} from '../../org/bukkit/OfflinePlayer.js'
import {ServicesManager} from '../../org/bukkit/plugin/ServicesManager.js'
import {Location} from '../../org/bukkit/Location.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {CommandSender} from '../../org/bukkit/command/CommandSender.js'
import {Recipe} from '../../org/bukkit/inventory/Recipe.js'
import {BukkitScheduler} from '../../org/bukkit/scheduler/BukkitScheduler.js'
import {LootTable} from '../../org/bukkit/loot/LootTable.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {ConsoleCommandSender} from '../../org/bukkit/command/ConsoleCommandSender.js'
import {KeyedBossBar} from '../../org/bukkit/boss/KeyedBossBar.js'
import {ChunkGenerator$ChunkData} from '../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {CachedServerIcon} from '../../org/bukkit/util/CachedServerIcon.js'
import {BarColor} from '../../org/bukkit/boss/BarColor.js'
import {BarStyle} from '../../org/bukkit/boss/BarStyle.js'
import {BarFlag} from '../../org/bukkit/boss/BarFlag.js'
import {BossBar} from '../../org/bukkit/boss/BossBar.js'
import {GameMode} from '../../org/bukkit/GameMode.js'
import {Inventory} from '../../org/bukkit/inventory/Inventory.js'
import {InventoryHolder} from '../../org/bukkit/inventory/InventoryHolder.js'
import {InventoryType} from '../../org/bukkit/event/inventory/InventoryType.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../org/bukkit/Material.js'
import {Tag} from '../../org/bukkit/Tag.js'
import {Warning$WarningState} from '../../org/bukkit/Warning$WarningState.js'
import {Merchant} from '../../org/bukkit/inventory/Merchant.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'
import {ItemFactory} from '../../org/bukkit/inventory/ItemFactory.js'
import {BanList} from '../../org/bukkit/BanList.js'
import {BanList$Type} from '../../org/bukkit/BanList$Type.js'
import {HelpMap} from '../../org/bukkit/help/HelpMap.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'

export interface Server extends PluginMessageRecipient {
	shutdown(): void;
	getName(): string;
	getUnsafe(): UnsafeValues;
	getLogger(): any;
	getPort(): number;
	getMap(id: number): MapView;
	createMap(world: World): MapView;
	getVersion(): string;
	getTicksPerMonsterSpawns(): number;
	getWhitelistedPlayers(): any;
	getGenerateStructures(): boolean;
	getTicksPerAnimalSpawns(): number;
	getConnectionThrottle(): number;
	getUpdateFolderFile(): any;
	getMonsterSpawnLimit(): number;
	getScoreboardManager(): ScoreboardManager;
	getAnimalSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	getWaterAnimalSpawnLimit(): number;
	advancementIterator(): any;
	getMessenger(): Messenger;
	getPluginManager(): PluginManager;
	getPluginCommand(_name: string): PluginCommand;
	hasWhitelist(): boolean;
	getPlayer(_name: string): Player;
	getPlayer(id: string): Player;
	getWorld(_name: string): World;
	getWorld(uid: string): World;
	reload(): void;
	getMaxPlayers(): number;
	getOnlineMode(): boolean;
	broadcast(message: string, permission: string): number;
	getIPBans(): any;
	recipeIterator(): any;
	getUpdateFolder(): string;
	getRecipesFor(result: ItemStack): any;
	getAllowFlight(): boolean;
	getOnlinePlayers(): any;
	getWorlds(): any;
	createWorld(creator: WorldCreator): World;
	getBukkitVersion(): string;
	getWorldType(): string;
	reloadWhitelist(): void;
	matchPlayer(_name: string): any;
	reloadData(): void;
	getSpawnRadius(): number;
	savePlayers(): void;
	setSpawnRadius(value: number): void;
	getOfflinePlayer(id: string): OfflinePlayer;
	getOfflinePlayer(_name: string): OfflinePlayer;
	clearRecipes(): void;
	setWhitelist(value: boolean): void;
	getPlayerExact(_name: string): Player;
	getServicesManager(): ServicesManager;
	createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
	createExplorerMap(world: World, location: Location, structureType: StructureType, radius: number, findUnexplored: boolean): ItemStack;
	dispatchCommand(sender: CommandSender, commandLine: string): boolean;
	broadcastMessage(message: string): number;
	getViewDistance(): number;
	unloadWorld(world: World, save: boolean): boolean;
	unloadWorld(_name: string, save: boolean): boolean;
	addRecipe(recipe: Recipe): boolean;
	getCommandAliases(): any;
	getAllowEnd(): boolean;
	isHardcore(): boolean;
	resetRecipes(): void;
	getScheduler(): BukkitScheduler;
	getIp(): string;
	getAllowNether(): boolean;
	getMotd(): string;
	getBossBars(): any;
	getLootTable(key: NamespacedKey): LootTable;
	getConsoleSender(): ConsoleCommandSender;
	getBannedPlayers(): any;
	isPrimaryThread(): boolean;
	banIP(address: string): void;
	getBossBar(key: NamespacedKey): KeyedBossBar;
	createChunkData(world: World): ChunkGenerator$ChunkData;
	selectEntities(sender: CommandSender, selector: string): any;
	loadServerIcon(image: any): CachedServerIcon;
	loadServerIcon(file: any): CachedServerIcon;
	getServerIcon(): CachedServerIcon;
	createBossBar(key: NamespacedKey, title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): KeyedBossBar;
	createBossBar(title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): BossBar;
	getOperators(): any;
	getDefaultGameMode(): GameMode;
	getOfflinePlayers(): Array<OfflinePlayer>;
	createInventory(owner: InventoryHolder, size: number, title: string): Inventory;
	createInventory(owner: InventoryHolder, type: InventoryType): Inventory;
	createInventory(owner: InventoryHolder, size: number): Inventory;
	createInventory(owner: InventoryHolder, type: InventoryType, title: string): Inventory;
	getShutdownMessage(): string;
	createBlockData(material: Material): BlockData;
	createBlockData(data: string): BlockData;
	createBlockData(material: Material, consumer: any): BlockData;
	createBlockData(material: Material, data: string): BlockData;
	getTag(registry: string, tag: NamespacedKey, clazz: any): Tag;
	setIdleTimeout(threshold: number): void;
	unbanIP(address: string): void;
	getWarningState(): Warning$WarningState;
	removeBossBar(key: NamespacedKey): boolean;
	createMerchant(title: string): Merchant;
	getTags(registry: string, clazz: any): any;
	getEntity(uuid: string): Entity;
	getAdvancement(key: NamespacedKey): Advancement;
	getItemFactory(): ItemFactory;
	getIdleTimeout(): number;
	getWorldContainer(): any;
	getBanList(type: BanList$Type): BanList;
	getHelpMap(): HelpMap;
	setDefaultGameMode(mode: GameMode): void;
	getListeningPluginChannels(): any;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
}

export class Server {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Server');
	}
	public static get BROADCAST_CHANNEL_ADMINISTRATIVE(): string {
		return Server.$javaClass.BROADCAST_CHANNEL_ADMINISTRATIVE;
	}
	public static get BROADCAST_CHANNEL_USERS(): string {
		return Server.$javaClass.BROADCAST_CHANNEL_USERS;
	}
}

