import React, { createContext, useContext, useState, useEffect } from 'react';
import { StockChartDataApi } from "../services/FsstockApiServies";

type Props = {
    children: React.ReactNode;
};

// データの型を定義
type StockChartData = {
    // データの型に合わせてプロパティを定義
    /** ID */
    id: number;
    /** 日付 */
    date: Date;
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
};

// コンテキストを作成
const StockChartDataContext = createContext<any[]>([]);

// プロバイダーとコンシューマーのカスタムフックを作成
export const useData = () => useContext(StockChartDataContext);

// データを取得して提供する親コンポーネント
export const StockChartDataProvider: React.FC<Props> = ({ children }) => {
    const [params, setParams] = useState<any>(null);
    const [data, setData] = useState<StockChartData[]>([]);

    useEffect(() => {
        if (params) {
            // APIなどからデータを取得する処理
            // 例: fetchやaxiosを使用してデータを取得し、setDataで状態更新
            StockChartDataApi.fetchData(params)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => console.log(error));
        }
    }, [params]);

    return (
        <StockChartDataContext.Provider value={data}>
            {/* updateParams 関数を子コンポーネントに渡す */}
            {children}
        </StockChartDataContext.Provider>
    );
};
