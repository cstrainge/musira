
import React from 'react';


export interface GraphProps {
    width: number;
    height: number;
}


function createGlContext(canvasRef: React.RefObject<HTMLCanvasElement>): WebGLRenderingContext {
    const canvas = canvasRef.current;

    if (canvas === null) {
        throw "Bad canvas reference!";
    }

    const glContext: WebGLRenderingContext | null = canvas.getContext("webgl");

    if (glContext === null) {
        throw "Could not create a WebGL context.";
    }

    glContext.clearColor(0.0, 0.0, 0.0, 1.0);
    glContext.clear(glContext.COLOR_BUFFER_BIT);

    return glContext;
}


export function Graph(props: GraphProps): JSX.Element {
    const canvasRef = React.createRef<HTMLCanvasElement>();
    const [ glContext, setGlContext ] = React.useState<WebGLRenderingContext>();

    React.useLayoutEffect(() => {
        setGlContext(createGlContext(canvasRef));
    });

    return <canvas ref={canvasRef} width={props.width} height={props.height}></canvas>;
}
