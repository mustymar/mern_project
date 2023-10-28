import { Flex, Avatar, Box, Button, Link, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  const currentUser = {
    name: "John Doe",
    avatarUrl: "https://placekitten.com/50/50",
  };

  return (
    <Box w={"full"} maxW={"full"} bg="teal.500" p={4} color="white">
      <Flex justify={"space-between"} align={"center"}>
        {/* Logo or Branding */}
        <Link as={RouterLink} to={"/"} fontWeight={"bold"}>
          <Image src={currentUser.avatarUrl} alt="Logo" w={50} h={50} />
        </Link>

        {/* Navigation Links */}
        <Flex align={"center"} justifyContent={"center"}>
          <Link as={RouterLink} to={"/"} mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to={"/about"} mr={4}>
            About
          </Link>
          <Link as={RouterLink} to={"/contact"} mr={4}>
            Contact
          </Link>
        </Flex>

        {/* User Avatar and Logout Button */}
        <Flex align={"center"}>
          {/* User Avatar */}
          <Avatar
            size={"sm"}
            name={currentUser.name}
            src={currentUser.avatarUrl}
            mr={2}
          />

          {/* User Name */}
          <Box mr={5}>{currentUser.name}</Box>

          {/* Logout Button (You can replace this with your own logout logic) */}
          <Button
            p={5}
            colorScheme={"teal"}
            variant={"solid"}
            outlineColor={"whitesmoke"}
          >
            <Text fontWeight={"extrabold"}>Login</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
