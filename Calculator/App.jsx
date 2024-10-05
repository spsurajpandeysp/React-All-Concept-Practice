import Buttons from './Buttons';
import Display from './Display'
import { useState } from 'react';
import './App.css'
function App() {
    let [calVal,setCalVal] = useState("");

    const onClickHandle = (event) => {
        if(event.target.value === "C"){
            setCalVal("");
        }
        else if(event.target.value === "="){
            if(calVal[calVal.length-1] === '/' || calVal[calVal.length-1] === '-' || calVal[calVal.length-1] === '+' || calVal[calVal.length-1] === '*' || calVal[calVal.length-1] === '%'){
                const oldValue = calVal;
                setCalVal("Enter Right Expression");
                setTimeout(()=>{
                    setCalVal(oldValue);
                },1000)
                
            }
            else{
                const result = eval(calVal);
                setCalVal(result);


                // const plus = calVal.split("+");
                // const minus = calVal.split("-");
                // const mod = calVal.split("%");
                // const devide = calVal.split("/");
                // const mul = calVal.split("*");
                // if(plus.length>1){   
                //     const ans = parseInt(plus[0])+parseInt(plus[1]);
                //     setCalVal(ans);
                // }
                // else if(minus.length>1){
                //     const ans = parseInt(plus[0])-parseInt(plus[1]);
                //     setCalVal(ans);
                // }
                // else if(devide.length>1){
                //     const ans = parseInt(plus[0])/parseInt(plus[1]);
                //     setCalVal(ans);

                // }
                // else if(mul.length>1){
                //     const ans = parseInt(plus[0])*parseInt(plus[1]);
                //     setCalVal(ans);
                // }
                // else if(mod.length>1){
                //     const ans = parseInt(plus[0])%parseInt(plus[1]);
                //     setCalVal(ans);
                // }

                
            }
            
        }
        else if(event.target.value === "<-"){
            const newDisplayValue = calVal.slice(0,-1);
            setCalVal(newDisplayValue);
        }
        else{
            const newDisplayValue = calVal + event.target.value;
            setCalVal(newDisplayValue);
        }
        
    }
    
    let buttonLists = ['<-','C','1','2','3','4','5','6','7','8','9','0','+','-','/','*','%','.',"="];
    return<center className='calcu'>
        <Display displayValue={calVal}></Display>
        <Buttons onClickHandle = {onClickHandle} buttonLists = {buttonLists}></Buttons>
    </center>
}
export default App;