import { Event } from "./lib/org/bukkit/event/Event.js";
import { Server } from "./lib/org/bukkit/Server.js";
import { ScriptablePluginContext } from "./lib/com/pixlfox/scriptableplugin/core/ScriptablePluginContext.js";
import { PluginCommand } from "./lib/org/bukkit/command/PluginCommand.js";
import { ScriptablePluginEngine } from "./lib/com/pixlfox/scriptableplugin/core/ScriptablePluginEngine.js";

declare const engine: ScriptablePluginEngine;

export class JsPlugin {
    public context: ScriptablePluginContext;

    get pluginName(): string {
        return this.constructor.name;
    }

    get bukkitServer(): Server {
        return this.context.getServer()
    }

    registerEvent<T extends Event>(javaClass: any, callback: (listener: any, event: T) => void) {
        this.context.registerEvent(javaClass, callback.bind(this));
    }

    newCommand(name: string): PluginCommand {
        return this.context.newCommand(name);
    }

    registerCommand(command: PluginCommand) {
        this.context.registerCommand(command);
    }

    unregisterCommand(command: PluginCommand) {
        this.context.unregisterCommand(command);
    }

    onLoad(): void { console.log("[" + this.pluginName + "] onLoad()"); }
    onEnable(): void { console.log("[" + this.pluginName + "] onEnable()"); }
    onDisable(): void { console.log("[" + this.pluginName + "] onDisable()"); }
}