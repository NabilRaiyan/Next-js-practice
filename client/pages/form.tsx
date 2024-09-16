import { useForm, SubmitHandler } from "react-hook-form";



export default function Form() {

  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      firstName: "",
      email: "",
    }
  });

  console.log(errors)
  return (
    <form className="flex flex-col w-[30%] justify-center" onSubmit={handleSubmit((data)=>{
      console.log(data)
    })}>
      <input className="border text-lg border-orange-400 mt-4 ml-4 mr-5 rounded pl-3 pt-1" 
      {...register("firstName", {required:'User name is required', minLength: {value: 4, message: "Username should be at least 4 char long"}})} placeholder="Username" />
      <p className="text-red-500 text-sm mt-2 ml-4">{errors.firstName?.message}</p>
      <input className="border text-lg border-orange-400 mt-4 ml-4 mb-1 mr-5 rounded pl-3 pt-1" {...register("email", {required: "Email is required"})} placeholder="Email" />
      <p className="text-red-500 text-sm mt-2 ml-4">{errors.email?.message}</p>

      <input className="bg-orange-300 text-gray-800 rounded border-gray-700 w-[100px] p-1 self-center" type="submit" />
    </form>
  );
}