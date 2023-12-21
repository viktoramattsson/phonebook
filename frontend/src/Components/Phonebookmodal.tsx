import { useEffect, useState } from 'react';

import './modal.css';

interface PhonebookProps {
  onClose: () => void;
}



function PhonebookModal({ onClose }: PhonebookProps) {

  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000');
        const result = await response.text();
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
      <p>{data || 'Loading...'}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default PhonebookModal;
