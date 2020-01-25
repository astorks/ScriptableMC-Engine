# ScriptableMC-Engine

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/astorks/ScriptableMC-Engine?label=ScriptableMC&style=for-the-badge)](https://github.com/astorks/ScriptableMC-Engine/releases/latest)

Run JavaScript/TypeScript plugins for Bukkit/Spigot/Paper Minecraft 1.15 using the GraalJS script engine.

**This plugin requires running your minecraft server with OpenJDK or the GraalVM java runtime.**

## Installing The Plugin
- Download the latest [Command-API](https://github.com/JorelAli/1.13-Command-API/releases) and place it in your server plugins folder. This is used for command auto-completion.
- Ensure your server is running OpenJDK 8+ or the standard JDK 8+
**This is required as you can NOT launch your minecraft server with the default JRE or the plugin will fail to load**
- [Download the latest ScriptableMC plugin](https://github.com/astorks/ScriptableMC-Engine/releases/latest) and place it in your plugins folder.
- Take a look at [ScriptableMC-TypeScript](https://github.com/astorks/ScriptableMC-TypeScript) for a full typescript plugin example.

## Commands and Permissions
| Command       | Alias         | Description                                           | Permission               |
| ------------- | ------------- |:-----------------------------------------------------:| ------------------------ |
| `/jsreload`   | `/jsrl`       | Fully reloads the script engine and all script files. | `scriptablemc.js.reload` |
| `/jsexec <source>`   | `/jsex`       | Executes javascript source and prints the return value. | `scriptablemc.js.execute` |
| `/jsexecfile <filePath>`   | `/jsexf`       | Executes javascript file from the scripts folder. | `scriptablemc.js.execute.file` |
| `/scriptablemc menu`   | `/smc menu`       | Opens an inventory menu that allows you to control the scriptable engine. | `scriptablemc.menu` |
| `/scriptablemc info`   | `/smc info`       | Prints plugin version and GraalVM/GraalJS versions if available. | `scriptablemc.info` |