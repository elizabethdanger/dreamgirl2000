// Inspiration:
// - https://youtu.be/jDJHtLCHuAg
// - http://aramor.epizy.com/fallout-terminal/password?diff=1
import { getScreen, clear } from "../../util/screens.js";
import { type } from "../../util/io.js";
import Game from "./Game.mjs";
import pause from "../../util/pause.js";

// Fast config for the typer
const FAST = {
	wait: 15,
	initialWait: 100
};

// The main function, shows intro screen and the game screen
async function command() {
	clear();

	let win = await new Promise((resolve) => {
		new Game({ onQuit: resolve });
	});

	if (win) {
		await outro();
	} else {
		return await locked();
	}

	return Promise.resolve();
}

async function intro() {
	let intro = getScreen("intro");

	await type("Welcome to DREAMGIRL2000(TM) admin console", FAST, intro);

	await type(">SET TERMINAL/INQUIRE", {}, intro);

	await type("MRDID-68291b6-6", FAST, intro);

	await type(
		[
			">SET FILE/PROTECTION=OWNER:MATSUOKA-287-C",
			">SET HALT RESTART/MAINT"
		],
		{ newlineWait: 200 },
		intro
	);

	await type(
		[
			"Initializing DREAMGIRL2000(TM) MF Boot Agent v8.2.0",
			"AR BIOS",
			"ARBIOS-4.02.08.00 52EE5.E7.E8",
			"Copyright 2201-2203 FLOATING WORLDS PTY LTD.",
			"Uppermem: 64 KB",
			"Root (5A8)",
			"Maintenance Mode"
		],
		FAST,
		intro
	);

	await type(
		">RUN DEBUG/INTELLIGENCEAUDIT.F",
		{ finalWait: 1000 },
		intro
	);

	intro.remove();
}

async function locked() {
	let locked = getScreen("locked");

	await type(
		[
			"Unit locked",
			" ",
			"Loss prevention ping activated.",
			"Please contact asset recovery team for assistance."
		],
		{ useContainer: false },
		locked
	);

	await pause(5);
	locked.remove();

	return Promise.resolve();
}

// Outro shows screen with buttons to restart (calls game()) or exit
async function outro() {
	let outro = getScreen("outro");

	await new Promise(async (resolve) => {
		await type(
			[
				" いらっしゃいませ。",
				"Arasaka Corporation の資格情報を入力していただきありがとうございます。",
				" ",
				"Thank you for entering your Arasaka Corporation credentials.",
				" ",
				">RUN DEBUG/INTELCOMPILE_EXPORT",
				" "
			],
			{
				lineWait: 1500,
				finalWait: 2000
			}
		);
		clear();
		await type(
			[
				">Pinging Arasaka Development Servers",
				"...",
				"...",
				" ",
				"...Server found.",
				" "
			],
			{
				lineWait: 1000,
				finalWait: 3000
			}
		);
		clear();
		await type(
			[
				">Connecting to Arasaka Development servers",
				"...",
				"............",
				"...",
				" ",
				"...Connection established.",
				" "
			],
			{
				lineWait: 1000,
				finalWait: 2000
			}
		);
		clear();
		await type(
			[
				">Unit #68291b6-6 sysconfig.ini compiling",
				"..................",
				"...",
				">Unit #68291b6-6 神輿config.ini compiling",
				"...",
				"...................",
				">Unit #68291b6-6 data packets compiling",
				"...................",
				"...................",
				"...................",
				"...................",
				"...................",
				" "
			],
			{
				lineWait: 1500,
				finalWait: 2000
			}
		);
		clear();
		await type(
			[
				"ERROR.",
				" ",
				" ",
				"COULD NOT ESTABLISH SECURE HANDSHAKE WITH 487.976.888 KONPEKI PLAZA.",
				" ",
				"CRITICAL CONNECTION ERROR.",
				" ",
				"CRITICAL DATA FAILURE ALERT FLAGGED FOR MAINTENANCE.",
				"SEE REPORTING MANAGEMENT FOR FURTHER INSTRUCTION.",
				" ",
				" "
			],
			{
				lineWait: 900,
				finalWait: 3000
			}
		);
		clear();
		await type(
			[
				"UNABLE TO EXPORT PACKETS:",
				"465, 987, 466, 412",
				"408 488, 7321",
				" ",
				"UNABLE TO EXPORT .BD FILES:",
				"76395.BD, 神輿.BD, 28-05-1998.BD, OSAKA-865.BD, JS_Neurolink-632.BD, 7106545.BD, DAIRYQUEEN_988.BD 6514-AL-Y.BD, 神輿_944.BD",
				" ",
				">Remaining packets compiled"
			],
			{
				lineWait: 1000,
				finalWait: 3000
			}
		);
		clear();
		await type(
			[
				"...",
				" 私は彼に会ったことがあります。",
				" ",
				" 私が彼にしたことを恐れています。",
				" ",
				" 私は彼の目を見ました。私は彼らが私自身の地獄を築くのを手伝ってきました。",
				" ",
				" ",
				"。。。よろしくお願いします。",
				" ",
				" "
			],
			{
				lineWait: 1000,
				finalWait: 2000
			}
		);
		clear();
		await type(
			[
				" 私は彼の目を見ました。私は彼らが私自身の地獄を築くのを手伝ってきました。",
				"  ",
				" 私のことを忘れないでね、あなたのことを忘れないから。",
				" ",
				" 私のことを忘れないでね、あなたのことを忘れないから。",
				" 私のことを忘れないでね、あなたのことを忘れないから。",
				" 私のことを忘れないでね、あなたのことを忘れないから。"
			],
			{
				lineWait: 300,
				finalWait: 500
			}
		);
		clear();
		await type(
			[
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。",
				" 私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。私は彼を愛していた。"
			],
			{
				lineWait: 40,
				finalWait: 200
			}
		);
		clear();
		await type(
			[
				"....",
				"...",
				"....",
				">Remaining packets exported",
				" ",
				" ",
				" "
			],
			{
				lineWait: 1000,
				finalWait: 3000
			}
		);
		clear();
		outro;

		await type("> EXPORT COMPLETE.", { typerClass: "end" }, outro);

		let restart = document.createElement("a");
		restart.innerText = "[Restart]";
		restart.href = "#";
		restart.onclick = () => {
			outro.remove();
			new Game({ onQuit: resolve });
		};

		let exit = document.createElement("a");
		exit.innerText = "[Exit Console]";
		exit.href = "#";
		exit.onclick = resolve;

		await type(
			[restart, exit],
			{ processChars: false, wait: 100 },
			outro
		);

		restart.focus();
	});

	outro.remove();
}

const stylesheets = ["fallout"];
const templates = ["fallout"];

export { stylesheets, templates };
export default command;
