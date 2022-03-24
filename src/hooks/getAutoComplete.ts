import axios from "axios";
import { useCallback } from "react";

export function useGetAutoComplete(route: string, token: string) {
  return useCallback(
    async <O extends Object>(params?: O, headers: any = {}) => {
      return await axios.get<Utils.IPage<any>>(
        route,
        {
          params,
          headers: {
            ...headers,
            Authorization: `JWT ${token}`,
          },
        }
      );
    },
    [route]
  );
}
