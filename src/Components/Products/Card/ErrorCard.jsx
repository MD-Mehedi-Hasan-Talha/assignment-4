import Illustration from "/error-illustration.png";

export default function EmptyCard() {
  return (
    <div className="flex items-center justify-center col-span-full">
      <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-lg text-center max-w-md mx-auto mt-8">
        <img
          src={Illustration}
          alt="Something Error Occurred."
          className="w-fit h-fit mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2 text-gray-600 max-md:text-center">
          An Error Occurred.
        </h3>
        <p className="text-sm/6 text-gray-600 max-md:text-center">
          It seems like there&apos;s been an error. Please try again later.
        </p>
      </div>
    </div>
  );
}
