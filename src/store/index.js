import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TasksApi } from "./api/taskApi";

export const store = configureStore({
  reducer: {
    [TasksApi.reducerPath]: TasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(TasksApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchTasksQuery,
  useAddTaskMutation,
  useDeleteAllTasksMutation,
  useDeleteTaskMutation,
} from "./api/taskApi";
