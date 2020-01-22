declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {MapView$Scale} from '../../../org/bukkit/map/MapView$Scale.js'
import {MapRenderer} from '../../../org/bukkit/map/MapRenderer.js'

export interface MapView {
	getId(): number;
	isLocked(): boolean;
	isVirtual(): boolean;
	getWorld(): World;
	setWorld(world: World): void;
	getScale(): MapView$Scale;
	getCenterX(): number;
	getCenterZ(): number;
	setCenterZ(z: number): void;
	addRenderer(renderer: MapRenderer): void;
	setCenterX(x: number): void;
	getRenderers(): any;
	setLocked(locked: boolean): void;
	isTrackingPosition(): boolean;
	setScale(scale: MapView$Scale): void;
	removeRenderer(renderer: MapRenderer): boolean;
	isUnlimitedTracking(): boolean;
	setTrackingPosition(trackingPosition: boolean): void;
	setUnlimitedTracking(unlimited: boolean): void;
}

export class MapView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView');
	}
}

