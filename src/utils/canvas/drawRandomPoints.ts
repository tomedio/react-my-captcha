import getRandomColor from "../color/getRandomColor";

/**
 * Draw a random number of points on the canvas
 */
export default function drawRandomPoints(
    canvas: HTMLCanvasElement,
    backgroundColor: string,
    minPoints: number,
    maxPoints: number,
): void {
    const pointsCount =
        Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;

    const ctx = canvas.getContext("2d");
    if (ctx) {
        for (let i = 0; i < pointsCount; i++) {
            // Generate a random position for each point
            const x = Math.floor(Math.random() * canvas.width);
            const y = Math.floor(Math.random() * canvas.height);

            // Choose a random color for the point
            const color = getRandomColor(backgroundColor);

            // Draw the point
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI); // Adjust the radius as needed
            ctx.fillStyle = color;
            ctx.fill();
        }
    }
}
