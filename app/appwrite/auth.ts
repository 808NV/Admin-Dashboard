import { OAuthProvider, Query } from "appwrite";
import { account, appwriteConfig, database } from "./client";
import { redirect } from "react-router";


export const loginWithGoogle = async () => {
    try {
        account.createOAuth2Session(OAuthProvider.Google)

    } catch (error) {
        console.log("login with google error:", error);
    }
}

export const getUser = async () => {
    try {
        const user = await account.get();

        if (!user) {
            return redirect("/sign-in")
        }

        const { docuements } = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [
                Query.equal("accountId", user.$id),
                Query.select(["name", "email", "imgaeUrl", "$id", "$createdAt"])
            ]

        )
        if (docuements.length > 0) {
            return await storeUserData();
        };

    } catch (error) {
        console.log("get user error:", error);
    }
}

export const getGooglePic = async () => {
    try {
        const session = await account.getSession("current");
        const oAuthToken = session.providerAccessToken;
        
        if(!oAuthToken) {
            console.log("No OAuth token found");
            return null;
        }

        const response = await fetch(`https://people.googleapis.com/v1/people/me?personFileds=photos`, {
            headers: {
                Authorization: `Bearer ${oAuthToken}`
            }
        });
        if (!response.ok) {
            console.log("Failed to fetch photoe from Google");
            return null;
        }

        const data = await response.json();
        
        const photoUrl = data.photos && data.photos.length > 0 ? data.photos[0].url : null;
        if (!photoUrl) {
            console.log("No photo URL found in Google response");
            return null;
        }
        
        return photoUrl;

    } catch (error) {
        console.log("Error:", error);
    }
}

export const storeUserData = async () => {
    try {
        const user = await account.get();
        
        if (!user) return null;

        const { docuements } = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [
                Query.equal("accountId", user.$id)
            ]
        );
        if (docuements.length > 0) return docuements[0];

        const imgaeUrl = await getGooglePic();

        const newUser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            "unique()",
            {
                accountId: user.$id,
                name: user.name,
                email: user.email,
                imgaeUrl: imgaeUrl || "",
                joinedAt: new Date().toISOString(),
            }
        );

        return newUser;


    } catch (error) {
        console.log("Error:", error);
    }
}

export const getExistingUser = async () => {
    try {

    } catch (error) {
        console.log("Error:", error);
    }
}

export const logoutUser = async () => {
    try {
        account.deleteSession("current");
        redirect("/sign-in");
        return true;
    } catch (error) {
        console.log("Error:", error);
    }
}