import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  };

  return (
    <Box maxW="500px" mx="auto" p={4}>
      <Heading mb={4}>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" required />
        </FormControl>

        {/* Email Input */}
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" required />
        </FormControl>

        {/* Message Textarea */}
        <FormControl mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" rows={4} required />
        </FormControl>

        {/* Submit Button */}
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </form>
    </Box>
  );
};
