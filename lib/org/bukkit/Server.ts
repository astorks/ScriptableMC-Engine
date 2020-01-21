declare var Java: any;
import {UnsafeValues} from '../../org/bukkit/UnsafeValues.js'
import {MapView} from '../../org/bukkit/map/MapView.js'
import {World} from '../../org/bukkit/World.js'
import {BanList} from '../../org/bukkit/BanList.js'
import {BanList$Type} from '../../org/bukkit/BanList$Type.js'
import {Player} from '../../org/bukkit/entity/Player.js'
import {PluginManager} from '../../org/bukkit/plugin/PluginManager.js'
import {BukkitScheduler} from '../../org/bukkit/scheduler/BukkitScheduler.js'
import {PluginCommand} from '../../org/bukkit/command/PluginCommand.js'
import {Recipe} from '../../org/bukkit/inventory/Recipe.js'
import {CommandSender} from '../../org/bukkit/command/CommandSender.js'
import {ServicesManager} from '../../org/bukkit/plugin/ServicesManager.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {Location} from '../../org/bukkit/Location.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {OfflinePlayer} from '../../org/bukkit/OfflinePlayer.js'
import {WorldCreator} from '../../org/bukkit/WorldCreator.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {Inventory} from '../../org/bukkit/inventory/Inventory.js'
import {InventoryHolder} from '../../org/bukkit/inventory/InventoryHolder.js'
import {InventoryType} from '../../org/bukkit/event/inventory/InventoryType.js'
import {CachedServerIcon} from '../../org/bukkit/util/CachedServerIcon.js'
import {GameMode} from '../../org/bukkit/GameMode.js'
import {ConsoleCommandSender} from '../../org/bukkit/command/ConsoleCommandSender.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../org/bukkit/Material.js'
import {LootTable} from '../../org/bukkit/loot/LootTable.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {ItemFactory} from '../../org/bukkit/inventory/ItemFactory.js'
import {KeyedBossBar} from '../../org/bukkit/boss/KeyedBossBar.js'
import {Warning$WarningState} from '../../org/bukkit/Warning$WarningState.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'
import {Tag} from '../../org/bukkit/Tag.js'
import {HelpMap} from '../../org/bukkit/help/HelpMap.js'
import {ChunkGenerator$ChunkData} from '../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {Merchant} from '../../org/bukkit/inventory/Merchant.js'
import {Messenger} from '../../org/bukkit/plugin/messaging/Messenger.js'
import {BossBar} from '../../org/bukkit/boss/BossBar.js'
import {BarColor} from '../../org/bukkit/boss/BarColor.js'
import {BarStyle} from '../../org/bukkit/boss/BarStyle.js'
import {BarFlag} from '../../org/bukkit/boss/BarFlag.js'
import {ScoreboardManager} from '../../org/bukkit/scoreboard/ScoreboardManager.js'
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
	getWorldType(): string;
	resetRecipes(): void;
	getCommandAliases(): any;
	recipeIterator(): any;
	getSpawnRadius(): number;
	getAllowFlight(): boolean;
	banIP(address: string): void;
	savePlayers(): void;
	getBannedPlayers(): any;
	getBanList(type: BanList$Type): BanList;
	getPlayer(_name: string): Player;
	getPlayer(id: string): Player;
	getPluginManager(): PluginManager;
	getWorlds(): any;
	getPlayerExact(_name: string): Player;
	getViewDistance(): number;
	getScheduler(): BukkitScheduler;
	getAllowNether(): boolean;
	getWorld(_name: string): World;
	getWorld(uid: string): World;
	getPluginCommand(_name: string): PluginCommand;
	getBukkitVersion(): string;
	addRecipe(recipe: Recipe): boolean;
	getOnlinePlayers(): any;
	reloadData(): void;
	matchPlayer(_name: string): any;
	clearRecipes(): void;
	getMaxPlayers(): number;
	getOnlineMode(): boolean;
	getAllowEnd(): boolean;
	dispatchCommand(sender: CommandSender, commandLine: string): boolean;
	hasWhitelist(): boolean;
	reloadWhitelist(): void;
	broadcastMessage(message: string): number;
	getIp(): string;
	getUpdateFolder(): string;
	getServicesManager(): ServicesManager;
	reload(): void;
	setSpawnRadius(value: number): void;
	isHardcore(): boolean;
	unloadWorld(world: World, save: boolean): boolean;
	unloadWorld(_name: string, save: boolean): boolean;
	setWhitelist(value: boolean): void;
	broadcast(message: string, permission: string): number;
	createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
	createExplorerMap(world: World, location: Location, structureType: StructureType, radius: number, findUnexplored: boolean): ItemStack;
	getOfflinePlayer(id: string): OfflinePlayer;
	getOfflinePlayer(_name: string): OfflinePlayer;
	getIPBans(): any;
	unbanIP(address: string): void;
	getRecipesFor(result: ItemStack): any;
	createWorld(creator: WorldCreator): World;
	getOfflinePlayers(): Array<OfflinePlayer>;
	getEntity(uuid: string): Entity;
	createInventory(owner: InventoryHolder, type: InventoryType): Inventory;
	createInventory(owner: InventoryHolder, size: number): Inventory;
	createInventory(owner: InventoryHolder, type: InventoryType, title: string): Inventory;
	createInventory(owner: InventoryHolder, size: number, title: string): Inventory;
	selectEntities(sender: CommandSender, selector: string): any;
	loadServerIcon(image: any): CachedServerIcon;
	loadServerIcon(file: any): CachedServerIcon;
	getDefaultGameMode(): GameMode;
	getConsoleSender(): ConsoleCommandSender;
	isPrimaryThread(): boolean;
	createBlockData(material: Material, consumer: any): BlockData;
	createBlockData(material: Material): BlockData;
	createBlockData(material: Material, data: string): BlockData;
	createBlockData(data: string): BlockData;
	getLootTable(key: NamespacedKey): LootTable;
	removeBossBar(key: NamespacedKey): boolean;
	setIdleTimeout(threshold: number): void;
	getOperators(): any;
	getItemFactory(): ItemFactory;
	getBossBar(key: NamespacedKey): KeyedBossBar;
	getWarningState(): Warning$WarningState;
	getAdvancement(key: NamespacedKey): Advancement;
	getTag(registry: string, tag: NamespacedKey, clazz: any): Tag;
	getShutdownMessage(): string;
	getServerIcon(): CachedServerIcon;
	getTags(registry: string, clazz: any): any;
	getHelpMap(): HelpMap;
	createChunkData(world: World): ChunkGenerator$ChunkData;
	getWorldContainer(): any;
	setDefaultGameMode(mode: GameMode): void;
	getIdleTimeout(): number;
	createMerchant(title: string): Merchant;
	getMotd(): string;
	getMessenger(): Messenger;
	createBossBar(title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): BossBar;
	createBossBar(key: NamespacedKey, title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): KeyedBossBar;
	getBossBars(): any;
	getScoreboardManager(): ScoreboardManager;
	getMonsterSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	getGenerateStructures(): boolean;
	getConnectionThrottle(): number;
	getAnimalSpawnLimit(): number;
	advancementIterator(): any;
	getTicksPerAnimalSpawns(): number;
	getWaterAnimalSpawnLimit(): number;
	getWhitelistedPlayers(): any;
	getTicksPerMonsterSpawns(): number;
	getUpdateFolderFile(): any;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	getListeningPluginChannels(): any;
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

