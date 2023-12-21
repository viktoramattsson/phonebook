import { useEffect, useState } from 'react';
import './modal.css';

interface PhonebookProps {
  onClose: () => void;
}

interface numbers {
  id: number;
  name: string;
  number: string;
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

  const formatNumber = (number: string): string => {
    const firstFourDigits = number.slice(0, 4);
    const remainingDigits = number.slice(4);
    return `${firstFourDigits} - ${remainingDigits}`;
  };

  return (
    <div className="modal">
      <h2>Your contacts</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.name}</td>
              <td>{formatNumber(entry.number)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default PhonebookModal;
