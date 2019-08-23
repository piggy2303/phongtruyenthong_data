import { useRouter, withRouter } from "next/router";
import Layout from "../components/MyLayout";
import {
  LOCALHOST,
  LINK_IMAGE,
  LINK_DETAIL,
  LINK_UPDATE,
  LINK_QUESTION_DATA,
  LINK_QUESTION_ADD
} from "../constant/URL";
import fetch from "isomorphic-unfetch";
import React, { useState, Component } from "react";
import Link from "next/link";
import ListImage from "../components/ListImage";

class Post extends Component {
  state = {
    data: null,
    id: this.props.router.query.id,
    text_new: ""
  };

  //   PostLink = id => (
  //     <li>
  //       <Link href="/phongtruyenthong/[id]" as={`/phongtruyenthong/${id}`}>
  //         <a>Ảnh: {id}</a>
  //       </Link>
  //     </li>
  //   );

  componentDidMount() {
    const { router } = this.props;
    this.fetchData(router.query.id);
  }

  fetchData = router_id => {
    let url = LOCALHOST + LINK_QUESTION_DATA + router_id;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status == "success") {
          console.log(data);
          this.setState({
            data: data.data,
            text_new: ""
          });
        }
      });
  };

  //   componentDidUpdate() {
  //     this.fetchData(this.props.router.query.id);
  //   }

  saveInfo = () => {
    fetch(LOCALHOST + LINK_QUESTION_ADD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: this.state.text_new,
        intent: this.state.id
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          text_new: ""
        });
      });
  };

  render() {
    if (this.state.data == null) {
      return (
        <Layout>
          <p>404 not found</p>
        </Layout>
      );
    } else if (this.state.data != null) {
      return (
        <Layout>
          <h1>Intent: {this.state.id}</h1>
          <p>Danh sách các câu hỏi</p>
          <ul>
            {this.state.data.map(item => (
              <li>{item.text}</li>
            ))}
          </ul>
          <div style={style_main}>
            <div>
              <form>
                <div>
                  <p> Thêm câu hỏi</p>
                  <textarea
                    rows="2"
                    cols="100"
                    type="text"
                    value={this.state.text_new}
                    onChange={event =>
                      this.setState({
                        text_new: event.target.value
                      })
                    }
                  />
                </div>

                <button>
                  <Link href="#">
                    <a onClick={() => this.saveInfo()}>Save</a>
                  </Link>
                </button>
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
