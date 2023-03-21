import { api } from "~/utils/api";

export const Task = ({ id, description }) => {
  const removeTask = api.task.removeTask.useMutation();

  return (
    <div>
      {description}
      <button type="button" onClick={() => removeTask.mutate({ id })}>
        Remove
      </button>
    </div>
  );
};
