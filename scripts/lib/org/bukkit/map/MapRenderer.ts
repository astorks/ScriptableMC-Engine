declare var Java: any;
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {MapCanvas} from '../../../org/bukkit/map/MapCanvas.js'
import {Player} from '../../../org/bukkit/entity/Player.js'

export interface MapRenderer {
	initialize(arg0: MapView): void;
	isContextual(): boolean;
	render(arg0: MapView, arg1: MapCanvas, arg2: Player): void;
}

export class MapRenderer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapRenderer');
	}
	constructor() {
		return new MapRenderer.$javaClass();
	}
	public static new0(): MapRenderer {
		return new MapRenderer.$javaClass();
	}
	public static new1(arg0: boolean): MapRenderer {
		return new MapRenderer.$javaClass(arg0);
	}
}

