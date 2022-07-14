import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneList from '../components/PhoneList';
import PhoneSinglePage from '../components/PhoneSinglePage';
import { loadPhones } from '../services/phone';
import './PhoneListPage.scss';

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
      <div className="hero">
        <h1>Welcome to Phonecave</h1>
        <p>Check out our latest listings below</p>
      </div>
      <div className="phone-list-box">
        <ul>
          {phones &&
            phones.map((phone) => (
              <li key={phone.id}>
                <PhoneList phoneId={phone.id} phone={phone} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PhoneListPage;
