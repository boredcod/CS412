biggie = (s) => {
    s = s.split('').sort().reverse().join('')

    return s
}
console.log(`Reverse alphabet is: ${biggie('supercalifragilisticexpialidocious')}`)