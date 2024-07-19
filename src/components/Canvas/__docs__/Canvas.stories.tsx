import { StoryObj, Meta } from "@storybook/react";
import Canvas from "../Canvas";
import { CanvasProps } from "../Canvas.types";

export default {
    title: "components/Canvas",
    component: Canvas,
} as Meta;

export const Default: StoryObj<CanvasProps> = {
    argTypes: {
        captchaText: {
            description: "Text to be drawn on the captcha canvas.",
        },
        backgroundColor: {
            description: "Background color of the captcha canvas.",
        },
        width: {
            description: "Width of the captcha canvas.",
        },
        height: {
            description: "Height of the captcha canvas.",
        },
        minPoints: {
            description: "Minimum number of points to be drawn on the captcha.",
        },
        maxPoints: {
            description: "Maximum number of points to be drawn on the captcha.",
        },
        minLines: {
            description: "Minimum number of lines to be drawn on the captcha.",
        },
        maxLines: {
            description: "Maximum number of lines to be drawn on the captcha.",
        },
        fontFamilies: {
            description: "Array of font families for the captcha text.",
        },
        minFontSize: {
            description: "Minimum font size for the captcha text.",
        },
        maxFontSize: {
            description: "Maximum font size for the captcha text.",
        },
    },
    args: {
        captchaText: "V2LOKcB",
        backgroundColor: "#ffffff",
        width: 200,
        height: 50,
        minPoints: 10,
        maxPoints: 20,
        minLines: 3,
        maxLines: 5,
        fontFamilies: ["Arial", "Verdana", "Courier New", "Georgia"],
        minFontSize: 20,
        maxFontSize: 30,
    },
};
