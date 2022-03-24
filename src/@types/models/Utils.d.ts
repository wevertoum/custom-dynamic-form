declare namespace Utils {
  interface ApiError {
    status: number;
    errors: ApiError.Errors;
    exception: string;
  }

  interface Dict<T = any> {
    [key: string]: T;
  }

  namespace ApiError {
    type Errors = Dict<string[] | string>;
  }

  interface IPage<T> {
    results: T[];
    next?: string;
    previous?: string;
    count: number;
    page_size: number;
  }

  interface PaginateParams {
    offset: number;
    limit: number;
  }
}