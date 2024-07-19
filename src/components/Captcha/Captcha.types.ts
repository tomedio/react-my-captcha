import React from "react";
import { ConfigurationProps } from "../Canvas/Canvas.types";

export interface CaptchaProps extends ConfigurationProps {
    /** Additional class name for the captcha component. */
    className?: string;
    /** Maximum length for the captcha input. */
    maxLength?: number;
    /** Minimum length for the captcha input. */
    minLength?: number;
    /** Callback function triggered on captcha refresh. */
    onCaptchaRefresh?: (captchaText: string) => void;
    /** Callback function triggered on input change. */
    onInputChange?: (inputValue: string) => void;
    /** Callback function triggered when captcha validation occurs. */
    onCaptchaValidate?: (isValid: boolean) => void;
    /** Refresh button as a React node. */
    refreshButton?: React.ReactNode;
    /** Input control to write captcha. */
    textInput?: React.ReactNode;
}
