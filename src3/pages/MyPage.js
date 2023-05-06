const MyPage = (props) => {
    return (
        <div>
            <p>MyPage!</p>
            <main>
            <h1>Hello! {props.user.username}</h1>
            <button onClick={props.signOut}>Sign out</button>
          </main>
        </div>
    );
};

export default MyPage;
