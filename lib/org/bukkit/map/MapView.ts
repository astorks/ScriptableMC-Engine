declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {MapView$Scale} from '../../../org/bukkit/map/MapView$Scale.js'
import {MapRenderer} from '../../../org/bukkit/map/MapRenderer.js'

export interface MapView {
	getId(): number;
	isLocked(): boolean;
	getWorld(): World;
	isVirtual(): boolean;
	setTrackingPosition(trackingPosition: boolean): void;
	getCenterZ(): number;
	setCenterX(x: number): void;
	getCenterX(): number;
	getRenderers(): any;
	isTrackingPosition(): boolean;
	setScale(scale: MapView$Scale): void;
	setLocked(locked: boolean): void;
	removeRenderer(renderer: MapRenderer): boolean;
	setCenterZ(z: number): void;
	addRenderer(renderer: MapRenderer): void;
	getScale(): MapView$Scale;
	setWorld(world: World): void;
	setUnlimitedTracking(unlimited: boolean): void;
	isUnlimitedTracking(): boolean;
}

export class MapView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView');
	}
}

