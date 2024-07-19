import getRandomColor from "../color/getRandomColor";

export default function drawTextRandomly(
    canvas: HTMLCanvasElement,
    text: string,
    backgroundColor: string,
    fontFamilies: string[],
    minFontSize: number,
    maxFontSize: number,
) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set the background color
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const margin = Math.min(canvas.width * 0.1, 20); // Margin for both sides
        const availableWidth = canvas.width - margin; // Available width for characters
        const characterWidth = availableWidth / text.length; // Maximum width per character

        let offsetX = 10; // Starting offset for the first character

        // Calculate the vertical center of the canvas
        const verticalCenter = canvas.height / 2;

        text.split("").forEach((char) => {
            const randomFont =
                fontFamilies[Math.floor(Math.random() * fontFamilies.length)];

            // Adjust font size based on character width, with a min and max size
            const fontSize =
                Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) +
                minFontSize;
            ctx.font = `${fontSize}px ${randomFont}`;

            // Calculate the x position of the character to center it within its allocated space
            const charWidth = ctx.measureText(char).width;
            const charOffsetX = offsetX + (characterWidth - charWidth) / 2;

            // Set the fill style to a random color for each character
            ctx.fillStyle = getRandomColor(backgroundColor);

            // Save the current context
            ctx.save();

            // Calculate a random rotation angle between -0.3 and 0.3 radians
            const rotation = Math.random() * 0.8 - 0.4;

            // Translate and rotate context
            ctx.translate(charOffsetX + charWidth / 2, verticalCenter); // Adjust Y position based on canvas height
            ctx.rotate(rotation);

            // Draw the character
            ctx.fillText(
                char,
                -charWidth / 2,
                fontSize / 2 - canvas.height * 0.1,
            ); // Adjust Y position to center text vertically

            // Restore the context
            ctx.restore();

            // Increment offsetX for the next character, adjust spacing as needed
            offsetX += characterWidth;
        });
    }
}
