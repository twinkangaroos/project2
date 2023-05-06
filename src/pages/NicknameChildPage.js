import { useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from "react";
import { Auth } from 'aws-amplify';

const NicknameChildPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const [nickname, setNickname] = useState(user.attributes.nickname);

    async function updateNickname() {
        let result = null;
        try {
            const user = await Auth.currentAuthenticatedUser();
            //console.log(user.attributes.nickname);
            result = await Auth.updateUserAttributes(user, {
                nickname: nickname
            });
        } catch(error) {
            console.log('error update: ', error);
        }
        if (result === 'SUCCESS') {
            alert("ニックネームを更新しました！");
        }
        else {
            alert("ニックネームの更新に失敗しました・・・");
        }
        return result;
    }

    return (
        <div>
            <p>
                ニックネーム：<input value={nickname} onChange={e => setNickname(e.target.value)} />
            </p>
            <p>
                <button onClick={() => updateNickname()}>ニックネームを変更する</button>
            </p>
            <p>
                <button onClick={signOut}>ログアウトする</button>
            </p>
        </div>
    );
};

export default NicknameChildPage;
