import { api } from "~/utils/api";

export const Task = ({ id, description }) => {
  const removeTask = api.task.removeTask.useMutation();

  return (
    <div className="w-full rounded-lg bg-neutral py-3 px-5 text-neutral-content">
      <div className="">
        {description}
        <button className="btn-sm btn">Done</button>
        <button
          className="btn-sm btn"
          type="button"
          onClick={() => removeTask.mutate({ id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
