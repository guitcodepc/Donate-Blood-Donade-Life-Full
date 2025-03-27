new WOW().init();

window.onscroll = function() {
    var top = window.pageYOffset || document.documentElement.scrolltop;

    if (top > 600){
      document.getElementById("btnTopo").classList.add("btn-topo");
    } else {
     document.getElementById("btnTopo").classList.remove("btn-topo");
    }
  }