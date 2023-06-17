import { useContext, useState } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import styless from "./AddHealthData.module.scss"
import UseFormValidation from "../../common/UseFormValidation/UseFormValidation";

const AddHealthData = () =>{

    const helthContext:any = useContext(mainContext);
    const {setHealthData, healthData} = helthContext;
   
    
     
    //const useInputUserFormValidation = UseFormValidation();
    const { 
      input: userInput,
      setInput: setUserInput,
      inputTouched: userIsTouched,
      setinputTouched: setUserIsTouched,
      inputIsEmpty: userIsEmpty
    }:any = UseFormValidation((userInput:any) =>userInput === '');

    //const [hr, setHR] = useState(0);
    
    const { 
      input: hrInput,
      setInput: setHrInput,
      inputTouched: hrIsTouched,
      setinputTouched: setHrIsTouched,
      inputIsEmpty: hrIsEmpty}:any = UseFormValidation((hrInput:any) => hrInput <= 0);

      const { 
        input: dbpInput,
        setInput: setDbpInput,
        inputTouched: dbpIsTouched,
        setinputTouched: setDbpIsTouched,
        inputIsEmpty: dbpIsEmpty}:any = UseFormValidation((dbpInput:any) => dbpInput <= 0);

    const isFormValid = userIsEmpty || hrIsEmpty || dbpIsEmpty; 

    const addNewHealthData = (e:any) =>{
          
      try {
        
        e.preventDefault();
          console.log('username', userIsEmpty);
          console.log('Hr', hrInput);
          
          

        const newHealthData = [
            ...healthData
            ,{
        
        id: Math.random(),
        HR : hrInput,
        SBP: 122,
        DBP:dbpInput,
        sugar:153,
        cal:653,
        hemoglobin:113,
        spo2: 95,
        name: userInput
        }];
        //throw Error('issue in call')
        setHealthData (newHealthData);
        const dialogObj = {
          msg: 'new data added',
          error:false
        }
        alert('New Data Added')
    
      } catch (error) {

        alert(`there is an error in save data ${error}`, )
      }
    };
    console.log('check user name inputIsEmpty ',userIsEmpty);
    
    // const changeUserName = (e:any) =>{
    //   if(e.target.value !== ''){  
    //     setuserNameIsEmpty(false)   
    //   }else {    
    //     setuserNameIsEmpty(true)
    //   }
    //   setUserName(e.target.value)
    // }
    
    return(
          
        <div className= {styless['body']}>
            
            

            <form  onSubmit={(e) =>addNewHealthData(e)}>

            <div className={styless['pg-border']}>

              <div className= {styless['paitient']}>Paitient Details....</div>

                <div className= {styless['form-control']}>
                    <label htmlFor="username">UserName</label>
                    <input
                    type = "text"
                    placeholder="Enter Your Name"
                    id = "username"
                    value={userInput}
                    onBlur={() => setUserIsTouched(true)}
                    onChange  = {(e) => {setUserInput(e.target.value)}}
                    />
                    
                </div>
                {userIsTouched && userIsEmpty &&(
                <span className={styless['errorclass']}>
                   User Name Can not be Empty {""}
                   </span>
                   )}

                <div className= {styless['form-control']}>
              <label htmlFor="hr">
                Heart Rate
              </label>
              
                <input
                  type="number"
                  name="hr"
                  placeholder="HR"
                  id="hr"
                  value = {hrInput}
                  onBlur={() =>{setHrIsTouched(true)}}
                  onChange={e => setHrInput(parseFloat(e.target.value))}
                  
                />
                {hrIsTouched && hrIsEmpty &&(
                <span className={styless['errorclass2']}>
                *Required{""}
                </span>
                   )}

                    <div className= {styless['form-control']}>
                      
                    <label htmlFor="dbp">DBP</label>
                    <input
                    type = "number"
                    placeholder="DBP"
                    id = "dbp"
                    value={dbpInput}
                    onBlur={() => setDbpIsTouched(true)}
                    onChange  = {(e) => {setDbpInput(e.target.value)}}
                    />
                    
                </div>
                {dbpIsTouched && dbpIsEmpty &&(
                <span className={styless['errorclass']}>
                   *Require {""}
                   </span>
                   )}
              
            </div>
            <button className = {isFormValid ? styless['submit-bt-empty']: styless['submit-bt']} disabled = {isFormValid} type = "submit"> Add New Data  </button>
            </div>

            </form>
            
        </div>
    )
};

export default AddHealthData;