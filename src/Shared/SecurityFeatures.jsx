import React from 'react';
import { FaCamera, FaLock, FaUserShield, FaExclamationTriangle, FaFireExtinguisher, FaKey } from 'react-icons/fa';
import Title from '../Components/Title';

const SecurityFeatures = () => {
  return (
    <div className="container mx-auto">
      <Title heading={"security & safety"}></Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* CCTV  */}
        <div className="flex flex-col items-center text-center p-4 bg-neutral rounded-xl shadow-lg">
          <FaCamera className="text-4xl text-accent mb-4" />
          <p className="font-medium text-lg text-primary">24/7 CCTV Surveillance</p>
          <p className="text-primary-light">Surveillance cameras are installed throughout the building.</p>
        </div>

        {/* Gated Entrance  */}
        <div className="flex flex-col items-center text-center p-4 bg-neutral rounded-xl shadow-lg">
          <FaLock className="text-4xl text-accent mb-4" />
          <p className="font-medium text-lg text-primary">Secure Gated Entrance</p>
          <p className="text-primary-light">Secure access with controlled entry points to the building.</p>
        </div>

        {/* Security Guards  */}
        <div className="flex flex-col items-center text-center p-4 bg-neutral rounded-xl shadow-lg">
          <FaUserShield className="text-4xl text-accent mb-4" />
          <p className="font-medium text-lg text-primary">Trained Security Guards</p>
          <p className="text-primary-light">Trained security personnel are on-site 24/7 for your safety.</p>
        </div>

        {/* Emergency Alarms  */}
        <div className="flex flex-col items-center text-center p-4 bg-neutral rounded-xl shadow-lg">
          <FaExclamationTriangle className="text-4xl text-accent mb-4" />
          <p className="font-medium text-lg text-primary">Emergency Alarm Systems</p>
          <p className="text-primary-light">Instant alarms are triggered for emergencies throughout the building.</p>
        </div>

        {/* Fire Safety Systems  */}
        <div className="flex flex-col items-center text-center p-4 bg-neutral rounded-xl shadow-lg">
          <FaFireExtinguisher className="text-4xl text-accent mb-4" />
          <p className="font-medium text-lg text-primary">Fire Safety Systems</p>
          <p className="text-primary-light">Equipped with fire extinguishers and smoke detectors for your protection.</p>
        </div>

        {/* Access Control System  */}
        <div className="flex flex-col items-center text-center p-4 bg-neutral rounded-xl shadow-lg">
          <FaKey className="text-4xl text-accent mb-4" />
          <p className="font-medium text-lg text-primary">Electronic Access Control</p>
          <p className="text-primary-light">Residents use secure keycards for authorized entry into the building.</p>
        </div>
      </div>

    </div>

  );
};

export default SecurityFeatures;
