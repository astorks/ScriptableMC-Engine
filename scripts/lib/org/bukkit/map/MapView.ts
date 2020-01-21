declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {MapView$Scale} from '../../../org/bukkit/map/MapView$Scale.js'
import {MapRenderer} from '../../../org/bukkit/map/MapRenderer.js'

export interface MapView {
	getId(): number;
	isLocked(): boolean;
	isVirtual(): boolean;
	setTrackingPosition(arg0: boolean): void;
	setUnlimitedTracking(arg0: boolean): void;
	isUnlimitedTracking(): boolean;
	getWorld(): World;
	setScale(arg0: MapView$Scale): void;
	getRenderers(): any;
	setLocked(arg0: boolean): void;
	getCenterZ(): number;
	setWorld(arg0: World): void;
	setCenterX(arg0: number): void;
	getScale(): MapView$Scale;
	isTrackingPosition(): boolean;
	setCenterZ(arg0: number): void;
	removeRenderer(arg0: MapRenderer): boolean;
	getCenterX(): number;
	addRenderer(arg0: MapRenderer): void;
}

export class MapView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView');
	}
}

