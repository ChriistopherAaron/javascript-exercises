const fibonacci = function(count) {
    const target = Number(count);
    if (target < 0) {
    return "OOPS";}
    let a = 0;
    let b = 1;
for ( let i = 0; i < target; i++) {
    const temp = a + b;
    a = b;
    b = temp;
}
return a;
};

// Do not edit below this line
module.exports = fibonacci;
