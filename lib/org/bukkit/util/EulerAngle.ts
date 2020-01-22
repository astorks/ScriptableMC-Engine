declare var Java: any;

export interface EulerAngle {
	add(x: number, y: number, z: number): EulerAngle;
	setX(x: number): EulerAngle;
	setZ(z: number): EulerAngle;
	setY(y: number): EulerAngle;
	getY(): number;
	getZ(): number;
	subtract(x: number, y: number, z: number): EulerAngle;
	getX(): number;
}

export class EulerAngle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.EulerAngle');
	}
	constructor(x: number, y: number, z: number);
	constructor(...args: any[]) {
		return new EulerAngle.$javaClass(...args);
	}
	public static get ZERO(): EulerAngle {
		return EulerAngle.$javaClass.ZERO;
	}
}

