import Sidebar from "../component/Sidebar";

export default function Vault() {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-5">
          <div>This is the vault</div>
        </div>
      </div>
    </>
  );
}
