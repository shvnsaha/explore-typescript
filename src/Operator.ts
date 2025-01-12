{
    // Spread Operator:
    const bros1 : string[] = ["Priyom","Rahul"];
    const bros2 : string[] = ["Hasan","Kamal"];
    
    const bros3:string[] = [...bros1,...bros2] 
    // const bros4:string[] = [...bros1,bros2] 


    const mentors1 = {
        typescript: "Coder1",
        redux: "Coder2"
    }

    const mentors2 = {
        prisma: "Coder3",
        sql: "Coder4"
    }

    const mentorList ={
        ...mentors1,
        ...mentors2
    }

    // Rest operator:

    const greetFriends = (...friends: string[]) =>{
        friends.forEach((fnd)=>`Hi ${fnd}`)
    }
    greetFriends("Shovan","Rahul","Priyom")
}