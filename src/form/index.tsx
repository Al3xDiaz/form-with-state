import React, { FC, useReducer } from "react";
import context, { Dictionary } from "./formProvider/context"
import { reducer } from "./formProvider/useReducer";

export interface IInput {
    name: string;
}

interface IForm {
    children?: React.JSX.Element | Array<React.JSX.Element>;
    onSubmit? : (data:any)=>Promise<void>;
    initialValues?: Dictionary;
}

const Form:FC<IForm> =  ({children,onSubmit,initialValues={}})=>{
    const [state,dispatch]= useReducer(reducer,initialValues);

    const HandleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit && await onSubmit(state).then(()=>{
            dispatch({type:"SET_EMPTY"});
        });
    }
    return (
       <context.Provider value={{state,dispatch}} >
            <form onSubmit={HandleSubmit}>
                <>{children}</>
            </form>
       </context.Provider>
    )
}

export default Form;