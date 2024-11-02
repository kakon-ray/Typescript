"use strict";
{
    // type assertion
    let anything;
    anything = "This is Kakon Ray";
    anything = 222;
    const kgtoGm = (value) => {
        if (typeof value === 'string') {
            const convertValue = parseFloat(value) * 1000;
            return `The COnverted Value ${convertValue}`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result = kgtoGm(1000);
    const result2 = kgtoGm("1000");
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
