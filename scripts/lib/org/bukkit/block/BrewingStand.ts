declare var Java: any;
import {BrewerInventory} from '../../../org/bukkit/inventory/BrewerInventory.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Container} from '../../../org/bukkit/block/Container.js'

export interface BrewingStand extends Container {
	getInventory(): BrewerInventory;
	getInventory(): Inventory;
	getSnapshotInventory(): Inventory;
	getSnapshotInventory(): BrewerInventory;
	getBrewingTime(): number;
	setFuelLevel(arg0: number): void;
	setBrewingTime(arg0: number): void;
	getFuelLevel(): number;
	getPersistentDataContainer(): PersistentDataContainer;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
	update(): boolean;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getType(): Material;
	getWorld(): World;
	getBlock(): Block;
	getBlock(): Block;
	getChunk(): Chunk;
	getY(): number;
	getX(): number;
	getZ(): number;
	setType(arg0: Material): void;
	getData(): MaterialData;
	setData(arg0: MaterialData): void;
	getBlockData(): BlockData;
	setBlockData(arg0: BlockData): void;
	getLightLevel(): number;
	isPlaced(): boolean;
	getRawData(): number;
	setRawData(arg0: number): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	isLocked(): boolean;
	getLock(): string;
	setLock(arg0: string): void;
	getCustomName(): string;
	setCustomName(arg0: string): void;
}

export class BrewingStand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BrewingStand');
	}
}

