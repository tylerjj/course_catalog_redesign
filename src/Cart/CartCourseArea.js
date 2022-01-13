import React, { Component } from 'react'
import "./CartCourseArea.css"
import CartCourse from './CartCourse';
class CartCourseArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        let course = this.props.course;

        if (!course) {
            return null;
        }
        return (
            <div className="CartCourseArea">
                <CartCourse {...this.props} data={course} remove={this.props.remove} viewSections={this.props.viewSections} />
            </div>
        )
    }
}
export default CartCourseArea;