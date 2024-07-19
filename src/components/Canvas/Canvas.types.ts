export interface ConfigurationProps {
    /** Width of the captcha canvas. */
    width?: number;
    /** Height of the captcha canvas. */
    height?: number;
    /** Background color of the captcha canvas. */
    backgroundColor?: string;
    /** Minimum number of points to be drawn on the captcha. */
    minPoints?: number;
    /** Maximum number of points to be drawn on the captcha. */
    maxPoints?: number;
    /** Minimum number of lines to be drawn on the captcha. */
    minLines?: number;
    /** Maximum number of lines to be drawn on the captcha. */
    maxLines?: number;
    /** Array of font families for the captcha text. */
    fontFamilies?: string[];
    /** Minimum font size for the captcha text. */
    minFontSize?: number;
    /** Maximum font size for the captcha text. */
    maxFontSize?: number;
}

export interface CanvasProps extends ConfigurationProps {
    /** Text to be drawn on the captcha canvas. */
    captchaText: string;
}
