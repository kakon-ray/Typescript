// mapped types

{
    const arrOfNumber : number[] = [1,2,3,4];

    // const arrayOfStrings : string[] = ["1","2","5"];

    const arrayOfStrings : string[] = arrOfNumber.map(number => number.toString());

    console.log(arrayOfStrings)




    type AreaNumber = {
        height: number;
        width:number;
    }

    type Height = AreaNumber["height"]

    // type AreaString = {
    //     height:string;
    //     width:string;
    // }

    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<{height:string; width:number}> = {
         height:"100",
         width:200
    };

}