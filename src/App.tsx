import * as React from "react"
import {
  Box,
  VStack,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import AppContainer from "./containers/AppContainer"
import StockInfo from "./components/StockInfo";
import { BrowserRouter } from "react-router-dom";

export const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <StockInfo />
          </VStack>
        </Grid>
      </Box>
    </AppContainer>
  </BrowserRouter>
)
