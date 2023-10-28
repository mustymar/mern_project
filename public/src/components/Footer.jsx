import { HStack, Text, Link, Box, Icon } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {
    const d = new Date();
  return (
    <Box mt={10} align={"center"} alignContent={"center"} p={4} bg="teal.500" textAlign="center">
      <HStack spacing={4} align={"center"} justifyContent={"center"}>
        <Link as={RouterLink} to={"/"} color={"white"}> Home</Link>
              <Link as={RouterLink} to={"/about"} color={"white"}>About</Link>
              <Link as={RouterLink} to={"/contact"} color={"white"}>Contact</Link>
      </HStack>
      <SocialLinks />
      <Text mt={4} fontSize="sm" color="white">
        © {d.getFullYear()} Marizuk Mustapha. All rights reserved.
      </Text>
    </Box>
  );
};



const SocialLinks = () => (
  <HStack mt={4} spacing={4}  justifyContent={"center"}>
    <Icon as={FaTwitter} boxSize={6} color="white" />
    <Icon as={FaInstagram} boxSize={6} color="white" />
    <Icon as={FaLinkedin} boxSize={6} color="white" />
    <Icon as={FaGithub} boxSize={6} color="white" />
  </HStack>
);


