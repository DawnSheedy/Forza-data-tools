import './../CarDiagram.css';
import { useSpring, animated, config } from 'react-spring'
import { useEffect } from 'react';

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function WheelDiagram(props) {

    const diagramStyles= useSpring({
        height: props.invert ? (100-props.telemetry[props.dataIndex][props.wheelDataType+props.wheel].map(0,props.mapTop,0,100))+"px" :
                (props.telemetry[props.dataIndex][props.wheelDataType+props.wheel].map(0,props.mapTop,0,100))+"px",
        config: config.stiff 
    })

  return (
    <div className={`wheel-diag__indicator-container ${props.border ? 'border' : ''}`} style={{width: props.width+"px"}}>
        <span className={`wheel-diag__indicator-label ${props.telemetry[props.dataIndex][props.wheelDataType+props.wheel].map(0,props.mapTop,0,100) > 90 ? 'flicker' : ''}`}>{props.label}</span>
        <animated.div className={`wheel-diag__indicator-bar ${props.classMod ? props.classMod : ''}`} style={diagramStyles}>
        </animated.div>
        
    </div>
  );
}

export default WheelDiagram;
