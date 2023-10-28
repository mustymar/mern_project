import { Box, Heading, Text, Image } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Heading mb={4}>About Us</Heading>

      {/* Team Member 1 */}
      <Box mb={8}>
        <Image
          src="https://placekitten.com/200/200"
          alt="Team Member 1"
          borderRadius="full"
          boxSize="100px"
          mb={4}
        />
        <Heading as="h3" fontSize="xl" mb={2}>
          John Doe
        </Heading>
        <Text color="gray.600">Co-founder and CEO</Text>
      </Box>

      {/* Team Member 2 */}
      <Box mb={8}>
        <Image
          src="https://placekitten.com/200/201"
          alt="Team Member 2"
          borderRadius="full"
          boxSize="100px"
          mb={4}
        />
        <Heading as="h3" fontSize="xl" mb={2}>
          Jane Doe
        </Heading>
        <Text color="gray.600">Co-founder and CTO</Text>
      </Box>

      {/* Company Overview */}
      <Box>
        <Heading mb={4}>Our Story</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Box>
    </Box>
  );
};
