{
    // type assertion
    let anything : any ;

    anything = "This is Kakon Ray";

    anything = 222;

    const kgtoGm = (value:string | number): string | number | undefined => {
            if(typeof value === 'string'){
                const convertValue = parseFloat(value) * 1000;
                return `The COnverted Value ${convertValue}`;
            }else if(typeof value === 'number'){
              return value  * 1000;
            }
    }

    const result = kgtoGm(1000) as number;
    const result2 = kgtoGm("1000") as string;

    console.log(result2);


    type CustomError = {
        message: string;
    }

    try{

    }catch(error){
        console.log((error as CustomError).message)
    }

}