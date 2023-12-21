import './PhonebookModal.css';

interface PhonebookProps {
  onClose: () => void;
}

function PhonebookModal({ onClose }: PhonebookProps) {
  return (
    <div className="modal">
      <h2>Phonebook modal!</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default PhonebookModal;
