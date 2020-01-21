declare var Java: any;
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'

export interface ProjectileSource {
	launchProjectile(arg0: any): Projectile;
	launchProjectile(arg0: any, arg1: Vector): Projectile;
}

export class ProjectileSource {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.projectiles.ProjectileSource');
	}
}

