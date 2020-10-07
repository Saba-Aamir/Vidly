import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
// import NavbarCounter from "./components/navbarCounter";
import NavigationBar from "./components/navBar";
import Movies from "./components/movies";
// import Counters from "./components/counters";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
// import { Navbar } from "react-bootstrap/Navbar";
import "./App.css";
import MovieForm from "./components/movieForm";

class App extends Component {
  // //We lifted the state from counters > app, so that both navbar and counters can access the state as children of app.
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // //Counters has the state we want to modify, so event handling will be done here.
  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };

  // handleIncrement = (counter) => {
  //   //Copying counters into a new array.
  //   const counters = [...this.state.counters];
  //   //Finding index of the required counter.
  //   const index = counters.indexOf(counter);
  //   //Making a copy of that counter.
  //   counters[index] = { ...counter };
  //   //Incrementing the counter.
  //   counters[index].value++;
  //   //Setting state with the updated counters array.
  //   this.setState({ counters });
  // };

  // handleDecrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value--;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  render() {
    return (
      <React.Fragment>
        {/* Only sending the number of counters that have values greater than 0. */}
        {/* <NavigationBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        /> */}

        <NavigationBar />
        <main className="container pt-5">
          {/* To ensure only one route is focused, and the other's ignored, we wrap all routes in a switch. */}
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            {/* Use exact to ensure it redirects to /movies when URL is exactly / */}
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
          {/* <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
