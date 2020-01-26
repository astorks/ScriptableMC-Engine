# ScriptableMC-Engine

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/astorks/ScriptableMC-Engine?label=ScriptableMC&style=for-the-badge)](https://github.com/astorks/ScriptableMC-Engine/releases/latest)

Run JavaScript/TypeScript plugins for Bukkit/Spigot/Paper Minecraft 1.15 using the GraalJS script engine.

**This plugin is in a preview state, there may be breaking changes, missing features, and possibly a few bugs.**<br >
Feel free to create an issue if you find any missing features, bugs, or just have an idea for a great feature to add.

**This plugin requires running your minecraft server with OpenJDK, Standard JDK, or the GraalVM java runtime.**<br >
Most linux servers already use OpenJDK, however if you're running windows or full AOT javascript compilation you can install [GraalVM-CE](https://github.com/graalvm/graalvm-ce-builds/releases/latest).

GraalVM-CE is a free open source java runtime created by Oracle that is pre-packaged with the GraalJS Engine allowing all javascript engine features including AOT compilation of javascript.

## Installing The Plugin
- Download the latest [Command-API](https://github.com/JorelAli/1.13-Command-API/releases) and place it in your server plugins folder. This is used for command auto-completion.
- Ensure your server is running OpenJDK 8+ or GraalVM
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
