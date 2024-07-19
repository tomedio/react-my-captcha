import { useState } from "react";
import { UseCaptchaReturn } from "./useCaptcha.types";

const useCaptcha = (): UseCaptchaReturn => {
    const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(true);
    const [captchaText, setCaptchaText] = useState<string>("");
    return {
        isCaptchaValid,
        onInputChange(text: string): void {
            !isCaptchaValid && text === "" && setIsCaptchaValid(true);
        },
        onCaptchaRefresh(text: string): void {
            setCaptchaText(text);
            setIsCaptchaValid(true);
        },
        validate(currentText: string): boolean {
            const result = currentText === captchaText;
            setIsCaptchaValid(result);
            return result;
        },
    };
};

export default useCaptcha;
