import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import BannerPartner from "./../components/bannerPartner";
import ProdukTerbaru from "../components/produkTerbaru";
import ProdukRekomendasi from "./../components/produkRekomendasi";
import ProdukPilihan from "./../components/produkPilihan";
import Jumbotron from "./../components/jumbotron";
import Explore from "../components/explore";

import { getCoffees } from "../store/actions";
import { getPartner } from "../store/actions";
import { partner } from "../services/partner";
import { coffees } from "../services/coffee";

class ExamplePage extends Component {
  constructor(props) {
    super(props);
    this.refRekomendasi = React.createRef();
  }

  componentDidMount() {
    window.title = "Ngopi di Jogja";
    window.scrollTo(0, 0);

    this.props.getCoffees(coffees);
    this.props.getPartner(partner);
  }

  render() {
    const { partner, coffees } = this.props;

    const getRecommended = () => {
      return coffees.filter((c) => c.isRecommended === true);
    };

    const getTerbaru = () => {
      return coffees.filter((c) => c.isTerbaru === true);
    };

    const getPilihan = () => {
      return coffees.filter((c) => c.isPilihan === true);
    };

    const pilihan = getPilihan(),
      terbaru = getTerbaru(),
      recommended = getRecommended();

    console.log("rekomend:", recommended);
    console.log("terbaru:", terbaru);
    console.log("pilihan:", pilihan);

    return (
      <div className="store-page">
        <NavBar {...this.props} />
        <Jumbotron refRekomendasi={this.refRekomendasi} />
        <BannerPartner items={partner} />
        <section className="featured shadow-sm bg-white">
          <ProdukRekomendasi
            refRekomendasi={this.refRekomendasi}
            items={recommended}
          />
          <hr />
          <ProdukTerbaru items={terbaru} />
          <hr />
          <ProdukPilihan items={pilihan} />
        </section>
        <Explore />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffees: state.coffees,
    partner: state.partner,
  };
};

export default connect(mapStateToProps, { getPartner, getCoffees })(
  ExamplePage
);

// import React from "react";

// import List from "../components/contoh";
// import Form from "../components/heheForm";
// import Post from "../components/hehePost";

// const ExamplePage = () => {
//   return (
//     <div className="p-5">
//       <h1>Hello Redux Page Example</h1>
//       <div>
//         <h2>Articles</h2>
//         <List />
//       </div>
//       <div>
//         <h2>Add a newarticle</h2>
//         <Form />
//       </div>
//       <div>
//         <h2>API posts</h2>
//         <Post />
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;
