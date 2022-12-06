import React from "react";

export function VisibilityControl({ setShowCompleted, cleanTask, isChecked }) {
  const handleClean = () => {
    if (window.confirm("estas seguro de limpiar todos las tareas")) {
      cleanTask();
    }
  };

  return (
    <div
      className="d-flex justify-content-between bg-secondary text-white text-center
      p-2 border-secondary
    "
    >
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
          checked={isChecked}
        />{" "}
      </div>
      <label> Mostrar Tareas Hechas </label>
      <button onClick={handleClean} className="btn btn-danger btn-sm">
        Limpiar
      </button>
    </div>
  );
}
