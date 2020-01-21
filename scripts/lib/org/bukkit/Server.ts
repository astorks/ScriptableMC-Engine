declare var Java: any;
import {UnsafeValues} from '../../org/bukkit/UnsafeValues.js'
import {MapView} from '../../org/bukkit/map/MapView.js'
import {World} from '../../org/bukkit/World.js'
import {ScoreboardManager} from '../../org/bukkit/scoreboard/ScoreboardManager.js'
import {BukkitScheduler} from '../../org/bukkit/scheduler/BukkitScheduler.js'
import {BanList} from '../../org/bukkit/BanList.js'
import {BanList$Type} from '../../org/bukkit/BanList$Type.js'
import {Recipe} from '../../org/bukkit/inventory/Recipe.js'
import {GameMode} from '../../org/bukkit/GameMode.js'
import {PluginManager} from '../../org/bukkit/plugin/PluginManager.js'
import {PluginCommand} from '../../org/bukkit/command/PluginCommand.js'
import {ServicesManager} from '../../org/bukkit/plugin/ServicesManager.js'
import {Warning$WarningState} from '../../org/bukkit/Warning$WarningState.js'
import {WorldCreator} from '../../org/bukkit/WorldCreator.js'
import {OfflinePlayer} from '../../org/bukkit/OfflinePlayer.js'
import {ConsoleCommandSender} from '../../org/bukkit/command/ConsoleCommandSender.js'
import {HelpMap} from '../../org/bukkit/help/HelpMap.js'
import {Merchant} from '../../org/bukkit/inventory/Merchant.js'
import {ItemFactory} from '../../org/bukkit/inventory/ItemFactory.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {Location} from '../../org/bukkit/Location.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {Player} from '../../org/bukkit/entity/Player.js'
import {Inventory} from '../../org/bukkit/inventory/Inventory.js'
import {InventoryHolder} from '../../org/bukkit/inventory/InventoryHolder.js'
import {InventoryType} from '../../org/bukkit/event/inventory/InventoryType.js'
import {Messenger} from '../../org/bukkit/plugin/messaging/Messenger.js'
import {CommandSender} from '../../org/bukkit/command/CommandSender.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {KeyedBossBar} from '../../org/bukkit/boss/KeyedBossBar.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../org/bukkit/Material.js'
import {LootTable} from '../../org/bukkit/loot/LootTable.js'
import {BarColor} from '../../org/bukkit/boss/BarColor.js'
import {BarStyle} from '../../org/bukkit/boss/BarStyle.js'
import {BarFlag} from '../../org/bukkit/boss/BarFlag.js'
import {BossBar} from '../../org/bukkit/boss/BossBar.js'
import {CachedServerIcon} from '../../org/bukkit/util/CachedServerIcon.js'
import {ChunkGenerator$ChunkData} from '../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {Tag} from '../../org/bukkit/Tag.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'

export interface Server extends PluginMessageRecipient {
	shutdown(): void;
	getName(): string;
	getUnsafe(): UnsafeValues;
	getLogger(): any;
	getPort(): number;
	getMap(arg0: number): MapView;
	createMap(arg0: World): MapView;
	getVersion(): string;
	getGenerateStructures(): boolean;
	getAnimalSpawnLimit(): number;
	getMonsterSpawnLimit(): number;
	getTicksPerMonsterSpawns(): number;
	getConnectionThrottle(): number;
	getTicksPerAnimalSpawns(): number;
	getWhitelistedPlayers(): any;
	getAmbientSpawnLimit(): number;
	advancementIterator(): any;
	getUpdateFolderFile(): any;
	getScoreboardManager(): ScoreboardManager;
	getWaterAnimalSpawnLimit(): number;
	getViewDistance(): number;
	getIp(): string;
	getAllowEnd(): boolean;
	getBukkitVersion(): string;
	getMaxPlayers(): number;
	getWorldType(): string;
	getAllowNether(): boolean;
	hasWhitelist(): boolean;
	getOnlinePlayers(): any;
	setSpawnRadius(arg0: number): void;
	reload(): void;
	getAllowFlight(): boolean;
	isHardcore(): boolean;
	broadcast(arg0: string, arg1: string): number;
	banIP(arg0: string): void;
	getScheduler(): BukkitScheduler;
	getBanList(arg0: BanList$Type): BanList;
	addRecipe(arg0: Recipe): boolean;
	getOnlineMode(): boolean;
	resetRecipes(): void;
	getOperators(): any;
	unloadWorld(arg0: string, arg1: boolean): boolean;
	unloadWorld(arg0: World, arg1: boolean): boolean;
	setWhitelist(arg0: boolean): void;
	getDefaultGameMode(): GameMode;
	getPluginManager(): PluginManager;
	setDefaultGameMode(arg0: GameMode): void;
	getPluginCommand(arg0: string): PluginCommand;
	isPrimaryThread(): boolean;
	getSpawnRadius(): number;
	getIPBans(): any;
	unbanIP(arg0: string): void;
	getServicesManager(): ServicesManager;
	getMotd(): string;
	getShutdownMessage(): string;
	getWarningState(): Warning$WarningState;
	getBannedPlayers(): any;
	createWorld(arg0: WorldCreator): World;
	getCommandAliases(): any;
	reloadWhitelist(): void;
	broadcastMessage(arg0: string): number;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getConsoleSender(): ConsoleCommandSender;
	savePlayers(): void;
	getWorldContainer(): any;
	getOfflinePlayers(): Array<OfflinePlayer>;
	getHelpMap(): HelpMap;
	clearRecipes(): void;
	createMerchant(arg0: string): Merchant;
	getItemFactory(): ItemFactory;
	reloadData(): void;
	recipeIterator(): any;
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType, arg3: number, arg4: boolean): ItemStack;
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType): ItemStack;
	getPlayerExact(arg0: string): Player;
	createInventory(arg0: InventoryHolder, arg1: InventoryType): Inventory;
	createInventory(arg0: InventoryHolder, arg1: InventoryType, arg2: string): Inventory;
	createInventory(arg0: InventoryHolder, arg1: number): Inventory;
	createInventory(arg0: InventoryHolder, arg1: number, arg2: string): Inventory;
	getMessenger(): Messenger;
	getUpdateFolder(): string;
	getPlayer(arg0: string): Player;
	getPlayer(arg0: string): Player;
	getRecipesFor(arg0: ItemStack): any;
	matchPlayer(arg0: string): any;
	dispatchCommand(arg0: CommandSender, arg1: string): boolean;
	getWorlds(): any;
	getWorld(arg0: string): World;
	getWorld(arg0: string): World;
	setIdleTimeout(arg0: number): void;
	getAdvancement(arg0: NamespacedKey): Advancement;
	selectEntities(arg0: CommandSender, arg1: string): any;
	getBossBar(arg0: NamespacedKey): KeyedBossBar;
	getBossBars(): any;
	getEntity(arg0: string): Entity;
	getTags(arg0: string, arg1: any): any;
	createBlockData(arg0: string): BlockData;
	createBlockData(arg0: Material, arg1: any): BlockData;
	createBlockData(arg0: Material): BlockData;
	createBlockData(arg0: Material, arg1: string): BlockData;
	getLootTable(arg0: NamespacedKey): LootTable;
	createBossBar(arg0: NamespacedKey, arg1: string, arg2: BarColor, arg3: BarStyle, arg4: Array<BarFlag>): KeyedBossBar;
	createBossBar(arg0: string, arg1: BarColor, arg2: BarStyle, arg3: Array<BarFlag>): BossBar;
	loadServerIcon(arg0: any): CachedServerIcon;
	loadServerIcon(arg0: any): CachedServerIcon;
	createChunkData(arg0: World): ChunkGenerator$ChunkData;
	getServerIcon(): CachedServerIcon;
	getIdleTimeout(): number;
	getTag(arg0: string, arg1: NamespacedKey, arg2: any): Tag;
	removeBossBar(arg0: NamespacedKey): boolean;
	getListeningPluginChannels(): any;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
}

export class Server {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Server');
	}
}

