import { Client, Account } from "appwrite";
import config from "../../config/config";

class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwrite.endpoint)
            .setProject(config.appwrite.projectId);
        this.account = new Account(this.client);
    }

    async login({email, password}) {
        try {
            const response = await this.account.createEmailPasswordSession({ email: email, password: password });
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getSession() {
        try {
            const response = await this.account.get();
            return {
                $id: response.$id,
                name: response.name,
                email: response.email
            };
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            const response = await this.account.deleteSession({sessionId: "current"});
            return response;
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;