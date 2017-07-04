import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDishes } from '../actions/dishesActions';

class DishesList extends Component {
  componentDidMount() {
    this.props.getDishes();
  }
  render() {
    const dishesList = this.props.dishes.map(function(dish){
      return (
        <li key={dish.id} className="col-sm-6 col-md-4 col-lg-4">
          <div className="thumbnail">
            <div className="caption">
              <h4>
                <a href={dish.id}>
                  <span>{dish.dishName} </span>
                  <span className="label label-default">
                    <span>€ </span>
                    <span>{dish.price}</span>
                  </span>
                  <br/>
                  <small>by </small>
                  <small className="chefName">{dish.chefName}</small>
                </a>
              </h4>
            </div>
          </div>
        </li>
      )
    });
    return(
      <ul className="row list-unstyled">
        {dishesList}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    dishes: state.dishes.dishes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      getDishes: getDishes
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(DishesList);