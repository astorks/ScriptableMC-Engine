declare var Java: any;
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Directional} from '../../../org/bukkit/material/Directional.js'

export interface Attachable extends Directional {
	getAttachedFace(): BlockFace;
	getFacing(): BlockFace;
	setFacingDirection(face: BlockFace): void;
}

export class Attachable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Attachable');
	}
}

