import { db } from '../plugins/firebase'

export type GetRequestBody = {
    name: string;
    number: number;
    address: string;
    expiredAt: string;
    shareable: boolean;
}

export type PostRequestBody = {
    name: string;
    number: number;
    address: string;
    expiredAt: string;
    shareable: boolean;
}

export type DeleteRequestBody = {
    name: string;
    number: number;
    address: string;
    expiredAt: string;
    shareable: boolean;
}

export type ResponseData = {
    status: string;
    message: string;
}

export const stockpiles = () => {
  return {
    get(request: GetRequestBody): ResponseData {
      return {
          status : "success",
          message : "Get Mock Response"
      }
    },
    post(payload: PostRequestBody): ResponseData {
        return {
            status : "success",
            message : "Post Mock Response"
        }
      },
    delete(id: number) : ResponseData {
        return {
            status : "success",
            message : "Post Mock Response"
        }
      },
  };
};
