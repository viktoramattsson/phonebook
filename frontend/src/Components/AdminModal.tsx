import { useState } from 'react';
import './modal.css';

interface AdminProps {
  onClose: () => void;
}

function AdminModal({ onClose }: AdminProps) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
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
  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        console.log('Contact deleted');
      } else {
        console.error('Failed to delete contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    } finally {
      setName('');
    }
  };
  return (
    <>
      <div className="modal">
        <h2>Add number</h2>
        <form className="postForm" onSubmit={handleAdd}>
          <label>
            Name:
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Number:
            <input
              type="text"
              placeholder="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
        <form className="deleteForm" onSubmit={handleDelete}>
          <input
            type="text"
            placeholder="Name to delete"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Delete</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default AdminModal;
