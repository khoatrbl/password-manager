export default function SideBarNav({ icon }: SideBarNavProps) {
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="grid grid-cols-3">
          <div className="flex justify-center col-span-1">
            <img src={icon} alt="icon" className="" />
          </div>

          <div className="inline-block col-span-2 ms-3 text-white font-bold text-xl">
            Home
          </div>
        </div>
      </div>
    </>
  );
}

type SideBarNavProps = {
  icon: string; // icon will be a string URL (path to the image)
};
