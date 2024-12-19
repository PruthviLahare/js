let num=5;
let square=0,digits=0,rem=0;
let numCpy=num;
let isAutomorphic=true;

square=num**2;

while(num>0){
    rem=num%10;
    digits++;
    num=(num-rem)/10; 
}

    while(numCpy>0){
        rem=numCpy%10;
        rem1=square%10
        if(rem!==rem1){
            isAutomorphic=false;
             break;
        }
        numCpy=(numCpy-rem)/10;
        square=(square-rem1)/10;
    
}

con
