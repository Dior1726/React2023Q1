import React, { Component, DetailedHTMLProps, HTMLAttributes } from 'react';

type InputState = {
  value: string;
};

type InputType = DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

class SearchBar extends Component<InputType, InputState> {
  constructor(props: InputType) {
    super(props);

    this.state = {
      value: this.loadText(),
    };

    this.saveText = this.saveText.bind(this);

    this.changeTextHandler = this.changeTextHandler.bind(this);

    window.onbeforeunload = this.saveText;
  }

  componentWillUnmount() {
    this.saveText();
  }

  changeTextHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value });
  }

  loadText() {
    return localStorage.getItem('input') || '';
  }

  saveText() {
    localStorage.setItem('input', this.state.value);
  }

  render() {
    return (
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="outline-none rounded-sm p-2 text-gray-800 font-medium bg-white bg-opacity-80"
          placeholder="Type..."
          value={this.state.value}
          onChange={this.changeTextHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
