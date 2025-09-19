import { Component, useEffect, useState } from "react";

class TextError extends Component {
  constructor(props) {
    super(props);

    this.state = { intervalId: null, count: 0 };
  }

  scroll() {
    console.log("scroll");
  }

  componentDidMount() {
    // logic
    let intervalId = setInterval(() => {
      console.log("interval");
    }, 1000);

    window.addEventListener("scroll", this.scroll);

    this.setState((pState) => {
      return { ...pState, intervalId };
    });
  } // mounting

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    window.removeEventListener("scroll", this.scroll);
  }

  componentDidUpdate() {
    console.log("comp is updated");
  }

  shouldComponentUpdate() {}
  componentDidCatch() {}
  render() {
    return (
      <section>
        <small>
          {this.props.error} {this.state.count}
        </small>
        <button
          type="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Count
        </button>
      </section>
    );
  }
}

export default TextError;

// mounting => 1
// unmounting => 1
// updating => 1 or multiple time
