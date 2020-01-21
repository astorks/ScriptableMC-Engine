declare var Java: any;
import {HelpTopicFactory} from '../../../org/bukkit/help/HelpTopicFactory.js'
import {HelpTopic} from '../../../org/bukkit/help/HelpTopic.js'

export interface HelpMap {
	clear(): void;
	registerHelpTopicFactory(arg0: any, arg1: HelpTopicFactory): void;
	getIgnoredPlugins(): any;
	getHelpTopic(arg0: string): HelpTopic;
	addTopic(arg0: HelpTopic): void;
	getHelpTopics(): any;
}

export class HelpMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpMap');
	}
}

