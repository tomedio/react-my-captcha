import getContrastRatio from "./getContrastRatio";

/**
 * Get a random color with sufficient contrast to the background color
 */
export default function getRandomColor(
    backgroundColor: string,
    defaultColor: string = "#FFFFFF",
) {
    let contrastRatio = 0;
    const attempts = 0;
    let color = defaultColor;
    while (contrastRatio < 3 || attempts > 10) {
        // WCAG AA compliance for normal text
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        color = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
        contrastRatio = getContrastRatio(color, backgroundColor);
    }
    return color;
}
