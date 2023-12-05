import React, { createContext, useState, useEffect, FC, useCallback } from 'react';
import { StockChartDataApi } from "../services/FsstockApiServies";

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
    params: Record<string, any>;
    setParams: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}
const initialData: DataContextProps = {
    data: [],
    setData: () => { },
    params: {},
    setParams: () => { },
};
// DataContextの作成
export const StockChartDataContext = createContext<DataContextProps>(initialData);

// データを提供するDataProviderコンポーネント
export const StickChartDataProvider: FC<Props> = ({ children }) => {
    // データとクエリパラメータの状態を管理
    const [data, setData] = useState<DataItem[]>([]);
    const [params, setParams] = useState<Record<string, any>>({});

    const FetchData = useCallback((params: Record<string, any>) => {
        StockChartDataApi.fetchData(params)
            .then(response => {
                const dataSet: DataItem[] = response;
                setData(dataSet);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (Object.keys(params).length > 0) {
            FetchData(params);
        }
    }, [params, FetchData])

    // DataContextの値として提供するコンテキスト値
    const contextValue: DataContextProps = { data, setData, params, setParams };

    // コンテキストプロバイダーを使って子コンポーネントにコンテキストを提供
    return <StockChartDataContext.Provider value={contextValue}>{children}</StockChartDataContext.Provider>;
};

