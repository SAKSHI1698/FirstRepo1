function prime(num){
    if(num <=1)
        return false;
    for(let i =2;i<num;i++){
        if(num % i === 0 ){
            return false;
        }
    }return true;
}
console.log(prime(11))
console.log(prime(18))