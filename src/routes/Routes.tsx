import Container from "@/layout/Container"
import { MainByAnima } from "@/screens/Container/sections/Hero Element";
import ServicePage from "@/screens/Services Page";
import { Route, Routes } from "react-router-dom"

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
                    path="/services/test"
                    element={<Container
                        children=<ServicePage />
                    />}
                />
            </Route>
        </Routes>
    )
}

export default AllRoutes;