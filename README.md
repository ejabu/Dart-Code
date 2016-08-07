## Installation

Dart Code can be [installed from the Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=DanTup.dart-code). Open VS Code Quick Open (`Ctrl+P`) and paste the following and press enter:

    ext install dart-code

## Features

### Syntax highlighting

<img src="https://github.com/DanTup/Dart-Code/raw/master/media/syntax highlighting.gif" />

### Basic code completion

<img src="https://github.com/DanTup/Dart-Code/raw/master/media/code completion.gif" />

### Realtime errors/warnings/hints reported in error window and with squiggles

<img src="https://github.com/DanTup/Dart-Code/raw/master/media/diagnostics.gif" />

### Format document with custom line length

<img src="https://github.com/DanTup/Dart-Code/raw/master/media/format code.gif" />

### Hovers/tooltip information

<img src="https://github.com/DanTup/Dart-Code/raw/master/media/tooltips.gif" />

### Workspace-wide symbol search (`Ctrl+T`)

<img src="https://github.com/DanTup/Dart-Code/raw/master/media/search.gif" />

### Auto-closing braces/quotes

<img src="https://github.com/DanTup/Dart-Code/raw/master/media/braces.gif" />

### Automatically Detects Dart SDK

As long as Dart is in your `PATH` environment variable, Dart Code will find it automatically.


## Requirements

The Dart SDK must be available on your machine and added to your `PATH` or set in the extensions configuration.

## Extension Configuration

- `dart.sdkPath`: If the Dart SDK is not automatically found on your machine from your `PATH` you can set the path to it here.
- `dart.lineLength`: The maximum length of a line of code. This is used by the document formatter. Defaults to 80.
- `dart.setIndentation`: Forces indenting with two spaces when Dart files are opened. This is on by default because VS Code doesn't support per-language settings and most people use tabs/4 spaces for other languages. Defaults to true.
- `dart.showTodos`: Whether to show TODOs in the Problems list. Defaults to true.

## Known Issues

- Tooltip positioning is sometimes bad
- Multi-cursor edits may be much slower than single-cursor
- Code completion doesn't provide parameter help

## Analytics

This extension reports some very basic events to help inform development decisions, such as:

- When the extension is loaded
- When you enabled/disable some features (eg. showTodos)

Included in the event is your platform (Win/Linux/Mac) and the extensions version number. 

## Release Notes

### [v0.5.2](https://github.com/DanTup/Dart-Code/releases/tag/v0.5.2) *(2016-08-05)*

Another preview release to gather feedback on important things missing for v1. This version should be [installed from the marketplace](https://marketplace.visualstudio.com/items?itemName=DanTup.dart-code).

- SDK detection is more reliable on Linux/Mac
- Name changed from "Dart-Code" to "Dart Code"
- Setting added to control line-width passed to formatter
- Last used SDK path is cached to improve startup performance
- Tooltip hovers now indicate the range that they apply to
- Braces/quotes now automatically close
- Pressing enter between a set of braces will automatically indent


### [v0.1.0](https://github.com/DanTup/Dart-Code/releases/tag/v0.1.0) *(2016-08-04)*

Super-early preview release to get some testing from other people. The next preview will be distributed in the store but I wanted to get a little feedback from others before I publish it there.

- Detects SDK location from PATH
- Syntax highlighting
- Basic code completion
- Realtime errors/warnings/hints reported in error window and with squiggles
- Format document
- Hovers/tooltip information
- Workspace-wide symbol search (`Ctrl+T`)
