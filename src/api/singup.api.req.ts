import api from "./index";
import { USER } from "./urls";

// singup api
export const singupApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    userSingup: builder.query({
      query: () => `${USER.SIGNUP}`,
      transformResponse: (data: any) => {
        const token = localStorage.getItem("token");
        const device = localStorage.getItem("device_id");
        if (token !== undefined) {
          localStorage.setItem("token", data.innerData.token);
        }
        if (device !== undefined) {
          localStorage.setItem("device_id", data.innerData.device_id);
        }
        return data;
      },
    }),
  }),
});

export const { useLazyUserSingupQuery } = singupApiReq;
