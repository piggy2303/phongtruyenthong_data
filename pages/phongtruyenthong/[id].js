import { useRouter } from "next/router";
import Layout from "../components/MyLayout";
import { LOCALHOST, LINK_IMAGE, LINK_DETAIL } from "../constant/URL";
import fetch from "isomorphic-unfetch";
import React, { useState } from "react";
import Link from "next/link";
import ListImage from "../components/ListImage";

const style_main = {
  display: "flex",
  flexDirection: "row",
  flex: 1
};

const style_item = {
  flex: 1,
  maxWidth: 800,
  maxHeight: 800
};

const style_text = {
  padding: 50
};

const PostLink = props => (
  <li>
    <Link href="/phongtruyenthong/[id]" as={`/phongtruyenthong/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Post = props => {
  console.log("render", props);

  const router = useRouter();
  const link_image = LOCALHOST + LINK_IMAGE + router.query.id + ".jpg";

  console.log(props.detail_image);

  if (props.detail_image == null) {
    return (
      <Layout>
        <p>404 not found</p>
      </Layout>
    );
  } else {
    const data = props.detail_image.data[0];
    const [text_vn, set_text_vn] = useState(data.text_vn);
    const [text_en, set_text_en] = useState(data.text_en);

    return (
      <Layout>
        <ListImage id={router.query.id} />
        <h1>Ảnh: {router.query.id}</h1>
        <p>Thong tin cua anh </p>
        <div style={style_main}>
          <div>
            <img style={style_item} src={link_image} />
          </div>
          <div style={style_text}>
            <form>
              <p>Thông tin tiếng Việt</p>
              <textarea
                rows="4"
                cols="50"
                type="text"
                name="fname"
                value={props.detail_image.data[0].text_vn}
                onChange={event => set_text_vn(event.target.value)}
              />

              <p>Thông tin tiếng Anh</p>
              <textarea
                rows="4"
                cols="50"
                type="text"
                name="fname"
                value={text_en}
                onChange={event => set_text_en(event.target.value)}
              />

              <br />
              <input
                type="submit"
                value="Submit"
                onClick={() => {
                  console.log();
                }}
              />
            </form>
          </div>
        </div>
      </Layout>
    );
  }
};

Post.getInitialProps = async function(context) {
  const id = context.query.id;

  const uri = LOCALHOST + LINK_DETAIL + id;
  console.log(uri);

  const res = await fetch(uri);
  const detail_image = await res.json();

  if (detail_image.status == "error") {
    return { detail_image: null };
  }

  return { detail_image: detail_image };
};

export default Post;
