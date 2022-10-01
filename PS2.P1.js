function* fib(){
    let [val1, val2, result] = [0,1,0]
    while(true){
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}
let l = fib();
let res = [];
while (res.length < 6) {
    let curr = l.next().value
    if ((curr % 2) === 0){
        res.push(curr)
        console.log(curr);
    }
}