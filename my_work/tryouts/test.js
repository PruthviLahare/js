let sOR = 1;
let eOR = 2;

if (sOR % 2 == 0) {
    while (sOR <= eOR) {
        console.log(sOR);
        sOR += 2;
    }
} else {
    sOR += 1;
    while (sOR <= eOR) {
        console.log(sOR);
        sOR += 2;
    }
}