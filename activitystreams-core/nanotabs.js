/* nanotabs ~ Sean Catchpole - Version 0.9 - MIT/GPL */
(function(){

  var gc = function(s){ return document.getElementsByClassName(s); };
  if(!document.getElementsByClassName) {
    var all = document.getElementsByTagName('*');
    gc = function(c){
      var e=[]; c=' '+c+' ';
      for(var i=0; i<all.length; i++)
        if((' '+all[i].className+' ').indexOf(c)>=0)
          e.push(all[i]);
      return e;
    }
  }

  var w = function(id){ var d; return (d=document.getElementById(id))&&[d]||gc(id); },
  bind = function(f){ var self=this; return function(){ return f.apply(self, arguments); }; },
  map = function(f,e,a) { for(var i=0; i<e.length; i++) f.apply(e[i],a||[]); },
  add = function(c) { this.className += c; },
  remove = function(c) { this.className = this.className.replace(new RegExp("(^|\\s)" + c + "(\\s|$)",'g'),''); } ,
  hide = function() { this.style.display="none"; },
  show = function() { this.style.display="block"; };

  var tab = function(id,a,e,s) {
    map(remove,a,[s.s]);
    add.call(this,s.s);
    map(hide,e);
    map(show,w(id));
  }

  nanotabs = function(s){
    var i, s=s||{}, o="cesdf".split(''); 
    for(i in o) s[o[i]]=s[o[i]]||nanotabs.settings[o[i]];
    var c=w(s.c), f=function(){
      var t=this,o=t[0],a=[t[1],t[2],t[3],t[4]];
      if( !s.f || s.f.apply(o,a)!==false ) tab.apply(o,a);
      return false;
    }
    for(i=0; i<c.length; i++) {
      var x=0, e=[], a=[], h=[], t=c[i].getElementsByTagName("a");
      for(var j=0; j<t.length; j++)
        if(t[j].href.match(/#/)) {
          h.push(t[j].href.split('#')[1]);
          if(typeof s.d=="string" && h[x]==s.d) s.d=x;
          a.push(t[j]);
          var g = w(h[x]);
          for(var k=0; k<g.length; k++) e.push(g[k]);
          x++;
        }
      for(var j=0; j<a.length; j++)
        a[j]['on'+s.e] = bind.call([a[j],h[j],a,e,s],f);
      if(typeof s.d=="number" && s.d>=0) tab.call(a[s.d],h[s.d],a,e,s);
    }
  }

  nanotabs.settings = { c:"nanotabs", e:"click", s:"selected", d:0, f:false };
  nanotabs();

})();

