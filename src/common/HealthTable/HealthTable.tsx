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

const HealthTable: React.FC<Props> = ({ tHead ,healthData}) => {
    
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
  
    
    return(
        <tr key = {trValue.id}>

{
    tHead.map((thValue: string) => {
    
     return (
      <td key = {thValue} className="px-6 py-4 whitespace-nowrap">{trValue[thValue]}</td>
      
     );
  })
  }
        
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

export default HealthTable;
