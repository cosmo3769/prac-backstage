import { Header, Page } from "@backstage/core-components";
import React, {useState, useEffect} from "react";
import { useUserProfile } from "./api";



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
