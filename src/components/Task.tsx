import { api } from "~/utils/api";

type TaskProps = {
  description: string | null;
  id: string;
  title: string;
};

export const Task = ({ description, id, title }: TaskProps) => {
  const utils = api.useContext();
  const finishTask = api.task.finishTask.useMutation({
    onSettled: async () => {
      await utils.task.getUnresolved.invalidate();
    },
  });
  const removeTask = api.task.removeTask.useMutation({
    onSettled: async () => {
      await utils.task.getUnresolved.invalidate();
    },
  });

  return (
    <div
      key={id}
      className="w-full rounded-lg bg-info-content py-3 px-5 text-neutral-content"
    >
      <div className="">
        <div className="mb-2">{title}</div>
        {description && <div>{description}</div>}
        <div className="flex justify-between">
          <button
            className="btn-primary btn-sm btn-square btn"
            onClick={() => finishTask.mutate({ id })}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M200 350C282.843 350 350 282.843 350 200C350 117.157 282.843 50 200 50C117.157 50 50 117.157 50 200C50 282.843 117.157 350 200 350Z"
                stroke="hsl(var(--pc))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M282.39 140.6L163.59 259.4L117.61 213.41"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="btn-outline btn-sm btn-square btn"
            type="button"
            onClick={() => removeTask.mutate({ id })}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M251.52 350H148.48C120.49 350 97.8 327.31 97.8 299.32V85.51H302.2V299.32C302.2 327.31 279.51 350 251.52 350Z"
                stroke="hsl(var(--pc))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M150.79 149.42V286.65"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M200 149.42V286.65"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M249.21 149.42V286.65"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M82.6599 85.51H317.34"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M162.25 85.51V73.25C162.25 60.41 172.66 50 185.5 50H214.5C227.34 50 237.75 60.41 237.75 73.25V85.51"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
