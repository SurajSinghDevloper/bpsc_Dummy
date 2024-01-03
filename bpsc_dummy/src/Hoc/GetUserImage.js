import RouteTo from "./RouteTo";

async function fetchImageAndConvertToBase64(imageUrl) {
    console.log(imageUrl, "FROM fetchImageAndConvertToBase64");
    try {
        const response = await RouteTo.get(imageUrl, {
            responseType: "arraybuffer",
        });

        // Convert the image data to a Base64 string
        const base64Image = btoa(
            new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
            )
        );

        return `data:image/jpeg;base64,${base64Image}`;
    } catch (error) {
        console.error("Error fetching and converting image:", error);
        throw error; // Rethrow the error for handling in the calling code
    }
}

export default fetchImageAndConvertToBase64;