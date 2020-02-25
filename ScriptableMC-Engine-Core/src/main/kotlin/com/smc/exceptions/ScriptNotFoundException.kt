package com.smc.exceptions

import java.io.File

class ScriptNotFoundException(scriptFile: File) : Exception("Unable to load script: ${scriptFile.absolutePath}.")