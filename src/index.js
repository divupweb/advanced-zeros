module.exports = function getZerosCount(number, base) {

   var primeNumbers = [];
   var factorsList = [];
   var resultsArray = [];
   var counter = 0;
   
   label:for(var i=2;i<255;i++){
      for(var j=2;j<255;j++)
      if(i!=j && i % j ==0)
        continue label;
      primeNumbers.push(i);
   }

   while(base!=1){
      while(base % primeNumbers[counter] == 0){
         factorsList.push(primeNumbers[counter]);
         base/=primeNumbers[counter];
      }
      counter++;
   }
   
   var uniquefactorsList = factorsList.reduce(function(previousValue, item){
      previousValue[item] = (previousValue[item] || 0) + 1;
      return previousValue;
   },{});

   counter = 1;

   function recursive(key,counter){
      if(number<Math.pow(+key,counter))
       return 0;
       return Math.floor(number/Math.pow(+key,counter))+recursive(+key,counter+1);
   }

   for(key in uniquefactorsList){
      resultsArray.push(Math.floor(recursive(key,counter)/uniquefactorsList[key]));
      counter = 1;
   }

  return Math.min.apply(null, resultsArray);

}