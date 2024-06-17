import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    )
}