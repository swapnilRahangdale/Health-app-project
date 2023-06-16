import { useContext, useState } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import styless from "./AddHealthData.module.scss"

const AddHealthData = () =>{

    const helthContext:any = useContext(mainContext);
    const {setHealthData, healthData} = helthContext;
    //console.log('setHealthData',setHealthData);
       
    const [userName, setUserName] = useState("");
    const [userNameIsTouched, setUserNameIsTouched] = useState(false);
    const userNameIsEmpty = userName === ''
    //const[userNameIsEmpty, setuserNameIsEmpty] = useState(false)




    const [hr, setHR] = useState(0);

    const addNewHealthData = (e:any) =>{
          
      e.preventDefault();
          console.log('username', userName);
          console.log('Hr', hr);
          
          

        const newHealthData = [
            ...healthData
            ,{
        
        id: 3,
        HR : 135,
        SBP: 122,
        DBP:133,
        sugar:153,
        cal:653,
        hemoglobin:113,
        spo2: 95,
        name: 'Ragini'
        }]
        setHealthData (newHealthData)
    }
    
    console.log('check user name', userName === '');
    
    // const changeUserName = (e:any) =>{

    //   if(e.target.value !== ''){
       
    //     setuserNameIsEmpty(false)
        
    //   }else {
        
        
    //     setuserNameIsEmpty(true)
    //   }
    //   setUserName(e.target.value)
    // }
    
    return(
        <div>
            <form  onSubmit={(e) =>addNewHealthData(e)}>
                <div className= {styless['form-control']}>
                    <label htmlFor="username">UserName</label>
                    <input
                    type = "text"
                    placeholder="Enter Yuor Name"
                    id = "username"
                    value={userName}
                    onBlur={() => setUserNameIsTouched(true)}
                    onChange  = {(e) => {setUserName(e.target.value)}}
                    />
                    
                </div>
                {userNameIsEmpty && userNameIsTouched &&(
                <span className={styless['errorclass']}>
                   'User Name Can not be Empty' {""}
                   </span>
                   )}

                <div className="sm:col-span-2 sm:col-start-1 w-96 margin-5px">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Heart Rate
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="hr"
                  id="hr"
                  value = {hr}
                  onChange={e => setHR(parseFloat(e.target.value))}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button className = {userNameIsEmpty ? styless['submit-bt-empty']: styless['submit-bt']} disabled = {userNameIsEmpty} type = "submit">Add New Data</button>
            </form>
            
        </div>
    )
};

export default AddHealthData;