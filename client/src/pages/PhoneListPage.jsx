import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneList from '../components/PhoneList';
import PhoneSinglePage from '../components/PhoneSinglePage';
import { loadPhones } from '../services/phone';

const PhoneListPage = () => {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    loadPhones().then((phones) => {
      console.log(phones);
      console.log(phones.phones);
      setPhones(phones.phones);
    });
  }, []);

  return (
    <div>
      <h1>PHONE LIST</h1>
      <ul>
        {phones &&
          phones.map((phone) => (
            <li key={phone.id}>
              <PhoneList phoneId={phone.id} phone={phone} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PhoneListPage;
