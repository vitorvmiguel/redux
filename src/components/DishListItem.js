import React, { Component } from 'react';

class DishListItem extends Component {
  render() {
    return (
      <li key={this.props.id} className="col-sm-6 col-md-4 col-lg-4">

        <div className="thumbnail">

          <img src={this.props.imageUrl}  alt={this.props.dishName} />

          <div className="caption">
            <h4>
              <a href={this.props.id}>
                <span>{this.props.dishName} </span>
                <span className="label label-default">
                  <span>€ {this.props.price}</span>
                </span>
                <br/>
                <small>by {this.props.chefName}</small>
              </a>
            </h4>
          </div>


          <div className="ratings">
            <ul>
              <li>
                <button className="btn btn-info btn-xs" type="button">
                  <span className="glyphicon glyphicon-heart"></span>
                  <span className="rating"> {this.props.averageRating} </span>
                  <span className="badge">{this.props.numberOfRatings}</span>
                </button>
              </li>
              <li>
                <button className="btn btn-info btn-xs" type="button">
                  <span className="glyphicon glyphicon-comment"></span>
                  <span className="comment"> Comments </span>
                  <span className="badge">{this.props.numberOfComments}</span>
                </button>
              </li>
              <li>
                <button className="btn btn-info btn-xs" type="button">
                  <span className="glyphicon glyphicon-cutlery"></span>
                  <span className="comment"> Portions </span>
                  <span className="badge">{this.props.availablePortions}</span>
                </button>
              </li>
            </ul>
          </div>
        
        </div>

      </li>
    );
  }
}

export default DishListItem;