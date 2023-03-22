import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FAST_ADD_ITEM_MODAL_ID } from "~/const/modalIds";
import { api } from "~/utils/api";

type FormData = {
  description: string;
  title: string;
};

export const FastForm = () => {
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
    <>
      <input
        type="checkbox"
        id={FAST_ADD_ITEM_MODAL_ID}
        className="modal-toggle"
      />
      <label
        className="modal modal-bottom cursor-pointer sm:modal-middle"
        htmlFor={FAST_ADD_ITEM_MODAL_ID}
        ref={modalControlInput}
      >
        <div className="modal-box relative text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input-bordered input-primary input mb-4 w-full max-w-xs"
              {...register("title", { required: true })}
            />
            <button type="submit" className="btn-primary btn">
              Add task
            </button>
          </form>
        </div>
      </label>
    </>
  );
};
