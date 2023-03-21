import { api } from "~/utils/api";

type TaskProps = {
  description: string;
  id: string;
  title: string;
};

export const Task = ({ description, id, title }: TaskProps) => {
  //   const removeTask = api.task.removeTask.useMutation();

  return (
    <div className="w-full rounded-lg bg-info-content py-3 px-5 text-neutral-content">
      <div className="">
        <div>{title}</div>
        <div>{description}</div>
        <button className="btn-sm btn">Done</button>
        {/* <button
          className="btn-sm btn"
          type="button"
          onClick={() => removeTask.mutate({ id })}
        >
          Remove
        </button> */}
      </div>
    </div>
  );
};
