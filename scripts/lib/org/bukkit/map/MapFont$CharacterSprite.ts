declare var Java: any;

export interface MapFont$CharacterSprite {
	get(arg0: number, arg1: number): boolean;
	getHeight(): number;
	getWidth(): number;
}

export class MapFont$CharacterSprite {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapFont$CharacterSprite');
	}
	constructor(arg0: number, arg1: number, arg2: Array<boolean>) {
		return new MapFont$CharacterSprite.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: number, arg1: number, arg2: Array<boolean>): MapFont$CharacterSprite {
		return new MapFont$CharacterSprite.$javaClass(arg0, arg1, arg2);
	}
}

