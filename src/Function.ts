{
    // Function type:

    function add(num1:number,num2:number):number{
        return num1+num2;
    }

    // add(10,true);

    const add2 = (num1:number,num2:number = 10): number =>num1+num2;

    // method:
    const user = {
        name: "Shovan",
        balance: 0,
        addBalance(balance: number): string{
            return `New Balance : ${this.balance+balance}`
        }
    }



    const arr1:number[] = [1,2,3,4];
    const newArr:number[] = arr1.map((num:number):number=>num*num)

}