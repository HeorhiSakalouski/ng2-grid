import { Http, Response, URLSearchParams } from '@angular/http';
import { Loadable } from './loadable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
export declare class GridDataProvider extends Loadable {
    private http;
    static DEFAULT_PAGE_PARAM_VALUE: string;
    static DEFAULT_PAGE_SIZE_PARAM_VALUE: string;
    static DEFAULT_PAGE_SIZE_VALUE: number;
    static DEFAULT_SORT_PARAM_VALUE: string;
    static DEFAULT_TOTAL_COUNT_HEADER_VALUE: string;
    static SORT_ASC: string;
    static SORT_DESC: string;
    pageParam: string;
    pageSizeParam: string;
    pageSize: any;
    pageIndex: number;
    requestParams: Array<any>;
    sortParam: string;
    sourceData: Array<any>;
    sourceUrl: string;
    totalCountHeader: string;
    private data;
    private sortColumn;
    private sortType;
    private totalCount;
    constructor(http: Http, params?: any);
    getData(): Array<any>;
    setData(data: Array<any>): void;
    getCount(): number;
    getTotalCount(): number;
    setTotalCount(totalCount: number): void;
    setSort(sortColumn: string, sortType?: string): void;
    getSortColumn(): string;
    getSortType(): string;
    fetch(): Observable<Response>;
    protected buildRequestParams(): URLSearchParams;
    protected slice(): void;
    protected sort(): void;
}
