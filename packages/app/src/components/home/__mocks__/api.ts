// import useAsync from "react-use/lib/useAsync";
// import { identityApiRef, useApi } from "@backstage/core-plugin-api";

export const useUserProfile = () => {
    // var _a;
    // const identityApi = useApi(identityApiRef);
    // const {value, loading, error} = useAsync(async () => {
    //     return {
    //         profile: await identityApi.getProfileInfo(),
    //         identity: await identityApi.getBackstageIdentity(),
    //     };
    // }, []);
    // if (loading || error) {
    //     return {
    //         profile: {},
    //         displayName: '',
    //         picture: '',
    //         loading,
    //     };
    // }
    return {
        profile: {},
        displayName: "Piyush",
        picture: "",
        userid: "",
        // loading,
    };
};