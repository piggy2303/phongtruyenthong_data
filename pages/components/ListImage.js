import { Component } from "react";
import fetch from "isomorphic-unfetch";
import { LOCALHOST, LINK_All } from "../constant/URL";
import Link from "next/link";
import { useRouter } from "next/router";

class ListImage extends Component {
  state = {
    listArr: null,
    item0: this.props.id,
    item1: null,
    item_1: null
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
    console.log(this.props.id);

    fetch(LOCALHOST + LINK_All)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status == "success") {
          const temp = [];
          data.data.map(item => {
            temp.push(item.image_id);
          });

          const index_of_props = temp.findIndex(x => x == this.props.id);
          var item1 = null;

          var item_1 = null;

          if (index_of_props == 0) {
            item1 = index_of_props + 1;
            item_1 = null;
          } else if (index_of_props == temp.length - 1) {
            item1 = null;
            item_1 = index_of_props - 1;
          } else {
            item1 = index_of_props + 1;
            item_1 = index_of_props - 1;
          }

          console.log(index_of_props);

          this.setState({
            listArr: temp,
            item1: temp[item1],
            item_1: temp[item_1],
            item0: this.props.id
          });
        }
      });
  };

  render() {
    if (this.props.id != this.state.item0) {
      this.fetchData();
    }

    return (
      <p>
        Danh sách các ảnh
        {this.state.item_1 != null ? this.PostLink(this.state.item_1) : null}
        {this.state.item1 != null ? this.PostLink(this.state.item1) : null}
      </p>
    );
  }
}

export default ListImage;
