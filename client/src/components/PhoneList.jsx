import React, { useState } from 'react';
import PhoneSinglePage from './PhoneSinglePage';

const PhoneList = ({ phoneId, phone }) => {
  const [isExtended, setIsExtended] = useState(false);
  const handlePhoneExtend = () => {
    setIsExtended(!isExtended);
  };

  return (
    <div>
      <button onClick={handlePhoneExtend}>{phone.name}</button>
      {isExtended && <PhoneSinglePage phone={phone} phoneId={phoneId} />}
    </div>
  );
};

export default PhoneList;
