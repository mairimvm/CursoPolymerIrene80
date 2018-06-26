function registerHandlers() {
  let as = document.getElementsByTagName('a');

  for (let i = 0; i<as.length; i++) {
      as[i].onclick = (function(index){
          return function() {
              alert(index);
              return false;
          }}(i));
  }
}

registerHandlers();
