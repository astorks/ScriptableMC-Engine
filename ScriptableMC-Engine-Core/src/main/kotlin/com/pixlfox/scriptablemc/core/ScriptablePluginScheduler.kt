package com.pixlfox.scriptablemc.core

import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask

@Suppress("unused", "MemberVisibilityCanBePrivate")
class ScriptablePluginScheduler(private val context: ScriptablePluginContext) {
    private val serverScheduler = Bukkit.getScheduler()
    private val tasks = mutableListOf<BukkitTask>()

    fun runTaskTimer(delay: Long, period: Long, run: () -> Unit): BukkitTask {
        val task = serverScheduler.runTaskTimer(context.javaPlugin, Runnable { run.invoke() }, delay, period)
        tasks.add(task)
        return task
    }

    fun cancelTask(task: BukkitTask) {
        if(!task.isCancelled) {
            task.cancel()
        }
        tasks.remove(task)
    }

    fun cancelAllTasks(): Int {
        val tasks = tasks.toTypedArray()
        for(task in tasks) {
            cancelTask(task)
        }
        return tasks.size
    }
}