// import React, { createContext, useState } from "react";

// // Create the context
// const TasksItemsContext = createContext();

// // Create the provider component
// const TasksItemsProvider = ({ children }) => {
//   const [TasksItems, setTasksItems] = useState([]);

//   // add new item to items list
//   const addToTasksItems = (item, quantity) => {
//     if (!TasksItems.find((itemInList) => itemInList.id === item.id))
//       setTasksItems((prevTasksItems) => [
//         ...prevTasksItems,
//         {
//           ...item,
//           quantity: quantity,
//         },
//       ]);
//   };

//   // remove item from items list
//   const removeFromTasksItems = (item) => {
//     setTasksItems((prevTasksItems) =>
//       prevTasksItems.filter((itemInList) => itemInList.id !== item.id)
//     );
//   };

//   const updateInTasksItems = (item, quantity) => {
//     if (TasksItems.find((itemInList) => itemInList.id === item.id)) {
//       setTasksItems((prevList) =>
//         prevList.map((itemInList) =>
//           itemInList.id === item.id
//             ? { ...itemInList, quantity: quantity }
//             : itemInList
//         )
//       );
//     }
//   };

//   // calculate the total price of all the items list
//   const totalPrice = () => {
//     return TasksItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//   };

//   // Define the context value
//   const contextValue = {
//     TasksItems,
//     addToTasksItems,
//     updateInTasksItems,
//     removeFromTasksItems,
//     totalPrice,
//   };

//   // Provide the context value to the children components
//   return (
//     <TasksItemsContext.Provider value={contextValue}>
//       {children}
//     </TasksItemsContext.Provider>
//   );
// };

// export { TasksItemsProvider, TasksItemsContext };
