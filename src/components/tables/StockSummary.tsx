import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from '@chakra-ui/react';
import { ExplainList, ExplainListApi, ExplainListDataItem } from '../../services/FsstockApiServies';

type Props = {
  code: string;
};

const StockSummary = (props: Props) => {
  const { code } = props;
  const [data, setData] = useState<ExplainListDataItem[]>([]);

  useEffect(() => {
    if (code !== "") {
      const list = new ExplainList();
      list.code = code;
      ExplainListApi.fetchData(list)
        .then(res => {
          setData(res); // Replacing data with the fetched result directly
          console.log(data); // This will not log the updated data due to closure
        })
        .catch(error => console.log(error));
    }
  }, [code]); // Removed "data" from the dependency array as it causes unnecessary re-renders

  return (
    <Box
      borderRadius='8px'
      border='1px'
      borderColor='gray.300'
      padding='0.75rem'
      margin='1.25rem'
    >
      <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>日付</Th>
              <Th>銘柄コード</Th>
              <Th>会社名</Th>
              <Th>タイトル</Th>
              <Th>QTY</Th>
              <Th>会期</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => ( // Using the fetched data to populate the table rows
              <Tr key={item.index_id}>
                <Td>{item.publication_date}</Td>
                <Td>{item.code}</Td>
                <Td>{item.company_name}</Td>
                <Td>{item.report_label}</Td>
                <Td>{item.period}</Td>
                <Td>{item.period_division_label}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StockSummary;
