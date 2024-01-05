import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StockSummary from '../components/tables/StockSummary';
import { Box, Input } from '@chakra-ui/react';

type Props = {}

const View = (props: Props) => {
    const [input, setInput] = useState(""); // Initializing input state

    const handleInputChange = (event:any) => {
        setInput(event.target.value); // Updating the input state with the entered value
    };

    return (
        <Box>
            <Box>
                <h2>View</h2>
                <Link to={'/'}>もどる</Link>
            </Box>
            <Box>
                <Input 
                    placeholder='銘柄コード' 
                    size='md' 
                    value={input} 
                    onChange={handleInputChange} // Binding the input value to the state and handling input changes
                />
                <StockSummary code={input}/>
            </Box>
        </Box>
    )
}

export default View;
