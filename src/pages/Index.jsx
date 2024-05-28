import React, { useState } from "react";
import { Container, VStack, HStack, Box, Text, Button, Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaGoogle, FaFacebook, FaTiktok, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [ads, setAds] = useState({
    google: [],
    facebook: [],
    tiktok: [],
  });

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ]);

  const addAd = (platform) => {
    const newAd = { id: Date.now(), product: products[0].name, budget: "$100" };
    setAds((prevAds) => ({
      ...prevAds,
      [platform]: [...prevAds[platform], newAd],
    }));
  };

  const removeAd = (platform, id) => {
    setAds((prevAds) => ({
      ...prevAds,
      [platform]: prevAds[platform].filter((ad) => ad.id !== id),
    }));
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Ad Management Interface
        </Text>
        <Tabs variant="enclosed" width="100%">
          <TabList>
            <Tab>
              <HStack>
                <FaGoogle />
                <Text>Google Ads</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack>
                <FaFacebook />
                <Text>Facebook Ads</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack>
                <FaTiktok />
                <Text>TikTok Ads</Text>
              </HStack>
            </Tab>
          </TabList>
          <TabPanels>
            {["google", "facebook", "tiktok"].map((platform) => (
              <TabPanel key={platform}>
                <HStack justifyContent="space-between" mb={4}>
                  <Text fontSize="2xl">{platform.charAt(0).toUpperCase() + platform.slice(1)} Ads</Text>
                  <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={() => addAd(platform)}>
                    Add Ad
                  </Button>
                </HStack>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Product</Th>
                      <Th>Budget</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {ads[platform].map((ad) => (
                      <Tr key={ad.id}>
                        <Td>{ad.product}</Td>
                        <Td>{ad.budget}</Td>
                        <Td>
                          <IconButton aria-label="Delete Ad" icon={<FaTrash />} colorScheme="red" onClick={() => removeAd(platform, ad.id)} />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Products
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
