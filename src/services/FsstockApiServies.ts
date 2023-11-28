import axios from 'axios';

// ベースURLを設定
const baseURL: string = 'https://api.fs-stock.net/xbrl/';

/**
 * API呼び出し用のベース関数
 * @param path - APIのサブディレクトリのパス
 * @param params - クエリパラメータのオブジェクト
 * @returns APIのレスポンスのデータ
 * @throws {Error} - APIリクエストに失敗した場合にスローされるエラー
 */
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

        return response.data.results;
    } catch (error) {
        console.error(error);
        throw new Error('APIリクエストに失敗しました');
    }
};

/**
 * explain APIを呼び出す関数
 * @param params - クエリパラメータのオブジェクト
 * @returns explain APIのレスポンスのデータ
 */
export const explainApi = {
    /**
     * fetchDataメソッド
     * @param params - クエリパラメータのオブジェクト
     * @returns explain APIのレスポンスのデータ
     */
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('explain', params);
    },
};

/**
 * item APIを呼び出す関数
 * @param params - クエリパラメータのオブジェクト
 * @returns item APIのレスポンスのデータ
 */
export const itemApi = {
    /**
     * fetchDataメソッド
     * @param params - クエリパラメータのオブジェクト
     * @returns item APIのレスポンスのデータ
     */
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('item', params);
    },
};

/**
 * brands APIを呼び出す関数
 * @param params - クエリパラメータのオブジェクト
 * @returns brands APIのレスポンスのデータ
 */
export const brandsApi = {
    /**
     * fetchDataメソッド
     * @param params - クエリパラメータのオブジェクト
     * @returns brands APIのレスポンスのデータ
     */
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('brands', params);
    },
};

/**
 * result APIを呼び出す関数
 * @param params - クエリパラメータのオブジェクト
 * @returns result APIのレスポンスのデータ
 */
export const StockChartDataApi = {
    /**
     * fetchDataメソッド
     * @param params - クエリパラメータのオブジェクト
     * @returns result APIのレスポンスのデータ
     */
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('result', params);
    },
};
