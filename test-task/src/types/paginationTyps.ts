

export interface IPagination {
    onPageChange:(index:number)=>void,
    totalCount: number,
    siblingCount?: number,
    currentPage: number,
    pageSize:number,
    className:string
}

export interface IUsePagination {
        currentPage: number,
        totalCount: number,
        siblingCount: number,
        pageSize: number
}