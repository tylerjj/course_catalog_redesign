import React, { Component } from 'react'
import CatalogSidebar from './CatalogSidebar'
import CatalogWindow from './CatalogWindow'
import "./CatalogBody.css"
import { VIEWS } from '../Views'
// const VIEWS = {
//     COURSEVIEW: "courseView",
//     SECTIONLIST: "sectionList",
//     SUBSECTIONLIST: "subsectionList"
// };
class CatalogBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: VIEWS.COURSEVIEW,
            currentCourse: {},
            currentSection: {},
        }
        this.viewCourse = this.viewCourse.bind(this);
        this.viewSections = this.viewSections.bind(this);
        this.viewSubsections = this.viewSubsections.bind(this);
    }


    viewCourse(number) {
        console.log("Course Selected: ");
        console.log(number);
        // Get course from this.props.data that matches
        // this course number. 

        let matchingCourse = null;
        for (let course of this.props.data) {
            if (course.number == number) {
                matchingCourse = course;
                break;
            }
        }
        //Update state of currentCourse. 
        this.setState({ currentCourse: matchingCourse, currentSection: {}, view: VIEWS.COURSEVIEW })
        this.forceUpdate();
    }

    viewSections() {
        this.setState({ view: VIEWS.SECTIONLIST });
        this.forceUpdate();
    }

    // Update section number
    viewSubsections(number) {
        console.log("Section Selected: " + number);
        let matchingSection = null;
        for (let section of this.state.currentCourse.sections) {
            if (section.number == number) {
                matchingSection = section;
                break;
            }
        }
        // Update state of currentSection.
        this.setState({ currentSection: matchingSection, view: VIEWS.SUBSECTIONLIST })
        this.forceUpdate();
    }

    render() {
        return (
            <div className="CatalogBody">
                <div className="row">
                    <div className="CatalogBody-Sidebar col-3">
                        <CatalogSidebar onSelect={this.viewCourse} {...this.props} />
                    </div>
                    <div className="CatalogBody-Window col-9">
                        <CatalogWindow
                            course={this.state.currentCourse}
                            section={this.state.currentSection}
                            viewCourse={this.viewCourse}
                            viewSections={this.viewSections}
                            viewSubsections={this.viewSubsections}
                            view={this.state.view}
                            {...this.props} />
                    </div>
                </div>


            </div>
        )
    }
}

export default CatalogBody;