import React from 'react';

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      onClick={onCancel}
    >
      <div
        className="bg-white p-2 rounded-lg shadow-lg text-center"
        onClick={e => e.stopPropagation()}
      >
        <p className="text-xs font-semibold text-gray-800 mb-1">Are you sure?</p>
        <div className="flex justify-center gap-1">
          <button
            className="px-2 py-1 rounded-md font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors" // Cor de confirmação (verde)
            onClick={onConfirm}
          >
            <p className='text-[8px]'>Yes</p>
          </button>
          <button
            className="px-2 py-1 rounded-md font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors" // Botão mais opaco/neutro
            onClick={onCancel}
          >
            <p className='text-[8px]'>No</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;