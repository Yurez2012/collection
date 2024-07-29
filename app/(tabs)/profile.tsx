import React from 'react';
import { Button, Text, View } from 'react-native';
import { LoginManager, Settings } from 'react-native-fbsdk-next';

Settings.initializeSDK();

function Profile(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Facebook Login </Text>
            <Button title={'Login with Facebook'} onPress={() => {
                LoginManager.logInWithPermissions(["public_profile", "email"]).then(
                    function (result) {
                        if (result.isCancelled) {
                            alert("Login Cancelled " + JSON.stringify(result));
                        } else {
                            alert("Login success with permissions: " + result.grantedPermissions.toString());
                        }
                    },
                    function (error) {
                        alert("Login failed with error: " + error);
                    }
                );
            }} />
        </View>
    );
}

export default Profile;
