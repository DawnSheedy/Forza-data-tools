import { useEffect } from 'react';

import { useSpring, animated, config } from 'react-spring'

import './../CarDiagram.css';

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var classes = ['D','C','B','A','S1','S2','X']
var drivetrain = ['FWD', 'RWD', 'AWD']

function CarDiagramStats(props) {

    const throttleStyles= useSpring({
        width: props.telemetry[2].CurrentEngineRpm.map(0,props.telemetry[2].EngineMaxRpm+(props.telemetry[2].EngineMaxRpm*.05),0,100)+"%",
        config: config.stiff 
    })

    

    return (
        <>
        <div class="car-diag__flex-container">
            
            <div class={`tach-container${props.telemetry[2].CurrentEngineRpm > props.telemetry[2].EngineMaxRpm-800 ? " flicker" : ""}`}>
                <span class="tach-label">RPM: {Math.trunc(props.telemetry[2].CurrentEngineRpm)}</span>
                <animated.div class="tach-bar" style={throttleStyles}></animated.div>
                <div class="tach-redline"></div>
            </div>
            <span className={`car-diag__label dim ${props.telemetry[2].CurrentEngineRpm > props.telemetry[2].EngineMaxRpm-800 ? " flicker" : ""}`}>LIMIT</span>
        </div>
        </>
    );
}

export default CarDiagramStats;
