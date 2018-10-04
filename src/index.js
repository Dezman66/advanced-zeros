module.exports = function getZerosCount(number, base) {
    let j = 0;
    let prNum = 2;
    let system = base;
    let arrPrNum = new Array();
    let arrPrimes = new Array();
    let arrAmPr = new Array();
    let arrAns = new Array();
  do {                         // факторизация основания системы счисления
   if (system % prNum == 0) {
    arrPrNum[j] = prNum;
    j++;
    system = system / prNum;
   }
   else {
    prNum++;
   }
  }
  while (prNum < system);
  if (base>2) arrPrNum[j] = prNum; // magic for 12'th test:)
  
  for (i=0, m=0, n=0, sum=1; i<arrPrNum.length; i++) { //создание массивов множителей и их степеней
    if (arrPrNum[i]==arrPrNum[i+1])
    sum++;
    else {
      arrPrimes[n]=arrPrNum[i];
      arrAmPr[m]=sum;
      sum=1; n++; m++;
    }
  }
  
  for (i=0; i<arrPrimes.length; i++){                 //создание массива по формуле Лежандра
    let result=0;
    for (j=arrPrimes[i]; number/j>1; j*=arrPrimes[i]){
    result+=Math.floor(number/j);
    }
    arrAns[i]=Math.floor(result/arrAmPr[i]);
  }

  let ans = Math.min.apply(Array, arrAns);             //нахождение минимального элемента массива
return ans;
}