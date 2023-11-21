import { Box, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { brandsApi } from '../services/fsstockApiServies';
import { useLocation } from "react-router-dom";

const StockReport = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    const [brand, setBrand] = useState<any>();

    useEffect(() => {
        const brandParams = {
            code: code,
        };
        brandsApi.fetchData(brandParams)
            .then(res => {
                setBrand(res[0]);
            })
            .catch(er => {
                console.error(er);
            });
    }, [code])

    return (
        <Box>
            <VStack>
                <Text>
                    {brand ? brand.security_name : "Loading..."}
                </Text>
                <Text>
                    {brand ? brand.number_33_industry_category : "Loading..."}
                </Text>
                <Text>
                    {brand ? brand.market_product_category : "Loading..."}
                </Text>
                <Text>
                    {brand ? brand.code : "Loading..."}
                </Text>
            </VStack>
        </Box>
    );
};

export default StockReport;
