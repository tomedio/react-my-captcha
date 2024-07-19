/**
 * Convert a hex color string to an RGB array
 */
export default function hexToRgb(hex: string): number[] {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "");
    // Parse the r, g, b values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}
