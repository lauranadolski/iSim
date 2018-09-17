import React from 'react';

class CreateNewModelSidebar extends React.Component {
  state = {
    newModelTitle: "New Model Title",
    newModelCategories: [
      { id: 1,
        name: "Category 1"},
      { id: 2,
        name: "Category 2"},
      { id: 3,
        name: "Category 3"},
      ],
    newModelID: null,
    helperthing: null
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
          <button id={"delete-" + category.id} onClick={this.handleDelete} className="New-category-delete-button">x</button>
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

    fetch('http://localhost:3000/api/v1/intersectionality_models', postConfig).then(this.postNewCategories)
  }

  targetIMIDDeterminer = () => {
    if (this.props.models.loggedInUserModels.length < 1) {

      let lastModelObject = this.props.models.allModels[this.props.models.allModels.length - 1]

      let lastModelID = lastModelObject.id

      let targetIMID = (lastModelID + 1)
      return targetIMID

    } else {

    let targetIMID = ((this.props.models.loggedInUserModels[this.props.models.loggedInUserModels.length - 1].id) + 1)
    return targetIMID
    }



  }

  postNewCategories = () => {

    this.state.newModelCategories.map((newCategory) => {
      let targetCategoryName = newCategory.name

      let newCategoryBody = {
        name: targetCategoryName,
        description: "default placeholder description",
        intersectionality_model_id: this.targetIMIDDeterminer()
      }
      let categoryPostConfig = {
        method:'POST',
        body: JSON.stringify(newCategoryBody),
        headers: {
          "Content-type": 'application/json',
          'Authorization': `Bearer ${localStorage.jwt}`
        }
      }

        fetch('http://localhost:3000/api/v1/categories', categoryPostConfig)
    })
  }

  render() {
    return (
      <div className="Create-new-model-container">
        <form onSubmit={this.handleSubmit}>
          <input
            id="New-model-title-input"
            value={this.state.newModelTitle}
            name="newModelTitle"
            onChange={this.handleChange}
          />
          {this.renderCategoryFormInputs()}

        <button onClick={this.createNewCategory} id="Add-category-button">Add Category</button>
        <br />
        <br />
        <hr id="Little-line" />
        <br />

        <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default CreateNewModelSidebar;
