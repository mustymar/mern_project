import {
  Box,
  VStack,
  Text,
  Avatar,
  Link,
  Button,
  IconButton,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import {
  FaPlus,
  FaUserEdit,
  FaSignOutAlt,
  FaEdit,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export const Dashboard = () => {
  const { colourScheme, toggleColorMode } = useColorMode();

  return (
    <Box
      p={4}
      boxShadow="md"
      borderRadius="md"
      border={"0.5px solid"}
      borderColor={toggleColorMode === "light" ? "black" : "white"}
    >
      {/* User Information */}
      <Flex align="center" mb={4}>
        <Avatar name="John Doe" src="https://placekitten.com/50/50" mr={2} />
        <Text fontWeight="bold" fontSize="lg">
          Hello
        </Text>
      </Flex>

      {/* Dashboard Links */}
      <VStack align="start" spacing={3} w="100%">
        <Link as={RouterLink} to={"/addpost"}>
          <Button
            leftIcon={<FaPlus />}
            variant="solid"
            colorScheme="teal"
            w="100%"
          >
            Add Post
          </Button>
        </Link>

        <Link as={RouterLink} to={"/editprofile"}>
          <Button
            leftIcon={<FaUserEdit />}
            variant="solid"
            colorScheme="teal"
            w="100%"
          >
            Edit Profile
          </Button>
        </Link>

        <Link as={RouterLink} to={"/editposts"}>
          <Button
            leftIcon={<FaEdit />}
            variant="solid"
            colorScheme="teal"
            w="100%"
          >
            Edit Posts
          </Button>
        </Link>

        <Button
          leftIcon={<FaSignOutAlt />}
          variant="solid"
          colorScheme="teal"
          w="100%"
        >
          Logout
        </Button>
      </VStack>

      {/* Color Mode Toggle */}
      <Flex mt={4} justify="flex-end">
        <IconButton
          icon={colourScheme === "light" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
        />
      </Flex>
    </Box>
  );
};
