import React from "react";

type Props = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
};

const ConfirmModal = ({ open, onConfirm, onCancel, message }: Props) => {
  if (!open) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded shadow-md min-w-[300px]'>
        <p className='mb-4'>{message || "Are you sure?"}</p>
        <div className='flex justify-end gap-2'>
          <button onClick={onCancel} className='px-4 py-2 rounded bg-gray-200'>
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='px-4 py-2 rounded bg-red-600 text-white'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
