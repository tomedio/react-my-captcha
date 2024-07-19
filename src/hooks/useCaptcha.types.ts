export interface UseCaptchaReturn {
    /**
     * Indicates whether the current captcha input by the user is valid.
     */
    isCaptchaValid: boolean;

    /**
     * Function to be called when the captcha input changes.
     * It sets `isCaptchaValid` to true if the input is empty and `isCaptchaValid` is false.
     * @param text The current text input by the user.
     */
    onInputChange: (text: string) => void;

    /**
     * Function to refresh the captcha. It updates the `captchaText` with a new value and sets `isCaptchaValid` to true.
     * @param text The new captcha text.
     */
    onCaptchaRefresh: (text: string) => void;

    /**
     * Validates the current user input against the captcha text.
     * @param currentText The text input by the user to validate against the captcha.
     * @returns `true` if the input matches the captcha text, otherwise `false`.
     */
    validate: (currentText: string) => boolean;
}
