import * as React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Noti } from "./assets/noti.svg";
import BG from "./assets/bg.png";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: 10,
        minHeight: "100vh",
      }}
    >
      <Box style={{ width: 400, height: "100vh" }}>
        <Box
          style={{
            backgroundImage: `url(${BG})`,
            minHeight: "200px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container
            py={2}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* logo + company name */}
            <Box display="flex" alignItems="center">
              <Logo />
              <Box ml={2}>
                <Text fontSize="lg">Lifestyle</Text>
                <Text fontSize="sm">Subtext</Text>
              </Box>
            </Box>
            {/* notification */}
            <Box bg="white" p={1} style={{ borderRadius: "50%" }}>
              <Noti />
            </Box>
          </Container>
        </Box>

        {/* middle  */}
        <Container my={2}>
          <Grid templateColumns="repeat(5, 1fr)" gap={1}>
            <GridItem colSpan={4}>
              {/* logo + company name */}
              <Box display="flex" alignItems="center">
                <Logo style={{ width: 100, hight: 100 }} />
                <Box ml={2}>
                  <Text fontSize="lg">Lifestyle</Text>
                  <Text fontSize="sm">
                    306, Pocket 5, Sector 2, Rohini, New Delhi, Delhi 110085
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Text color="red"> 4 km</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
