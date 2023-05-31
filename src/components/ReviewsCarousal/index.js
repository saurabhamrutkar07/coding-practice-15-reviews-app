import { Component } from "react";
import "./index.css";

class ReviewsCarousal extends Component {
  constructor(props) {
    super();
    const { reviewsList } = props;

    this.state = {
      id: 0,
    };

    this.prevImage = () => {
      const arrayLen = reviewsList.length - 1;
      if (this.state.id === 0) {
        this.setState((e) => ({ id: arrayLen }));
      } else {
        this.setState((e) => ({ id: e.id - 1 }));
      }

      console.log(this.state.id);
    };

    this.nextImage = () => {
      const arrayLen = reviewsList.length - 1;
      if (this.state.id === arrayLen) {
        this.setState((e) => ({ id: 0 }));
      } else {
        this.setState((e) => ({ id: e.id + 1 }));
      }

      console.log(this.state.id);
    };
  }

  render() {
    const { reviewsList } = this.props;
    const { id } = this.state;
    console.log(id);

    return (
      <div className="review-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="carousel-container">
          <button onClick={this.prevImage} value={id} className="arrow-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="carousal-item">
            <>
              <div className="review">
                <img
                  src={reviewsList[id].imgUrl}
                  alt={reviewsList[id].userName}
                />
                <h5>{reviewsList[id].username}</h5>
                <p className="company">{reviewsList[id].companyName}</p>
                <p className="description">{reviewsList[id].description}</p>
              </div>
            </>
          </div>
          <button onClick={this.nextImage} value={id} className="arrow-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewsCarousal;
