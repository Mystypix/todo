import { useRef } from "react";
import { useForm } from "react-hook-form";
import { api } from "../utils/api";

const ADD_ITEM_MODAL_ID = "add-item";

type FormData = {
  description: string;
  title: string;
};

export const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const modalControlInput = useRef<HTMLLabelElement>(null);
  const useMutate = api.task.addTask.useMutation();

  const onSubmit = (data: FormData) => {
    useMutate.mutate(data);
    modalControlInput?.current?.click();
  };

  return (
    <div>
      <label
        htmlFor={ADD_ITEM_MODAL_ID}
        className="btn-primary btn-circle btn fixed bottom-4 right-4"
      >
        +
      </label>
      <input type="checkbox" id={ADD_ITEM_MODAL_ID} className="modal-toggle" />
      <label
        className="modal modal-bottom cursor-pointer sm:modal-middle"
        htmlFor={ADD_ITEM_MODAL_ID}
      >
        <div className="modal-box relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input-bordered input-primary input mb-4 w-full max-w-xs"
              {...register("title", { required: true })}
            />
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea-primary textarea mb-4 w-full resize-none"
              {...register("description", { required: true })}
            ></textarea>
            <button type="submit" className="btn-primary btn">
              Add task
            </button>
          </form>
        </div>
      </label>
    </div>
  );
};
