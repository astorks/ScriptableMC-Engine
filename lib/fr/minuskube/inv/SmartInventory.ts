declare var Java: any;
import {SmartInventory$Builder} from '../../../fr/minuskube/inv/SmartInventory$Builder.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {InventoryProvider} from '../../../fr/minuskube/inv/content/InventoryProvider.js'
import {InventoryManager} from '../../../fr/minuskube/inv/InventoryManager.js'

export interface SmartInventory {
	getParent(): any;
	getId(): string;
	close(arg0: Player): void;
	open(arg0: Player, arg1: number): Inventory;
	open(arg0: Player): Inventory;
	getType(): InventoryType;
	getProvider(): InventoryProvider;
	getRows(): number;
	isCloseable(): boolean;
	setCloseable(arg0: boolean): void;
	getTitle(): string;
	getManager(): InventoryManager;
	getColumns(): number;
}

export class SmartInventory {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.SmartInventory');
	}
	public static builder(): SmartInventory$Builder;
	public static builder(...args: any[]): any {
		return SmartInventory.$javaClass.builder(...args);
	}
}

