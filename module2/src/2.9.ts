// conditional type

{
    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false; // x conditional types

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike:string;
        car:string;
        ship:string;
        plane:string
    }

    // car ase kina / bike ase kina / ship kina / tractor ace kina

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasPlane = CheckVehicle<"plane">

}