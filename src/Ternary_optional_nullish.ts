{
    // Ternary ot:
    const age = 18;
    age >= 18 ? console.log('Adult') : console.log('Not Adult');

    // nullish coalesing ot:
    // null or undefined
    const isAuthenticated = '';
    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    console.log({result1});
    console.log({result2});

    // optional chain:
    type TUser = {
        name: string;
        address:{
            city: string;
            road: string;
            presentAdd: string;
            permanentAdd?: string;
        }
    }

    const user1: TUser = {
        name: "X",
        address:{
            city: "Y",
            road: "123",
            presentAdd:"Ki"
        }
    }

    const permanentAddress = user1?.address?.permanentAdd ?? "No permanent address";
    console.log({permanentAddress});
}