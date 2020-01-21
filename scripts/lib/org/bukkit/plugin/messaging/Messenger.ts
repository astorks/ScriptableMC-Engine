declare var Java: any;
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {PluginMessageListenerRegistration} from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PluginMessageListener} from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'

export interface Messenger {
	isOutgoingChannelRegistered(arg0: Plugin, arg1: string): boolean;
	getIncomingChannelRegistrations(arg0: string): any;
	getIncomingChannelRegistrations(arg0: Plugin): any;
	getIncomingChannelRegistrations(arg0: Plugin, arg1: string): any;
	registerOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
	getOutgoingChannels(arg0: Plugin): any;
	getOutgoingChannels(): any;
	getIncomingChannels(arg0: Plugin): any;
	getIncomingChannels(): any;
	isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean;
	unregisterOutgoingPluginChannel(arg0: Plugin): void;
	unregisterOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
	dispatchIncomingMessage(arg0: Player, arg1: string, arg2: Array<number>): void;
	unregisterIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): void;
	unregisterIncomingPluginChannel(arg0: Plugin, arg1: string): void;
	unregisterIncomingPluginChannel(arg0: Plugin): void;
	isIncomingChannelRegistered(arg0: Plugin, arg1: string): boolean;
	registerIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): PluginMessageListenerRegistration;
	isReservedChannel(arg0: string): boolean;
}

export class Messenger {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.Messenger');
	}
}

