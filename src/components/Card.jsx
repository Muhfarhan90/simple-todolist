/* eslint-disable react/prop-types */
import Button from "./Button";

export default function Card({
  judul = "judul default",
  children,
  buttonAction,
  buttonTitle,
}) {
  return (
    <div className="bg-white shadow-md flex flex-col justify-center items-center p-16 rounded-sm mt-10 max-w-[320px]">
      <h4 className="text-2xl font-bold">{judul}</h4>
      <p>{children}</p>
      <Button action={buttonAction}>{buttonTitle}</Button>
    </div>
  );
}
