declare var Java: any;
import {MapCursor} from '../../../org/bukkit/map/MapCursor.js'

export interface MapCursorCollection {
	size(): number;
	addCursor(arg0: number, arg1: number, arg2: number, arg3: number): MapCursor;
	addCursor(arg0: number, arg1: number, arg2: number): MapCursor;
	addCursor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): MapCursor;
	addCursor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: string): MapCursor;
	addCursor(arg0: MapCursor): MapCursor;
	removeCursor(arg0: MapCursor): boolean;
	getCursor(arg0: number): MapCursor;
}

export class MapCursorCollection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCursorCollection');
	}
	constructor() {
		return new MapCursorCollection.$javaClass();
	}
	public static new0(): MapCursorCollection {
		return new MapCursorCollection.$javaClass();
	}
}

