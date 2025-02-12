import { Outlet } from "react-router-dom"
import { SubHeader } from "../SubHeader"


export const SubUi =()=>{
    return (
        <>
   <SubHeader/>
        <Outlet/>
        </>
        
    )
}