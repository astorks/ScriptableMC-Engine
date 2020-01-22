declare var Java: any;
import {HelpTopicFactory} from '../../../org/bukkit/help/HelpTopicFactory.js'
import {HelpTopic} from '../../../org/bukkit/help/HelpTopic.js'

export interface HelpMap {
	clear(): void;
	registerHelpTopicFactory(commandClass: any, factory: HelpTopicFactory): void;
	addTopic(topic: HelpTopic): void;
	getHelpTopic(topicName: string): HelpTopic;
	getIgnoredPlugins(): any;
	getHelpTopics(): any;
}

export class HelpMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpMap');
	}
}

