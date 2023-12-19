import { useQuery } from "@chakra-ui/react";
import axios from "axios";

// ベースURLを設定
// const baseURL: string = 'https://api.fs-stock.net/xbrl/';

// const fetchTodos = async() => {
//     const res = await axios.get(`${baseURL}/result`);
//     return res.data;
// };

// const Todo = () => {
//     const {isPending, isError, data:todos, error,} = useQuery({
//         queryKey: ['todos'],
//         queryFn: fetchTodos,
//     });
// }