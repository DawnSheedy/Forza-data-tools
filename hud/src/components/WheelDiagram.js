import './../CarDiagram.css';
import WheelDiagramBar from './WheelDiagramBar'
import WheelRPMDiagram from './WheelRPMDiagram';

function WheelDiagram(props) {
  return (
    <div class="wheel-diag__parent">
      <div className="wheel-diag__rpm-indicator">{props.wheel}</div>
    <WheelRPMDiagram telemetry={props.telemetry} wheel={props.wheel} />
    <div class="wheel-diag__container">
      
      <span className={`car-diag__water ${props.telemetry[2]["NormalizedSuspensionTravel"+props.wheel] < 0.01 ? " flicker" : ""}`}>AIRBORNE</span>
        <div class="wheel-diag">
        <div class="wheel-diag__flex-container">
            <WheelDiagramBar classMod="grip sideborder" mapTop={1} width={16} telemetry={props.telemetry} dataIndex={2} wheelDataType={"NormalizedSuspensionTravel"} wheel={props.wheel} label="SHOCK" />
            <WheelDiagramBar invert={true} border={true} classMod="grip sideborder" mapTop={1} width={16} telemetry={props.telemetry} dataIndex={2} wheelDataType={"TireCombinedSlip"} wheel={props.wheel} label="GRIP" />
            <WheelDiagramBar mapTop={350} width={16} border={true} telemetry={props.telemetry} dataIndex={2} wheelDataType={"TireTemp"} wheel={props.wheel} label="TEMP" />
        </div>
    </div>

    <span className={`car-diag__water ${props.telemetry[2]["WheelInPuddleDepth"+props.wheel] > 0 ? " flicker" : ""}`}>SUBMERGED</span>
    </div>
    <div className={`wheel-diag__indicator-label-flat ${props.telemetry[2]["TireCombinedSlip"+props.wheel] > .75 ? " flicker slow" : ""}`}>SLIPPING</div>
    </div>
  );
}

export default WheelDiagram;
