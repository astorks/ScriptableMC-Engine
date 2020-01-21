declare var Java: any;
import {BukkitTask} from '../../../org/bukkit/scheduler/BukkitTask.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface BukkitRunnable {
	runTaskLaterAsynchronously(arg0: Plugin, arg1: number): BukkitTask;
	runTaskTimerAsynchronously(arg0: Plugin, arg1: number, arg2: number): BukkitTask;
	runTaskAsynchronously(arg0: Plugin): BukkitTask;
	runTask(arg0: Plugin): BukkitTask;
	runTaskLater(arg0: Plugin, arg1: number): BukkitTask;
	runTaskTimer(arg0: Plugin, arg1: number, arg2: number): BukkitTask;
	isCancelled(): boolean;
	cancel(): void;
	getTaskId(): number;
	run(): void;
}

export class BukkitRunnable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitRunnable');
	}
	constructor() {
		return new BukkitRunnable.$javaClass();
	}
	public static new0(): BukkitRunnable {
		return new BukkitRunnable.$javaClass();
	}
}

