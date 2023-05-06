import { Authenticator } from '@aws-amplify/ui-react';
import MyPage from "./MyPage";

const LoginPage = () => {
    return (
        <Authenticator loginMechanisms={['email']} signUpAttributes={[
          'email',
          'name',
          'nickname']}>
          {  
            ({ signOut, user }) => ( 
              <Authenticator.Provider>
                <MyPage />
              </Authenticator.Provider>
            )
          }
        </Authenticator>
      );
}

export default LoginPage;

/*
        <Authenticator loginMechanisms={['email']} >
          {  
            ({ signOut, user }) => ( 
              <Authenticator.Provider>
                <MyPage />
              </Authenticator.Provider>
            )
          }
        </Authenticator>
*/
