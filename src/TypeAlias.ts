{
    // Type alias:

    type TSt = {
        name: string;
        address: string;
        contactNo: string;
        hasCar?: boolean;
    } 
    const st1: TSt = {
        name: "Shovan",
        address: "Tangail",
        contactNo: "1234",
        
    }
    const st2: TSt = {
        name: "Shovan",
        address: "Tangail",
        contactNo: "1234",
        hasCar: true
    }

    type TUserName = string;
    const userName: TUserName = "Shovan Saha"

    type TAdd = (num1:number,num2:number) => number;
    const add:TAdd = (num1,num2) =>  num1+num2
}