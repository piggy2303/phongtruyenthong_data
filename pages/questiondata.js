import Layout from "./components/MyLayout";
import Link from "next/link";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import { LOCALHOST, LINK_All } from "./constant/URL";
import { useRouter } from "next/router";

class Blog extends Component {
  state = {
    listArr: [
      "greeting",
      "chat",
      // "end_conversation",
      "ask_what",
      "ask_where",
      "ask_who",
      "command_lead_way",
      "introduce"
    ]
  };

  PostLink = id => (
    <li>
      <Link href="/questiondata/[id]" as={`/questiondata/${id}`}>
        <a>intent: {id}</a>
      </Link>
    </li>
  );

  componentDidMount() {}

  mapList = arr => {
    console.log(arr);
    return arr.map(item => <li>{this.PostLink(item)}</li>);
  };

  render() {
    console.log(this.state);

    return (
      <Layout>
        <h1>Danh sách các intent của câu</h1>
        <ul>
          {this.state.listArr != null ? this.mapList(this.state.listArr) : null}
        </ul>
      </Layout>
    );
  }
}

export default Blog;
