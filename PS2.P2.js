function* listGen(s){
    let c = 0;
    let res = s.split(' ');
    while(c < res.length) {
        yield res[c]
        c++
    }
}
const x = listGen("All I know is something like a bird within her sang");
for (fib of x) {
    console.log(fib);
}
