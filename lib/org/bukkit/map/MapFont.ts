declare var Java: any;
import {MapFont$CharacterSprite} from '../../../org/bukkit/map/MapFont$CharacterSprite.js'

export interface MapFont {
	getChar(ch: string): MapFont$CharacterSprite;
	setChar(ch: string, sprite: MapFont$CharacterSprite): void;
	getHeight(): number;
	isValid(text: string): boolean;
	getWidth(text: string): number;
}

export class MapFont {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapFont');
	}
	constructor();
	constructor(...args: any[]) {
		return new MapFont.$javaClass(...args);
	}
}

