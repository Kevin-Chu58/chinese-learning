import { useRef, useEffect, PropsWithChildren, useState } from "react";
import { Grid } from "@mui/material";
import React from "react";
import "./style.css";

type Props = {
    hasDialog?: boolean | false;
    open: boolean;
    canvasType: string;
    lines?: [];
    nodes?: [];
    width: number;
    height: number;
    size: number;
    lineWidth: number;
    radius: number;
    color?: string;
    text: string;
    onClick?: (event: {}) => void;
};

const InteractiveGrid = ({
    hasDialog,
    open,
    canvasType,
    lines,
    nodes,
    width,
    height,
    size,
    lineWidth,
    radius,
    color,
    text,
    onClick,
    ...otherProps
}: PropsWithChildren<Props>) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(
        null
    );

    useEffect(() => {
        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext("2d");

            if (renderCtx) {
                setContext(renderCtx);
            }
        }

        const canvasColor = color ?? "black";

        switch (canvasType) {
            case "line-node":
                // use [].concat() to avoid throwing undefined forEach error
                const lineList = lines ?? [];
                const nodeList = nodes ?? [];

                // drawing
                lineList.forEach((line) => {
                    Line(
                        context,
                        line[0],
                        line[1],
                        line[2],
                        line[3],
                        size,
                        lineWidth,
                        radius,
                        canvasColor
                    );
                });

                nodeList.forEach((node) => {
                    Node(
                        context,
                        node[0],
                        node[1],
                        node[2],
                        size,
                        lineWidth,
                        radius,
                        canvasColor
                    );
                });
                break;
            case "hanzi-grid":
                HanziGrid(context, width, height, 2, canvasColor);
                break;
            default:
            // DO NOTHING
        }
    }, [
        canvasType,
        lines,
        nodes,
        context,
        size,
        lineWidth,
        radius,
        color,
        width,
        height,
    ]);

    const Line = (
        ctx: CanvasRenderingContext2D | null,
        colStart: number,
        rowStart: number,
        colEnd: number,
        rowEnd: number,
        size: number,
        lineWidth: number,
        radius: number,
        color: string
    ) => {
        let centerStartX =
            rowStart * size + size / 2 + (rowStart < rowEnd ? radius : 0);
        let centerStartY =
            colStart * size +
            size / 2 +
            (colStart < colEnd ? radius : colStart > colEnd ? -radius : 0);
        let centerEndX =
            rowEnd * size + +size / 2 + (rowStart < rowEnd ? -radius : 0);
        let centerEndY =
            colEnd * size +
            +size / 2 +
            (colStart < colEnd ? -radius : colStart > colEnd ? radius : 0);

        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(centerStartX, centerStartY);
            ctx.lineTo(centerEndX, centerEndY);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    };

    const Node = (
        ctx: CanvasRenderingContext2D | null,
        isFilled: boolean,
        col: number,
        row: number,
        size: number,
        lineWidth: number,
        radius: number,
        color: string
    ) => {
        let centerX = row * size + size / 2;
        let centerY = col * size + size / 2;

        if (ctx) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            if (isFilled) {
                ctx.fillStyle = color;
                ctx.fill();
            }
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    };

    const HanziGrid = (
        ctx: CanvasRenderingContext2D | null,
        width: number,
        height: number,
        lineWidth: number,
        color: string
    ) => {
        const dottedLinePattern = [2, 2];

        if (ctx) {
            ctx.beginPath();

            // draw grid outlines
            ctx.moveTo(0 + lineWidth / 2, 0);
            ctx.lineTo(0 + lineWidth / 2, width);

            ctx.moveTo(height - lineWidth / 2, 0);
            ctx.lineTo(height - lineWidth / 2, width);

            ctx.moveTo(0, 0 + lineWidth / 2);
            ctx.lineTo(height, 0 + lineWidth / 2);

            ctx.moveTo(0, width - lineWidth / 2);
            ctx.lineTo(height, width - lineWidth / 2);

            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.stroke();

            ctx.beginPath();

            // draw dotted line intercross inside the grid
            ctx.setLineDash(dottedLinePattern);

            ctx.moveTo(height / 2, 0);
            ctx.lineTo(height / 2, width);

            ctx.moveTo(0, width / 2);
            ctx.lineTo(height, width / 2);

            ctx.moveTo(0, 0);
            ctx.lineTo(height, width);

            ctx.moveTo(height, 0);
            ctx.lineTo(0, width);

            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    };

    return (
        <Grid className="container" style={{ fontSize: `${size}px` }}>
            <div className="square">
                <canvas ref={canvasRef} width={width} height={height} />
                <div
                    onClick={hasDialog ? onClick : () => {}}
                    className={
                        canvasType === "line-node"
                            ? "line-node-layout"
                            : "hanzi-grid-layout"
                    }
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        marginTop: `-${height + size / 4}px`,
                    }}
                >
                    <div className="text" style={{ lineHeight: `${height}px` }}>
                        {text}
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default InteractiveGrid;
