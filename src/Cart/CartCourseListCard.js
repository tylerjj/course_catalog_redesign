import React, { Component } from 'react'
import "./CartCourseListCard.css"
class CartCourseListCard extends Component {
    constructor(props) {
        super(props);
        this.courseSelected = this.courseSelected.bind(this);
    }

    courseSelected() {
        return (this.props.onSelect(this.props.number));
    }
    render() {
        let number = this.props.number;
        let name = this.props.name;

        return (
            <div className="CartCourseListCard">
                <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" onClick={this.courseSelected} aria-current="true">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="CartCourseListCard-Number mb-1">{number}</strong>
                    </div>
                    <div class="col-10 mb-1 small">{name}</div>
                </a>
            </div>
        )
    }
}

export default CartCourseListCard;