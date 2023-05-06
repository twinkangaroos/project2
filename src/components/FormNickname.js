import { Auth } from 'aws-amplify';

const FormNickname = ({ nickname, setNickname }) => {

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
        </div>
    );
};

export default FormNickname;
