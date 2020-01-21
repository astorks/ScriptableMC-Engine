declare var Java: any;
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface PersistentDataAdapterContext {
	newPersistentDataContainer(): PersistentDataContainer;
}

export class PersistentDataAdapterContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataAdapterContext');
	}
}

