import { useState } from 'react';
import './App.css';
import PhonebookModal from './Components/PhonebookModal';
import AdminModal from './Components/AdminModal';

function App() {
  const [isPhonebookModalOpen, setPhonebookModalOpen] =
    useState<boolean>(false);
  const [isAdminModalOpen, setAdminModalOpen] = useState<boolean>(false);

  function openPhonebook() {
    setPhonebookModalOpen(true);
    setAdminModalOpen(false);
  }
  function closePhonebook() {
    setPhonebookModalOpen(false);
  }
  function openAdmin() {
    setAdminModalOpen(true);
    setPhonebookModalOpen(false);
  }
  function closeAdmin() {
    setAdminModalOpen(false);
  }

  return (
    <>
      <h1>My Phonebook</h1>
      <div className="buttonContainer">
        <button onClick={openPhonebook}>Phonebook</button>
        <button onClick={openAdmin}>Add numbers</button>
      </div>
      {isPhonebookModalOpen && <PhonebookModal onClose={closePhonebook} />}
      {isAdminModalOpen && <AdminModal onClose={closeAdmin} />}
    </>
  );
}

export default App;
