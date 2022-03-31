import React, { createContext } from 'react';

const cc = createContext();

export { cc };


// import React, { useState, useEffect, createContext } from 'react';
// export const AppContext = createContext();
// export const Provider = (props) => {
//   const [cart, setCart] = useState([]);
//   const[product,setproduct]=useState([])
//   return (
//     <AppContext.Provider value={{item1:[cart, setCart],item2:[product,setproduct]}}>
//       {props.children}
//     </AppContext.Provider>
//   )
// }