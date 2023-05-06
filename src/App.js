import LoginPage from "./pages/LoginPage";
import DebugPage from "./pages/DebugPage";
import NicknamePage from "./pages/NicknamePage";

import { Amplify } from 'aws-amplify';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App({ signOut, usr }) {
  console.log("app.js start1.");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/debug" element={<DebugPage />} />
        <Route path="/nickname" element={<NicknamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//<MyPage signOut={signOut} user={user} />
/*
  <Authenticator loginMechanisms={['email']}>
      {  
        ({ signOut, user }) => ( 
          <Authenticator.Provider>
            <MyPage />
          </Authenticator.Provider>
        )
      }
  </Authenticator>
*/

  //useEffect(() => {
    /*
    const getCountryAllData = () => {
      console.log("useEffect1");
      fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
      .catch(err => alert("summaryデータを読み込めませんでした。"));
    }
    */
    //getCountryAllData();
  //}, []);
