import React, { Component } from "react";
import TopCarousel from "./carousel";
import FlowerCard from "./card";
class Homepage extends Component {
  state = {};

  createRow = () => {
    const flowers=this.props.flowers;
    // console.log(flowers)
    let row = [];
    for (let i = 0; i < flowers.length; i++) {
      row.push(
        <div style={{ display: "inline-block" }}>
          <FlowerCard flower={flowers[i]}></FlowerCard>
        </div>
      );
    }
    return <div> {row}</div>;
  };
  render() {
    return (
      <>
        <section>
          <TopCarousel></TopCarousel>
        </section>
        <section>
          <div style={{ display: "inline" }}>
            {this.createRow()}
            {this.createRow()}
          </div>
        </section>
      </>
    );
  }
}

export default Homepage;
