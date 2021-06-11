import { Button } from "@chakra-ui/button";
import { Box, Flex, Link, Spacer, Stack } from "@chakra-ui/layout";
import React from "react";
import BrandIcon from "../../assets/logo.svg";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p="60px 70px">
      <Stack direction="row" spacing="24px">
        <Link>
          <BrandIcon />
        </Link>
        <Link>Services</Link>
        <Link>Projects</Link>
        <Link>About</Link>
      </Stack>
      <Button>Sign Up</Button>
    </Flex>
  );
};
export default Navbar;
