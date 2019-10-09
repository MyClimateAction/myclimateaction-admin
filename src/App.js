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
      token: undefined,
      loading: false
    };
  }

  checkAuth = token => {
    this.fetchAuth(token);
  };

  componentDidMount() {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      this.fetchAuth(localStorageToken);
    }
  }

  fetchAuth = token => {
    return fetch(`${process.env.REACT_APP_API_URL}/auth`, {
      headers: {
        authorization: token
      }
    })
      .then(res => {
        if (res.ok) {
          this.setState({
            token
          });
          localStorage.setItem("token", token);
          this.fetchData();
        } else {
          this.setState({
            token: undefined
          });

          alert("Invalid auth token");

          throw Error(res.statusText);
        }
      })
      .catch(err => {
        this.setState({
          token: undefined
        });

        alert("Invalid auth token");

        throw Error(err.message);
      });
  };

  fetchData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/actions`)
      .then(res => res.json())
      .then(res => {
        console.log("fetching");
        this.setState({
          actions: res.data,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data.", error);
      });
  };

  postAction = () => {
    console.log("post Action! ");
    return fetch(`${process.env.REACT_APP_API_URL}/action`, {
      headers: {
        "Content-type": "application/json",
        authorization: "MyClimateActionAdmin2019!"
      },
      method: "POST",
      body: JSON.stringify({
        title: "new action",
        frequency: "daily",
        picture_url: "http://123.com"
      })
    })
      .then(res => {
        return res.json();
      })
      .then(console.log("pass log"))
      .catch(err => {
        console.error(err);
      });
  };

  deleteAction = actionID => {
    return fetch(`${process.env.REACT_APP_API_URL}/action/${actionID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: this.state.token //from state
      }
    })
      .then(res => {
        if (res.ok) {
          console.log("DELETE!");
        }
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });
  };

  // ---------------- HANDLE FUNCTIONS ----------------
  handleLogout = () => {
    localStorage.removeItem("token");

    this.setState({
      actions: [],
      token: undefined
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

  handleModifyAction = (id, data) => {
    let modifyActions;
    this.setState(prevState => {
      modifyActions = prevState.actions;
      if (modifyActions.id === id) {
        modifyActions.name = data.name;
        modifyActions.picture_url = data.picture_url;
        modifyActions.frequency = data.frequency;
      }
    });
    return {
      actions: modifyActions
    };
  };

  handleDeleteAction = id => {
    this.setState(prevState => {
      return {
        actions: prevState.actions.filter(a => a.id !== id)
      };
    });
    this.deleteAction(id);
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
        {!this.state.token && (
          <div className="Content">
            {<AuthToken onAccess={this.checkAuth} />}
          </div>
        )}
        {this.state.token && (
          <React.Fragment>
            <TopBar logout={this.handleLogout} />
            <div className="Content">
              <h2>Manage actions</h2>
              {this.state.loading ? (
                <p>Loading...</p>
              ) : (
                <Table
                  data={this.state.actions}
                  addAction={this.postAction}
                  modifyAction={this.handleModifyAction}
                  deleteAction={this.handleDeleteAction}
                />
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
