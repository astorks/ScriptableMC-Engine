declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface BukkitTask {
	getOwner(): Plugin;
	isCancelled(): boolean;
	cancel(): void;
	isSync(): boolean;
	getTaskId(): number;
}

export class BukkitTask {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitTask');
	}
}

