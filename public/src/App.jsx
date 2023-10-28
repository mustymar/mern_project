import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { EditProfile } from "./pages/EditProfile";
import PostBody from "./pages/PostBody";

export const App = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/post/:id" element={<PostBody />} />
      </Routes>
    </Container>
  );
};
