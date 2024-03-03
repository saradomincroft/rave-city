import React, { useState } from 'react';
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";

function FacebookLogin() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            {!loggedIn 
            ? 
            (
                <LoginSocialFacebook
                    appId="1457873371772101"
                    onResolve={(response) => {
                        console.log(response);
                        setLoggedIn(true);
                    }}
                    onReject={(error) => {
                        console.log(error);
                    }}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook>
            ) : 
            (
                <div>
                    
                    <p>Welcome, you are logged in!</p>
                </div>
            )}
        </>
    );
}

export default FacebookLogin;
