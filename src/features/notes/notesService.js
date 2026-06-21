import config from '../../config/config';
import { Client, Databases, Query, Storage, ID } from "appwrite";

class NotesService {
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

    async createNote({ name, fileId, subject, type, coverImageId, status }) {
        try {
            const response = await this.databases.createDocument(
                config.appwrite.databaseId,
                config.appwrite.collectionId,
                ID.unique(),
                {
                    name,
                    fileId,
                    subject,
                    type,
                    coverImageId,
                    status,
                }
            )
            return response;
        } catch (error) {
            throw error;
        }
    }

    async updateNote(noteId, { name, fileId, subject, type, coverImageId, status }) {
        try {
            const response = await this.databases.updateDocument(
                config.appwrite.databaseId,
                config.appwrite.collectionId,
                noteId,
                {
                    name,
                    fileId,
                    subject,
                    type,
                    coverImageId,
                    status
                }
            )
            return response;
        } catch (error) {
            throw error;
        }
    }

    async deleteNote(noteId) {
        try {
            const response = await this.databases.deleteDocument(
                config.appwrite.databaseId,
                config.appwrite.collectionId,
                noteId
            )
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getNote(noteId) {
        try {
            const response = await this.databases.getDocument(
                config.appwrite.databaseId,
                config.appwrite.collectionId,
                noteId,
                [
                    Query.select([
                        "*",
                        "subject.$id",
                        "subject.name",
                        "subject.code",
                    ])
                ]
            )
            return {
                name: response.name,
                fileId: response.fileId,
                subject: response.subject,
                type: response.type,
                coverImageId: response.coverImageId,
                status: response.status,
                $id: response.$id,
                createdAt: response.$createdAt,
            };
        } catch (error) {
            throw error;
        }
    }

    async listNotes(queries = [Query.equal('status', 'active')]) {
        try {
            const response = await this.databases.listDocuments(
                config.appwrite.databaseId,
                config.appwrite.collectionId,
                queries
            )
            return response.documents;
        } catch (error) {
            throw error;
        }
    }

    async uploadFile({ file }) {
        try {
            const response = await this.bucket.createFile(
                config.appwrite.bucketId,
                ID.unique(),
                file
            )
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getFile(fileId) {
        try {
            const response = await this.bucket.getFileView(
                config.appwrite.bucketId,
                fileId
            )
            return response;
        } catch (error) {
            throw error;
        }

    }

    async deleteFile(fileId) {
        try {
            const response = await this.bucket.deleteFile(
                config.appwrite.bucketId,
                fileId
            )
            return response;
        } catch (error) {
            throw error;
        }

    }

}

const notesService = new NotesService();

export default notesService;