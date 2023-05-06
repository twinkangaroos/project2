// no --typescript
import MyPage from "./pages/MyPage";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App({ signOut, usr }) {
  return (
    <Authenticator loginMechanisms={['email']}>
      {
        ({ signOut, user }) => (
          <MyPage signOut={signOut} user={user} />
        )
      }
    </Authenticator>
  );
}

export default App;
