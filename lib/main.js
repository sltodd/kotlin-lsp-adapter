const { AutoLanguageClient } = require("atom-languageclient");

class KotlinLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.kt", "source.kotlin"];
  }
  getLanguageName() {
    return "Kotlin";
  }
  getServerName() {
    return "Kotlin LSP";
  }

  startServerProcess(projectPath) {
    console.log("Spawning Kotlin LSP Server");
    return super.spawn(atom.config.get("kotlin-lsp-adapter.kotlin-lsp"), [], {
      cwd: projectPath,
    });
  }
}

module.exports = new KotlinLanguageClient();
