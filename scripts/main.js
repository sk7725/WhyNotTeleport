if(!Vars.headless){

function tp(){
Vars.player.unit().set(Core.input.mouseWorld());
Fx.teleportOut.at(Vars.player.x, Vars.player.y, Pal.lancerLaser);
Vars.player.snapInterpolation();
}

var down = false;

Events.run(Trigger.update, () => {
if(Core.input.ctrl() && Core.input.alt() && Core.input.isTouched() && !Vars.state.isMenu()){
if(!down){
down = true;
tp();
}
}
else{
down = false;
}
});

}
