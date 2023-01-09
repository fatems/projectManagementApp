import { Outlet } from "react-router-dom";
import PersistantDrawerLeft from "./PersistantDrawerLeft";

const AppLayout = () =>{
    return (
        <>
            <PersistantDrawerLeft />
            <section style={{backGround: "blue"}}>
                <Outlet />
            </section>
        </>
    );

}

export default AppLayout;