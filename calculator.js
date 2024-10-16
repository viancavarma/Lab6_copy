

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    if (value < 0) {
        return "Error";
    }
    return Math.sqrt(value);
}

// TODO: Implement square function
function calculateSquare(value) {
    return Math.pow(value,2);
}

// TODO: FIX reciprocal function
function calculateReciprocal(value) {
    // Hint: Reciprocal is 1/x
    // return the square root of the value
    if (value === 0) {
        return 0;
    }
    return 1 / value;
}

// TODO: Implement natural log function
function naturalLog(value) {
    // return the natural log of the value
}

// TODO: Implement sine function
function sine(value) {
    // return the sine of the value
    const rad = (value*Math.PI)/180;
    return Math.sin(rad);
}

// TODO: Implement cosine function
function cosine(value) {
    // return the cosine of the value
    const rad = (value*Math.PI)/180;
    return Math.cos(rad);
}

// TODO: Implement tangent function
function tangent(value) {
    // return the tangent of the value
    const radians = (value*Math.PI)/180;
    return Math.tan(radians);
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal
};
