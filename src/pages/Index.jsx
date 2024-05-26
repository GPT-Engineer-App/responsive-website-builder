import { Container, Box, VStack, HStack, Text, Button, IconButton, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" w="100%" p={4} bg={useColorModeValue("gray.100", "gray.900")} boxShadow="md">
        <HStack justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            My Responsive Website
          </Text>
          <IconButton aria-label="Toggle Color Mode" icon={colorModeIcon} onClick={toggleColorMode} />
        </HStack>
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1" py={8}>
        <VStack spacing={8}>
          <Text fontSize="3xl" fontWeight="bold">
            Welcome to My Website
          </Text>
          <Text fontSize="lg" textAlign="center">
            This is a simple responsive website built with React and Chakra UI. Use the button below to explore more.
          </Text>
          <Button colorScheme="teal" size="lg">
            Explore More
          </Button>
          <Image src="https://placehold.co/600x400" alt="Responsive Design" borderRadius="md" boxShadow="md" />
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" w="100%" p={4} bg={useColorModeValue("gray.100", "gray.900")} boxShadow="md">
        <HStack justifyContent="center" spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} as="a" href="https://github.com" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} as="a" href="https://linkedin.com" target="_blank" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} as="a" href="https://twitter.com" target="_blank" />
        </HStack>
        <Text textAlign="center" mt={4}>
          © 2023 My Responsive Website. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
