import { Box, Flex, Grid } from "@chakra-ui/layout";
import Navbar from "../components/Navbar";

const Index: React.FC = ({}) => {
  return (
    // <Box h="550px" w="100%" bgColor="red.light">
    //   <Navbar />
    // </Box>
    <Grid bgColor="red.light">
      <Navbar />
    </Grid>
  );
};

export default Index;
