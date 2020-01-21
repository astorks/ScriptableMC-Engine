declare var Java: any;
import {HelpTopic} from '../../../org/bukkit/help/HelpTopic.js'
import {Command} from '../../../org/bukkit/command/Command.js'

export interface HelpTopicFactory {
	createTopic(command: Command): HelpTopic;
}

export class HelpTopicFactory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopicFactory');
	}
}

