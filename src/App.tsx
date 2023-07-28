import { VStack, Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App = () => {
    return (
        <VStack w={"full"} minH={"100vh"} spacing={0}>
            <Navbar />
            <Box w={"full"} flex={1} bgColor={"whitesmoke"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/products"} element={<Products />} />
                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
            </Box>
        </VStack>
    );
};

export default App;
