import Sidebar from "../component/Sidebar";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-5"></div>
      </div>
    </>
  );
}
