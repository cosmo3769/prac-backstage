import { Header, Page } from "@backstage/core-components";
import React, {useState, useEffect} from "react";
import useAsync from "react-use/lib/useAsync";
import { identityApiRef, useApi } from "@backstage/core-plugin-api";

const useUserProfile = () => {
    var _a;
    const identityApi = useApi(identityApiRef);
    const {value, loading, error} = useAsync(async () => {
        return {
            profile: await identityApi.getProfileInfo(),
            identity: await identityApi.getBackstageIdentity(),
        };
    }, []);
    if (loading || error) {
        return {
            profile: {},
            displayName: '',
            picture: '',
            loading,
        };
    }
    return {
        profile: value?.profile,
        displayName: 
            (_a = value?.profile.displayName) != null
            ? _a
            : value?.identity.userEntityRef,
        picture: value?.profile.picture,
        userid: value?.profile.email,
        loading,
    };
};

export const Home: React.FC = () => {
    const [userName, setUserName] = useState();
    const displayName = useUserProfile().displayName;
    useEffect(() => {
        setUserName(displayName);
    });
   

    return (
        <Page themeId="home">
            <Header title={`Welcome ${userName}`} />
        </Page>
    )
}
