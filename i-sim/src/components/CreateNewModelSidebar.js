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

  handleDelete = (event) => {
    event.preventDefault();
    let targetId = parseInt(event.target.id[event.target.id.length - 1]);
    let targetIndex = this.state.newModelCategories.findIndex(x => x.id === targetId);
    let helperArray = [...this.state.newModelCategories];
    helperArray.splice(targetIndex, 1)
    this.setState({
      newModelCategories: helperArray,
    }, () => {console.log(this.state.newModelCategories)})
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
          <button id={"delete-" + category.id} onClick={this.handleDelete}>x</button>
        </div>
      )
    })
  }

  createNewCategory = (event) => {
    event.preventDefault()
    let newObjectPlaceholderId = (parseInt(this.state.newModelCategories[this.state.newModelCategories.length - 1].id) + 1)
    let newObject =
    { id: newObjectPlaceholderId,
      name: "" }
      let moreHelp = this.state.newModelCategories
    let helperArray = [...this.state.newModelCategories, newObject]
    this.setState({
      newModelCategories: helperArray
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Hello, I'm in the submit handler. Here's my state", this.state);
    this.props.createNewModel({ name: this.state.newModelTitle });
  }

  render() {
    return (
      <div>
        Hello, I am a create new model sidebar.
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newModelTitle}
            name="newModelTitle"
            onChange={this.handleChange}
          />
          {this.renderCategoryFormInputs()}

        <button onClick={this.createNewCategory}>New Category</button>
        <br />
        <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default CreateNewModelSidebar;
