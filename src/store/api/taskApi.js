import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TasksApi = createApi({
  reducerPath: "Tasks",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/tasks/",
  }),
  endpoints(builder) {
    return {
      fetchTasks: builder.query({
        query: () => {
          return {
            url: "",
            method: "GET",
          };
        },
      }),
      addTask: builder.mutation({
        query: (task) => {
          return {
            url: "/create_task/",
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: task,
          };
        },
      }),
      deleteTask: builder.mutation({
        query: (task) => {
          return {
            url: `/${task.id}/`,
            method: "DELETE",
          };
        },
      }),
      deleteAllTasks: builder.mutation({
        query: () => {
          return {
            url: "/delete_all/",
            method: "DELETE",
          };
        },
      }),
    };
  },
});
export const {
  useFetchTasksQuery,
  useAddTaskMutation,
  useDeleteAllTasksMutation,
  useDeleteTaskMutation,
} = TasksApi;

export { TasksApi };
