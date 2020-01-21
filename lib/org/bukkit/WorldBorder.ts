declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'

export interface WorldBorder {
	getSize(): number;
	reset(): void;
	setSize(newSize: number, seconds: number): void;
	setSize(newSize: number): void;
	setDamageAmount(damage: number): void;
	getWarningTime(): number;
	getDamageAmount(): number;
	setDamageBuffer(blocks: number): void;
	setWarningDistance(distance: number): void;
	getDamageBuffer(): number;
	setWarningTime(seconds: number): void;
	getWarningDistance(): number;
	isInside(location: Location): boolean;
	setCenter(x: number, z: number): void;
	setCenter(location: Location): void;
	getCenter(): Location;
}

export class WorldBorder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldBorder');
	}
}

