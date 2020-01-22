declare var Java: any;
import {BukkitTask} from '../../../org/bukkit/scheduler/BukkitTask.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface BukkitRunnable {
	runTask(plugin: Plugin): BukkitTask;
	runTaskTimer(plugin: Plugin, delay: number, period: number): BukkitTask;
	runTaskLater(plugin: Plugin, delay: number): BukkitTask;
	isCancelled(): boolean;
	cancel(): void;
	getTaskId(): number;
	runTaskAsynchronously(plugin: Plugin): BukkitTask;
	runTaskLaterAsynchronously(plugin: Plugin, delay: number): BukkitTask;
	runTaskTimerAsynchronously(plugin: Plugin, delay: number, period: number): BukkitTask;
	run(): void;
}

export class BukkitRunnable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitRunnable');
	}
	constructor();
	constructor(...args: any[]) {
		return new BukkitRunnable.$javaClass(...args);
	}
}

