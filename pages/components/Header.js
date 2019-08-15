import Link from "next/link";
import { LINK_All } from "../constant/URL";
import fetch from "isomorphic-unfetch";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
};

export default Header;
