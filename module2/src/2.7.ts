// generic constraint with keyof operator

{
    type Vehicle = {
        bike:string;
        car:string;
        ship:string;
    }


    type Owner = "bike" | "car" | "ship" //manully

    type Owner2 = keyof Vehicle;



    const getPropertyValue = <X,Y extends keyof X>(obj:X,key:Y) => {
       return obj[key]
    }

    const user = {
        name:'Kakon Ray',
        age:26,
        address:'ctg'
    }

    const car = {
        model:'Toyta',
        year:2024,

    }

    const result = getPropertyValue(car,'model');




}