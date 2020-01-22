declare var Java: any;
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {MapCanvas} from '../../../org/bukkit/map/MapCanvas.js'
import {Player} from '../../../org/bukkit/entity/Player.js'

export interface MapRenderer {
	initialize(map: MapView): void;
	isContextual(): boolean;
	render(map: MapView, canvas: MapCanvas, player: Player): void;
}

export class MapRenderer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapRenderer');
	}
	constructor();
	constructor(contextual: boolean);
	constructor(...args: any[]) {
		return new MapRenderer.$javaClass(...args);
	}
}

