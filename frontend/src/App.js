import logo from "./logo.svg";
import "./App.css";
import HNav from "./components/navbar/HNav";
import VNav from "./components/navbar/VNav";
import { Flex } from "@chakra-ui/react";
import AllRoutes from "./components/Routes";

function App() {
  return (
    <>
      <HNav h="10vh" />
      <Flex h="90vh">
        <VNav />
        <AllRoutes />
      </Flex>
    </>
  );
}

export default App;
