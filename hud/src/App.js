import React, { useEffect, useState } from 'react'

import io from 'socket.io-client'

import logo from './logo.svg';
import './App.css';
import './Effects.css';

import CarDiagram from './components/CarDiagram'

const testJSON = '[{"CarClass":3,"CarOrdinal":3402,"CarPerformanceIndex":786,"DrivetrainType":1,"IsRaceOn":1,"NumCylinders":6,"WheelOnRumbleStripFrontLeft":0,"WheelOnRumbleStripFrontRight":0,"WheelOnRumbleStripRearLeft":0,"WheelOnRumbleStripRearRight":0} , {"TimestampMS":575167390} , {"AccelerationX":-0.000912873,"AccelerationY":-0.00034956177,"AccelerationZ":0.0037278717,"AngularVelocityX":-0.0003248395,"AngularVelocityY":-6.513044e-7,"AngularVelocityZ":0.0000064771593,"BestLap":0,"Boost":-11.024997,"CurrentEngineRpm":1036.9966,"CurrentLap":0,"CurrentRaceTime":14.418908,"DistanceTraveled":0,"EngineIdleRpm":1036.9794,"EngineMaxRpm":7499.996,"Fuel":1,"LastLap":0,"NormalizedSuspensionTravelFrontLeft":0.38642973,"NormalizedSuspensionTravelFrontRight":0.39079604,"NormalizedSuspensionTravelRearLeft":0.3619641,"NormalizedSuspensionTravelRearRight":0.3569982,"Pitch":-0.00002781853,"PositionX":5624.6113,"PositionY":103.44912,"PositionZ":864.23376,"Power":-0.037454274,"Roll":-0.000020598447,"Speed":0.0001380451,"SurfaceRumbleFrontLeft":0,"SurfaceRumbleFrontRight":0,"SurfaceRumbleRearLeft":0,"SurfaceRumbleRearRight":0,"SuspensionTravelMetersFrontLeft":0.00012164563,"SuspensionTravelMetersFrontRight":0.00042535365,"SuspensionTravelMetersRearLeft":-0.000071428716,"SuspensionTravelMetersRearRight":-0.00040510297,"TireCombinedSlipFrontLeft":0.017238792,"TireCombinedSlipFrontRight":0.027859047,"TireCombinedSlipRearLeft":0.0239511,"TireCombinedSlipRearRight":0.023262681,"TireSlipAngleFrontLeft":0.0025646798,"TireSlipAngleFrontRight":0.0011522679,"TireSlipAngleRearLeft":-0.0007292195,"TireSlipAngleRearRight":-0.00034771257,"TireSlipRatioFrontLeft":0.017046945,"TireSlipRatioFrontRight":0.027835207,"TireSlipRatioRearLeft":-0.023939997,"TireSlipRatioRearRight":-0.023260083,"TireTempFrontLeft":139.58505,"TireTempFrontRight":139.20218,"TireTempRearLeft":139.28595,"TireTempRearRight":139.28595,"Torque":-0.00034490175,"VelocityX":9.851174e-7,"VelocityY":5.672499e-7,"VelocityZ":-0.00013804041,"WheelInPuddleDepthFrontLeft":0,"WheelInPuddleDepthFrontRight":0,"WheelInPuddleDepthRearLeft":0,"WheelInPuddleDepthRearRight":0,"WheelRotationSpeedFrontLeft":0,"WheelRotationSpeedFrontRight":0,"WheelRotationSpeedRearLeft":0,"WheelRotationSpeedRearRight":0,"Yaw":-2.9014394} , {"LapNumber":0} , {"Accel":0,"Brake":0,"Clutch":0,"Gear":1,"HandBrake":0,"RacePosition":0} , {"NormalizedAIBrakeDifference":0,"NormalizedDrivingLine":0,"Steer":0}]'

function App() {

  const [socket, setSocket] = useState(null)
  const [data, setData] = useState(JSON.parse(testJSON))

  /*
    Connect to socket.io
  */

  useEffect(() => {
    const newSocket = io(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port)
    setSocket(newSocket)

    newSocket.on('connect', (data) => {
      console.log("Connected")
    })

    newSocket.on('telemetry', (snapshot) => {
      setData(JSON.parse(snapshot))
    })
    return () => newSocket.close()
  }, [setSocket])

  return (
    <div className="App crt-abberation">
      <CarDiagram telemetry={data} />
    </div>
  );
}

export default App;
