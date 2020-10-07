import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//ALT + up/down keys > move block of code up and down.
//Ctrl + D > to select and change more than one element name at the same time.

class Counter extends Component {
  //state is an object that contains any data that this component needs.
  // state = {
  //   value: this.props.counter.value,
  //   // imageUrl: 'https://picsum.photos/400',
  //   // tags: ["Tag1", "Tag2", "Tag3"],
  // };

  //You always bind event-handlers to ensure value of this is not undefined
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //Arrow functions don't need rebinding of 'this' so it's better to use instead.

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    //Props is a javascript object that includes all attributes that we set when creating an instance of a component.
    //console.log("props", this.props);

    return (
      <Row
        className="d-flex align-items-center"
        style={{ padding: "10px 0", width: "30%" }}
      >
        {/* <img src={this.state.imageUrl} alt="Random picture"></img> */}

        {/* <h4 className="mb-3">Counter No.{this.props.counter.id}</h4> */}

        {/* Adding classes dynamically - changing color of badge depending on value of count. */}
        <Col md={4} xs={4}>
          <span
            className={`badge ${
              this.props.counter.value === 0 ? "badge-warning" : "badge-info"
            }`}
            style={{
              fontWeight: "600",
              fontSize: "1.2rem",
              padding: "0.3rem 0.5rem",
            }}
          >
            {this.formatCount()}
          </span>
        </Col>
        <Col md={3} xs={3}>
          <Button
            variant="secondary"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </Button>
        </Col>
        <Col md={3} xs={3}>
          <Button
            variant="secondary"
            disabled={`${this.props.counter.value === 0 ? "true" : ""}`}
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </Button>
        </Col>
        <Col md={2} xs={2}>
          <Button
            variant="danger"
            className=""
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            x
          </Button>
        </Col>
        {/* When comparing non-boolean values like a string, JS converts them into TRUTHY or FALSY values */}
        {/* first operand is true, second operand is a non-empty string so it's truthy */}
        {/* This returns the second operand! */}
        {/* {this.state.tags.length === 0 && "Please add a tag."} */}

        {/* React needs to uniquely identify each item, so we give it a key. */}
        {/* {this.state.tags.length === 0 ? (
          <p>There are no tags!</p>
        ) : (
          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )} */}
      </Row>
    );
  }

  formatCount() {
    //Using Object Destructuring set count constant equal to the count state.
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
