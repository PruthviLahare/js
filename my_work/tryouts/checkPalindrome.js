let num=111,rem=0,rev=0;
let palindromeCopy=num;
while(num>0){

     rem=num%10;
     rev=(rev*10)+rem;
     num=(num-rem)/10;

    
}
if(palindromeCopy===rev){
    console.log(true);
}else{
    console.log(false);
}