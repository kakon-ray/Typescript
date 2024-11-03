"use strict";
// mapped types
{
    const arrOfNumber = [1, 2, 3, 4];
    // const arrayOfStrings : string[] = ["1","2","5"];
    const arrayOfStrings = arrOfNumber.map(number => number.toString());
    console.log(arrayOfStrings);
}
