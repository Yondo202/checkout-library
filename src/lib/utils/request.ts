// import { queryClient } from "@/main";
import axios from "axios";
// import Notification from '@/utils/hooks/Notification';
// import { queryClient } from '@/main'

export type TRequest<T> = {
  method?: "get" | "post" | "put" | "delete";
  url?: string;
  mainUrl?: string;
  body?: T;
  filterBody?: unknown;
  queryParams?: unknown;
};

// type ResponseType<T> = {
//    data?: T;
// };

export const getJwt = () => {
  return document.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("access_token="))
    ?.split("=")[1];
};

export const request = async <T>({
  mainUrl,
  url = "",
  method = "get",
  body = undefined,
  queryParams,
  filterBody,
}: TRequest<T>) => {
  const reqAsset = { params: queryParams }; // headers: { 'Access-Control-Allow-Origin' : '*', },
  const fullUrl = `${mainUrl ?? import.meta.env.VITE_MAIN_URL}${url}`;

  try {
    // const response = await axios<ResponseType<T>>({ url: fullUrl, method: method, data: body ?? filterBody ?? {}, ...reqAsset }); // tur ashiglaj baigaa data naas shaltgalaad tur darsan
    const response = await axios<T>({
      url: fullUrl,
      method: method,
      data: body ?? filterBody ?? {},
      ...reqAsset,
    });
    // if(method === "post"){
    //    return response.data?.data
    // }
    // return response.data.data;
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    //   if (err?.response?.data?.message) {
    //      toast.error(err?.response?.data?.message)
    //   } else {
    //      toast.error('Хүсэлт амжилтгүй')
    //   }
    throw err;
  }
};

// type TRefetch = {
//    queryKey: string
//    queryId?: string
// }

// export const UseReFetch = ({ queryKey, queryId }: TRefetch) => {
//    queryClient.refetchQueries({ queryKey: [queryKey, queryId ?? undefined] })
//    // messageAlert('Хүсэлт амжилттай')
// }
