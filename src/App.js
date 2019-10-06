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
      token: "",
      loading: false,
      auth: false
    };
  }

  componentDidMount() {}

  checkAuth = token => {
    const auth = this.fetchAuth();

    let isValid = token === "MyClimateActionAdmin2019!" ? true : false;
    this.setState({ auth: isValid });
    this.fetchData();
    // process.env.NODE_ENV development | production
    // localStorage.set('token', token)
    // localStorage.getItem('token')
  };

  fetchData = () => {
    fetch(`http://${process.env.REACT_APP_API_URL}/actions`)
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
    return fetch(`http://${process.env.REACT_APP_API_URL}/auth`, {
      headers: {
        authorization: "MyClimateAcAdmin2019!" //from state
      }
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });
  };

  postAction = () => {
    return fetch(`http://${process.env.REACT_APP_API_URL}/action`, {
      headers: {
        "Content-type": "application/json",
        authorization: "MyClimateActionAdmin2019!" //from state
      },
      method: "POST",
      body: JSON.stringify({
        title: "hello new action",
        frequency: "daily",
        picture_url: "http://123.com"
      })
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });
  };

  deleteAction = () => {
    const actionId = "0df98ee0-e874-11e9-80d7-23da03bd241e";
    return fetch(`http://${process.env.REACT_APP_API_URL}/action/${actionId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: "MyClimateActionAdmin2019!" //from state
      }
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });
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
