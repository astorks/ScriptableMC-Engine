import com.pixlfox.scriptablemc.TypeScriptDefinitionGenerator

class TypeScriptGeneratorDebug {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            TypeScriptDefinitionGenerator
                .fromConfigFile("./ScriptableMC-Tools-TS/Standalone/test/typescript-export.json")
                .mkdirs()
                .generateClassList()
//                .debugClassList()
                .generateTypeScriptDefinitions()
                .generateJavaScriptSource()

        }
    }
}