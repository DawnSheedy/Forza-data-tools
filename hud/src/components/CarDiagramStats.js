import { useEffect } from 'react';

import { useSpring, animated, config } from 'react-spring'

import './../CarDiagram.css';

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var classes = ['D','C','B','A','S1','S2','X']
var drivetrain = ['FWD', 'RWD', 'AWD']

function CarDiagramStats(props) {
    const brakeStyles= useSpring({
        width: props.telemetry[4].Brake.map(0,255,0,200)+"px",
        config: config.stiff 
    })

    const throttleStyles= useSpring({
        width: props.telemetry[4].Accel.map(0,255,0,200)+"px",
        config: config.stiff 
    })

    

    return (
        <>
        <div class="car-diag__flex-container">
            <span className={`car-diag__label ${props.telemetry[0].CurrentEngineRpm > props.telemetry[2].EngineMaxRpm-800 ? " flicker" : ""}`}>{classes[props.telemetry[0].CarClass]}/{props.telemetry[0].CarPerformanceIndex}/{drivetrain[props.telemetry[0].DrivetrainType]}</span>
            <span className={`car-diag__label ${props.telemetry[0].CurrentEngineRpm > props.telemetry[2].EngineMaxRpm-800 ? " flicker" : ""}`}>{Math.trunc(props.telemetry[2].Speed*2.23694)} MPH</span>
        </div>
        </>
    );
}

export default CarDiagramStats;
