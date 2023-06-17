import { useContext } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import HealthTable from "../../common/HealthTable/HealthTable";

const ShowHealthData = () => {
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

  return (
    <div>
      <HealthTable tHead={tHead}  healthData={healthData} />
    </div>
  );
};
export default ShowHealthData;
