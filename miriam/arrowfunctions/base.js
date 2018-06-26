var res = ((a,b) => {
  return {
	getSuma: function(){
		return a+b;
	 }
 }
})(7,8);

console.log(res.getSuma());
