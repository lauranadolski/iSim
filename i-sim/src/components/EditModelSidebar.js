import React from 'react';

class EditModelSidebar extends React.Component {
  state = {
    newModelTitle: "New Model Title",
    newModelCategories: [
      { id: 1,
        name: "example 1"},
      { id: 2,
        name: "example 2"},
      { id: 3,
        name: "example 3"},
      ],
    newModelID: null,
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
    this.postNewModel();
  }

  postNewModel = () => {
    let newModelBody = {
      name: this.state.newModelTitle,
      note: "default note",
      user_id: this.props.user.user.id
    }

    const postConfig = {
      method:'POST',
      body: JSON.stringify(newModelBody),
      headers: {
        "Content-type": 'application/json',
        'Authorization': `Bearer ${localStorage.jwt}`
      }
    }

    fetch('http://localhost:3000/api/v1/intersectionality_models', postConfig).then(this.postNewCategories())
  }

  postNewCategories = () => {

    this.state.newModelCategories.map((newCategory) => {
      let targetIMID = ((this.props.models.loggedInUserModels[this.props.models.loggedInUserModels.length - 1].id) + 1)
      let targetCategoryName = newCategory.name

      // debugger;

      let newCategoryBody = {
        name: targetCategoryName,
        description: "default placeholder description",
        intersectionality_model_id: targetIMID
      }
      let categoryPostConfig = {
        method:'POST',
        body: JSON.stringify(newCategoryBody),
        headers: {
          "Content-type": 'application/json',
          'Authorization': `Bearer ${localStorage.jwt}`
        }
      }

      // debugger;

       fetch('http://localhost:3000/api/v1/categories', categoryPostConfig).then(response => console.log(response))
    })
  }

  render() {
    return (
      <div>
      {console.log("PUPPIES", this.props.selectedModelToEdit)}
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

export default EditModelSidebar;
