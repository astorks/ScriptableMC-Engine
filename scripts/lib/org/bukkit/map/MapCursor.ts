declare var Java: any;
import {MapCursor$Type} from '../../../org/bukkit/map/MapCursor$Type.js'

export interface MapCursor {
	getType(): MapCursor$Type;
	getRawType(): number;
	setY(arg0: number): void;
	getY(): number;
	setX(arg0: number): void;
	getX(): number;
	setDirection(arg0: number): void;
	getDirection(): number;
	setType(arg0: MapCursor$Type): void;
	isVisible(): boolean;
	setVisible(arg0: boolean): void;
	getCaption(): string;
	setRawType(arg0: number): void;
	setCaption(arg0: string): void;
}

export class MapCursor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCursor');
	}
	constructor(arg0: number, arg1: number, arg2: number, arg3: MapCursor$Type, arg4: boolean, arg5: string) {
		return new MapCursor.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: number, arg1: number, arg2: number, arg3: MapCursor$Type, arg4: boolean, arg5: string): MapCursor {
		return new MapCursor.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new1(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: string): MapCursor {
		return new MapCursor.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new2(arg0: number, arg1: number, arg2: number, arg3: MapCursor$Type, arg4: boolean): MapCursor {
		return new MapCursor.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): MapCursor {
		return new MapCursor.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
}

