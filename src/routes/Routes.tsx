import Container from "@/layout/Container"
import { MainByAnima } from "@/screens/Container/sections/Hero Element";
import ServicePage from "@/screens/Services Page";
import { Route, Routes } from "react-router-dom"
import ContactUs from "@/screens/ContactUs/ContactUs";

const AllRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route
                    path="/"
                    element={<Container
                        children=<MainByAnima />
                    />}
                />

                <Route
                    path="/services/web-dev"
                    element={<Container
                        children=<ServicePage />
                    />}
                />
                
                <Route
                path="/Contact-Us"
                element={<Container
                    children=<ContactUs />
                />}
            />
            </Route>
        </Routes>
    )
}

export default AllRoutes;