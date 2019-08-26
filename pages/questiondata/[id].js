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

class PostQuestion extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      data: null,
      id: this.props.router.query.id,
      text_new: ""
    };
  }

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
          text_new: "",
          data: [...this.state.data, data.data]
        });
      });
  };

  render() {
    console.log(this.props.router.query.id);

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
            {this.state.data.map((item, index) => (
              <li>
                <p>{item.text}</p>
              </li>
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
                  <Link href="">
                    <a onClick={() => this.saveInfo()}>ADD</a>
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

export default withRouter(PostQuestion);

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
