import { useForm, SubmitHandler } from "react-hook-form";
import Nav from "@/utils/Nav";

export default function Form() {

  const {register, watch, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      gender: "",
    }
  });

  return (
    <div className="text-2xl bg-orange-100 p-4">
      <h1 className="text-3xl mt-4 mb-5 text-center">Register</h1>
      <form className="flex flex-col w-[50%] justify-center text-center" onSubmit={handleSubmit((data)=>{
        console.log(data)
      })}>
        {/* full name */}
        <input 
        className="border text-lg border-orange-400 mt-4 ml-4 mr-5 rounded pl-3 pt-1" 
        placeholder="Enter Full Name" 
        {...register("fullName", {
          required: 'Full Name is required', 
          minLength: { value: 5, message: "Full Name should be at least 5 characters long" },
          pattern: { value: /^[A-Za-z\s]+$/i , message: "Full Name should contain only alphabets" }
        })} 
      />
      <p className="text-red-500 text-sm mt-2 ml-4">
        {errors.fullName?.message}
      </p>

        {/* email */}
        <input className="border text-lg border-orange-400 mt-4 ml-4 mb-1 mr-5 rounded pl-3 pt-1" 
            {...register("email", {required: "Email is required", pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
              message: "Please enter a valid email address"
            }})} 
            placeholder="Enter Email" />
        <p className="text-red-500 text-sm mt-2 ml-4">{errors.email?.message}</p>

        {/* password */}
        <input type="password" className="border text-lg border-orange-400 mt-4 ml-4 mb-1 mr-5 rounded pl-3 pt-1" {...register("password", {required: "Password is required", minLength: {value: 8, message: "Password must be 8 character long"}})} placeholder="Enter Password" />
        <p className="text-red-500 text-sm mt-2 ml-4">{errors.password?.message}</p>

        {/* confirm pass */}
        <input type="password" className="border text-lg border-orange-400 mt-4 ml-4 mb-1 mr-5 rounded pl-3 pt-1" 
          {...register("confirmPassword", 
          {required: "Confirm Password is required", validate: (val: string)=>{
            if(watch('password') != val){
              return "Confirm password does not match"
            }
          }})} 
          placeholder="Confirm Password" />
        <p className="text-red-500 text-sm mt-2 ml-4">{errors.confirmPassword?.message}</p>

        {/* dob */}
        <input type="date" className="border text-lg border-orange-400 mt-4 ml-4 mb-1 mr-5 rounded pl-3 pt-1" {...register("dateOfBirth", {required: "Date Of Birth is required"})} />
        <p className="text-red-500 text-sm mt-2 ml-4">{errors.dateOfBirth?.message}</p>

        {/* gender */}
        <select className="w-[87%] ml-4 text-md" {...register("gender", {required: "Gender is required"} )}>
          <option value="">Select your gender</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <p className="text-red-500 text-sm mt-2 ml-4">{errors.gender?.message}</p>

        <input type="submit" className="bg-orange-300 text-gray-800 mt-4 rounded border-gray-700 w-[100px] p-1 self-center" type="submit" />
        
      </form>
    </div>
  );
}