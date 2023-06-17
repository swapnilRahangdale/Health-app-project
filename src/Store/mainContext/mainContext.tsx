import { createContext, useState } from "react";


const mainContext:any = createContext({
    healthData: []
    
});


const intialState = [
    {
        id: 1,
        HR : 118,
        SBP: 152,
        DBP:223,
        sugar:233,
        cal:563,
        hemoglobin:153,
        spo2: 99,
        name: 'Arun'
    },

    {
        id: 2,
        HR : 115,
        SBP: 120,
        DBP:130,
        sugar:253,
        cal:633,
        hemoglobin:119,
        spo2: 105,
        name: 'Pragati'
    },
 ]




export const MainContextWrapper:React.FC<any> = (props) => {
    const [healthData, setHealthData] = useState(intialState);
    return(
        <mainContext.Provider value={
            {
                healthData: healthData,
                setHealthData: setHealthData
            }
        }>
           {props.children} 
        </mainContext.Provider>
    )
}

export default mainContext;
