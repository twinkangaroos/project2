import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";

const MyPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    //console.log(user);
    //const { route } = useAuthenticator(context => [context.route]);
    //const { authStatus } = useAuthenticator(context => [context.authStatus]);
    return (
        <div>
            <p>MyPage</p>
            <main>
                <h1>ようこそ！</h1>
                <h2>username: {user.username}</h2>
                <h2>nickname:{user.attributes.nickname}</h2>
                <h2>name:{user.attributes.name}</h2>
                <p><Link to="/debug">デバッグページへ</Link></p>
                <p><Link to="/nickname">ニックネーム変更ページへ</Link></p>
                <button onClick={signOut}>ログアウトする</button>
            </main>
        </div>
    );
};

export default MyPage;

/*
<h1>ようこそ！ {props && props.user.username}</h1>
<button onClick={props && props.signOut}>ログアウトする</button>
*/
