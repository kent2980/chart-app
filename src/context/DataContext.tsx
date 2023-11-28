import React, { createContext, useContext, useState, useEffect } from 'react';

type Props = {
    children: React.ReactNode;
};

// データの型を定義
type Data = {
    // データの型に合わせてプロパティを定義
    id: number;
    name: string;
    // 他のデータプロパティ
};

// コンテキストを作成
const DataContext = createContext<Data[]>([]);

// プロバイダーとコンシューマーのカスタムフックを作成
export const useData = () => useContext(DataContext);

// データを取得して提供する親コンポーネント
export const DataProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        // APIなどからデータを取得する処理
        // 例: fetchやaxiosを使用してデータを取得し、setDataで状態更新
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};
