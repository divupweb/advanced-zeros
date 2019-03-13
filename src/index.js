module.exports = function getZerosCount(number, base) {
var k = 1;
var str="";
var number =100;
var base = 8;
  if(number<base)
     str = ""+number;
     else{
             celoe = Math.floor(number/base);
             ost = number - celoe*base;
             str+=ost;
             while(celoe>base){
                 celoe = Math.floor(number/base);
                 ost = celoe - celoe*base;
                 str+=celoe;

             }
             
      }

  console.log("Answer:"+str.split("").reverse().join(""));





function rec(k){
     if(param<Math.pow(5,k))
      return 0;
      return Math.floor(param/Math.pow(5,k))+rec(k+1);

}

var result = rec(k);

console.log("answer: "+result);

return result
}