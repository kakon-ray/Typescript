// type gard

{
    const add = (param1:string|number,param2:number|string) : string|number =>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2
        }else{
            return param1.toString() + param2.toString()
        }
    }

    const result1 = add("2","4");

    console.log(result1);

    // type gard

    type NormalUser = {
        name:string
    }

    type AdminUser = {
        name:string;
        role: "admin"
    }

    const getUser = (user:NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`Admin User ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`Namal User User ${user.name}`);
        }
    }

   const normalUser : NormalUser = {
     name: "Mr Normal user"
   }

   const adminUser  : AdminUser = {
    name: "Mr Admin user",
    role:"admin"
  }

  getUser(adminUser)

}