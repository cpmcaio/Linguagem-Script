function sum(vetor) {
    return vetor.reduce((acc, val) => acc + val, 0);
}

function sumOdds(vetor) {
    return vetor.reduce((acc, val) => val % 2 !== 0 ? acc + val : acc, 0);
}

function product(vetor) {
    return vetor.reduce((acc, val) => acc * val, 1);
}

const vetor1 = [1, 2, 3];
const vetor2 = [2, 2, 2];
const vetor3 = [1, 2, 3, 4, 5, 6];

console.log("sum:", sum(vetor1));
console.log("sumOdds:", sumOdds(vetor1)); 
console.log("product:", product(vetor1)); 

console.log("sum:", sum(vetor2));         
console.log("sumOdds:", sumOdds(vetor2)); 
console.log("product:", product(vetor2)); 

console.log("sum:", sum(vetor3));         
console.log("sumOdds:", sumOdds(vetor3)); 
console.log("product:", product(vetor3)); 
