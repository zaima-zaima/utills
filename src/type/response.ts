export interface ResponseBase<T> {
  code: number;
  msg: string;
  data: T;
}

export type Response<T> = Promise<ResponseBase<T>>;
