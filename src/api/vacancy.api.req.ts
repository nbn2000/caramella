import api from "./index";
import { VACANCY } from "./urls";

// vacancy api
export const vacancyApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVacancy: builder.query({
      query: () => `${VACANCY.GETALLVACANCY}`,
    }),
    getSingleVacancy: builder.query({
      query: (id) => `${VACANCY.GETSINGLEVACANCY}/${id}`,
      transformResponse: (data: any) => data.innerData,
    }),
  }),
});

export const { useGetAllVacancyQuery, useGetSingleVacancyQuery } =
  vacancyApiReq;
