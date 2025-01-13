{
    // Union Type:
    type TFrontEndDev = 'GoodDev' | 'BadDev';
    type TFullStack = 'Developer' | TFrontEndDev;
    type TDeveloper = TFrontEndDev | TFullStack;
    const newDeveloper:TDeveloper = 'Developer';

    type User = {
        name: string;
        age: number;
        gender: 'Male' | 'Female'
    }


    // Intersection Type:

    type FrontEnd = {
        skills: string[];
        role1: 'frontend dev'
    }

    type BackEnd = {
        skills: string[];
        role2: 'backend dev'
    }

    type Dev = FrontEnd & BackEnd;

    const dev: Dev = {
        skills:['HTML',"JS"],
        role1:"frontend dev",
        role2: "backend dev"
    }
}