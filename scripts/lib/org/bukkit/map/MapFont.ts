declare var Java: any;
import {MapFont$CharacterSprite} from '../../../org/bukkit/map/MapFont$CharacterSprite.js'

export interface MapFont {
	getChar(arg0: string): MapFont$CharacterSprite;
	setChar(arg0: string, arg1: MapFont$CharacterSprite): void;
	getHeight(): number;
	getWidth(arg0: string): number;
	isValid(arg0: string): boolean;
}

export class MapFont {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapFont');
	}
	constructor() {
		return new MapFont.$javaClass();
	}
	public static new0(): MapFont {
		return new MapFont.$javaClass();
	}
}

