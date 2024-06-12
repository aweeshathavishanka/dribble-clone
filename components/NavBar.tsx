import { NavLinks } from "@/constatnts";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";

export default function NavBar() {
  const session = {};
  return (
    <nav className=" flexBetween navbar ">
      <div className=" flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Dribble Clone" />
        </Link>
        <ul className=" xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className=" flexCenter gap-4">
        {session ? (
          <>
            User Photo
            <Link className=" " href="/create-project">
              <button className="button">Share Work</button>
            </Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
}
