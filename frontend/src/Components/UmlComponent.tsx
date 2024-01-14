import React from 'react';
import './UmlComponent.css';

interface UmlComponentProps {
  onClose: () => void;
}

const UmlComponent: React.FC<UmlComponentProps> = ({ onClose }) => {
  return (
    <div className="uml">
      <img src="../../public/uml.png" alt="" />
      <button className="close" onClick={onClose}>
        Close UML
      </button>
    </div>
  );
};

export default UmlComponent;
