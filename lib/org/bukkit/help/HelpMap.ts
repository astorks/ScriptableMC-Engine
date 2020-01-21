declare var Java: any;
import {HelpTopic} from '../../../org/bukkit/help/HelpTopic.js'
import {HelpTopicFactory} from '../../../org/bukkit/help/HelpTopicFactory.js'

export interface HelpMap {
	clear(): void;
	getHelpTopic(topicName: string): HelpTopic;
	getHelpTopics(): any;
	addTopic(topic: HelpTopic): void;
	getIgnoredPlugins(): any;
	registerHelpTopicFactory(commandClass: any, factory: HelpTopicFactory): void;
}

export class HelpMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpMap');
	}
}

