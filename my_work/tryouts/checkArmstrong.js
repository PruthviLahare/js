let num=153,rem=0,digits=0,sum=0;
let isArmstrong=num , exponent=1;

while(num>0){
    rem=num%10;
    digits++;
    num=(num-rem)/10;
}

rem=0;
num=isArmstrong;

while(num>0){
              rem=num%10;
              exponent=rem**digits;
              sum=exponent+sum;
              num=(num-rem)/10;
              exponent=1;
              
        
            }
if(isArmstrong===sum){
    console.log(true);
}else{
    console.log(false);
}   
