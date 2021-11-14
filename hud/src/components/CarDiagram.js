import './../CarDiagram.css';
import CarDiagramIO from './CarDiagramIO';
import CarDiagramStats from './CarDiagramStats';
import CarDiagramTach from './CarDiagramTach';
import CarDiagramThrottleBrake from './CarDiagramThrottleBrake';
import WheelDiagram from './WheelDiagram';

function CarDiagram(props) {
  return (
    <div class="car-diag">
      <div class="main-cluster">
        <CarDiagramStats telemetry={props.telemetry} />
        <CarDiagramTach telemetry={props.telemetry} />
        <div class="car-diag__flex-container">
            <WheelDiagram telemetry={props.telemetry} wheel={"FrontLeft"} />
            <WheelDiagram telemetry={props.telemetry} wheel={"FrontRight"} />
        </div>
        <div class="car-diag__flex-container">
            <WheelDiagram telemetry={props.telemetry} wheel={"RearLeft"} />
            <WheelDiagram telemetry={props.telemetry} wheel={"RearRight"} />
        </div>
        <CarDiagramThrottleBrake telemetry={props.telemetry} />
        <CarDiagramIO telemetry={props.telemetry} />
      </div>
    </div>
  );
}

export default CarDiagram;
