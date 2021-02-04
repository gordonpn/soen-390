import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HamburgerButton } from '../common/Sidebar';

const NavBar = () => {
  const router = useRouter();

  return (
    <Box
      bg="#fdfdfd"
      boxShadow="lg"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      paddingX="3rem"
      paddingY="2rem"
    >
      <Flex alignItems="center">{router.pathname === '/' ? <></> : <HamburgerButton />}</Flex>
      <Heading>Enterprise Resource Planning</Heading>
      <Flex>
        <Link href="/login">
          <Button _focus={{}} colorScheme="teal" variant="solid">
            Log in
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;