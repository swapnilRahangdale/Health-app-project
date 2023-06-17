import { useState } from "react";

const UseFormValidation:any = (validationFunc:any) => {
    const [input, setInput] = useState("");
    const [inputTouched, setinputTouched] = useState(false);
    
    //console.log('input HR', typeof input);
    
    const inputIsEmpty = validationFunc(input);
    
    //console.log('inputIsEmpty',inputIsEmpty);
    
    const formValidationObj = {
        input,
        setInput,
        inputTouched,
        setinputTouched,
        inputIsEmpty
    }

    return formValidationObj;
};
export default UseFormValidation