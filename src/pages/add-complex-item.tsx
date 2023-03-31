import { useForm, Controller } from "react-hook-form";
import { type ComplexAddItemSchema } from "~/schema/forms";
import { api } from "~/utils/api";
import Datepicker from "react-tailwindcss-datepicker";

const AddComplexItem = () => {
  const { control, handleSubmit, register, reset } =
    useForm<ComplexAddItemSchema>({
      mode: "onSubmit",
    });
  const utils = api.useContext();
  const mutation = api.task.addComplexTask.useMutation({
    // onMutate: async (newEntry) => {
    //   await utils.task.getUnresolved.cancel();
    //   utils.task.getUnresolved.setData(undefined, (prevEntries) => {
    //     if (prevEntries) {
    //       return [newEntry, ...prevEntries];
    //     } else {
    //       return [newEntry];
    //     }
    //   });
    // },
    onSettled: async () => {
      reset();
      await utils.task.getUnresolved.invalidate();
    },
  });

  const onSubmit = (data: ComplexAddItemSchema) => {
    console.log("whatttt", data);
    // mutation.mutate(data);
  };

  return (
    <div className="p-3">
      <form
        onSubmit={(data) => {
          data.preventDefault();
          console.log("piceee", data);
          void handleSubmit(onSubmit)(data);
        }}
      >
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          className="input-bordered input-primary input mb-4 w-full"
          {...register("title", { required: true })}
        />
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="input-bordered input-primary input mb-4 block w-full resize-none"
          {...register("description", { required: true })}
        />
        <label className="label">
          <span className="label-text">Due date</span>
        </label>
        <Controller
          name="dueDate"
          control={control}
          render={({ field }) => {
            console.log("wtf is this", field);
            return (
              <Datepicker
                {...field}
                // @ts-expect-error - fix of console error
                ref={null} // To prevent error - field contains ref value
                value={field.value}
                containerClassName="mb-4 w-auto"
                inputClassName="input-bordered input-primary input bg-transparent"
                asSingle={true}
                useRange={false}
              />
            );
          }}
        />
        <button className="btn-primary btn">Add task</button>
      </form>
    </div>
  );
};

export default AddComplexItem;
