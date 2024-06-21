import React, { CSSProperties, FC, useReducer, } from "react";
import {context,Dictionary,reducer} from "../context";
import "index.css"

export interface IInput{
    name: string;
    label?:string,
    required?:boolean,
    placeholder?:string,
    style?:React.StyleHTMLAttributes<HTMLStyleElement>,
    className?:string,
}
type IPersitData ={persistData?: false;} | {persistData: true}

interface IForm{
    children?: React.JSX.Element | Array<React.JSX.Element>;
    onSubmit? : (data:Dictionary,formData:FormData)=>(Promise<void> | void);
    className?: string;
    styles?:CSSProperties;
    initialState?: Dictionary;
}
type IFormProps = IForm & IPersitData

const FormState:FC<IFormProps> =  ({initialState={},children,className,onSubmit,persistData,styles})=>{
    const [state,dispatch]= useReducer(reducer,{data:initialState,formData:new FormData(),status:"ready"});
    const HandleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        try {
            dispatch({type:"SET_STATUS",payload:"loading"})
            e.preventDefault();
            onSubmit && await onSubmit(state.data,state.formData);
            if(!persistData){
                dispatch && dispatch({type:"SET_EMPTY"});
            }
            dispatch({type:"SET_STATUS",payload:"ready"})
        } catch (error) {
            dispatch({type:"SET_STATUS",payload:"error"})
        }
    }
    return (
        <context.Provider value={{state,dispatch}}>
            <form aria-label="form" className={`${className || ""} ${state.status}`} style={styles} onSubmit={HandleSubmit}>
                <>{children}</>
            </form>
       </context.Provider>
    )
}
export default FormState;