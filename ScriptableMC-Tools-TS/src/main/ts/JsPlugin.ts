import Event from "./org/bukkit/event/Event.js";
import Server from "./org/bukkit/Server.js";
import ScriptablePluginContext from "./com/pixlfox/scriptablemc/core/ScriptablePluginContext.js";
import PluginCommand from "./org/bukkit/command/PluginCommand.js";
import Player from "./org/bukkit/entity/Player.js";
import PluginMessageListenerRegistration from "./org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js";
import OfflinePlayer from "./org/bukkit/OfflinePlayer.js";
import MysqlWrapper from "./com/smc/utils/MysqlWrapper.js";
import File from "./java/io/File.js";

declare type Type<T> = { new (...args: any[]): T; };

export default class JsPlugin {
    public context: ScriptablePluginContext;

    get pluginName(): string {
        return this.constructor.name;
    }

    get server(): Server {
        return this.context.getServer();
    }

    registerEvent<T extends Event>(eventClass: Type<T>, callback: (listener: any, event: T) => void) {
        this.context.registerEvent(eventClass['$javaClass'], callback.bind(this));
    }

    newCommand(name: string): PluginCommand {
        return this.context.newCommand(name);
    }

    unregisterCommand(command: PluginCommand) {
        this.context.unregisterCommand(command);
    }

    registerCommand(command: PluginCommand) {
        this.context.registerCommand(command);
    }

    registerIncomingPluginChannel(channel: string, callback: (channel: string, player: Player, message: number[]) => void): PluginMessageListenerRegistration {
        return this.context.registerIncomingPluginChannel(channel, callback.bind(this));
    }

    unregisterIncomingPluginChannel(channel: string) {
        this.context.unregisterIncomingPluginChannel(channel);
    }

    registerOutgoingPluginChannel(channel: string) {
        this.context.registerOutgoingPluginChannel(channel);
    }

    unregisterOutgoingPluginChannel(channel: string) {
        this.context.unregisterOutgoingPluginChannel(channel);
    }

    getFile(pathName: string): File {
        return new File(pathName);
    }

    newMysqlInstance(host: string, port: number, database: string, username: string, password: string): MysqlWrapper {
        return new MysqlWrapper(host, port, database, username, password);
    }

    mysqlFromConfig(configObject: { host: string, port: number, database: string, username: string, password: string }): MysqlWrapper {
        return this.newMysqlInstance(configObject.host, configObject.port, configObject.database, configObject.username, configObject.password);
    }

    setPlaceholders(player: (Player | OfflinePlayer), placeholderText: string): string {
        return this.context.setPlaceholders(player, placeholderText);
    }

    onLoad(): void { console.log("[" + this.pluginName + "] onLoad()"); }
    onEnable(): void { console.log("[" + this.pluginName + "] onEnable()"); }
    onDisable(): void { console.log("[" + this.pluginName + "] onDisable()"); }
}