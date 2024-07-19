import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { CaptchaExample as Captcha } from "./CaptchaExample";
import { CaptchaProps } from "../Captcha.types";

export default {
    title: "components/Captcha",
    component: Captcha,
} as Meta;

export const Default: StoryObj<CaptchaProps> = {
    args: {
        onCaptchaRefresh: action("Captcha refreshed"),
        onCaptchaValidate: action("Captcha validated"),
        width: 200,
        height: 50,
        backgroundColor: "#ffffff",
        minPoints: 10,
        maxPoints: 20,
        minLines: 3,
        maxLines: 5,
        fontFamilies: ["Arial", "Verdana", "Courier New", "Georgia"],
        minFontSize: 20,
        maxFontSize: 30,
    },
};

export const DifferentBackground: StoryObj<CaptchaProps> = {
    args: {
        ...Default.args,
        backgroundColor: "#D3D3D3", // Light Gray
    },
};

export const DifferentSize: StoryObj<CaptchaProps> = {
    args: {
        ...Default.args,
        width: 300,
        height: 100,
    },
};

export const DifferentPoints: StoryObj<CaptchaProps> = {
    args: {
        ...Default.args,
        minPoints: 80,
        maxPoints: 100,
    },
};

export const DifferentLines: StoryObj<CaptchaProps> = {
    args: {
        ...Default.args,
        minLines: 20,
        maxLines: 30,
    },
};

export const DifferentFontFamilies: StoryObj<CaptchaProps> = {
    args: {
        ...Default.args,
        fontFamilies: ["Times New Roman", "Comic Sans MS"],
    },
};

export const DifferentFontSizes: StoryObj<CaptchaProps> = {
    args: {
        ...Default.args,
        minFontSize: 15,
        maxFontSize: 45,
    },
};
