# Kotlin LSP Adapter for Atom

## Overview

Minimal LSP adapter for [Atom](https://atom.io/) to replace the inactive [atom-ide-kotlin](https://github.com/fwcd/atom-ide-kotlin) package.

## Dependencies

Requires [atom-ide-base](https://github.com/atom-community/atom-ide-base).

## Installation

Make sure you have Java and Gradle installed (check [Gradle](https://gradle.org/install/) for instructions).

Follow the instructions to install to build the [Kotlin Language Server](https://github.com/fwcd/kotlin-language-server/blob/main/BUILDING.md).

For simplicity:
- Download the source files for the language server [here](https://github.com/fwcd/atom-ide-kotlin/archive/refs/heads/main.zip)
- Extract it to a location of your choosing (eg. c:/program files/kotlin/)
- cd into the source directory and run ```gradlew :server:installDist```
- Locate the executable files (eg. ```kotlin-language-server.bat```) in the ```kotlin-language-server-main\server\build\install\server\bin``` folder

Then either put the location on your PATH or enter the full path in the config.

May require restart of Atom.

## License

[MIT License](LICENSE.md).
