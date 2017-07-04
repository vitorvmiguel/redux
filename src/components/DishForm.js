import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { postDish } from '../actions/dishesActions'

class DishForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  } 
  handleSubmit(e) {
    e.preventDefault();
    const dish = [{
      dishName: findDOMNode(this.refs.name).value,
      id: "",
      imageURL: findDOMNode(this.refs.image).value,
      chefName: "",
      averageRating: "",
      numberOfRatings: "0",
      numberOfComments: "0",
      availablePortions: findDOMNode(this.refs.portions).value,
      price: findDOMNode(this.refs.price).value,
      description: findDOMNode(this.refs.description).value
    }]
    this.props.postDish(dish);
  }
  render() {
    return(
        <div className="col-sm-6">
          <div className="well">
            <h4>Add a New Dish</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required className="form-control" id="name" ref="name" placeholder="Dish Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <div className="input-group">
                  <div className="input-group-addon">€</div>
                  <input required className="form-control" id="price" ref="price" placeholder="Dish Price"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="portions">Portions</label>
                <select required className="form-control" id="portions" ref="portions">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea required className="form-control" rows="3" id="description" ref="description" placeholder="Dish Description"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="image" className="control-label">Picture</label>
                <div>
                  <input required type="file" id="image"  ref="image"/>
                  <p className="help-block">Select your dish photo.</p>
                </div>
              </div>
              <button 
                type="submit" 
                className="btn btn-warning"
                onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({postDish},dispatch);
}

export default connect(null, mapDispatchToProps)(DishForm);