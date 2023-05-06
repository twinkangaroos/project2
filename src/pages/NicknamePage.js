import { Authenticator } from '@aws-amplify/ui-react';
import NicknameChildPage from "./NicknameChildPage";

const NicknamePage = () => {
    return (
        <Authenticator loginMechanisms={['email']} signUpAttributes={[
            'email',
            'name',
            'nickname']}>
            {  
              ({ signOut, user }) => ( 
                <Authenticator.Provider>
                  <NicknameChildPage />
                </Authenticator.Provider>
              )
            }
          </Authenticator>
    );
};

export default NicknamePage;
