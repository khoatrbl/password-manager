import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import TopBar from "../component/TopBar";
import { useParams } from "react-router-dom";
import SearchBar from "../component/SearchBar";

export default function Home() {
  const { displayName } = useParams<{ displayName: string }>();
  // const [displayName, setDisplayName] = useState<string>("");

  // useEffect(() => {
  //   if (queryName) {
  //     setDisplayName(queryName);
  //   }

  //   console.log(queryName);
  //   console.log(displayName);
  // });

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-5">
          <TopBar displayName={displayName} />
          <div className="rounded-tl-3xl bg-white h-screen w-full">
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </>
  );
}
