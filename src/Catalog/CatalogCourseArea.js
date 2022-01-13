import React, { Component } from 'react'
import "./CatalogCourseArea.css"
import CatalogCourse from './CatalogCourse';
class CatalogCourseArea extends Component {
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
            <div className="CatalogCourseArea">
                <CatalogCourse data={course} add={this.props.add} remove={this.props.remove} viewSections={this.props.viewSections} />
            </div>
        )
    }
}
export default CatalogCourseArea;