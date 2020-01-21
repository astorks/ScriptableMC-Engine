import { ScriptablePluginEngine } from "./mc/com.pixlfox.scriptableplugin.core.ScriptablePluginEngine.js";
declare const engine: ScriptablePluginEngine;

import { TestPlugin } from './TestPlugin/main.js'
engine.loadPlugin(TestPlugin);


engine.startAllPlugins();
