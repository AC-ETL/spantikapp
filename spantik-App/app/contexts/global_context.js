import React, {createContext, useState, useContext, useEffect} from 'react';
import {storeData, getData} from '../utilities/asyn_storage';
import axios from 'axios';
import {baseUrl} from '../utilities/api';
import { AuthContext } from './auth_context';
export const GlobalContext = createContext({});

const GlobalContextProvider = props => {
  const [firstRun, setFirstRun] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState('');
  const [cartData, setCartData] = useState(false);
  const [trigger, setTrigger] = useState(true);
  const [ordersData, setOrdersData] = useState(null);
  const [counter, setCounter] = useState(2);
  const {userId} = useContext(AuthContext);

  function triggerGlobalEffect() {
    if (trigger == true) {
      setTrigger(false);
    } else if (trigger == false) {
      setTrigger(true);
    }
  }

  const fetchOrders = async (id) => {
    const orderRes = await axios.get(baseUrl + `/orders/${userId}`);
    // console.log(">?????????????????>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<>",orderRes,">>>>>>>>>??????????????<<<<<<<<<>?<?")
// >>>>>>>>>>>>>>>>>>>>>>> In order last order top in app
    
    setOrdersData(orderRes.data.reverse());
    return orderRes.data;
  };

  useEffect(() => {
      const fetchData = async (id) => {
      const orderRes = await axios.get(baseUrl + `/orders/${userId}`);
      setOrdersData(orderRes.data);
    };
    fetchData();
  }, [trigger]);

  return (
    <>
      {ordersData && (
        <GlobalContext.Provider
          value={{
            user,
            setUser,
            firstRun,
            setFirstRun,
            isLoggedIn,
            setIsLoggedIn,
            cartData,
            setCartData,
            triggerGlobalEffect,
            ordersData,
            fetchOrders,
            counter,
            setCounter
            
          }}>
          {props.children}
        </GlobalContext.Provider>
      )}
    </>
  );
};

export default GlobalContextProvider;
