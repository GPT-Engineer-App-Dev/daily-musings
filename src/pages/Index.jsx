import { Container, Text, VStack, Heading, Box, Image, HStack, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg" textAlign="center">Sharing my thoughts on web development, tech, and life.</Text>
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading fontSize="xl">{post.title}</Heading>
            {post.imageUrl && <Image src={post.imageUrl} alt={post.title} borderRadius="md" mt={4} />}
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;