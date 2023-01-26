import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {baseUrl} from '../utilities/api';
import {AuthContext} from './auth_context';
import { Alert } from 'react-native';

export const AlertsContext = React.createContext();

export const AlertsProvider = ({children}) => {
  const [alerts, setAlerts] = useState();
  const [trigger, setTrigger] = useState(true);
  const {userId} = useContext(AuthContext);

  function triggerAlertEffect() {
    if (trigger == true) {
      setTrigger(false);
    } else if (trigger == false) {
      setTrigger(true);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const cartRes = await axios.get(baseUrl + `/cart/${userId}`);
      setAlerts(cartRes.data.length);
      console.log(
        '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>in this',
        cartRes.data.length,
        'In cart update>>>><<<<<>>>><<<',
        userId,
      );
    };
    fetchData();
  }, [trigger,alerts]);

  const updateAlerts = obj => {
    setAlerts(obj);
  };

  const getAlertCounts = () => {
    let count = alerts.length;
    if (count === 0) {
      return null;
    }

    return alerts.length;
  };

  return (
    <AlertsContext.Provider
      value={{alerts, updateAlerts, getAlertCounts, triggerAlertEffect}}>
      {children}
    </AlertsContext.Provider>
  );
};

export default AlertsProvider;
