import getRandomColor from "../color/getRandomColor";

/**
 * Draw a random number of lines on the canvas
 */
export default function drawRandomLines(
    canvas: HTMLCanvasElement,
    backgroundColor: string,
    minLines: number,
    maxLines: number,
): void {
    // Determine the number of lines to draw
    const linesCount =
        Math.floor(Math.random() * (maxLines - minLines + 1)) + minLines;

    const ctx = canvas.getContext("2d");
    if (ctx) {
        for (let i = 0; i < linesCount; i++) {
            // Generate random start and end points for each line
            const startX = Math.floor(Math.random() * canvas.width);
            const startY = Math.floor(Math.random() * canvas.height);
            const endX = Math.floor(Math.random() * canvas.width);
            const endY = Math.floor(Math.random() * canvas.height);

            // Choose a random color for the line
            const color = getRandomColor(backgroundColor);

            // Draw the line
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
}
