declare var Java: any;

export interface EulerAngle {
	add(arg0: number, arg1: number, arg2: number): EulerAngle;
	setY(arg0: number): EulerAngle;
	getY(): number;
	setX(arg0: number): EulerAngle;
	setZ(arg0: number): EulerAngle;
	getX(): number;
	getZ(): number;
	subtract(arg0: number, arg1: number, arg2: number): EulerAngle;
}

export class EulerAngle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.EulerAngle');
	}
	constructor(arg0: number, arg1: number, arg2: number) {
		return new EulerAngle.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: number, arg1: number, arg2: number): EulerAngle {
		return new EulerAngle.$javaClass(arg0, arg1, arg2);
	}
}

