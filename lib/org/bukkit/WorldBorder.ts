declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'

export interface WorldBorder {
	getSize(): number;
	reset(): void;
	setSize(newSize: number, seconds: number): void;
	setSize(newSize: number): void;
	getCenter(): Location;
	getWarningDistance(): number;
	setDamageBuffer(blocks: number): void;
	isInside(location: Location): boolean;
	setWarningDistance(distance: number): void;
	setCenter(x: number, z: number): void;
	setCenter(location: Location): void;
	setWarningTime(seconds: number): void;
	getDamageAmount(): number;
	getWarningTime(): number;
	setDamageAmount(damage: number): void;
	getDamageBuffer(): number;
}

export class WorldBorder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldBorder');
	}
}

