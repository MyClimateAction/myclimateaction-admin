import React, { Component } from "react";
import "./App.css";
import AuthToken from "./Components/AuthToken";
import TopBar from "./Components/TopBar";
import Table from "./Components/Table/Table";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      actions: [],
      loading: false,
      auth: false
    };
  }

  componentDidMount() {
    if (this.checkAuth()) {
      this.fetchData();
    }
  }

  checkAuth = token => {
    let isValid = token === "MyClimateActionAdmin2019!" ? true : false;
    this.setState({ auth: isValid });
    this.fetchData();
    // process.env.NODE_ENV development | production
    // localStorage.set('token', token)
    // localStorage.getItem('token')
  };

  fetchData = () => {
    fetch(
      `http://${process.env.REACT_APP_API_URL}/actions`
      //, {
      // headers: {
      //   authorization: token
      // },
      // method: 'POST',
      // body: {
      //   title: "", frequency: "", picture_url: ""
      // }
      //}
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          actions: responseData.data,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data.", error);
      });
  };

  fetchAuth = () => {
    fetch(`http://${process.env.REACT_APP_API_URL}/auth`);
  };

  // ---------------- HANDLE FUNCTIONS ----------------
  handleLogout = () => {
    this.setState({
      actions: [],
      auth: false
    });
  };

  handleModifyAction = id => {
    this.setState(prevState => {
      return {
        //no idea yet to modify
        actions: prevState
      };
    });
  };

  handleAddAction = (title, imageURL, freq) => {
    this.setState(prevState => {
      return {
        actions: [
          ...prevState.actions,
          this.createActionObject(title, imageURL, freq)
        ]
      };
    });
  };

  createActionObject = (title, imageURL, freq) => {
    let newAction = {
      //id: //how to get the id on the server?
      title: title,
      picture_url: imageURL,
      frequency: freq
      //created_at: how to get the this info server ?
      //updated_at: how to get the  server ?
    };
    return newAction;
  };
  // ---------------- END HANDLE FUNCTIONS  ----------------

  // ---------------- RENDER ----------------
  render() {
    return (
      <div className="App">
        {!this.state.auth && (
          <div className="Content">
            {<AuthToken onAccess={this.checkAuth} />}
          </div>
        )}
        {this.state.auth && (
          <React.Fragment>
            <TopBar logout={this.handleLogout} />
            <div className="Content">
              <h2>Manage actions</h2>
              {this.state.loading ? (
                <p>Loading...</p>
              ) : (
                <Table data={this.state.actions} />
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
