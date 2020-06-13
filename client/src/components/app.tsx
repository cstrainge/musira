
import * as React from 'react';
import * as graph from './graph';


export interface AppProps {
    compiler: string;
    framework: string;
}


export function App(props: AppProps): JSX.Element {
    return <React.Fragment>
        <p>Hello from {props.compiler} and {props.framework}</p>
        <graph.Graph width={600} height={200}/>
    </React.Fragment>;
}


export function audio() {
    const context = new AudioContext();

    const oscillator = context.createOscillator();
    const filter = context.createBiquadFilter();

    return [ oscillator, filter ];
}

/**
 * tsc --watch
 * npm run tsc-watch
 * npm run start
 */
