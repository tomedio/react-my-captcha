import hexToRgb from "./hexToRgb";
import rgbToLuminance from "./rgbToLuminance";

/**
 * Get the contrast ratio between two colors
 */
export default function getContrastRatio(
    foreground: string,
    background: string,
): number {
    const rgbForeground = hexToRgb(foreground);
    const rgbBackground = hexToRgb(background);
    const luminanceForeground = rgbToLuminance(rgbForeground);
    const luminanceBackground = rgbToLuminance(rgbBackground);
    const brightest = Math.max(luminanceForeground, luminanceBackground);
    const darkest = Math.min(luminanceForeground, luminanceBackground);
    return (brightest + 0.05) / (darkest + 0.05);
}
