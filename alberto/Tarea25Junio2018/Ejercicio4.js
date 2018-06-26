function registerHandlers(){
  var as = document.getElementsByTagName('a');
  for (i = as.length; i-- >= 0;) {
    as[i].onclick = (function(index) {
      return function() {
        alert(index);
        return false;
      }}(i));
    }
  }
