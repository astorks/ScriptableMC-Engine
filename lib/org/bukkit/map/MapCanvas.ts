declare var Java: any;
import {MapCursorCollection} from '../../../org/bukkit/map/MapCursorCollection.js'
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {MapFont} from '../../../org/bukkit/map/MapFont.js'

export interface MapCanvas {
	getCursors(): MapCursorCollection;
	setCursors(cursors: MapCursorCollection): void;
	getMapView(): MapView;
	setPixel(x: number, y: number, color: number): void;
	getPixel(x: number, y: number): number;
	getBasePixel(x: number, y: number): number;
	drawImage(x: number, y: number, image: any): void;
	drawText(x: number, y: number, font: MapFont, text: string): void;
}

export class MapCanvas {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCanvas');
	}
}

