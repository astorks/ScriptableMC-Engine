declare var Java: any;
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface PersistentDataHolder {
	getPersistentDataContainer(): PersistentDataContainer;
}

export class PersistentDataHolder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataHolder');
	}
}

