"use strict";
// generic constraint with keyof operator
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'Kakon Ray',
        age: 26,
        address: 'ctg'
    };
    const car = {
        model: 'Toyta',
        year: 2024,
    };
    const result = getPropertyValue(car, 'model');
}
