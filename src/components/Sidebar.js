import React from "react";
import AddEventBtn from "./AddEventBtn";
import LittleCal from "./LittleCal";
import Labels from "./Labels";
import useWindowSize from "./useWindowSize";

export default function Sidebar() {
  const size = useWindowSize();    
  return (
    <aside className="costado border p-5 w-64">
      {size.width > 600 && <AddEventBtn /> }     
      {size.width > 600 && <LittleCal /> }
      {size.width > 600 && <Labels /> }
     
    </aside>
  );
}
