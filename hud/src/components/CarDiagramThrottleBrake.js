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
        width: props.telemetry[4].Accel.map(0,255,0,100)+"%",
        config: config.stiff 
    })

    const brakeStyles= useSpring({
        width: props.telemetry[4].Brake.map(0,255,0,100)+"%",
        config: config.stiff 
    })

    const steerStyles= useSpring({
        width: props.telemetry[5].Steer.map(-127,127,0,100)+"%",
        config: config.stiff 
    })

    

    return (
        <>
        <div class="car-diag__flex-container">
            
            <div class={`tach-container half`}>
                <span class="tach-label half">STEER</span>
                <animated.div class="tach-bar steer" style={steerStyles}></animated.div>
            </div>
            
        </div>
        <div class="car-diag__flex-container">
            
            <div class={`tach-container half`}>
                <span class="tach-label half">THROTTLE</span>
                <animated.div class="tach-bar" style={throttleStyles}></animated.div>
            </div>
            
        </div>
        <div class="car-diag__flex-container">
            
            <div class={`tach-container half`}>
                <span class="tach-label half">BRAKE</span>
                <animated.div class="tach-bar" style={brakeStyles}></animated.div>
            </div>
            
        </div>
        </>
    );
}

export default CarDiagramStats;
