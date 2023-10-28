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

export const Signin = () => {
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
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    
      if (data.success === false) {
        console.log(data.message);
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(null);
      navigate("/dashboard");
    } catch (error) {
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
          Login
        </Heading>
        <FormControl onSubmit={handleSubmit} onClick={handleSubmit}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email" name="email" id="email"
            placeholder="Enter your email"
            mb={3}
            borderColor="teal.500" onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password" name="password" id="password"
            placeholder="Enter your password"
            mb={5}
            borderColor="teal.500" onChange={handleChange}
          />
          <Button colorScheme="teal" type="submit" w={"full"} disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </FormControl>
        <Box p={30} w={"lg"}>
          <Link as={RouterLink} to={"/signup"} color="teal.500" mt={4}>
            Dont have an account? Sign up here.
          </Link>
        </Box>
        {error && (
          <Box mt={4} bg="red.100" p={4} borderRadius="lg">
            {error}
          </Box>
        )}
      </Box>
    </Flex>
  );
};
