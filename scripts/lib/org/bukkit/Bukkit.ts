declare var Java: any;
import {UnsafeValues} from '../../org/bukkit/UnsafeValues.js'
import {MapView} from '../../org/bukkit/map/MapView.js'
import {World} from '../../org/bukkit/World.js'
import {ScoreboardManager} from '../../org/bukkit/scoreboard/ScoreboardManager.js'
import {Server} from '../../org/bukkit/Server.js'
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

export interface Bukkit {
}

export class Bukkit {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Bukkit');
	}
	public static shutdown(): void {
		return Bukkit.$javaClass.shutdown();
	}
	public static getName(): string {
		return Bukkit.$javaClass.getName();
	}
	public static getUnsafe(): UnsafeValues {
		return Bukkit.$javaClass.getUnsafe();
	}
	public static getLogger(): any {
		return Bukkit.$javaClass.getLogger();
	}
	public static getPort(): number {
		return Bukkit.$javaClass.getPort();
	}
	public static getMap(arg0: number): MapView {
		return Bukkit.$javaClass.getMap(arg0);
	}
	public static createMap(arg0: World): MapView {
		return Bukkit.$javaClass.createMap(arg0);
	}
	public static getVersion(): string {
		return Bukkit.$javaClass.getVersion();
	}
	public static getGenerateStructures(): boolean {
		return Bukkit.$javaClass.getGenerateStructures();
	}
	public static getAnimalSpawnLimit(): number {
		return Bukkit.$javaClass.getAnimalSpawnLimit();
	}
	public static getMonsterSpawnLimit(): number {
		return Bukkit.$javaClass.getMonsterSpawnLimit();
	}
	public static getTicksPerMonsterSpawns(): number {
		return Bukkit.$javaClass.getTicksPerMonsterSpawns();
	}
	public static getConnectionThrottle(): number {
		return Bukkit.$javaClass.getConnectionThrottle();
	}
	public static getTicksPerAnimalSpawns(): number {
		return Bukkit.$javaClass.getTicksPerAnimalSpawns();
	}
	public static getWhitelistedPlayers(): any {
		return Bukkit.$javaClass.getWhitelistedPlayers();
	}
	public static getAmbientSpawnLimit(): number {
		return Bukkit.$javaClass.getAmbientSpawnLimit();
	}
	public static advancementIterator(): any {
		return Bukkit.$javaClass.advancementIterator();
	}
	public static getUpdateFolderFile(): any {
		return Bukkit.$javaClass.getUpdateFolderFile();
	}
	public static getScoreboardManager(): ScoreboardManager {
		return Bukkit.$javaClass.getScoreboardManager();
	}
	public static getWaterAnimalSpawnLimit(): number {
		return Bukkit.$javaClass.getWaterAnimalSpawnLimit();
	}
	public static getViewDistance(): number {
		return Bukkit.$javaClass.getViewDistance();
	}
	public static getIp(): string {
		return Bukkit.$javaClass.getIp();
	}
	public static getAllowEnd(): boolean {
		return Bukkit.$javaClass.getAllowEnd();
	}
	public static getServer(): Server {
		return Bukkit.$javaClass.getServer();
	}
	public static getBukkitVersion(): string {
		return Bukkit.$javaClass.getBukkitVersion();
	}
	public static getMaxPlayers(): number {
		return Bukkit.$javaClass.getMaxPlayers();
	}
	public static getWorldType(): string {
		return Bukkit.$javaClass.getWorldType();
	}
	public static getAllowNether(): boolean {
		return Bukkit.$javaClass.getAllowNether();
	}
	public static hasWhitelist(): boolean {
		return Bukkit.$javaClass.hasWhitelist();
	}
	public static setServer(arg0: Server): void {
		return Bukkit.$javaClass.setServer(arg0);
	}
	public static getOnlinePlayers(): any {
		return Bukkit.$javaClass.getOnlinePlayers();
	}
	public static setSpawnRadius(arg0: number): void {
		return Bukkit.$javaClass.setSpawnRadius(arg0);
	}
	public static reload(): void {
		return Bukkit.$javaClass.reload();
	}
	public static getAllowFlight(): boolean {
		return Bukkit.$javaClass.getAllowFlight();
	}
	public static isHardcore(): boolean {
		return Bukkit.$javaClass.isHardcore();
	}
	public static broadcast(arg0: string, arg1: string): number {
		return Bukkit.$javaClass.broadcast(arg0, arg1);
	}
	public static banIP(arg0: string): void {
		return Bukkit.$javaClass.banIP(arg0);
	}
	public static getScheduler(): BukkitScheduler {
		return Bukkit.$javaClass.getScheduler();
	}
	public static getBanList(arg0: BanList$Type): BanList {
		return Bukkit.$javaClass.getBanList(arg0);
	}
	public static addRecipe(arg0: Recipe): boolean {
		return Bukkit.$javaClass.addRecipe(arg0);
	}
	public static getOnlineMode(): boolean {
		return Bukkit.$javaClass.getOnlineMode();
	}
	public static resetRecipes(): void {
		return Bukkit.$javaClass.resetRecipes();
	}
	public static getOperators(): any {
		return Bukkit.$javaClass.getOperators();
	}
	public static unloadWorld(arg0: World, arg1: boolean): boolean {
		return Bukkit.$javaClass.unloadWorld(arg0, arg1);
	}
	public static unloadWorld0(arg0: string, arg1: boolean): boolean {
		return Bukkit.$javaClass.unloadWorld(arg0, arg1);
	}
	public static setWhitelist(arg0: boolean): void {
		return Bukkit.$javaClass.setWhitelist(arg0);
	}
	public static getDefaultGameMode(): GameMode {
		return Bukkit.$javaClass.getDefaultGameMode();
	}
	public static getPluginManager(): PluginManager {
		return Bukkit.$javaClass.getPluginManager();
	}
	public static setDefaultGameMode(arg0: GameMode): void {
		return Bukkit.$javaClass.setDefaultGameMode(arg0);
	}
	public static getPluginCommand(arg0: string): PluginCommand {
		return Bukkit.$javaClass.getPluginCommand(arg0);
	}
	public static isPrimaryThread(): boolean {
		return Bukkit.$javaClass.isPrimaryThread();
	}
	public static getSpawnRadius(): number {
		return Bukkit.$javaClass.getSpawnRadius();
	}
	public static getIPBans(): any {
		return Bukkit.$javaClass.getIPBans();
	}
	public static unbanIP(arg0: string): void {
		return Bukkit.$javaClass.unbanIP(arg0);
	}
	public static getServicesManager(): ServicesManager {
		return Bukkit.$javaClass.getServicesManager();
	}
	public static getMotd(): string {
		return Bukkit.$javaClass.getMotd();
	}
	public static getShutdownMessage(): string {
		return Bukkit.$javaClass.getShutdownMessage();
	}
	public static getWarningState(): Warning$WarningState {
		return Bukkit.$javaClass.getWarningState();
	}
	public static getBannedPlayers(): any {
		return Bukkit.$javaClass.getBannedPlayers();
	}
	public static createWorld(arg0: WorldCreator): World {
		return Bukkit.$javaClass.createWorld(arg0);
	}
	public static getCommandAliases(): any {
		return Bukkit.$javaClass.getCommandAliases();
	}
	public static reloadWhitelist(): void {
		return Bukkit.$javaClass.reloadWhitelist();
	}
	public static broadcastMessage(arg0: string): number {
		return Bukkit.$javaClass.broadcastMessage(arg0);
	}
	public static getOfflinePlayer(arg0: string): OfflinePlayer {
		return Bukkit.$javaClass.getOfflinePlayer(arg0);
	}
	public static getOfflinePlayer0(arg0: string): OfflinePlayer {
		return Bukkit.$javaClass.getOfflinePlayer(arg0);
	}
	public static getConsoleSender(): ConsoleCommandSender {
		return Bukkit.$javaClass.getConsoleSender();
	}
	public static savePlayers(): void {
		return Bukkit.$javaClass.savePlayers();
	}
	public static getWorldContainer(): any {
		return Bukkit.$javaClass.getWorldContainer();
	}
	public static getOfflinePlayers(): Array<OfflinePlayer> {
		return Bukkit.$javaClass.getOfflinePlayers();
	}
	public static getHelpMap(): HelpMap {
		return Bukkit.$javaClass.getHelpMap();
	}
	public static clearRecipes(): void {
		return Bukkit.$javaClass.clearRecipes();
	}
	public static createMerchant(arg0: string): Merchant {
		return Bukkit.$javaClass.createMerchant(arg0);
	}
	public static getItemFactory(): ItemFactory {
		return Bukkit.$javaClass.getItemFactory();
	}
	public static reloadData(): void {
		return Bukkit.$javaClass.reloadData();
	}
	public static recipeIterator(): any {
		return Bukkit.$javaClass.recipeIterator();
	}
	public static createExplorerMap(arg0: World, arg1: Location, arg2: StructureType, arg3: number, arg4: boolean): ItemStack {
		return Bukkit.$javaClass.createExplorerMap(arg0, arg1, arg2, arg3, arg4);
	}
	public static createExplorerMap0(arg0: World, arg1: Location, arg2: StructureType): ItemStack {
		return Bukkit.$javaClass.createExplorerMap(arg0, arg1, arg2);
	}
	public static getPlayerExact(arg0: string): Player {
		return Bukkit.$javaClass.getPlayerExact(arg0);
	}
	public static createInventory(arg0: InventoryHolder, arg1: InventoryType): Inventory {
		return Bukkit.$javaClass.createInventory(arg0, arg1);
	}
	public static createInventory0(arg0: InventoryHolder, arg1: number): Inventory {
		return Bukkit.$javaClass.createInventory(arg0, arg1);
	}
	public static createInventory1(arg0: InventoryHolder, arg1: number, arg2: string): Inventory {
		return Bukkit.$javaClass.createInventory(arg0, arg1, arg2);
	}
	public static createInventory2(arg0: InventoryHolder, arg1: InventoryType, arg2: string): Inventory {
		return Bukkit.$javaClass.createInventory(arg0, arg1, arg2);
	}
	public static getMessenger(): Messenger {
		return Bukkit.$javaClass.getMessenger();
	}
	public static getUpdateFolder(): string {
		return Bukkit.$javaClass.getUpdateFolder();
	}
	public static getPlayer(arg0: string): Player {
		return Bukkit.$javaClass.getPlayer(arg0);
	}
	public static getPlayer0(arg0: string): Player {
		return Bukkit.$javaClass.getPlayer(arg0);
	}
	public static getRecipesFor(arg0: ItemStack): any {
		return Bukkit.$javaClass.getRecipesFor(arg0);
	}
	public static matchPlayer(arg0: string): any {
		return Bukkit.$javaClass.matchPlayer(arg0);
	}
	public static dispatchCommand(arg0: CommandSender, arg1: string): boolean {
		return Bukkit.$javaClass.dispatchCommand(arg0, arg1);
	}
	public static getWorlds(): any {
		return Bukkit.$javaClass.getWorlds();
	}
	public static getWorld(arg0: string): World {
		return Bukkit.$javaClass.getWorld(arg0);
	}
	public static getWorld0(arg0: string): World {
		return Bukkit.$javaClass.getWorld(arg0);
	}
	public static setIdleTimeout(arg0: number): void {
		return Bukkit.$javaClass.setIdleTimeout(arg0);
	}
	public static getAdvancement(arg0: NamespacedKey): Advancement {
		return Bukkit.$javaClass.getAdvancement(arg0);
	}
	public static selectEntities(arg0: CommandSender, arg1: string): any {
		return Bukkit.$javaClass.selectEntities(arg0, arg1);
	}
	public static getBossBar(arg0: NamespacedKey): KeyedBossBar {
		return Bukkit.$javaClass.getBossBar(arg0);
	}
	public static getBossBars(): any {
		return Bukkit.$javaClass.getBossBars();
	}
	public static getEntity(arg0: string): Entity {
		return Bukkit.$javaClass.getEntity(arg0);
	}
	public static getTags(arg0: string, arg1: any): any {
		return Bukkit.$javaClass.getTags(arg0, arg1);
	}
	public static createBlockData(arg0: Material, arg1: string): BlockData {
		return Bukkit.$javaClass.createBlockData(arg0, arg1);
	}
	public static createBlockData0(arg0: Material, arg1: any): BlockData {
		return Bukkit.$javaClass.createBlockData(arg0, arg1);
	}
	public static createBlockData1(arg0: Material): BlockData {
		return Bukkit.$javaClass.createBlockData(arg0);
	}
	public static createBlockData2(arg0: string): BlockData {
		return Bukkit.$javaClass.createBlockData(arg0);
	}
	public static getLootTable(arg0: NamespacedKey): LootTable {
		return Bukkit.$javaClass.getLootTable(arg0);
	}
	public static createBossBar(arg0: NamespacedKey, arg1: string, arg2: BarColor, arg3: BarStyle, arg4: Array<BarFlag>): KeyedBossBar {
		return Bukkit.$javaClass.createBossBar(arg0, arg1, arg2, arg3, arg4);
	}
	public static createBossBar0(arg0: string, arg1: BarColor, arg2: BarStyle, arg3: Array<BarFlag>): BossBar {
		return Bukkit.$javaClass.createBossBar(arg0, arg1, arg2, arg3);
	}
	public static loadServerIcon(arg0: any): CachedServerIcon {
		return Bukkit.$javaClass.loadServerIcon(arg0);
	}
	public static loadServerIcon0(arg0: any): CachedServerIcon {
		return Bukkit.$javaClass.loadServerIcon(arg0);
	}
	public static createChunkData(arg0: World): ChunkGenerator$ChunkData {
		return Bukkit.$javaClass.createChunkData(arg0);
	}
	public static getServerIcon(): CachedServerIcon {
		return Bukkit.$javaClass.getServerIcon();
	}
	public static getIdleTimeout(): number {
		return Bukkit.$javaClass.getIdleTimeout();
	}
	public static getTag(arg0: string, arg1: NamespacedKey, arg2: any): Tag {
		return Bukkit.$javaClass.getTag(arg0, arg1, arg2);
	}
	public static removeBossBar(arg0: NamespacedKey): boolean {
		return Bukkit.$javaClass.removeBossBar(arg0);
	}
}

