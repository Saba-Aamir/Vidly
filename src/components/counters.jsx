import React, { Component } from "react";
import Counter from "./counter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Counters extends Component {
  render() {
    //Using Object-Destructuring to pick out properties from props.
    //Cleaner code - you don't have to write this.props again and again.
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <Container style={{ paddingTop: "50px" }}>
        <Button
          variant="success"
          style={{ width: "100px", marginBottom: "10px" }}
          onClick={onReset}
        >
          Reset
        </Button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </Container>
    );
  }
}

export default Counters;
