import './../CarDiagram.css';
import CarDiagramIO from './CarDiagramIO';
import WheelDiagram from './WheelDiagram';

function CarDiagram(props) {
  return (
    <div class="car-diag">
        <div class="car-diag__flex-container">
            <WheelDiagram telemetry={props.telemetry} wheel={"FrontLeft"} />
            <WheelDiagram telemetry={props.telemetry} wheel={"FrontRight"} />
        </div>
        <div class="car-diag__flex-container">
            <WheelDiagram telemetry={props.telemetry} wheel={"RearLeft"} />
            <WheelDiagram telemetry={props.telemetry} wheel={"RearRight"} />
        </div>
        <CarDiagramIO telemetry={props.telemetry} />
    </div>
  );
}

export default CarDiagram;
