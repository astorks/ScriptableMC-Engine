declare var Java: any;
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {MapCursorCollection} from '../../../org/bukkit/map/MapCursorCollection.js'
import {MapFont} from '../../../org/bukkit/map/MapFont.js'

export interface MapCanvas {
	getMapView(): MapView;
	getCursors(): MapCursorCollection;
	setCursors(cursors: MapCursorCollection): void;
	getPixel(x: number, y: number): number;
	getBasePixel(x: number, y: number): number;
	drawImage(x: number, y: number, image: any): void;
	drawText(x: number, y: number, font: MapFont, text: string): void;
	setPixel(x: number, y: number, color: number): void;
}

export class MapCanvas {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCanvas');
	}
}

