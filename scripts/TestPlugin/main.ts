import { JsPlugin } from '../JsPlugin.js';
import { AsyncPlayerChatEvent } from '../lib/org/bukkit/event/player/AsyncPlayerChatEvent.js';
import { ChatColor } from '../lib/org/bukkit/ChatColor.js';
import { CommandSender } from '../lib/org/bukkit/command/CommandSender.js';
import { Command } from '../lib/org/bukkit/command/Command.js';
import { Location } from '../lib/org/bukkit/Location.js';
import { Player } from '../lib/org/bukkit/entity/Player.js';


export class TestPlugin extends JsPlugin {

    onEnable() {
        console.log("[" + this.pluginName + "] onEnable()");

        this.registerEvent(AsyncPlayerChatEvent._javaClass, this.onPlayerChat);

        let cmd = this.newCommand("hellojs");
        cmd.setExecutor(this.onHelloWorldCmdExecute.bind(this));
        this.registerCommand(cmd);

        let spawnCommand = this.newCommand("spawn");
        spawnCommand.setExecutor(this.onSpawnCommandExecute.bind(this));
        this.registerCommand(spawnCommand);
    }

    onPlayerChat(listener: any, event: AsyncPlayerChatEvent) {
        let message = event.getMessage();
        let sender = event.getPlayer();
        
        let playerName = sender.getName();

        if(message.toLowerCase().startsWith("~")) {

            event.setCancelled(true);
            sender.sendMessage("Echo: " + message.substring(1));
        }
    }

    onHelloWorldCmdExecute(sender: CommandSender, command: Command, label: string, args: Array<string>) {
        sender.sendMessage(ChatColor.BLUE.toString() + ChatColor.MAGIC.toString() + "AA" +  ChatColor.RESET.toString() + ChatColor.GREEN.toString() + "Hello from javascript!" + ChatColor.BLUE.toString() + ChatColor.MAGIC.toString() + "AA" +  ChatColor.RESET.toString());
        return false
    }

    onSpawnCommandExecute(sender: CommandSender, command: Command, label: string, args: Array<string>) {
        (sender as Player).teleport(Location.new1(this.bukkitServer.getWorld("world"), 267, 94, -1084, 270, 0));
        return false;
    }
}