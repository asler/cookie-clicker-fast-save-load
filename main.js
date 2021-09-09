Game.registerMod("sample mod",{
  init:function(){
    document.addEventListener('keyup',(e)=>{
      if (e.code=== "KeyS" && e.ctrlKey){
        localStorage.setItem('fastSave',Game.WriteSave(1))
      }else if (e.code=== "KeyL"){
        Game.ImportSaveCode(localStorage.getItem('fastSave'))
      }
      console.log(e)
    })
    Game.Notify(`Fast save loaded!`,'',[16,5]);
  },
  save:function(){
    return ''
  },
  load:function(str){
  },
});