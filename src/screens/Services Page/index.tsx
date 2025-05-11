import { useLocation } from "react-router-dom";
import TempWebDev from "./components/TempWebDev";

const ServicePage = () => {

    const location = useLocation();

    console.log(location.pathname)
    return (
        <div>
            {
                location.pathname === "/services/web-dev" &&
                <TempWebDev />
            }

{
                location.pathname === "/services/test" &&
                <h1>Test Page</h1>
            }
        </div>
    )
}

export default ServicePage;