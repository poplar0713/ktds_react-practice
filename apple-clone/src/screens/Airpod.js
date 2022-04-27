import React from 'react';
import '../Airpod.css';
import AirpodMenu from '../components/AirpodMenu';
import AirpodMedia from '../components/AirpodMedia';

function AirpodComponent() {
  return (
    <div>
      <AirpodMenu />
      <AirpodMedia />
    </div>
  );
}

export default AirpodComponent;
