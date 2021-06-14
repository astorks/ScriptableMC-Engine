import com.pixlfox.scriptablemc.TypeScriptDefinitionGenerator
import java.io.File

class TypeScriptGeneratorDebug {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            TypeScriptDefinitionGenerator(args)
                .addDefaultClasses()
                .addTypeSearchIndex("./ScriptableMC-Tools-TS/Standalone/spigot-type-search-index.json")
//                .debugClassList()
//                .exportLibrariesHashed()
//                .exportGlobalLibrary()
//                .copyStaticSources()
//                .exportProjectFiles()

        }
    }
}