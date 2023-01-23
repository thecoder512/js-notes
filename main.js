












// Collatz Conjecture(3n + 1)
function alphabetPosition(text) {
    let result
    for (i = 0; i < text.length; i++) {
        let code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result = +(code - 64) + " "
    }
    return result.slice(0, result.length - 1)
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))