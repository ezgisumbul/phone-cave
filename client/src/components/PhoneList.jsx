import React, { useState } from 'react';
import PhoneSinglePage from './PhoneSinglePage';
import './PhoneList.scss';

const PhoneList = ({ phoneId, phone }) => {
  const [isExtended, setIsExtended] = useState(false);
  const handlePhoneExtend = () => {
    setIsExtended(!isExtended);
  };

  return (
    <div className="phone-list">
      <div className="phone-header">
        <div>
          <h2>{phone.name}</h2>
        </div>
        <div>
          <button onClick={handlePhoneExtend}>View Details</button>
        </div>
      </div>

      {isExtended && <PhoneSinglePage phone={phone} phoneId={phoneId} />}
    </div>
  );
};

export default PhoneList;
