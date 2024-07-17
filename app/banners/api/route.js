import { BlobServiceClient } from "@azure/storage-blob";

export async function POST(request) {
    const STORAGE_CONNECTION_STRING = process.env.NEXT_PUBLIC_STORAGE_CONNECTION_STRING;
    console.log("Storage Connection String: ", STORAGE_CONNECTION_STRING);
    const blobServiceClient = BlobServiceClient.fromConnectionString(STORAGE_CONNECTION_STRING);

    try {
        const formData = await request.formData();
        const file = formData.get("file");
        console.log("Received file: ", file);

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const containerClient = blobServiceClient.getContainerClient("images");
        const blockBlobClient = containerClient.getBlockBlobClient(file.name);
        await blockBlobClient.uploadData(buffer);
        console.log("File uploaded successfully");

        return new Response(JSON.stringify({ message: "File uploaded successfully" }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error uploading file:", error);
        return new Response(JSON.stringify({ message: "Error uploading file" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}


export async function GET() {
    const STORAGE_CONNECTION_STRING = process.env.NEXT_PUBLIC_STORAGE_CONNECTION_STRING;
    const blobServiceClient = BlobServiceClient.fromConnectionString(STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient("images");

    try {
        const fileList = [];
        for await (const blob of containerClient.listBlobsFlat()) {
            const blockBlobClient = containerClient.getBlockBlobClient(blob.name);
            const downloadBlockBlobResponse = await blockBlobClient.download();
            const buffer = await streamToBuffer(downloadBlockBlobResponse.readableStreamBody);
            fileList.push({
                name: blob.name,
                lastModified: blob.properties.lastModified,
                data: buffer.toString('base64'),
                contentType: blob.properties.contentType,
            });
        }

        return new Response(JSON.stringify({ files: fileList }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error fetching files:", error);
        return new Response(JSON.stringify({ message: "Error fetching files" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

async function streamToBuffer(readableStream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        readableStream.on("data", (data) => {
            chunks.push(data instanceof Buffer ? data : Buffer.from(data));
        });
        readableStream.on("end", () => {
            resolve(Buffer.concat(chunks));
        });
        readableStream.on("error", reject);
    });
}