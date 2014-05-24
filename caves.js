var emoreID = 191;
var rubyoreID = 192;
var petrolID = 193;
var emoreDAMAGE = 0;
var rubyoreDAMAGE = 0;
var petrolDAMAGE = 0;
var caveID = 0;
var lavaID = 11;
var caveDAMAGE = 0;
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

/*for(var i = 0; i < 1000; i++){
		 var rubyoreX = Math.floor((Math.random() * 256) + 1);
			var rubyoreY = Math.floor((Math.random() * 53) + 1);
			var rubyoreZ = Math.floor((Math.random() * 256) + 1);
			Level.setTile(rubyoreX,rubyoreY,rubyoreZ,rubyoreID,rubyoreDAMAGE);
Level.setTile(rubyoreX+=1,rubyoreY,rubyoreZ,rubyoreID,rubyoreDAMAGE);
Level.setTile(rubyoreX,rubyoreY+=1,rubyoreZ,rubyoreID,rubyoreDAMAGE);
Level.setTile(rubyoreX-=1,rubyoreY,rubyoreZ,rubyoreID,rubyoreDAMAGE);
Level.setTile(rubyoreX,rubyoreY,rubyoreZ+=1,rubyoreID,rubyoreDAMAGE);
Level.setTile(rubyoreX,rubyoreY-=1,rubyoreZ,rubyoreID,rubyoreDAMAGE);
Level.setTile(rubyoreX+=1,rubyoreY,rubyoreZ,rubyoreID,rubyoreDAMAGE);
Level.setTile(rubyoreX,rubyoreY+=1,rubyoreZ,rubyoreID,rubyoreDAMAGE);

			}*/

/*
for(var i = 0; i < 750; i++){
		 var petrolX = Math.floor((Math.random() * 256) + 1);
			var petrolY = Math.floor((Math.random() * 63) + 1);
			var petrolZ = Math.floor((Math.random() * 256) + 1);

if(Level.getTile(Math.floor((Math.random() * 256) +1), Math.floor((Math.random() * 120) +1), Math.floor((Math.random() * 256) +1))!=10){
			 Level.setTile(petrolX,petrolY,petrolZ,petrolID,petrolDAMAGE);
Level.setTile(petrolX+=1,petrolY,petrolZ,petrolID,petrolDAMAGE);
Level.setTile(petrolX-=1,petrolY,petrolZ,petrolID,petrolDAMAGE);
Level.setTile(petrolX,petrolY,petrolZ+=1,petrolID,petrolDAMAGE);
Level.setTile(petrolX+=1,petrolY,petrolZ,petrolID,petrolDAMAGE);

}

			}*/


for(var i = 0; i < 400; i++){
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

/*if(getTile(caveX,caveY-=1, caveZ) != 0){

Level.setTile(caveX,caveY,caveZ,lavaID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,lavaID,caveDAMAGE);
Level.setTile(caveX-=1,caveY,caveZ,lavaID,caveDAMAGE);
Level.setTile(caveX,caveY,caveZ+=1,lavaID,caveDAMAGE);
Level.setTile(caveX+=1,caveY,caveZ,lavaID,caveDAMAGE);

}*/

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

/*for(var i = 0; i < 100; i++){
		 var caveX = Math.floor((Math.random() * 256) + 1);
			var caveY = Math.floor((Math.random() * 60) + 1);
			var caveZ = Math.floor((Math.random() * 256) + 1);
			 
if(Level.getTile(Math.floor((Math.random() * 256) +1), Math.floor((Math.random() * 120) +1), Math.floor((Math.random() * 256) +1))!=10){


if(Level.getTile(Math.floor((Math.random() * 256) +1), Math.floor((Math.random() * 120) +1), Math.floor((Math.random() * 256) +1))!=10){


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

} 


}


}*/

			}

}

function destroyBlock(x, y, z, side){


if(getTile(x, y, z) == 23){


Level.dropItem(x, y, z, 0, 426, 1, 0);


}


}
