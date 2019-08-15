import Layout from "./components/MyLayout";
import Link from "next/link";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import { LOCALHOST, LINK_All } from "./constant/URL";
import { useRouter } from "next/router";

class Blog extends Component {
  state = {
    listArr: null
  };

  PostLink = id => (
    <li>
      <Link href="/phongtruyenthong/[id]" as={`/phongtruyenthong/${id}`}>
        <a>Ảnh: {id}</a>
      </Link>
    </li>
  );

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(LOCALHOST + LINK_All)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status == "success") {
          const temp = [];
          data.data.map(item => {
            temp.push(item.image_id);
          });

          this.setState({
            listArr: temp
          });
        }
      });
  };

  mapList = arr => {
    console.log(arr);
    return arr.map(item => <li>{this.PostLink(item)}</li>);
  };

  render() {
    console.log(this.state);

    return (
      <Layout>
        <h1>Dữ liệu về ảnh của phòng truyền thống</h1>
        <ul>
          {this.state.listArr != null ? this.mapList(this.state.listArr) : null}
        </ul>
      </Layout>
    );
  }
}

export default Blog;
