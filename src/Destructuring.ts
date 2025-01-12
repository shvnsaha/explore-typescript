{
    // Destructuring:

    const user = {
        id: 123,
        name: {
            firstName: "Shovan",
            lastName: "Saha"
        },
        address: "Tangail",
        contactNo: "123456"
    }

    const {contactNo:phoneNo ,name:{firstName} } = user;  //name alias
    console.log(phoneNo);


    // array destructuring:
    const myFriends: string[] = ['a','b','c','d','e'];
    const [,,c,...rest] = myFriends
}