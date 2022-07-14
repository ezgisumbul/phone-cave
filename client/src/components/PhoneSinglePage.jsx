import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadSinglePhone } from '../services/phone';

const PhoneSinglePage = ({ phoneId }) => {
  const [phone, setPhone] = useState(null);
  // const { id } = useParams();

  useEffect(() => {
    loadSinglePhone(phoneId)
      .then((result) => {
        // console.log(phone);
        setPhone(result.phone);
      })
      .catch((err) => console.log(err));
  }, [phoneId]);

  return (
    <div>
      <h1>SINGLE Phone</h1>
      {phone && (
        <div>
          <h1>{phone.name}</h1>
          <img src={`/images/${phone.imageFileName}`} alt={phone.name} />
          <p>
            <b>Description: </b>
            {phone.description}
          </p>
          <p>
            <b>Manufacturer: </b>
            {phone.manufacturer}
          </p>
          <p>
            <b>Color: </b>
            {phone.color}
          </p>
          <p>
            <b>Screen size: </b>
            {phone.screen}
          </p>
          <p>
            <b>RAM: </b>
            {phone.ram}
          </p>
          <p>
            <b>Processor: </b>
            {phone.processor}
          </p>
          <p>
            <b>Price: </b>
            {phone.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhoneSinglePage;
