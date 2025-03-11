import { assets } from "../assets/assets";

export default function TopBar({ displayName }: TopBarProps) {
  return (
    <div className="flex justify-end items-center bg-gray-500 w-full h-16">
      <h1 className="text-white">Welcome back, {displayName}!</h1>
      <div className="px-3">
        <img src={assets.account} />
      </div>
    </div>
  );
}

type TopBarProps = {
  displayName?: string;
};
