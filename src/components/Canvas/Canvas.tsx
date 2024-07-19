import React, { useEffect, useRef } from "react";

import { CanvasProps } from "./Canvas.types";
import drawTextRandomly from "../../utils/canvas/drawTextRandomly";
import drawRandomPoints from "../../utils/canvas/drawRandomPoints";
import drawRandomLines from "../../utils/canvas/drawRandomLines";

export const Canvas = (props: CanvasProps) => {
    const {
        captchaText,
        backgroundColor = "#ffffff",
        width = 200,
        height = 50,
        minPoints = 10,
        maxPoints = 20,
        minLines = 3,
        maxLines = 5,
        fontFamilies = ["Arial", "Verdana", "Courier New", "Georgia"],
        minFontSize = 20,
        maxFontSize = 30,
    } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            drawTextRandomly(
                canvas,
                captchaText,
                backgroundColor,
                fontFamilies,
                minFontSize,
                maxFontSize,
            );
            drawRandomPoints(canvas, backgroundColor, minPoints, maxPoints);
            drawRandomLines(canvas, backgroundColor, minLines, maxLines);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        captchaText,
        backgroundColor,
        width,
        height,
        minPoints,
        maxPoints,
        minLines,
        maxLines,
        fontFamilies,
        minFontSize,
        maxFontSize,
    ]);

    return (
        <canvas
            className="captcha-canvas"
            ref={canvasRef}
            width={width}
            height={height}
        />
    );
};

Canvas.displayName = "Canvas";
