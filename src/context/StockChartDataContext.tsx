import React, { createContext, useState, useEffect, FC, useCallback } from 'react';
import { StockChartDataApi, ExplainListApi, ExplainItemApi, StockBrandsApi } from "../services/FsstockApiServies";

type Props = {
    children: React.ReactNode;
};

// APIから取得するデータの型定義
type DataItem = {
    /** ID */
    id: number;
    /** 日付 */
    date: string;
    /** 銘柄コード */
    code: string;
    /**始値 */
    open: number;
    /**高値 */
    high: number;
    /**安値 */
    low: number;
    /**終値 */
    close: number;
    /**調整後終値 */
    adj_close: number;
    /** 出来高情報 */
    volume: number;
}

// DataContextのプロパティの型定義
interface DataContextProps {
    data: DataItem[];
    setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
    code: string,
    setCode: React.Dispatch<React.SetStateAction<string>>;
    dateGte: string;
    setDateGte: React.Dispatch<React.SetStateAction<string>>;
}
const initialData: DataContextProps = {
    data: [],
    setData: () => { },
    code: "",
    setCode: () => "",
    dateGte: "",
    setDateGte: () => "",
};
// DataContextの作成
export const StockChartDataContext = createContext<DataContextProps>(initialData);

// データを提供するDataProviderコンポーネント
export const StickChartDataProvider: FC<Props> = ({ children }) => {
    // データとクエリパラメータの状態を管理
    const [data, setData] = useState<DataItem[]>([]);
    const [code, setCode] = useState<string>("");
    const [dateGte, setDateGte] = useState<string>("");

    const FetchData = useCallback((code:String="") => {
        if (code !== "") {
            const params = {
                code: code
            }
            console.log(code);
            StockChartDataApi.fetchData(params)
                .then(response => {
                    const dataSet: DataItem[] = response;
                    setData(dataSet);
                    console.log(dataSet);
                    console.log(data);
                })
                .catch(error => console.log(error));
        }
    }, [data]);

    useEffect(() => {
        FetchData(code);
    }, [code, dateGte])

    // DataContextの値として提供するコンテキスト値
    const contextValue: DataContextProps = { data, setData, code, setCode, dateGte, setDateGte };

    // コンテキストプロバイダーを使って子コンポーネントにコンテキストを提供
    return <StockChartDataContext.Provider value={contextValue}>{children}</StockChartDataContext.Provider>;
};

