import { Auth } from 'aws-amplify';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormNickname from "../components/FormNickname.js";

const DebugPage = () => {
    //console.log("2.debug page..");
    const [autherror, setAuthError] = useState("");
    const [nickname, setNickname] = useState("");
    //const { authStatus } = useAuthenticator(context => [context.authStatus]);

    useEffect(() => {
        //https://docs.amplify.aws/lib/auth/manageusers/q/platform/js/#retrieve-current-authenticated-user
        Auth.currentAuthenticatedUser({
            // Optional, By default is false. If set to true, 
            // this call will send a request to Cognito to get the latest user data
            bypassCache: false
        })
            .then((user) => setNickname(user.attributes.nickname))
            .catch((err) => setAuthError(err));
        console.log("1.get nickname");
    }, []);
    console.log("3.debug nickname=", nickname);
    return (
        <div>
            DebugPage（ログイン済みか？判定しています）<br />
            { autherror ? 
                <div>
                    <p>{autherror}</p>
                    <Link to="/">ログインページへ</Link>
                </div>
                :
                <FormNickname nickname={nickname} setNickname={setNickname} />
            }
        </div>
    );
};

export default DebugPage;

/*
// 以下、サインアウトはできるがトップにリダイレクトできない・・・
async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
//<button onClick={signOut}>ログアウトする</button>
*/
