import { useRouter, withRouter } from "next/router";
import Layout from "../components/MyLayout";
import { LOCALHOST, LINK_IMAGE, LINK_DETAIL } from "../constant/URL";
import fetch from "isomorphic-unfetch";
import React, { useState, Component } from "react";
import Link from "next/link";
import ListImage from "../components/ListImage";

class Post extends Component {
  state = {
    data: null,
    id: null,
    text_en: null,
    text_vn: null
  };

  PostLink = id => (
    <li>
      <Link href="/phongtruyenthong/[id]" as={`/phongtruyenthong/${id}`}>
        <a>Ảnh: {id}</a>
      </Link>
    </li>
  );

  componentDidMount() {
    const { router } = this.props;
    console.log(router.query.id);
    this.fetchData(router.query.id);
  }

  fetchData = router_id => {
    fetch(LOCALHOST + LINK_DETAIL + router_id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status == "success") {
          this.setState({
            data: data,
            id: router_id,
            text_vn: data.data[0].text_vn,
            text_en: data.data[0].text_en
          });
        }
      });
  };

  render() {
    if (this.state.id != this.props.router.query.id) {
      this.fetchData(this.props.router.query.id);
    }

    if (this.state.data == null) {
      return (
        <Layout>
          <p>404 not found</p>
        </Layout>
      );
    } else if (this.state.data != null) {
      return (
        <Layout>
          <ListImage id={this.state.id} />
          <h1>Ảnh: {this.state.id}</h1>
          <p>Thông tin của ảnh</p>
          <div style={style_main}>
            <div>
              <img
                style={style_item}
                src={LOCALHOST + LINK_IMAGE + this.state.id + ".jpg"}
              />

              <form>
                <p>Thông tin tiếng Việt</p>
                <textarea
                  rows="4"
                  cols="60"
                  type="text"
                  value={this.state.text_vn}
                  onChange={event =>
                    this.setState({ text_vn: event.target.value })
                  }
                />

                <p>Thông tin tiếng Anh</p>
                <textarea
                  rows="4"
                  cols="60"
                  type="text"
                  value={this.state.text_en}
                  onChange={event =>
                    this.setState({ text_en: event.target.value })
                  }
                />

                <br />
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => {
                    console.log("submit");
                  }}
                />
              </form>
            </div>
          </div>
        </Layout>
      );
    }
  }
}

export default withRouter(Post);

const style_main = {
  display: "flex",
  flexDirection: "row",
  flex: 1
};

const style_item = {
  flex: 1,
  maxWidth: 800,
  maxHeight: 800,
  imageOrientation: "from-image"
};

const style_text = {
  padding: 50
};
