import { Button, Stack } from '@chakra-ui/react';
import { RiStockFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

type Props = {}

const Home = (props: Props) => {
  return (
    <Stack direction={'column'} spacing={10}>
      <Stack direction={'column'} spacing={5} margin={'auto'}>
        <Link to={'/view'}>
          <Button
            colorScheme='pink'
            variant='solid'
            w={'150px'}
            h={12}
            leftIcon={<RiStockFill />}>
            Stock Data
          </Button>
        </Link>
      </Stack>
    </Stack >
  )
}

export default Home;