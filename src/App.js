import React from 'react';
import './App.css';

//1. first call 8. Get it on the first try.
//
//2. Find 16. First call is 8. Moves start to 11, next call gets 14. Moves start to 15.Third call gets 17. Moves start to 18, and doesn't find the value.
class App extends React.Component {
  state = {
    value: null,
    search: null,
  };

  list = [
    9,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5,
  ];

  binarySearch(arr, value, start = 0, end = arr.length - 1, count = 0) {
    let index = Math.floor((start + end) / 2);
    let item = arr[index];

    console.log(count);
    console.log(start);
    if (item === value) {
      return `Binary search: ${value} found in ${count} tries`;
    } else if (item < value) {
      return this.binarySearch(arr, value, index + 1, end, (count = count + 1));
    } else if (item > value) {
      return this.binarySearch(
        arr,
        value,
        start,
        index - 1,
        (count = count + 1)
      );
    }

    return `Binary search: Item not found in ${count} tries`;
  }

  linearSearch(arr, value) {
    let count;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        count = i;
        return ` Linear search: ${value} found in ${i} tries`;
      }
    }

    return `Linear search: Not found in ${count} tries`;
  }

  handleSubmit = ev => {
    ev.preventDefault();

    let value = parseInt(ev.target.searchVal.value);

    if (this.state.search === 'Binary') {
      let searchList = this.list.sort((a, b) => a - b);
      console.log(searchList);

      let index = this.binarySearch(searchList, value);
      this.setState({ value: index });

      this.renderResult(this.state.value);
    }

    if (this.state.search === 'linear') {
      let index = this.linearSearch(this.list, value);
      this.setState({ value: index });
      this.renderResult(this.state.value);
    }
  };

  renderResult(index) {
    console.log(index);
    return <span>{`${this.state.value}`}</span>;
  }

  render() {
    return (
      <div className="App">
        <div>{this.renderResult()}</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="searchVal" name="searchVal" />

          <button
            type="submit"
            onClick={() => {
              this.setState({ search: 'Binary' });
            }}
          >
            Binary
          </button>
          <button
            onClick={() => {
              this.setState({ search: 'linear' });
            }}
          >
            Linear
          </button>
        </form>
      </div>
    );
  }
}

export default App;
