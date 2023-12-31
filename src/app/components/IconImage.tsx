import React from "react";

const IconImage = (props: any) => {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 20 20"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 1h10A1.5 1.5 0 0114 2.5v10a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 12.5v-10A1.5 1.5 0 012.5 1zm0 1a.5.5 0 00-.5.5v5.864l1.682-1.682a.45.45 0 01.647.01l3.545 3.798 2.808-2.808a.45.45 0 01.636 0L13 9.364V2.5a.5.5 0 00-.5-.5h-10zM2 12.5V9.636l1.989-1.988 3.542 3.794L8.941 13H2.5a.5.5 0 01-.5-.5zm10.5.5h-2.345l-1.672-1.847L11 8.636l2 2V12.5a.5.5 0 01-.5.5zM6.65 5.5a.85.85 0 111.7 0 .85.85 0 01-1.7 0zm.85-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconImage;
