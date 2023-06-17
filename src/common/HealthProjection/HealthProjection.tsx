import React from "react";

interface TableData {
  id: number;
  name: string;
  age: number;
}

interface Props {
    healthData: any[];
  tHead: string[];
}

const HealthProjection: React.FC<Props> = ({ tHead ,healthData}) => {
    
  const tHeadContext = tHead.map((thValue: string) => {
    
    return (
      <th 
      key={thValue}
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {thValue}
      </th>
    );
  });
   
    

  const tBodyContent = healthData.map((trValue:any) =>{

    const heartRateProjection = trValue.HR>= 120? 'high' :'low'
    const heartRateProjection1 = trValue.spo2>= 101? 'high' :trValue.spo2 > 95 ? 'normal' :'low'
    return(
        <tr key = {trValue.id}>

        <td className="px-6 py-4 whitespace-nowrap">{trValue.id}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{heartRateProjection}</td>
        <td className="px-6 py-4 whitespace-nowrap">{heartRateProjection}</td>
        <td className="px-6 py-4 whitespace-nowrap">{heartRateProjection}</td>
        <td className="px-6 py-4 whitespace-nowrap">{heartRateProjection}</td>
        <td className="px-6 py-4 whitespace-nowrap">{heartRateProjection}</td>
        <td className="px-6 py-4 whitespace-nowrap">{heartRateProjection1}</td>
        <td className="px-6 py-4 whitespace-nowrap">{heartRateProjection}</td>
        
      </tr>
    )
})
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
        {tHeadContext}
        

        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
      {tBodyContent}
      </tbody>
    </table>
  );
};

export default HealthProjection