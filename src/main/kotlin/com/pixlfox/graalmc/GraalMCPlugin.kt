package com.pixlfox.graalmc

import org.bukkit.event.Listener
import org.bukkit.plugin.java.JavaPlugin
import org.graalvm.polyglot.Context
import org.graalvm.polyglot.Value
import java.io.File

class GraalMCPlugin : JavaPlugin(), Listener {
    var jsContext: Context? = null
    var bindings: Value? = null

    override fun onEnable() {
        jsContext = Context.create("js")
        bindings = jsContext!!.getBindings("js")

        bindings!!.putMember("server", server)
        bindings!!.putMember("logger", this.logger)

        val jsMainFile = File("./scripts/main.js").readText()

        jsContext!!.eval("js", jsMainFile)

        logger.info("[FlowMC] Javascript engine started")
    }

    override fun onDisable() {
        logger.info("[FlowMC] Javascript engine shutdown")
    }
}