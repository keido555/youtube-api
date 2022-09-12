import type { NextPage } from "next";
import Image from "next/image";
import vercel from "./public/vercel.svg";

export const Footer: NextPage = () => {
  return (
    <div>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            <Image src={vercel} alt="img" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
