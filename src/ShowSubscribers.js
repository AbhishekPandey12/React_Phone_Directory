import React, { Component } from 'react';
import Header from "./common/Header";
import "./ShowSubscribers.css";
import './common/common.css';
import { Link } from "react-router-dom";

class ShowSubscribers extends Component {

  // clickHandler(message){

  // }

  // constructor()
  // {
  //   super();
  //   this.state = {
  //     subscribersListToShow:[]
  //   }
  // }

  // componentDidMount(){
  //   let newSubscriber = {
  //     id: 1,
  //     name: 'Abhishek Pandey',
  //     phone: '8475984759874'
  //   }

  //   let subscribersList = this.state.subscribersListToShow;
  //   subscribersList.push(newSubscriber);
  //   this.setState({subscribersListToShow: subscribersList});
  // }

  render() {
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: 'Abhishek',
    //     phone: '8888888888'
    //   },
    //   {
    //     id: 2,
    //     name: 'Adarsh',
    //     phone: '8888888881'
    //   }
    // ];
    return (
      <div className="component-container">
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {/* <div className="grid-container">
            <span className="grid-item">Abhishek</span>
            <span className="grid-item">8888888888</span>
          </div>

          <div className="grid-container">
            <span className="grid-item">Adarsh</span>
            <span className="grid-item">9999999999</span>
          </div> */}

          {
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                  {/* onClick={this.clickHandler.bind(this, "Delete Clicked")} */}
                </span>
              </div>
            })
          }

        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
