import React, { createContext, useState, useEffect, FC, useCallback } from 'react';
import { StockChartDataApi } from "../services/FsstockApiServies";

type Props = {
    children: React.ReactNode;
};

// APIから取得するデータの型定義
interface DataItem {
    /** ID */
    id: number;
    // 新しいAPIに応じて可能性がある追加プロパティ・フィールド
    // newField1: string;
    // newField2: number;
    // ...
}

// DataContextのプロパティの型定義
interface DataContextProps {
    data: DataItem[];
    setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
}

const initialData: DataContextProps = {
    data: [],
    setData: () => { },
    code: '',
    setCode: () => '',
};

// DataContextの作成
export const DataContext = createContext<DataContextProps>(initialData);

// データを提供するDataProviderコンポーネント
export const DataProvider: FC<Props> = ({ children }) => {
    // データとクエリパラメータの状態を管理
    const [data, setData] = useState<DataItem[]>([]);
    const [code, setCode] = useState<string>("");

    const FetchData = useCallback((code: string) => {
        if (code !== "") {
            const params = {
                code: code,
            }
            console.log(code);
            
            // 使用するAPIに応じて以下の部分を変更してください
            // StockChartDataApi.fetchData(params)
            //     .then(response => {
            //         const dataSet: DataItem[] = response;
            //         setData(dataSet);
            //         console.log(dataSet);
            //         console.log(data);
            //     })
            //     .catch(error => console.log(error));
        }
    }, [data]);  // この依存リストは適切なものに変更してください

    useEffect(() => {
        FetchData(code);
    }, [code, FetchData])

    // DataContextの値として提供するコンテキスト値
    const contextValue: DataContextProps = { data, setData, code, setCode };

    // コンテキストプロバイダーを使って子コンポーネントにコンテキストを提供
    return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
