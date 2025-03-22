import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";

// Appwrite database and collection IDs
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
    // Get Notes
    async getNotes() {
        try {
            const response = await databaseService.listDocuments(dbId, colId);
            if (response.error) {
                return { error: response.error };
            }
            return response;  // No need to wrap in `{ data: response }`
        } catch (error) {
            return { error: error.message };
        }
    },

    // Add New Note
    async addNote(text) {
        if (!text) {
            return { error: "Note text cannot be empty" };
        }

        const data = {
            text: text,
            createdAt: new Date().toISOString(),
        };

        try {
            const response = await databaseService.createDocument(
                dbId,
                colId,
                ID.unique(), // Document ID should be here
                data
            );

            if (response?.error) {
                return { error: response.error };
            }
            return response;  // Return response directly
        } catch (error) {
            return { error: error.message };
        }
    },
};

export default noteService;
