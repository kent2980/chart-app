import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react'
import MainHeader from '../components/headers/MainHeader';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import View from './View';

type Props = {}

const Default = (props: Props) => {
    return (
        <Stack direction={'column'}>
            <Flex
                as='header'
                position="sticky"
                bg={'white'}
                top={0}
                width="full"
                height={16}
                shadow="sm"
                py={4}
                px={8}
                zIndex={10} // Ensure the header stays on top of other content
            >
                <MainHeader />
            </Flex>
            <Box as='main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/view' element={<View />} />
                </Routes>
            </Box>
        </Stack>
    )
}

export default Default;