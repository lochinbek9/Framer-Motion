import { Route, Routes } from "react-router-dom";
import routesConstants from "../constants/RouteConstents";

import LayoutContainer from "../layout/LayoutContainer";
import Home from "../screens/Home/HomeScreen";
import PageNotFound from "../screens/NotFound/PageNotFound";


const AppRoutes= () =>{
    return(
        <Routes>
            <Route path={routesConstants.ROOT} element={
                <LayoutContainer>
                  <Route  element={<Home/>} />
                </LayoutContainer>} />
            <Route path={routesConstants.PAGE_NOTE_FOUND} element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;