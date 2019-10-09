import React from "react";
import "./PopupActions.css";

class PopupActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture_url: "",
      frequency: "Daily"
    };
  }

  handleUpdateValue = e => {
    const value = e.target.value;
    const stateName = e.target.name;

    this.setState({
      [stateName]: value
    });
  };

  render() {
    return (
      <div className="popup">
        <button onClick={this.props.closePopup}>close me</button>
        <div className="popup\_inner">
          <form className="" onSubmit={this.props.addAction}>
            <label className="">Add an Action</label>
            <input
              className=""
              name="name"
              value={this.state.name}
              onChange={this.handleUpdateValue}
              type="text"
              placeholder="Enter a name"
              required
            />
            <select
              name="frequency"
              value={this.state.frequency}
              onChange={this.handleUpdateValue}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              required
            </select>
            <input
              className=""
              name="picture_url"
              value={this.state.picture_url}
              onChange={this.handleUpdateValue}
              type="text"
              placeholder="Enter an image url"
              required
            />
            <button className="" type="submit" id="submit">
              Add action!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupActions;
