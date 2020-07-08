import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../../store/reducers/home";

export class Home extends Component {
  async componentDidMount() {
    await this.props.getImages();
  }

  render() {
    let images = this.props.imageList;
    return (
      <div className="row">
        {images.map((image) => (
          <img className="msa-img-gallery" src={image.imageUrl} alt=""></img>
        ))}
      </div>
    );
  }
}

export default connect(
  (state) => ({ ...state.home }),
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(Home);
