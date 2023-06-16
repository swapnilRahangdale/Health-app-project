import { useContext } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import HealthProjection from "../../common/HealthProjection/HealthProjection";


const AnaData = () =>{
    const healthContext: any = useContext(mainContext);
    const { healthData } = healthContext;

    const tHead = [
        'id',
        'name',
        'DBP',
        'HR',
        'SBP',
        'cal',
        'hemoglobin',
        'spo2',
        'sugar'
        
      ];
      console.log("healthContext", healthData);

      

    return(
        <div>
            <HealthProjection tHead={tHead}  healthData={healthData}/>
        </div>
    )
};

export default AnaData