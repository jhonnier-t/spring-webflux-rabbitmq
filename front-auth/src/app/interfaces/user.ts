export interface User { 
    id?: string
    email: string
    name?: string
    password?: string
    enabled?: boolean
}

export interface ResponseModelDto<T> {
    statusCode: number;
    statusMessage: string;
    data: T;
  }