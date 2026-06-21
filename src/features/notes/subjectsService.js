import config from "../../config/config";
import { Client, Databases, Query, Storage, ID } from "appwrite";

class SubjectsService {
    client = new Client();
    databases;
    bucket;
    constructor(parameters) {
        this.client
            .setEndpoint(config.appwrite.endpoint)
            .setProject(config.appwrite.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    async getSubjects() {
        try {
            const response = await this.databases.listDocuments(
                config.appwrite.databaseId,
                config.appwrite.subjectsCollectionId
            );
            return response.documents;
        } catch (error) {
            console.error("Error fetching subjects:", error);
            throw error;
        }
    }
}

const subjectsService = new SubjectsService();

export default subjectsService;