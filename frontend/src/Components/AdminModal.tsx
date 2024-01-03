import { useState } from 'react';
import './modal.css';

interface AdminProps {
  onClose: () => void;
}

function AdminModal({ onClose }: AdminProps) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = { name, number };

      const response = await fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Contact added');
      } else {
        console.error('Failed to add data:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding data:', error);
    } finally {
      setName('');
      setNumber('');
    }
  };

  return (
    <>
      <div className="modal">
        <h2>Add number</h2>
        <form className="postForm" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Number:
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default AdminModal;
