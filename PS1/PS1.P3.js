let dec = (s, fn) => fn(s)
let res = dec('supercalifragilisticexpialidocious', (s) => {
    let res = s.split('c')
    for (let i = 1; i < res.length; i++){
        let temp = res[i]
        temp = 'c'+temp
        res[i] = temp
    }
    return res
})
let res2 = dec('supercalifragilisticexpialidocious', (s) => {
    let modf = '';
    let ct = 0;
    let obj = {
        originalString: '',
        modifiedString: '',
        numberReplaced: 0,
        length: 0
    };
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'a') {
            modf += 'A';
            ct++;
        }
        else {
            modf += s[i]
        }
    }
    obj.originalString = s;
    obj.modifiedString = modf;
    obj.numberReplaced = ct;
    obj.length = modf.length;
    return obj
})
console.log(res)
console.table(res2)