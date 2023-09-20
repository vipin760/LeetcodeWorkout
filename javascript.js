function number(num){
    let res = num
    let sum = 0

  while(num>0){
    var rem = num%10
    sum = (sum*10)+rem
    num = Math.floor(num/10) 

  }
  if(sum===res){
   return true
  }else{
    return false
  }
}

console.log(number(-445544));