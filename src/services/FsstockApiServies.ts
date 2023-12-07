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
        let requestUrl: string = `${url}?${queryParams}`;
        let resultsData: any[] = [];
        while (requestUrl) {
            console.log(requestUrl)
            const response = await axios.get(requestUrl);

            // 必要な処理を実行
            // ...
            let apiData = response.data;
            let countData = apiData.count;
            if (countData > 0) {
                resultsData = resultsData.concat(apiData.results);
            } else {
                throw new Error('APIからデータが取得できませんでした')
            }
            requestUrl = apiData.next;
        }
        return resultsData;
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
export const ExplainListApi = {
    /**
     * fetchDataメソッド
     * @param params - クエリパラメータのオブジェクト
     * @returns explain APIのレスポンスのデータ
     */
    fetchData: async (params: Record<string, any>): Promise<any> => {
        return await callApi('explain', params);
    },
};

type ExplainItemParamsType = {
    calLinkFromElement: string;
    calLinkNull: string;
    calLinkOrder: string;
    code: string;
    defLinkFromElement: string;
    defLinkOrder: string;
    doc_element: string;
    element: string;
    elementLabel: string;
    explain: string;
    financial_statement: string;
    page: string;
    preLinkFromElement: string;
    preLinkOrder: string;
    publication_date: string;
    report_detail_cat: string;
}

// ExplainItemParamsクラスの定義
export class ExplainItemParams {
    /**
     * @type {string} - calLinkFromElement
     */
    calLinkFromElement: string = "";

    /**
     * @type {string} - calLinkNull
     */
    calLinkNull: string = "";

    /**
     * @type {string} - calLinkOrder
     */
    calLinkOrder: string = "";

    code:string = "";

    defLinkFromElement:string = "";

    /**
     * パラメータオブジェクトを取得
     * @returns {ExplainItemParamsType}
     */
    get Record(): any {
        return {
            calLinkFromElement: this.calLinkFromElement,
            calLinkNull: this.calLinkNull,
            calLinkOrder: this.calLinkOrder,
            // ... (other properties)
        };
    }

    /**
     * 他のExplainItemParamsとの等価性を判定
     * @param {ExplainItemParams} other - 比較対象のExplainItemParams
     * @returns {boolean} - 等しい場合はtrue、そうでない場合はfalse
     */
    equals(other: ExplainItemParams): boolean {
        return(
            this.calLinkFromElement===other.calLinkFromElement
        )
    }
}

/**
 * item APIを呼び出す関数
 * @param params - クエリパラメータのオブジェクト
 * @returns item APIのレスポンスのデータ
 */
export const ExplainItemApi = {
    /**
     * fetchDataメソッド
     * @param params - クエリパラメータのオブジェクト
     * @returns item APIのレスポンスのデータ
     */
    fetchData: async (params: ExplainItemParamsType): Promise<any> => {
        return await callApi('item', params);
    },
};


type StockBrandsParamsType = {
    code: string;
    market_product_code: string;
    number_33_industry_code: string;
    number_17_industry_code: string;
    scale_code: string;
}

// StockBrandsParamsクラスの定義
export class StockBrandsParams {
    /**
     * @type {string} - 銘柄コード
     */
    code: string = "";

    /**
     * @type {string} - 市場商品コード
     */
    market_product_code: string = "";

    /**
     * @type {string} - 33産業分野コード
     */
    number_33_industry_code: string = "";

    /**
     * @type {string} - 17産業分野コード
     */
    number_17_industry_code: string = "";

    /**
     * @type {string} - 規模コード
     */
    scale_code: string = "";

    /**
     * パラメータオブジェクトを取得
     * @returns {StockBrandsParamsType}
     */
    get Record(): StockBrandsParamsType {
        return {
            code: this.code,
            market_product_code: this.market_product_code,
            number_33_industry_code: this.number_33_industry_code,
            number_17_industry_code: this.number_17_industry_code,
            scale_code: this.scale_code,
        };
    }

    /**
     * 他のStockBrandsParamsとの等価性を判定
     * @param {StockBrandsParams} other - 比較対象のStockBrandsParams
     * @returns {boolean} - 等しい場合はtrue、そうでない場合はfalse
     */
    equals(other: StockBrandsParams): boolean {
        return (
            this.code === other.code &&
            this.market_product_code === other.market_product_code &&
            this.number_33_industry_code === other.number_33_industry_code &&
            this.number_17_industry_code === other.number_17_industry_code &&
            this.scale_code === other.scale_code
        );
    }
}

/**
 * brands APIを呼び出す関数
 * @param params - クエリパラメータのオブジェクト
 * @returns brands APIのレスポンスのデータ
 */
export const StockBrandsApi = {
    /**
     * fetchDataメソッド
     * @param params - クエリパラメータのオブジェクト
     * @returns brands APIのレスポンスのデータ
     */
    fetchData: async (params: StockBrandsParamsType): Promise<any> => {
        return await callApi('brands', params);
    },
};

type StockChartParamsType = {
    /**
     * 銘柄コード
     */
    code: string;
    date_range_lte: string;
    date_range_gte: string;
    select_date: string;
}

/**
* 株価データ取得のためのパラメータクラス
*/
export class StockChartParams {
    /**
     * @type {string} - 銘柄コード
     */
    code: string = "";

    /**
     * @type {string} - 取得する日付範囲の上限
     */
    date_range_lte: string = "";

    /**
     * @type {string} - 取得する日付範囲の下限
     */
    date_range_gte: string = "";

    /**
     * @type {string} - 選択した日付
     */
    select_date: string = "";

    /**
     * パラメータオブジェクトを取得
     * @type {StockChartParamsType}
     */
    get Record(): StockChartParamsType {
        return {
            code: this.code,
            date_range_gte:this.date_range_gte,
            date_range_lte:this.date_range_lte,
            select_date:this.select_date,
        };
    }

    /**
     * 他のStockChartParamsとの等価性を判定
     * @param {StockChartParams} other - 比較対象のStockChartParams
     * @returns {boolean} - 等しい場合はtrue、そうでない場合はfalse
     */
    equals(other: StockChartParams): boolean {
        return (
            this.code === other.code &&
            this.date_range_lte === other.date_range_lte &&
            this.date_range_gte === other.date_range_gte &&
            this.select_date === other.select_date
        );
    }
}


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
    fetchData: async (params: StockChartParamsType): Promise<any> => {
        return await callApi('result', params);
    },
};
