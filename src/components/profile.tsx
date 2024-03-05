import Image from "next/image";
 
export default function Page() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnsonr"
      width={100}
      height={100}
      style={{
        maxWidth: "100%",
        height: "auto",
        margin: "13px"
      }}
    />
  );
}