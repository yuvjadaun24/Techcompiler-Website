import PageMeta from "@/seo/PageMeta";
import { useLocation } from "react-router-dom";
import TempWebDev from "./components/TempWebDev";

const ServicePage = () => {

    const location = useLocation();

    return (
        <div>
            <PageMeta />
            {
                location.pathname === "/services/web-dev" &&
                <TempWebDev />
            }
        </div>
    )
}

export default ServicePage;