/**
 * Generate a random text with a random length between minLength and maxLength
 */
export default function generateRandomText(
    minLength: number,
    maxLength: number,
) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    const captchaLength = Math.max(
        minLength,
        Math.floor(
            Math.random() * (Math.min(maxLength, charactersLength) - 1 + 1),
        ) + 1,
    );
    for (let i = 0; i < captchaLength; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
        );
    }
    return result;
}
