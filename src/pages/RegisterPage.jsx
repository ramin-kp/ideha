import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <main className="flex-center gap-y-5 h-screen ">
      <div className="flex flex-col items-center justify-center gap-y-3 p-4 mx-3 w-[400px] xs:w-[500px] bg-white dark:bg-zinc-700 rounded-xl">
        <img
          src="/images/logo.jpg"
          alt="logo-icon"
          className="w-14 xs:w-20 h-14 xs:h-20 rounded-full overflow-hidden"
        />
        <h1 className="font-DanaDemiBold text-xl xs:text-4xl">
          به ایده ها خوش آمدید
        </h1>
        <form
          className="flex flex-col items-start justify-between gap-y-5 w-full"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="w-full">
            <label>نام کاربری</label>
            <input
              type="text"
              placeholder="نام کاربری..."
              className="bg-zinc-600 w-full h-10 p-1 rounded-md"
              {...register("username", {
                required: "لطفا نام کاربری خود را وارد کنید",
                minLength: {
                  value: 3,
                  message: "تعدادا کاراکتر باید بیشتر از 3 تا باشد",
                },
                maxLength: {
                  value: 20,
                  message: "تعدادا کاراکتر باید بیشتر از 20 تا باشد",
                },
              })}
            />
            {errors.username && (
              <span className="inline-block text-red-600 text-base xs:text-lg mt-2">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <label>ایمیل </label>
            <input
              type="email"
              placeholder="ایمیل..."
              className="bg-zinc-600 w-full h-10 p-1 rounded-md"
              {...register("email", {
                required: "لطفا ایمیل خود را وارد کنید",
                minLength: {
                  value: 10,
                  message: "تعدادا کاراکتر باید بیشتر از 10 تا باشد",
                },
                maxLength: {
                  value: 30,
                  message: "تعدادا کاراکتر باید بیشتر از 30 تا باشد",
                },
                pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
              })}
            />
            {errors.email && (
              <span className="inline-block text-red-600 text-base xs:text-lg mt-2">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <label>پسورد </label>
            <input
              type="password"
              placeholder="پسورد..."
              className="bg-zinc-600 w-full h-10 p-1 rounded-md"
              {...register("password", {
                required: "لطفا پسورد خود را وارد کنید",
                minLength: {
                  value: 8,
                  message: "تعدادا کاراکتر باید بیشتر از 8 تا باشد",
                },
                maxLength: {
                  value: 20,
                  message: "تعدادا کاراکتر باید بیشتر از 20 تا باشد",
                },
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
                  message: "از حروف بزرگ کوچک و اعداد استفاده کنید",
                },
              })}
            />
            {errors.password && (
              <span className="inline-block text-red-600 text-base xs:text-lg mt-2">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 w-full">
            <button
              type="submit"
              className="p-2 w-full bg-blue-700 hover:bg-blue-800 transition-all duration-75 rounded-lg "
            >
              ثبت نام
            </button>
            <Link
              to="/login"
              className="p-2 w-full border-2 border-solid border-blue-700 text-white text-center transition-all duration-75 rounded-lg "
            >
              ورود
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default RegisterPage;
