import React from 'react';

class CreateNewModelSidebar extends React.Component {
  state = {
    newModelTitle: "New Model Title",
    newModelCategories: [
      { id: 1,
        name: "example 1"},
      { id: 2,
        name: "example 2"},
      { id: 3,
        name: "example 3"},
      ]
  }

  handleArrayChange = (event) => {
    let targetId = parseInt(event.target.id);
    let futureObject = {
      id: parseInt(event.target.id),
      name: event.target.value
    }

    let targetIndex = this.state.newModelCategories.findIndex(x => x.id === targetId);
    let helperArray = [...this.state.newModelCategories];
    helperArray[targetIndex] = futureObject;

    this.setState({
      newModelCategories: helperArray,
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderCategoryFormInputs = () => {
    return this.state.newModelCategories.map((category) => {
      return (
        <div key={category.id}>
          <input
            value={category.name}
            name={category.name}
            id={category.id}
            onChange={this.handleArrayChange}
           />
          <button>x</button>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        Hello, I am a create new model sidebar.
        <form>
          <input
            value={this.state.newModelTitle}
            name="newModelTitle"
            onChange={this.handleChange}
          />
          {this.renderCategoryFormInputs()}
        </form>
        <button>New Category</button>
        <br />
        <button>Save</button>
      </div>
    )
  }
}

export default CreateNewModelSidebar;
