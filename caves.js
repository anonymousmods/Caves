var emoreID = 191;
//var rubyoreID = 192;
//var petrolID = 193;
var dioreID = 56;
var emoreDAMAGE = 0;
var rubyoreDAMAGE = 0;
var dioreDAMAGE = 0;
var petrolDAMAGE = 0;
var dungeonDAMAGE = 0;
var caveID = 0;
var surcaveID = 0;
var dungeonID = 0;
var lavaID = 11;
var caveDAMAGE = 0;
var surcaveDAMAGE = 0;
var cavechest = 54;
var dungeonchest = 54;
var blocks = 10;
var deltaX = Math.sin(Math.random() * 256)*blocks;
var deltaZ = Math.cos(Math.random() * 256)*blocks;
ModPE.setItem(426, "emerald", 0, "Emerald");


Block.defineBlock(191,"Emerald Ore",["emerald_ore",0],1,false,0);

//Block.defineBlock(192,"Ruby Ore",["quartz_ore",0],1,false,0);
//Block.defineBlock(193,"Petroleum",["wool",15],1,false,4);


Block.setDestroyTime(191,2.5);
Block.setDestroyTime(192,2.5);
Block.setDestroyTime(193,0.5);


function newLevel(){

for(var i = 0; i < 1000; i++){

		 var emoreX = Math.floor((Math.random() * 256) + 1);
			var emoreY = Math.floor((Math.random() * 45) + 1);
			var emoreZ = Math.floor((Math.random() * 256) + 1);
			Level.setTile(emoreX,emoreY,emoreZ,emoreID,emoreDAMAGE);
Level.setTile(emoreX+=1,emoreY,emoreZ,emoreID,emoreDAMAGE);
Level.setTile(emoreX,emoreY+=1,emoreZ,emoreID,emoreDAMAGE);
Level.setTile(emoreX-=1,emoreY,emoreZ,emoreID,emoreDAMAGE);
Level.setTile(emoreX,emoreY,emoreZ+=1,emoreID,emoreDAMAGE);
Level.setTile(emoreX,emoreY-=1,emoreZ,emoreID,emoreDAMAGE);
Level.setTile(emoreX+=1,emoreY,emoreZ,emoreID,emoreDAMAGE);
Level.setTile(emoreX,emoreY+=1,emoreZ,emoreID,emoreDAMAGE);

			}

for(var i = 0; i < 1000; i++){

		 var dioreX = Math.floor((Math.random() * 256) + 1);
			var dioreY = Math.floor((Math.random() * 40) + 1);
			var dioreZ = Math.floor((Math.random() * 256) + 1);
			Level.setTile(dioreX,dioreY,dioreZ,dioreID,dioreDAMAGE);
Level.setTile(dioreX+=1,dioreY,dioreZ,dioreID,dioreDAMAGE);
Level.setTile(dioreX,dioreY+=1,dioreZ,dioreID,dioreDAMAGE);
Level.setTile(dioreX-=1,dioreY,dioreZ,dioreID,dioreDAMAGE);
Level.setTile(dioreX,dioreY,dioreZ+=1,dioreID,dioreDAMAGE);
Level.setTile(dioreX,dioreY-=1,dioreZ,dioreID,dioreDAMAGE);
Level.setTile(dioreX+=1,dioreY,dioreZ,dioreID,dioreDAMAGE);
Level.setTile(dioreX,dioreY+=1,dioreZ,dioreID,dioreDAMAGE);

			}

for(var i = 0; i < 200; i++){
		 var surcaveX = Math.floor((Math.random() * 256) + 1);
			var surcaveY = Math.floor((Math.random() * 78) + 1);
			var surcaveZ = Math.floor((Math.random() * 256) + 1);

if(Level.getTile(Math.floor((Math.random() * 256) +1), Math.floor((Math.random() * 120) +1), Math.floor((Math.random() * 256) +1))!=10){
			 Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ-=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ-=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

/*if(getTile(surcaveX,surcaveY-=1, surcaveZ) != 0){

Level.setTile(surcaveX,surcaveY,surcaveZ,lavaID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,lavaID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,lavaID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,lavaID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,lavaID,surcaveDAMAGE);

}*/

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ-1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY+1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY-100,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

Level.setTile(surcaveX,surcaveY-100,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX-=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY,surcaveZ+=1,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY-=1,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX+=1,surcaveY,surcaveZ,surcaveID,surcaveDAMAGE);
Level.setTile(surcaveX,surcaveY+=1,surcaveZ,surcaveID,surcaveDAMAGE);

}

			}


for(var i = 0; i < 200; i++){

		 var dungeonX = Math.floor((Math.random() * 256) + 1);
			var dungeonY = Math.floor((Math.random() * 50) + 1);
			var dungeonZ = Math.floor((Math.random() * 256) + 1);


Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE); 
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE); 
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE); 
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
			Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ-=1,dungeonID,dungeonDAMAGE);

Level.setTile(dungeonX,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX-=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY,dungeonZ+=1,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY-=1,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX+=1,dungeonY,dungeonZ,dungeonID,dungeonDAMAGE);
Level.setTile(dungeonX,dungeonY+=1,dungeonZ,dungeonID,dungeonDAMAGE);



Level.setTile(dungeonX-2, dungeonY-1, dungeonZ-3, dungeonchest, 10);

Level.setChestSlot(dungeonX-2, dungeonY-1, dungeonZ-3, 5, 264, 0, 3);
Level.setChestSlot(dungeonX-2, dungeonY-1, dungeonZ-3, 0, 302, 0, 1);
Level.setChestSlot(dungeonX-2, dungeonY-1, dungeonZ-3, 1, 303, 0, 1);
Level.setChestSlot(dungeonX-2, dungeonY-1, dungeonZ-3, 9, 257, 5, 1);



			}


for(var i = 0; i < 200; i++){
		 var caveX = Math.floor((Math.random() * 256) + 1);
			var caveY = Math.floor((Math.random() * 50) + 1);
			var caveZ = Math.floor((Math.random() * 256) + 1);

if(Level.getTile(Math.floor((Math.random() * 256) +1), Math.floor((Math.random() * 120) +1), Math.floor((Math.random() * 256) +1))!=10){


if(Level.getTile(Math.floor((Math.random() * 256) +1), Math.floor((Math.random() * 120) +1), Math.floor((Math.random() * 256) +1))!=10){



Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);


if(getTile(caveX,caveY-2, caveZ) != 0){

Level.setTile(caveX,caveY-2,caveZ,lavaID,caveDAMAGE);
Level.setTile(caveX+1,caveY-2,caveZ,lavaID,caveDAMAGE);
Level.setTile(caveX,caveY-2,caveZ+1,lavaID,caveDAMAGE);
Level.setTile(caveX+1,caveY-2,caveZ+1,lavaID,caveDAMAGE);

}


Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ-=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ-=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

if(getTile(caveX,caveY-2, caveZ) != 0){

Level.setTile(caveX,caveY-2,caveZ,lavaID,caveDAMAGE);
Level.setTile(caveX+1,caveY-2,caveZ,lavaID,caveDAMAGE);
Level.setTile(caveX,caveY-2,caveZ+1,lavaID,caveDAMAGE);
Level.setTile(caveX+1,caveY-2,caveZ+1,lavaID,caveDAMAGE);

Level.setTile(caveX-2, caveY-1, caveZ-3, cavechest, 10);

Level.setChestSlot(caveX-2, caveY-1, caveZ-3, 5, 264, 0, 3);
Level.setChestSlot(caveX-2, caveY-1, caveZ-3, 0, 302, 0, 1);
Level.setChestSlot(caveX-2, caveY-1, caveZ-3, 1, 303, 0, 1);
Level.setChestSlot(caveX-2, caveY-1, caveZ-3, 9, 257, 5, 1);

}


Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ-1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY+1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY-100,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY-100,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY-100,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY-100,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY-100,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY-100,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

Level.setTile(caveX,caveY-100,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,caveID,caveDAMAGE);
Level.setTile(caveX,caveY-=1,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,caveID,caveDAMAGE);
Level.setTile(caveX,caveY+=1,caveZ,caveID,caveDAMAGE);

} 


}

}

}


function destroyBlock(x, y, z, side){


if(getTile(x, y, z) == 191){


Level.dropItem(x, y, z, 0, 388, 1, 0);
Level.destroyBlock(x, y, z, false);


}


}

