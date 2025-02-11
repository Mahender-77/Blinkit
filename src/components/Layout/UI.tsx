import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Footer } from "../Footer"

export const UI =()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}