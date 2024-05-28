import React from "react";
import { Box, Select, VStack, Text } from "@chakra-ui/react";

const Navbar = ({ accounts, selectedAccount, onAccountChange }) => {
  return (
    <Box width="200px" bg="gray.100" p={4} height="100vh">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          Account Selector
        </Text>
        <Select value={selectedAccount} onChange={(e) => onAccountChange(e.target.value)}>
          {accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name}
            </option>
          ))}
        </Select>
      </VStack>
    </Box>
  );
};

export default Navbar;
