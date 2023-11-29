import React, { createContext, useState, useEffect, FC } from 'react';
import { StockChartDataApi } from "../services/FsstockApiServies";

type Props = {
    children: React.ReactNode;
};

// APIから取得するデータの型定義
interface DataItem {    // データの型に合わせてプロパティを定義
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
    setQueryParams: React.Dispatch<React.SetStateAction<{}>>;
}

// DataContextの作成
export const DataContext = createContext<DataContextProps | undefined>(undefined);

// データを提供するDataProviderコンポーネント
export const DataProvider: FC<Props> = ({ children }) => {
    // データとクエリパラメータの状態を管理
    const [data, setData] = useState<DataItem[]>([]);
    const [queryParams, setQueryParams] = useState<{}>({});

    function FetchData(params: any) {
        if (params) {
            console.log(params);
            StockChartDataApi.fetchData(params)
                .then(response => {
                    setData(response);
                    console.log(response);
                    console.log(data);
                })
                .catch(error => console.log(error));
        }
    }

    useEffect(() => {
        if (queryParams) {
            FetchData(queryParams)
        }
    }, [queryParams]);

    // DataContextの値として提供するコンテキスト値
    const contextValue: DataContextProps = { data, setQueryParams };

    // コンテキストプロバイダーを使って子コンポーネントにコンテキストを提供
    return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
