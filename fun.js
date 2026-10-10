(function(){
  var out=document.getElementById('bottle-out');
  var list=document.querySelectorAll('.bottle');
  if(!out||!list.length){return;}
  function pick(b){
    list.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
    var lv=b.getAttribute('data-lv'),n=b.getAttribute('data-name');
    out.textContent=(lv==='1'?'Level 1: ':'Level '+lv+': ')+n+(lv==='15'?'. The top of the cellar!':(lv==='1'?'. Everyone starts here.':''));
  }
  list.forEach(function(b){b.setAttribute('aria-pressed','false');b.addEventListener('click',function(){pick(b);});});
})();
