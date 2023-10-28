import {
  Flex,
  Image,
  Heading,
  useColorMode,
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Link as RouterLink,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const { colorMode } = useColorMode();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (input) => {
    setFormData({ ...formData, [input.target.id]: input.target.value });
  };
  console.log(formData);
  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();

    try {
      setLoading(true);
      console.log("Form submitted!");
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    const data = await res.json();
    
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      
      navigate("/signin");
    } catch (error){
      setLoading(false);
      setError(error.message);
    }
  } 
  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Image src="vite.svg" alt="Logo" mb={6} w={200} h={50} />
      <Box
        maxW="md"
        mx="auto"
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bg={colorMode === "dark" ? "gray.800" : "white"}
      >
        <Heading mb={4} color="teal.500">
          Registration
        </Heading>
        <FormControl onSubmit={handleSubmit} onClick={handleSubmit}>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="name"
            id="name"
            placeholder="Enter your fullname"
            mb={3}
            borderColor="teal.500"
            onChange={handleChange}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            id="email" name="email"
            placeholder="Enter your email"
            mb={3}
            borderColor="teal.500"
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            id="password" name="password"
            placeholder="Enter your password"
            mb={5}
            borderColor="teal.500"
            onChange={handleChange}
          />
          <Button
            disabled={loading}
            colorScheme="teal"
            type="submit"
            w={"full"}
          >
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </FormControl>
        <Box p={30} w={"lg"}>
          <Link as={RouterLink} to={"/signin"} color="teal.500" mt={4}>
            Already have account? Login here.
          </Link>
        </Box>{error && (
          <Box mt={4} bg="red.100" p={4} borderRadius="lg">
            {error.message}
          </Box>
        )}
      </Box>
    </Flex>
  );
};
