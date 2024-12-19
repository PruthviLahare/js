let nTerm = 4;
let first = 0 , second = 1;

if( nTerm > 0 ){
 
    for (let i = 0; i < nTerm; i++ ) {

        console.log(first);
        let term = first + second;
        first = second;
        second = term;
   }
}


