import React, { createRef, FormEvent, RefObject } from 'react';

type FormState = {
  name: string;
  date: string;
  select: string;
  checkbox: boolean;
  errorFields: string[];
};

// eslint-disable-next-line @typescript-eslint/ban-types
class Form extends React.Component<{}, FormState> {
  private formRef: RefObject<HTMLFormElement> = createRef<HTMLFormElement>();

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {}) {
    super(props);

    this.state = {
      name: '',
      date: '',
      select: '',
      checkbox: false,
      errorFields: [],
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get('name') as string;
    const select = data.get('select') as string;
    const date = data.get('date') as string;
    const checkbox = data.get('checkbox') !== null;
    const radio = data.get('radio') !== null;

    const errorFields: string[] = [];

    if (!name) {
      errorFields.push('name');
    }
    if (!select) {
      errorFields.push('select');
    }
    if (!date) {
      errorFields.push('date');
    }

    if (errorFields.length === 0) {
      this.setState({ name, select, date, checkbox, errorFields }, () => {
        this.formRef.current?.reset();
      });
    } else {
      this.setState({ name, select, date, checkbox, errorFields });
    }
  };

  render() {
    const { errorFields } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        ref={this.formRef}
        className="max-w-xs mx-auto grid grid-cols-1 gap-5 text-gray-800 font-medium bg-white bg-opacity-60 p-5 rounded-xl"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className={`bg-black w-full bg-opacity-20 p-2 placeholder:text-gray-600 rounded outline-none border ${
              errorFields.includes('name') ? ' border-red-500' : 'border-transparent'
            }`}
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            className={`bg-black w-full bg-opacity-20 p-2 rounded outline-none border ${
              errorFields.includes('date') ? ' border-red-500' : 'border-transparent'
            }`}
          />
        </div>
        <div>
          <select
            name="select"
            className={`bg-black w-full bg-opacity-20 p-2 rounded outline-none border ${
              errorFields.includes('select') ? ' border-red-500' : 'border-transparent'
            }`}
          >
            <option value="default">Default</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="flex items-center gap-5">
          <label className="flex items-center gap-2">
            Male
            <input type="radio" value="male" name="radio" />
          </label>
          <label className="flex items-center gap-2">
            Female
            <input type="radio" value="female" name="radio" />
          </label>
        </div>
        <label className="flex items-center gap-2">
          Checkbox
          <input type="checkbox" name="checkbox" />
        </label>
        <button
          className="bg-gray-700 transition-all text-white py-3 rounded hover:bg-gray-800"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
