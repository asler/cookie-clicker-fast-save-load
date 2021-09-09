Game.registerMod("sample mod",{
  init:function(){
    //this function is called as soon as the mod is registered
    //declare hooks here

    localStorage.setItem('fastSave','')

    document.addEventListener('keyup',(e)=>{
      console.log(e)
    })

    //note: this mod does nothing but show a notification at the bottom of the screen once it's loaded
    Game.Notify(`Fast save loaded!`,'',[16,5]);
  },
  save:function(){
    //use this to store persistent data associated with your mod
    return ''
  },
  load:function(str){
    //do stuff with the string data you saved previously
    document.addEventListener('keyup',(e)=>{
      console.log(e)
    })
  },
});