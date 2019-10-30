import * as assert from "assert";
import * as vs from "vscode";
import { activate, currentEditor, extApi, getPackages, helloWorldTestMainFile, openFile, positionOf, waitForResult } from "../../helpers";

describe("run test at cursor", () => {

	before("get packages", () => getPackages());
	beforeEach("activate and wait for outline", async () => {
		await activate(helloWorldTestMainFile);
		const editor = currentEditor();
		editor.selection = new vs.Selection(editor.document.positionAt(0), editor.document.positionAt(0));
		await waitForResult(() => !!extApi.fileTracker.getOutlineFor(helloWorldTestMainFile));
	});

	it.only("command is available when cursor is inside a test", async () => {
		const editor = await openFile(helloWorldTestMainFile);
		extApi.logger.info("Setting selection!");
		editor.selection = new vs.Selection(positionOf("expect^("), positionOf("^expect("));
		extApi.logger.info("Done!");

		// Allow some time to check, because the flag is flipped in a selection change handler
		await waitForResult(() => extApi.cursorIsInTest);

		// Also ensure the command exists.
		const command = (await vs.commands.getCommands(true)).filter((id) => id === "dart.runTestAtCursor");
		assert.ok(command);
		assert.ok(command.length);
	});

	it("command is not available when cursor is not inside a test", async () => {
		const editor = await openFile(helloWorldTestMainFile);
		editor.selection = new vs.Selection(positionOf("main^("), positionOf("^main("));

		// Allow some time to check, because the flag is flipped in a selection change handler
		await waitForResult(() => !extApi.cursorIsInTest);
	});
});
