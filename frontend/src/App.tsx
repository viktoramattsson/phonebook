import { useState } from 'react';
import './App.css';
import PhonebookModal from './Components/PhonebookModal';
import AdminModal from './Components/AdminModal';
import LoginModal from './Components/LoginModal';
import UmlComponent from './Components/UmlComponent';

function App() {
  const [isPhonebookModalOpen, setPhonebookModalOpen] =
    useState<boolean>(false);
  const [isAdminModalOpen, setAdminModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isUmlModalOpen, setUmlModalOpen] = useState<boolean>(false);

  function openPhonebook() {
    setPhonebookModalOpen(true);
    setAdminModalOpen(false);
    setUmlModalOpen(false);
  }

  function closePhonebook() {
    setPhonebookModalOpen(false);
  }

  function openAdmin() {
    setAdminModalOpen(true);
    setPhonebookModalOpen(false);
    setUmlModalOpen(false);
  }

  function closeAdmin() {
    setAdminModalOpen(false);
  }

  function openUml() {
    setAdminModalOpen(false);
    setPhonebookModalOpen(false);
    setUmlModalOpen(true);
  }

  function closeUml() {
    setUmlModalOpen(false);
  }

  const handleLoginStatus = (childData: boolean) => {
    setIsLogin(childData);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <>
      {!isLogin && <LoginModal parentCallback={handleLoginStatus} />}

      {isLogin && (
        <button className="logout" onClick={handleLogout}>
          Log out
        </button>
      )}
      <h1>My Phonebook</h1>
      <div className="buttonContainer">
        <button onClick={openPhonebook}>Phonebook</button>
        <button onClick={openAdmin}>Add numbers</button>
        <button onClick={openUml}>UML</button>
      </div>
      {isPhonebookModalOpen && <PhonebookModal onClose={closePhonebook} />}
      {isAdminModalOpen && <AdminModal onClose={closeAdmin} />}
      {isUmlModalOpen && <UmlComponent onClose={closeUml} />}
    </>
  );
}

export default App;
