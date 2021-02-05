import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:
        "https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg",
      fallbackSrc:
        "https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products/-M7q3olCZCehB9AGbn2y.jpg",

      isError: false,
    };
  }

  handleError = () => {
    this.setState({
      isError: true,
    });
  };
  render() {
    const { src, isError, fallbackSrc } = this.state;
    let imgSrc = !isError ? src : fallbackSrc;
    return (
      <div>
        <img
          style={{ marginLeft: "40%" }}
          src={imgSrc}
          onError={this.handleError}
          alt="style-up kurtha"
        />
      </div>
    );
  }
}

export default Image;

// handleWidth = () => {
//     console.log("width");
//     this.setState({
//       width: this.state.width * 2,
//     });
//   };

//   handleError = () => {
//     const { count } = this.state;
//     console.log("count", count);
//     if (count < 4) {
//       this.setState({
//         count: count + 1,
//       });
//       this.handleWidth();
//     } else {
//       this.setState({
//         isError: true,
//         count: 1,
//       });
//     }
//   };
