import React from 'react';

type Props = {
  title: string,
};

export const TodoOnAdd: React.FC<Props> = ({ title }) => {
  return (
    <div
      data-cy="Todo"
      className="todo"
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {title}
      </span>

      <div data-cy="TodoLoader" className="modal overlay is-active">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
