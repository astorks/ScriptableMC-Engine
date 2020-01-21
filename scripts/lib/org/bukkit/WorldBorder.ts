declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'

export interface WorldBorder {
	getSize(): number;
	reset(): void;
	setSize(arg0: number, arg1: number): void;
	setSize(arg0: number): void;
	getCenter(): Location;
	setWarningDistance(arg0: number): void;
	setWarningTime(arg0: number): void;
	getDamageAmount(): number;
	setDamageBuffer(arg0: number): void;
	getWarningTime(): number;
	getWarningDistance(): number;
	setDamageAmount(arg0: number): void;
	setCenter(arg0: number, arg1: number): void;
	setCenter(arg0: Location): void;
	getDamageBuffer(): number;
	isInside(arg0: Location): boolean;
}

export class WorldBorder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldBorder');
	}
}

