let arr = [3, 5, 8, 9, 11, 14, 16, 19]

function primeNumber (num){
  if(num <= 1){
    return false;
  }else{
    for(let i=2;i<num; i++){
      if(num%i == 0){
        return false;
      }
    }
    return true;
  }
}

arr.forEach(function (ele){
  const ifPrime = primeNumber(ele);
  if(ifPrime){
    console.log(ele + ' is a prime Number')
  }else {
     console.log(ele + ' is not a prime Number')
  }
})