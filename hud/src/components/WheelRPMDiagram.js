import './../CarDiagram.css';
import { useSpring, animated, config } from 'react-spring'
import { useEffect, useState } from 'react';

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var startTime = new Date().getTime();
var mspr = -1000;
var startY = 0;//0-200, will be normalized
var curY = 0;


function WheelRPMDiagram(props) {

    function convertRadiansToRPM(radians) {
        let rps = radians/(2*Math.PI)

        let rpm = rps*60

        return rpm;
    }

  return (
    <div className="wheel-diag__rpm-indicator">RPM: {Math.trunc(convertRadiansToRPM(props.telemetry[2]['WheelRotationSpeed'+props.wheel]))}</div>
  );
}

export default WheelRPMDiagram;
