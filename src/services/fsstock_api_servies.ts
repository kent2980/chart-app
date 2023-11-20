import axios from 'axios';

// ベースURLを設定
const baseURL: string = 'https://api.fs-stock.net/xbrl/';

// API呼び出し用のベース関数を作成
const callApi = async (path: string, params: Record<string, any>): Promise<any> => {
    try {
        // サブディレクトリのパスを作成
        const url: string = `${baseURL}${path}`;

        // クエリパラメータをオブジェクト形式に変換
        const queryParams: string = Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');

        // APIにリクエストを送信
        const response = await axios.get(`${url}?${queryParams}`);

        // 必要な処理を実行
        // ...

        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('APIリクエストに失敗しました');
    }
};

// サブディレクトリごとに関数を作成
export const explainApi = {
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('explain', params);
    },
};

export const itemApi = {
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('item', params);
    },
};

export const brandsApi = {
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('brands', params);
    },
};

export const resultApi = {
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('result', params);
    },
};
