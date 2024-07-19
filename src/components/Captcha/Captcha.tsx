import React, { useState, useEffect, DetailedReactHTMLElement } from "react";

import { CaptchaProps } from "./Captcha.types";
import generateRandomText from "../../utils/generateRandomText";
import { Canvas } from "../Canvas";
import { DefaultButton } from "../DefaultButton";
import "./Captcha.css";

export const Captcha = (props: CaptchaProps) => {
    const {
        onCaptchaRefresh,
        onCaptchaValidate,
        onInputChange,
        minLength = 4,
        maxLength = 5,
        textInput,
        refreshButton,
        ...configProps
    } = props;
    const [captchaText, setCaptchaText] = useState<string>("");

    const generateCaptcha = (): void => {
        const result = generateRandomText(minLength, maxLength);
        setCaptchaText(result);
        onCaptchaValidate && onCaptchaValidate(false);
        onCaptchaRefresh && onCaptchaRefresh(result);
    };

    useEffect(() => {
        generateCaptcha();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const textChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const newValue = e.target.value;
        onInputChange && onInputChange(newValue);
        onCaptchaValidate && onCaptchaValidate(newValue === captchaText);
    };

    let enhancedTextInput = null;
    if (React.isValidElement(textInput)) {
        const existingOnChange = textInput.props.onChange;
        const mergedOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            textChangeHandler(e);
            existingOnChange && existingOnChange(e);
        };
        enhancedTextInput = React.cloneElement(
            textInput as DetailedReactHTMLElement<
                React.InputHTMLAttributes<HTMLInputElement>,
                HTMLInputElement
            >,
            { onChange: mergedOnChange },
        );
    }

    return (
        <div className={`captcha-container ${props.className}`}>
            <div className="captcha-main">
                <Canvas captchaText={captchaText} {...configProps} />
                <div className="captcha-button-control">
                    {React.isValidElement(refreshButton) ? (
                        React.cloneElement(
                            refreshButton as DetailedReactHTMLElement<
                                React.ButtonHTMLAttributes<HTMLButtonElement>,
                                HTMLButtonElement
                            >,
                            { onClick: generateCaptcha },
                        )
                    ) : (
                        <DefaultButton onClick={generateCaptcha} />
                    )}
                </div>
            </div>
            <div className="captcha-text-control">{enhancedTextInput}</div>
        </div>
    );
};

Captcha.displayName = "Captcha";
