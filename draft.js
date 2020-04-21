const segment_names = ["A_1_Va","A_1_Vl","A_2_Vl","A_3_Vl","Bass_1_Kb","Bass_1_Vc","Bass_2_Kb","Bass_2_Vc","Bass_3_Kb","Bass_3_Vc","B_1_Va","B_1_Vl","B_2_Va","B_2_Vl","B_3_Vl","C_1a_Vl","C_1b_Vl","C_2a_Vl","C_2b_Vl","C_3_Vl","C_4_Va","C_4_Vl","C_5_Va","C_6a_Vl","C_6b_Vl","D_1_Vl","E_1_Va","E_2_Vl","E_3_Vl","F_1_Vl","F_2_Vl","F_3_Va","F_4_Va"];
const extension = ".flac";
const measure_length = 4/3;
const measures = [
	//1
	["Bass_2_Vc"],
	[],
	["A_1_Vl"],
	["A_1_Vl"],
	//5
	["Bass_1_Vc","Bass_1_Kb","A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	//9a
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	//9b
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	["A_1_Vl","B_1_Va"],
	//13
	["Bass_2_Vc","Bass_2_Kb","C_4_Va","C_1a_Vl"],
	["C_4_Va"],
	["C_4_Va"],
	["C_4_Va"],
	//17
	["Bass_2_Vc","Bass_2_Kb","C_4_Va","C_1b_Vl"],
	["C_4_Va"],
	["C_4_Va"],
	["C_4_Va"],
	//21a
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","B_1_Vl","C_4_Va"],
	["B_1_Vl","C_4_Va"],
	["B_1_Vl","C_4_Va"],
	["B_1_Vl","C_4_Va"],
	//21b
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","B_1_Vl","C_4_Va"],
	["B_1_Vl","C_4_Va"],
	["B_1_Vl","C_4_Va"],
	["B_1_Vl","C_4_Va"],
	//25a
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","C_4_Va","C_2a_Vl"],
	["A_1_Vl","C_4_Va"],
	["C_2b_Vl","A_1_Vl","C_4_Va"],
	["A_1_Vl","C_4_Va"],
	//29a
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","C_4_Va","C_2a_Vl"],
	["A_1_Vl","C_4_Va"],
	["C_3_Vl","A_1_Vl","C_4_Va"],
	["C_3_Vl","A_1_Vl","C_4_Va"],
	//25b
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","C_4_Va","C_2a_Vl"],
	["A_1_Vl","C_4_Va"],
	["C_2b_Vl","A_1_Vl","C_4_Va"],
	["A_1_Vl","C_4_Va"],
	//29b
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","C_4_Va","C_2a_Vl"],
	["A_1_Vl","C_4_Va"],
	["C_3_Vl","A_1_Vl","C_4_Va"],
	["C_3_Vl","A_1_Vl","C_4_Va"],
	//33
	["Bass_1_Vc","Bass_1_Kb","A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	//37a
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	//37b
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	["A_1_Vl","B_2_Vl","C_5_Va"],
	//41
	["Bass_2_Vc","Bass_2_Kb","A_1_Vl","C_4_Vl","B_2_Va"],
	["A_1_Vl","C_4_Vl","B_2_Va"],
	["A_1_Vl","C_4_Vl","B_2_Va"],
	["A_1_Vl","C_4_Vl","B_2_Va"],
	//45
	["Bass_2_Vc","Bass_2_Kb","C_6a_Vl","A_1_Vl","B_2_Va"],
	["A_1_Vl","B_2_Va"],
	["C_6b_Vl","A_1_Vl","B_2_Va"],
	["A_1_Vl","B_2_Va"],
	//49
	["Bass_2_Vc","Bass_2_Kb","C_6a_Vl","A_1_Vl","B_2_Va"],
	["A_1_Vl","B_2_Va"],
	["C_3_Vl","A_1_Vl","B_2_Va"],
	["C_3_Vl","A_1_Vl","B_2_Va"],
	//53
	["Bass_2_Vc","Bass_2_Kb","C_6a_Vl","A_1_Vl","C_4_Va"],
	["A_1_Vl","C_4_Va"],
	["C_6b_Vl","A_1_Vl","C_4_Va"],
	["A_1_Vl","C_4_Va"],
	//57
	["Bass_2_Vc","Bass_2_Kb","C_6a_Vl","A_1_Vl","C_4_Va"],
	["A_1_Vl","C_4_Va"],
	["B_3_Vl","A_1_Vl","C_4_Va"],
	["B_3_Vl","A_1_Vl","C_4_Va"],
	//63
	["Bass_1_Vc","Bass_1_Kb","B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	//65a
	["Bass_2_Vc","Bass_2_Kb","B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	//65b
	["Bass_2_Vc","Bass_2_Kb","B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	["B_3_Vl","A_1_Vl","C_5_Va"],
	//69
	["Bass_2_Vc","Bass_2_Kb","C_1a_Vl","A_1_Va"],
	["A_1_Va"],
	["A_1_Va"],
	["A_1_Va"],
	//73
	["Bass_2_Vc","Bass_2_Kb","C_1b_Vl","A_1_Va"],
	["A_1_Va"],
	["A_1_Va"],
	["A_1_Va"],
	//77
	["Bass_2_Vc","Bass_2_Kb","A_1_Va","A_2_Vl","D_1_Vl"],
	["A_1_Va","A_2_Vl"],
	["A_1_Va","A_2_Vl"],
	["A_1_Va","A_2_Vl"],
	//81
	["Bass_2_Vc","Bass_2_Kb","A_1_Va","A_2_Vl","A_3_Vl"],
	["A_1_Va","A_2_Vl","A_3_Vl"],
	["A_1_Va","A_2_Vl","A_3_Vl"],
	["A_1_Va","A_2_Vl","A_3_Vl"],
	//85
	["Bass_2_Vc","Bass_2_Kb","E_1_Va","E_2_Vl","E_3_Vl"],
	[],
	[],
	[],
	//89
	["Bass_3_Kb"],
	[],//treating 89 as double length
	["F_1_Vl"],
	[],
	//92
	["Bass_3_Kb"],
	[],
	["F_2_Vl"],
	[],
	//96
	["Bass_3_Kb"],
	[],
	["F_3_Va"],
	[],
	//100
	["Bass_3_Kb"],
	[],
	["Bass_3_Vc","F_4_Va"],
	[],
	[]
]
const segments = {};
let ctx = new AudioContext();
ctx.suspend();

function loadAudio(name){
	return new Promise((resolve, reject)=>{
		fetch(name + extension, {method:"GET"})
			.then(response => response.arrayBuffer())
			.then(encodedAudio => ctx.decodeAudioData(encodedAudio))
			.then(resolve)
			.catch(reject)
	});
}
function loadAllAudio(){
	let totalAudioCount = segment_names.length;
	let loadedAudioCount = 0;
	const progress = document.getElementsByTagName("progress")[0];
	progress.value = 0;
	progress.max = totalAudioCount;
	let promises = segment_names.map(name=>{
		return loadAudio(name)
			.then(audio => {
				segments[name]=audio;
				loadedAudioCount++;
				progress.value = loadedAudioCount;
				console.log("loaded %s/%s: %s", loadedAudioCount, totalAudioCount, name);
				return audio;
			}).catch(console.error)
	});
	return Promise.allSettled(promises);
}
function playAudio(buffer, time){
	let source = ctx.createBufferSource();
	source.buffer = buffer;
	source.connect(ctx.destination);
	source.start(time);
}
function getMeasure(index){
	if(measures[index])	return measures[index].map(name => segments[name]);
	else return [];
}
let start_time = 0;
function playMeasure(index, time){
	console.log("playing measure %s at time %s", index, time);
	getMeasure(index).forEach(buffer=>playAudio(buffer, time));
}
let interval = 0.5;
let plan_ahead = 1;
let startindex = 0;
function playloop(){
	let ct = ctx.currentTime;
	let stopindex = Math.ceil((ct + plan_ahead)/measure_length);
	console.log({ct, startindex, stopindex});
	for(let index = startindex; index <= stopindex; index++){
		playMeasure(index, start_time + index * measure_length);
	}
	startindex = stopindex + 1;
	setTimeout(playloop, interval*1000);
}


document.addEventListener("DOMContentLoaded", ()=>{
	loadAllAudio()
		.then(()=>{
			let playbutton = document.getElementById("play");
			playbutton.removeAttribute("disabled");
			playbutton.addEventListener("click", ()=>{
				startindex = 0;
				start_time = ctx.currentTime;
				ctx.resume();
			});
			playloop();
		});
});

console.log = document.writeln;
console.error = document.writeln;