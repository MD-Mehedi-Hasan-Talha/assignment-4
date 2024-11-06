import LogoImage from "/logo.svg";

export default function Logo() {
  return (
    <div className="ml-4 flex lg:ml-0">
      <a href="#">
        <span className="sr-only">Your Company</span>
        <img className="h-8 w-auto" src={LogoImage} alt="logo" />
      </a>
    </div>
  );
}
