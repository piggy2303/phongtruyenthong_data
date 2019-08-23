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
      <Link href="/questiondata">
        <a style={linkStyle}>Dữ liệu về câu hỏi</a>
      </Link>
    </div>
  );
};

export default Header;
