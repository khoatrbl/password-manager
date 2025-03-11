export default function SideBarNav({ icon, name }: SideBarNavProps) {
  return (
    <>
      <div className="flex items-center justify-between mt-7">
        <div className="grid grid-cols-3 justify-items-center">
          <div className="flex md:w-7 justify-start col-span-1">
            <img src={icon} alt="icon" />
          </div>

          <div className="col-span-2 md:w-30 w-10 md:ms-3 text-white font-bold md:text-xl text-xs hover:text-gray-400">
            {name}
          </div>
        </div>
      </div>
    </>
  );
}

type SideBarNavProps = {
  icon: string;
  name: string;
};
