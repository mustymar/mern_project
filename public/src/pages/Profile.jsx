import {
  Box,
  Heading,
  Text,
  Avatar,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
export const Profile = () => {
  const user = {
    name: "John Doe",
    username: "john_doe",
    email: "john.doe@example.com",
    bio: "Passionate about technology and coding.",
    profilePictureUrl: "https://placekitten.com/200/200",
    coverPhotoUrl: "https://placekitten.com/800/300",
  };
  return (
    <Box maxW="800px" mx="auto" p={4}>
      {/* Cover Photo with Profile Picture */}
      <Box pos="relative" h="200px" boxShadow="md">
        <Image
          src={user.coverPhotoUrl}
          alt="Cover Photo"
          borderRadius="md"
          h="100%"
          w="100%"
          objectFit="cover"
        />
        <Avatar
          size="xl"
          name={user.name}
          src={user.profilePictureUrl}
          pos="absolute"
          bottom="-25px"
          left="50%"
          transform="translateX(-50%)"
          border="4px solid white"
        />
      </Box>

      {/* User Information */}
      <VStack spacing={4} mt={4} align="start">
        <Heading>{user.name}</Heading>
        <Text fontSize="lg" color="gray.600">
          @{user.username}
        </Text>
        <Text fontSize="lg" color="gray.600">
          {user.email}
        </Text>
        <Text>{user.bio}</Text>
      </VStack>
      {/* Edit Profile Link */}
      <Link as={RouterLink} to="/editprofile" color="teal.500" mt={2}>
        Edit Profile
      </Link>

      {/* Additional Details or Sections */}
      {/* Add more sections as needed, e.g., user posts, achievements, etc. */}
    </Box>
  );
};
