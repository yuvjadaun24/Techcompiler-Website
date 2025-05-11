import Container from "@/layout/Container"
import { MainByAnima } from "@/screens/Container/sections/Hero Element";
import ServicePage from "@/screens/Services Page";
import { Route, Routes } from "react-router-dom"
import ContactUs from "@/screens/ContactUs/ContactUs";
import UiUxDesigning from "@/screens/Services Page/components/UiUxDesign";
import InfraServices from "@/screens/Services Page/components/InfrastructureServices";
import DigitalTransformation from "@/screens/Services Page/components/DigitalTransformation";
import Clients from "@/screens/Clients/Clients";
import EmbeddedProducts from "@/screens/Services Page/components/EmbeddedProduct";
import BusinessIntelligence from "@/screens/Services Page/components/BusinessIntelligence";
import DevOps from "@/screens/Services Page/components/DevOps";
import ManagedITServices from "@/screens/Services Page/components/ManagesItServices";
import ITOutsourcing from "@/screens/Services Page/components/ItOutsourcing";
import ITConsulting from "@/screens/Services Page/components/ItConsulting";
import DatabaseMigration from "@/screens/Services Page/components/DatabaseMigration";
import DataAnalytics from "@/screens/Services Page/components/DataAnalytics";
import FullStackDevelopment from "@/screens/Services Page/components/FullStackDevelopment";
import CareersPage from "@/screens/Careers/Careers"

const AllRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route
                    path="/"
                    element={<Container children={<MainByAnima />} />}
                />

                <Route
                    path="/services/web-dev"
                    element={<Container children={<ServicePage />} />}
                />

                <Route
                    path="/Contact-Us"
                    element={<Container children={<ContactUs />} />}
                />

                <Route
                    path="/services/UI-UX-Designing"
                    element={<Container children={<UiUxDesigning />} />}
                />

                <Route
                    path="/services/Infrastructure-Services"
                    element={<Container children={<InfraServices />} />}
                />

                <Route
                    path="/services/Digital-Transformation"
                    element={<Container children={<DigitalTransformation />} />}
                />

                {/* ✅ Remaining Routes */}
                <Route
                    path="/services/Embedded-Product"
                    element={<Container children={<EmbeddedProducts />} />}
                />

                <Route
                    path="/services/Business-Intelligence"
                    element={<Container children={<BusinessIntelligence />} />}
                />

                <Route
                    path="/services/DevOps"
                    element={<Container children={<DevOps />} />}
                />

                <Route
                    path="/services/Managed-IT-Services"
                    element={<Container children={<ManagedITServices />} />}
                />

                <Route
                    path="/services/IT-Outsourcing"
                    element={<Container children={<ITOutsourcing />} />}
                />

                <Route
                    path="/services/IT-Consulting"
                    element={<Container children={<ITConsulting />} />}
                />

                <Route
                    path="/services/Database-Migration"
                    element={<Container children={<DatabaseMigration />} />}
                />

                <Route
                    path="/services/Data-Analytics"
                    element={<Container children={<DataAnalytics />} />}
                />

                <Route
                    path="/services/Full-Stack-Development"
                    element={<Container children={<FullStackDevelopment />} />}
                />

                <Route
                    path="/Our-Clients"
                    element={<Container children={<Clients />} />}
                />

                <Route
                    path="/Careers"
                    element={<Container children={<CareersPage />} />}
                />
            </Route>
        </Routes>
    );
};

export default AllRoutes;
