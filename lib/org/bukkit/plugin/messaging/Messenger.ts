declare var Java: any;
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {PluginMessageListenerRegistration} from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'
import {PluginMessageListener} from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'

export interface Messenger {
	isReservedChannel(channel: string): boolean;
	getIncomingChannels(): any;
	getIncomingChannels(plugin: Plugin): any;
	isRegistrationValid(registration: PluginMessageListenerRegistration): boolean;
	isOutgoingChannelRegistered(plugin: Plugin, channel: string): boolean;
	unregisterIncomingPluginChannel(plugin: Plugin): void;
	unregisterIncomingPluginChannel(plugin: Plugin, channel: string): void;
	unregisterIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): void;
	isIncomingChannelRegistered(plugin: Plugin, channel: string): boolean;
	dispatchIncomingMessage(source: Player, channel: string, message: Array<number>): void;
	registerOutgoingPluginChannel(plugin: Plugin, channel: string): void;
	unregisterOutgoingPluginChannel(plugin: Plugin): void;
	unregisterOutgoingPluginChannel(plugin: Plugin, channel: string): void;
	registerIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
	getOutgoingChannels(plugin: Plugin): any;
	getOutgoingChannels(): any;
	getIncomingChannelRegistrations(plugin: Plugin, channel: string): any;
	getIncomingChannelRegistrations(channel: string): any;
	getIncomingChannelRegistrations(plugin: Plugin): any;
}

export class Messenger {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.Messenger');
	}
	public static get MAX_MESSAGE_SIZE(): number {
		return Messenger.$javaClass.MAX_MESSAGE_SIZE;
	}
	public static get MAX_CHANNEL_SIZE(): number {
		return Messenger.$javaClass.MAX_CHANNEL_SIZE;
	}
}

