import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useCaptcha } from "../../../hooks";
import { Captcha } from "../Captcha";
import { CaptchaProps } from "../Captcha.types";

interface CaptchaExampleProps extends CaptchaProps {}

export const CaptchaExample: React.FC<CaptchaExampleProps> = (props) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { validate, isCaptchaValid, onCaptchaRefresh, onInputChange } =
        useCaptcha();

    const submitHandler: SubmitHandler<FieldValues> = (data) => {
        if (validate(data.captcha)) {
            console.log(data);
            console.info("Form is sent");
        } else {
            console.error("Captcha is invalid");
        }
    };

    const refreshHandler = (text: string) => {
        onCaptchaRefresh(text);
        props.onCaptchaRefresh && props.onCaptchaRefresh(text);
        // Reset only the captcha field, keeping other field values intact
        reset({ captcha: "" });
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="form-group">
            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: /^\S+@\S+$/i,
                })}
                className="form-control mt-3"
                placeholder="Email"
            />
            {errors.email && typeof errors.email.message === "string" && (
                <div className="invalid-feedback" style={{ display: "block" }}>
                    {errors.email.message}
                </div>
            )}
            <Captcha
                {...props}
                className="mt-3"
                onCaptchaRefresh={refreshHandler}
                onInputChange={onInputChange}
                onCaptchaValidate={props.onCaptchaValidate}
                textInput={
                    <input
                        {...register("captcha", {
                            required: "Captcha is required",
                        })}
                        className="form-control mt-3"
                        placeholder="Captcha"
                    />
                }
            />
            {errors.captcha && typeof errors.captcha.message === "string" && (
                <div className="invalid-feedback" style={{ display: "block" }}>
                    {errors.captcha.message}
                </div>
            )}
            {!isCaptchaValid && (
                <div className="invalid-feedback" style={{ display: "block" }}>
                    Captcha is invalid
                </div>
            )}
            <button type="submit" className="btn btn-primary mt-3">
                Submit
            </button>
        </form>
    );
};
