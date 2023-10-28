import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Profile updated!");
  };
  return (
    <Box maxW="500px" mx="auto" p={4}>
      <Heading mb={4}>Edit Profile</Heading>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" required />
        </FormControl>

        {/* Username Input */}
        <FormControl mb={4}>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Your Username" required />
        </FormControl>

        {/* Email Input */}
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" required />
        </FormControl>

        {/* Bio Textarea */}
        <FormControl mb={4}>
          <FormLabel>Bio</FormLabel>
          <Textarea placeholder="Tell us about yourself" rows={4} />
        </FormControl>

        {/* Save Changes Button */}
        <Button type="submit" colorScheme="teal">
          Save Changes
        </Button>
      </form>

      {/* Cancel Link */}
      <Text mt={4}>
        <Link as={RouterLink} to="/profile" color="teal.500">
          Cancel
        </Link>
      </Text>
    </Box>
  );
};
