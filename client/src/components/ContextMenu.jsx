import { useRouter } from "next/router";
import React from "react";

function ContextMenu({ data }) {
  const router = useRouter();
  return (
    <div
      className={`z-10  bg-white divide-y divide-gray-100  shadow-2xl border w-44
      fixed right-5 top-20 
      `}
    >
      <ul className="py-2 text-sm text-gray-700">
        {data.map(({ name, callback }, index) => {
          return (
            <li
              key={index}
              onClick={callback}
              className="block px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer"
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContextMenu;
