import React , {useState, } from 'react';
import Splash from './app/navigation/splash_navigation';
import Test from "./app/screens/test_screen"
import GlobalContextProvider from './app/contexts/global_context';
import AlertsProvider from './app/contexts/alerts_context';
import AuthProvider from './app/contexts/auth_context';
import NetInfo,{useNetInfo} from "@react-native-community/netinfo";


const MainApp= ()=>{ 
  return(
<AuthProvider>
  <AlertsProvider>
    <GlobalContextProvider>
      <Splash />
    </GlobalContextProvider>
  </AlertsProvider>
</AuthProvider>)
}

const App = () => {
  const netInfo=useNetInfo()
  // const [net,setNet]=useState()
  // const netCheck=()=>{NetInfo.fetch().then(state => {
  //   console.log("Connection type", state.type);
  //   console.log("Is connected?", state.isConnected);
  //   setNet(state.isConnected)
  // });}
  // netCheck()
  return netInfo.isConnected ? <MainApp/> : <Test/>
    // <AuthProvider>
    //   <AlertsProvider>
    //     <GlobalContextProvider>
    //       <Splash />
    //     </GlobalContextProvider>
    //   </AlertsProvider>
    // </AuthProvider>
  
};

export default App;
