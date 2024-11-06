import Illustration from "/no-Item-found.png";

export default function EmptyCard() {
  return (
    <div className="flex items-center justify-center col-span-full">
      <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-lg text-center max-w-md mx-auto mt-8">
        <img
          src={Illustration}
          alt="Product list is empty"
          className="w-fit h-fit mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2 text-gray-600 max-md:text-center">
          Product list is empty.
        </h3>
        <p className="text-sm/6 text-gray-600 max-md:text-center">
          It seems like there is no item found.
        </p>
      </div>
    </div>
  );
}
