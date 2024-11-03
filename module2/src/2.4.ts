{
    // interface -> generic

    interface Developer<T, X= null>{
        name:string
        computer:{
            brand:string;
            model:string;
            releaseYear:number;
        }

        smartWatch:T
        bike?:X
    }


    type EmilabWatch = {
        brand:string,
        model:string,
        display:string
    }

    const poorDeveloper : Developer<EmilabWatch> = {
          name:'Kakon Ray',
          computer:{
            brand:'Asush',
            model:'X-255uR',
            releaseYear:2023
          },
          smartWatch:{
            brand:'Emilab',
            model:'kwee44',
            display:'OlED'
          }

    }

   interface AppleWtch{
    brand:string,
    model:string,
    heartTrack:boolean
    sleepTrack:boolean
}

interface YamahaBike {
    model:string,
    EngineCapacity:string

}

    const richDeveloper : Developer<AppleWtch,YamahaBike> = {
        name:'Kakon Ray',
        computer:{
          brand:'Apple',
          model:'X-255uR',
          releaseYear:2024
        },
        smartWatch:{
          brand:'Apple Watch',
          model:'kwee44',
          heartTrack: true,
          sleepTrack: true
        },

        bike:{
            model:'Yamaha',
            EngineCapacity:'150cc'
        }

  }


}