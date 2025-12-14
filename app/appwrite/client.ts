import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT|| "http://localhost/v1",
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || "",
  apiKey: import.meta.env.VITE_APPWRITE_API_KEY || "",
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE || "",
  usersCollectionId: import.meta.env.VITE_APPWRITE_DATABASE_USERS_COLLECTION_ID || "",
  tripsCollectionId: import.meta.env.VITE_APPWRITE_DATABASE_TRIPS_COLLECTION_ID || "",
}

const client = new Client();
client 
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)

    const account = new Account(client);
    const database = new Databases(client);
    const storage = new Storage(client);

export { client, account, database, storage };

