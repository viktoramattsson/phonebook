import  { useEffect, useState } from 'react';

import './modal.css';

interface PhonebookProps {
  onClose: () => void;
}

interface numbers {
  id: number,
  name: string,
  number: string
}

function PhonebookModal({ onClose }: PhonebookProps): JSX.Element {
  const [data, setData] = useState<numbers[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000');
        const result: numbers[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="modal">
      <h2>Phonebook modal!</h2>
      <p>{data && data.length>0 && data[0].name}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default PhonebookModal;
