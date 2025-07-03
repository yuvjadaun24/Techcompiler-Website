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
import AngularJS from "@/screens/Technologies/AngularJS";
import ReactJS from "@/screens/Technologies/ReactJS";
import VueJS from "@/screens/Technologies/VueJS";
import JavaScript from "@/screens/Technologies/JavaScript";
import TypeScript from "@/screens/Technologies/TypeScript";
import CSS3 from "@/screens/Technologies/CSS3";
import HTML5 from "@/screens/Technologies/HTML5";
import DotNet from "@/screens/Technologies/DotNet";
import PHP from "@/screens/Technologies/PHP";
import Java from "@/screens/Technologies/Java";
import NodeJS from "@/screens/Technologies/NodeJS";
import DotNetCore from "@/screens/Technologies/DotNerCore";
import Ios from "@/screens/Technologies/Ios";
import Android from "@/screens/Technologies/Android";
import ReactNative from "@/screens/Technologies/ReactNative";
import WooCommerce from "@/screens/Technologies/WooCommerce";
import Magento from "@/screens/Technologies/Magento";
import ProdEng from "@/screens/Solution Pages/ProdEng";
import WhirlpoolMerch from "@/screens/Solution Pages/Solutio-Inner-Pages/Prod-Eng Inner Pages/WhirlpoolMerch";

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

                <Route
                    path="/Technologies/Angular-JS"
                    element={<Container children={<AngularJS />} />}
                />

                <Route
                    path="/Technologies/React-JS"
                    element={<Container children={<ReactJS />} />}
                />

                <Route
                    path="/Technologies/Vue-JS"
                    element={<Container children={<VueJS />} />}
                />

                <Route
                    path="/Technologies/JavaScript"
                    element={<Container children={<JavaScript />} />}
                />

                <Route
                    path="/Technologies/TypeScript"
                    element={<Container children={<TypeScript />} />}
                />

                <Route
                    path="/Technologies/CSS-3"
                    element={<Container children={<CSS3 />} />}
                />

                <Route
                    path="/Technologies/HTML-5"
                    element={<Container children={<HTML5 />} />}
                />

                <Route
                    path="/Technologies/Dot-Net"
                    element={<Container children={<DotNet />} />}
                />

                <Route
                    path="/Technologies/PHP"
                    element={<Container children={<PHP />} />}
                />

                <Route
                    path="/Technologies/Java"
                    element={<Container children={<Java />} />}
                />

                <Route
                    path="/Technologies/Node-Js"
                    element={<Container children={<NodeJS />} />}
                />

                <Route
                    path="/Technologies/Dot-Net-Core"
                    element={<Container children={<DotNetCore />} />}
                />

                <Route
                    path="/Technologies/IOS"
                    element={<Container children={<Ios />} />}
                />

                <Route
                    path="/Technologies/Android"
                    element={<Container children={<Android />} />}
                />

                <Route
                    path="/Technologies/React-Native"
                    element={<Container children={<ReactNative />} />}
                />

                <Route
                    path="/Technologies/Woo-Commerce"
                    element={<Container children={<WooCommerce />} />}
                />

                 <Route
                    path="/Technologies/Magento"
                    element={<Container children={<Magento />} />}
                />

                <Route
                    path="/Product-Engineering"
                    element={<Container children={<ProdEng />} />}
                />

                <Route
                    path="/Whirlpool-Merch"
                    element={<Container children={<WhirlpoolMerch />} />}
                />
            </Route>
        </Routes>
    );
};

export default AllRoutes;
