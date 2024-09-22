import React from "react";

function LeaveTeamPopup({ visible, onConfirm, onCancel }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg font-semibold mb-4">Are you sure you want to leave the team?</p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeaveTeamPopup;
