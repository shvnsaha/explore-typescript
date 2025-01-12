{
    // Object type:

    const user: {
        firstName: string;
        middleName?: string;  // optional type
        lastName: string;
        age: number;
        company: "CSS Company"  //literal type
        readonly title: string
    } = {
        firstName: "Shovan",
        // middleName: "Hriday",
        lastName: "Saha",
        age: 24,
        company: "CSS Company",
        title: "Dev"
    }

    // user.title = "Coder"
}