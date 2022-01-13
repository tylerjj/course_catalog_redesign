import React, { Component } from 'react'
import CatalogCourseListCard from './CatalogCourseListCard';
import "./CatalogCourseList.css"

class CatalogCourseList extends Component {


    constructor(props) {
        super(props);
    }

    getCourseList() {

        let courses = [];

        for (const course of this.props.data) {
            courses.push(
                <CatalogCourseListCard number={course.number} name={course.name} onSelect={this.props.onSelect} />
            )
        }

        return courses;
    }

    render() {
        return (
            <div className="CatalogCourseList">
                <div class="CatalogCourseList-Content d-flex flex-column align-items-stretch flex-shrink-0">
                    <div class="list-group list-group-flush border-none scrollarea">
                        {this.getCourseList()}
                    </div>
                </div>
            </div>

        )
    }
}
export default CatalogCourseList;