declare var Java: any;
import {MapCursor$Type} from '../../org/bukkit/map/MapCursor$Type.js'

export interface StructureType {
	getName(): string;
	getMapIcon(): MapCursor$Type;
}

export class StructureType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.StructureType');
	}
	public static getStructureTypes(): any {
		return StructureType.$javaClass.getStructureTypes();
	}
}

