import React, { useContext, useEffect } from 'react';
import {
  Box,
  VStack,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import AppContainer from "./containers/AppContainer"
import { BrowserRouter } from "react-router-dom";
import { DataContext } from "./context/ApiDataContext";

export const App = () => {
  const contextValue = useContext(DataContext);
  console.log(contextValue);
  if (!contextValue) {
    return <div>Error: Context value is undefined</div>
  }

  const { data, setQueryParams } = contextValue;

  useEffect(() => {
    if (data) {
      const params = {
        code: "4980"
      };
      setQueryParams(params);
    }
  }, []);

  return (
    <BrowserRouter>
      <AppContainer>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
            </VStack>
          </Grid>
        </Box>
      </AppContainer>
    </BrowserRouter>
  )
}
