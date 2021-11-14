import { useEffect } from 'react';

import { useSpring, animated, config } from 'react-spring'

import './../CarDiagram.css';

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function CarDiagramBrakes(props) {
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
            <animated.span className={`car-diag__label dim ${props.telemetry[4].HandBrake > 0 ? " flicker" : ""}`}>BRAKE</animated.span>
            <animated.span className={`car-diag__label dim ${props.telemetry[4].Clutch > 0 ? " flicker" : ""}`}>CLUTCH</animated.span>
            <span className={`car-diag__label ${props.telemetry[2].CurrentEngineRpm > props.telemetry[2].EngineMaxRpm-800 ? " flicker" : ""}`}>GEAR: {props.telemetry[4].Gear == 0 ? 'R' : props.telemetry[4].Gear}</span>
            <div class='car-diag__throttle-brake-container'>
                <animated.div className="car-diag__brakes" style={brakeStyles} />
                <animated.div className="car-diag__accel" style={throttleStyles} />
            </div>
        </div>
        </>
    );
}

export default CarDiagramBrakes;
