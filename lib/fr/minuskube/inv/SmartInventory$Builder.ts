declare var Java: any;
import {SmartInventory} from '../../../fr/minuskube/inv/SmartInventory.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {InventoryProvider} from '../../../fr/minuskube/inv/content/InventoryProvider.js'
import {InventoryManager} from '../../../fr/minuskube/inv/InventoryManager.js'
import {InventoryListener} from '../../../fr/minuskube/inv/InventoryListener.js'

export interface SmartInventory$Builder {
	parent(arg0: SmartInventory): SmartInventory$Builder;
	type(arg0: InventoryType): SmartInventory$Builder;
	size(arg0: number, arg1: number): SmartInventory$Builder;
	id(arg0: string): SmartInventory$Builder;
	provider(arg0: InventoryProvider): SmartInventory$Builder;
	build(): SmartInventory;
	title(arg0: string): SmartInventory$Builder;
	manager(arg0: InventoryManager): SmartInventory$Builder;
	closeable(arg0: boolean): SmartInventory$Builder;
	listener(arg0: InventoryListener): SmartInventory$Builder;
}

export class SmartInventory$Builder {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.SmartInventory$Builder');
	}
}

