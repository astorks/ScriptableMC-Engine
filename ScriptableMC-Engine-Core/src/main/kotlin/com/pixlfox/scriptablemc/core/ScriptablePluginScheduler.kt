package com.pixlfox.scriptablemc.core

import org.bukkit.Bukkit
import org.bukkit.scheduler.BukkitTask

class ScriptablePluginScheduler(private val context: ScriptablePluginContext) {
    private val serverScheduler = Bukkit.getScheduler()
    private val tasks = mutableListOf<BukkitTask>()

    fun runTaskTimer(run: () -> Unit, delay: Long, period: Long): BukkitTask {
        val task = serverScheduler.runTaskTimer(context.javaPlugin, Runnable { run.invoke() }, delay, period)
        tasks.add(task)
        return task
    }

    fun cancelAllTasks() {
        for(task in tasks) {
            if(!task.isCancelled) {
                task.cancel()
            }
        }
    }
}