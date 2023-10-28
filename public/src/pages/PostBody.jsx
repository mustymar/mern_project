import {
  Box,
  Heading,
  Text,
  Avatar,
  VStack,
  HStack,
  Divider,
  Input,
  Button,
} from "@chakra-ui/react";

function PostBody() {
  // Mock data for the full blog post
  const blogPost = {
    title: "Lorem Ipsum Dolor Sit Amet",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `,
    author: {
      name: "John Doe",
      avatarUrl: "https://placekitten.com/50/50",
    },
    timestamp: "Published on October 20, 2023",
  };
  const comments = [
    {
      id: 1,
      author: {
        name: "Jane Doe",
        avatarUrl: "https://placekitten.com/51/51",
      },
      content: "Great post! Thanks for sharing.",
      timestamp: "2 hours ago",
    },
    // Add more comments as needed
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Add your comment submission logic here
    console.log("Comment submitted!");
  };
  return (
    <Box maxW="800px" mx="auto" p={4}>
      {/* Blog Post Header */}
      <Heading mb={4}>{blogPost.title}</Heading>

      {/* Author Information */}
      <HStack spacing={4} mb={4}>
        <Avatar src={blogPost.author.avatarUrl} name={blogPost.author.name} />
        <VStack align="start">
          <Text>{blogPost.author.name}</Text>
          <Text color="gray.600">{blogPost.timestamp}</Text>
        </VStack>
      </HStack>

      {/* Blog Post Content */}
      <Text fontSize="lg" mb={4}>
        {blogPost.content}
      </Text>

      {/* Additional Details or Sections */}
      {/* Add more sections as needed, e.g., related posts, comments, etc. */}
      {/* Comment Section */}
      <Divider mb={4} />
      <Heading size="md" mb={2}>
        Comments
      </Heading>

      {comments.map((comment) => (
        <Box key={comment.id} mb={4}>
          <HStack spacing={4}>
            <Avatar src={comment.author.avatarUrl} name={comment.author.name} />
            <VStack align="start">
              <Text>{comment.author.name}</Text>
              <Text color="gray.600">{comment.timestamp}</Text>
            </VStack>
          </HStack>
          <Text>{comment.content}</Text>
        </Box>
      ))}

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit}>
        <HStack mb={4}>
          <Input type="text" placeholder="Add a comment" required />
          <Button type="submit" colorScheme="teal">
            Comment
          </Button>
        </HStack>
      </form>
    </Box>
  );
}

export default PostBody;
