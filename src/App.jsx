import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import { HStack } from "@chakra-ui/react";

function App() {
  const [accounts] = useState([
    { id: 1, name: "Account 1" },
    { id: 2, name: "Account 2" },
    { id: 3, name: "Account 3" },
  ]);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0].id);

  return (
    <Router>
      <HStack align="start">
        <Navbar accounts={accounts} selectedAccount={selectedAccount} onAccountChange={setSelectedAccount} />
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </HStack>
    </Router>
  );
}

export default App;
