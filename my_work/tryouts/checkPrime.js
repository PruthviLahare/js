let prime=true;
let num=67;

if(num<2){
   console.log(false);
} else{
       for(let i=2;i<num/2;i++){
           if(num%i==0){
            prime=false;
            break;
       } 
}
}
     console.log(prime);






