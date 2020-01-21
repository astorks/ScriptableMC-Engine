declare var Java: any;
import {MapCursorCollection} from '../../../org/bukkit/map/MapCursorCollection.js'
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {MapFont} from '../../../org/bukkit/map/MapFont.js'

export interface MapCanvas {
	getBasePixel(arg0: number, arg1: number): number;
	setPixel(arg0: number, arg1: number, arg2: number): void;
	drawImage(arg0: number, arg1: number, arg2: any): void;
	getCursors(): MapCursorCollection;
	setCursors(arg0: MapCursorCollection): void;
	getPixel(arg0: number, arg1: number): number;
	getMapView(): MapView;
	drawText(arg0: number, arg1: number, arg2: MapFont, arg3: string): void;
}

export class MapCanvas {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCanvas');
	}
}

