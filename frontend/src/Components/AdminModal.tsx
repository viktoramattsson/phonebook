import './modal.css'

interface adminProps {
  onClose: () => void;
}

function AdminModal({ onClose }: adminProps) {

  return <>
  <div className="modal">
    <h2>Admin modal!</h2>
    <input type="text" />
    <input type="text" />

  <button onClick={onClose}>Close</button>
  </div>
  </>
}

export default AdminModal
