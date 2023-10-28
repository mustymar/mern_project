import {
  Box,
  Heading,
  Text,
  Avatar,
  Flex,
  Divider,
  Icon,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

// Mock data for the blog post

export const Home = () => {
  const blogPost = {
    title: "Lorem Ipsum Dolor Sit Amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: {
      name: "John Doe",
      avatarUrl: "https://placekitten.com/50/50",
    },
  };
  return (
    <>
      <Box maxW="800px" mx="auto" p={4}>
        {/* Blog Post Header */}
        <Heading mb={4}>{blogPost.title}</Heading>

        {/* Author Information */}
        <Flex align="center" mb={4}>
          <Avatar
            src={blogPost.author.avatarUrl}
            name={blogPost.author.name}
            mr={2}
          />
          <Text>{blogPost.author.name}</Text>
        </Flex>

        {/* Blog Post Content */}
        <Flex>
          <Text fontSize="lg" mb={4}>
            {blogPost.content}
          </Text>
          {/* Read More Button Link */}

          <Link as={RouterLink} to={`/blog/${blogPost.id}`} color="teal.500">
            <Box>Read More</Box>
          </Link>
        </Flex>

        {/* Social Sharing Icons */}
        <HStack spacing={4}>
          <IconButton
            icon={<Icon as={FaTwitter} />}
            colorScheme="twitter"
          ></IconButton>
          <IconButton
            icon={<Icon as={FaFacebook} />}
            colorScheme="facebook"
          ></IconButton>
          <IconButton icon={<FaLinkedin />} colorScheme="linkedin"></IconButton>
          <IconButton
            icon={<Icon as={FaEnvelope} />}
            colorScheme="teal"
          ></IconButton>
        </HStack>
      </Box>
      {/* Divider */}
      <Divider my={4} color={"white"} colorScheme={"white"} />
      <Box maxW="800px" mx="auto" p={4}>
        {/* Blog Post Header */}
        <Heading mb={4}>{blogPost.title}</Heading>

        {/* Author Information */}
        <Flex align="center" mb={4}>
          <Avatar
            src={blogPost.author.avatarUrl}
            name={blogPost.author.name}
            mr={2}
          />
          <Text>{blogPost.author.name}</Text>
        </Flex>

        {/* Blog Post Content */}
        <Flex>
          <Text fontSize="lg" mb={4}>
            {blogPost.content}
          </Text>
          {/* Read More Button Link */}

          <Link as={RouterLink} to={`/blog/${blogPost.id}`} color="teal.500">
            <Box>Read More</Box>
          </Link>
        </Flex>

        {/* Social Sharing Icons */}
        <HStack spacing={4}>
          <IconButton
            icon={<Icon as={FaTwitter} />}
            colorScheme="twitter"
          ></IconButton>
          <IconButton
            icon={<Icon as={FaFacebook} />}
            colorScheme="facebook"
          ></IconButton>
          <IconButton icon={<FaLinkedin />} colorScheme="linkedin"></IconButton>
          <IconButton
            icon={<Icon as={FaEnvelope} />}
            colorScheme="teal"
          ></IconButton>
        </HStack>
      </Box>
      {/* Divider */}
      <Divider my={4} color={"white"} colorScheme={"white"} />
      <Box maxW="800px" mx="auto" p={4}>
        {/* Blog Post Header */}
        <Heading mb={4}>{blogPost.title}</Heading>

        {/* Author Information */}
        <Flex align="center" mb={4}>
          <Avatar
            src={blogPost.author.avatarUrl}
            name={blogPost.author.name}
            mr={2}
          />
          <Text>{blogPost.author.name}</Text>
        </Flex>

        {/* Blog Post Content */}
        <Flex>
          <Text fontSize="lg" mb={4}>
            {blogPost.content}
          </Text>
          {/* Read More Button Link */}

          <Link as={RouterLink} to={`/blog/${blogPost.id}`} color="teal.500">
            <Box>Read More</Box>
          </Link>
        </Flex>

        {/* Social Sharing Icons */}
        <HStack spacing={4}>
          <IconButton
            icon={<Icon as={FaTwitter} />}
            colorScheme="twitter"
          ></IconButton>
          <IconButton
            icon={<Icon as={FaFacebook} />}
            colorScheme="facebook"
          ></IconButton>
          <IconButton icon={<FaLinkedin />} colorScheme="linkedin"></IconButton>
          <IconButton
            icon={<Icon as={FaEnvelope} />}
            colorScheme="teal"
          ></IconButton>
        </HStack>
      </Box>
      {/* Divider */}
      <Divider my={4} color={"white"} colorScheme={"white"} />
      <Box maxW="800px" mx="auto" p={4}>
        {/* Blog Post Header */}
        <Heading mb={4}>{blogPost.title}</Heading>

        {/* Author Information */}
        <Flex align="center" mb={4}>
          <Avatar
            src={blogPost.author.avatarUrl}
            name={blogPost.author.name}
            mr={2}
          />
          <Text>{blogPost.author.name}</Text>
        </Flex>

        {/* Blog Post Content */}
        <Flex>
          <Text fontSize="lg" mb={4}>
            {blogPost.content}
          </Text>
          {/* Read More Button Link */}

          <Link as={RouterLink} to={`/blog/${blogPost.id}`} color="teal.500">
            <Box>Read More</Box>
          </Link>
        </Flex>

        {/* Social Sharing Icons */}
        <HStack spacing={4}>
          <IconButton
            icon={<Icon as={FaTwitter} />}
            colorScheme="twitter"
          ></IconButton>
          <IconButton
            icon={<Icon as={FaFacebook} />}
            colorScheme="facebook"
          ></IconButton>
          <IconButton icon={<FaLinkedin />} colorScheme="linkedin"></IconButton>
          <IconButton
            icon={<Icon as={FaEnvelope} />}
            colorScheme="teal"
          ></IconButton>
        </HStack>
      </Box>
      {/* Divider */}
      <Divider my={4} color={"white"} colorScheme={"white"} />
    </>
  );
};
