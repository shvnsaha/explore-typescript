{
    // nullable :
    const searchName = (val:string|null) =>{
        if(val){
            console.log('Searching...');
        }else{
            console.log('No Searching...');
        }
    }

    searchName(null);


    // unknown:
    const getSpeedInMeterPerSecond= (val:unknown) =>{
        if(typeof val === 'number'){
            const convertedSpeed = (val*1000)/3600;
            console.log(`The convert speed ${convertedSpeed}`);
        }else if(typeof val === 'string'){
            const [value,unit] = val.split(' ');
            const convertedSpeed = (parseFloat(value)*1000)/3600;
            console.log(`The convert speed ${convertedSpeed}`);
        }else{
            console.log(`Value is not correct format`);
        }
    }

    getSpeedInMeterPerSecond(null)


    // never type:
    const  throwError = (msg:string): never=>{
        throw new Error(msg)
    }

    throwError('Eroor...')
}