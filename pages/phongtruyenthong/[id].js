import { useRouter, withRouter } from "next/router";
import Layout from "../components/MyLayout";
import {
  LOCALHOST,
  LINK_IMAGE,
  LINK_DETAIL,
  LINK_UPDATE
} from "../constant/URL";
import fetch from "isomorphic-unfetch";
import React, { useState, Component } from "react";
import Link from "next/link";
import ListImage from "../components/ListImage";

class Post extends Component {
  state = {
    data: null,
    id: null,
    text_en: "",
    text_vn: "",
    answer_what: "",
    answer_who: "",
    answer_where: ""
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
          console.log(data.data[0]);

          this.setState({
            data: data,
            id: router_id,
            text_vn: data.data[0].text_vn,
            text_en: data.data[0].text_en,
            answer_what: data.data[0].answer_what,
            answer_who: data.data[0].answer_who,
            answer_where: data.data[0].answer_where
          });
        }
      });
  };

  componentDidUpdate() {
    if (this.state.id != this.props.router.query.id) {
      this.fetchData(this.props.router.query.id);
    }
  }

  textareaShow = (title, value, onChange) => {
    return (
      <div>
        <p>{title}</p>
        <textarea
          rows="2"
          cols="100"
          type="text"
          value={value}
          onChange={event => onChange(event)}
        />
      </div>
    );
  };

  saveInfo = () => {
    fetch(LOCALHOST + LINK_UPDATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: this.state.id,
        text_vn: this.state.text_vn,
        text_en: this.state.text_en,
        answer_what: this.state.answer_what,
        answer_who: this.state.answer_who,
        answer_where: this.state.answer_where
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
                {this.textareaShow(
                  "Thông tin tiếng Việt",
                  this.state.text_vn,
                  event => {
                    this.setState({ text_vn: event.target.value });
                  }
                )}
                {this.textareaShow(
                  "Thông tin tiếng Anh",
                  this.state.text_en,
                  event => {
                    this.setState({ text_en: event.target.value });
                  }
                )}

                {this.textareaShow(
                  "What is in the picture:",
                  this.state.answer_what,
                  event => {
                    this.setState({ answer_what: event.target.value });
                  }
                )}

                {this.textareaShow(
                  "Who is in the picture:",
                  this.state.answer_who,
                  event => {
                    this.setState({ answer_who: event.target.value });
                  }
                )}
                {this.textareaShow(
                  "Where is picture about",
                  this.state.answer_where,
                  event => {
                    this.setState({ answer_where: event.target.value });
                  }
                )}

                <button>
                  <Link href="#">
                    <a onClick={() => this.saveInfo()}>Save</a>
                  </Link>
                </button>
              </form>

              <ListImage id={this.state.id} />
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
