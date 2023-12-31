import { VStack, Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/ContactView";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import ProductDetailedView from "./pages/products/ProductDetailedView";
import HomeInfo from "./pages/home/HomeInfo";

const App = () => {
    return (
        <VStack w={"full"} minH={"100vh"} spacing={0}>
            <Navbar />
            <Box w={"full"} flex={1} bgColor={"whitesmoke"}>
                <Routes>
                    <Route path={"/"} element={<HomeInfo />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/products"} element={<Products />} />
                    <Route
                        path={"/products/:id"}
                        element={<ProductDetailedView />}
                    />
                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
            </Box>
            <Footer />
        </VStack>
    );
};

export default App;
