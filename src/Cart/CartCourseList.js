import React, { Component } from 'react'
import CartCourseListCard from './CartCourseListCard';
import "./CartCourseList.css"

class CartCourseList extends Component {


    constructor(props) {
        super(props);
    }

    getCourseList() {

        let courses = [];

        for (const course of this.props.cartContents) {
            if (course.inCart) {
                courses.push(
                    <CartCourseListCard number={course.number} name={course.name} onSelect={this.props.onSelect} />
                )
            }
        }
        return courses;
    }

    render() {
        return (
            <div className="CartCourseList">
                <div class="CartCourseList-Content d-flex flex-column align-items-stretch flex-shrink-0">
                    <div class="list-group list-group-flush border-none scrollarea">
                        {this.getCourseList()}
                    </div>
                </div>
            </div>

        )
    }
}
export default CartCourseList;