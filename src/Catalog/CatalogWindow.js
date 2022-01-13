import React, { Component } from 'react'
import CatalogCourseArea from './CatalogCourseArea'
import CatalogSectionArea from './CatalogSectionArea';
import CatalogSubsectionArea from './CatalogSubsectionArea';
import "./CatalogWindow.css"
import { VIEWS } from '../Views';

class CatalogWindow extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         view: VIEWS.COURSEVIEW,
    //         currentSection: {},
    //     }
    //     this.sectionView = this.sectionView.bind(this);
    //     this.courseView = this.courseView.bind(this);
    //     this.subsectionView = this.subsectionView.bind(this);
    // }

    // componentDidUpdate(prevState, prevProps) {
    //     let course = this.props.course;
    //     if (!course || Object.entries(course).length === 0) {
    //         return;
    //     }
    //     if (!prevProps.course || Object.entries(prevProps.course).length === 0) {
    //         return;
    //     }
    //     console.log(course.number);
    //     console.log(prevProps.course.number);
    //     if (course.number !== prevProps.course.number) {
    //         this.setState({ view: VIEWS.COURSEVIEW });
    //     }
    // }
    // courseView() {
    //     let course = this.props.course;
    //     if (!course) {
    //         return null;
    //     }

    //     this.setState({ view: VIEWS.COURSEVIEW });
    // }

    // sectionView() {
    //     let course = this.props.course;
    //     if (!course) {
    //         return null;
    //     }

    //     this.setState({ view: VIEWS.SECTIONLIST });
    // }
    // subsectionView(number) {
    //     let course = this.props.course;
    //     if (!course) {
    //         return null;
    //     }
    //     let matchingSection = null;
    //     for (let section of course.sections) {
    //         if (section.number == number) {
    //             matchingSection = section;
    //             break;
    //         }
    //     }
    //     if (matchingSection === null) {
    //         console.log("Couldn't find a matching section number.");
    //         return null;
    //     }
    //     this.setState({ view: VIEWS.SUBSECTIONLIST, currentSection: matchingSection });
    // }

    // getView(course) {
    //     let view = this.state.view;
    //     if (!course) {
    //         console.log("this.state.course is undefined. Rendering Nothing");
    //         return null;
    //     }
    //     if (view === VIEWS.COURSEVIEW) {

    //         console.log("Rendering CatalogCourseArea");
    //         console.log("Course to be rendered: ");
    //         console.log(course);
    //         return <CatalogCourseArea
    //             course={course}
    //             viewSections={this.sectionView}
    //             {...this.props}
    //         />
    //     }
    //     else if (view === VIEWS.SECTIONLIST) {
    //         console.log("Rendering CatalogSectionArea");
    //         return <CatalogSectionArea
    //             course={course}
    //             sections={course.sections}
    //             viewSubsections={this.subsectionView}
    //             goBack={this.courseView}
    //             {...this.props}
    //         />
    //     } else if (view === VIEWS.SUBSECTIONLIST) {
    //         let section = this.state.currentSection;
    //         if (!section || Object.entries(section).length === 0) {
    //             console.log("this.state.currentSection is undefined/empty. Rendering nothing.");
    //             return null;
    //         }
    //         console.log("Rendering CatalogSubsectionArea");
    //         return <CatalogSubsectionArea
    //             course={course}
    //             section={section}
    //             subsections={section.subsections}
    //             goBack={this.sectionView} {...this.props}
    //         />
    //     }
    // }

    constructor(props) {
        super(props);
    }

    getView() {

        let view = this.props.view;
        let course = this.props.course;
        let section = this.props.section;

        if (!course) {
            console.log("this.props.course is undefined. Rendering Nothing");
            return null;
        }
        if (view === VIEWS.COURSEVIEW) {

            console.log("Rendering CatalogCourseArea");
            console.log("Course to be rendered: ");
            console.log(course);
            return <CatalogCourseArea
                course={course}
                {...this.props}
            />
        }
        else if (view === VIEWS.SECTIONLIST) {
            console.log("Rendering CatalogSectionArea");
            return <CatalogSectionArea
                course={course}
                sections={course.sections}
                goBack={this.props.viewCourse}
                {...this.props}
            />
        } else if (view === VIEWS.SUBSECTIONLIST) {
            if (!section || Object.entries(section).length === 0) {
                console.log("this.props.currentSection is undefined/empty. Rendering nothing.");
                return null;
            }
            console.log("Rendering CatalogSubsectionArea");
            return <CatalogSubsectionArea
                course={course}
                section={section}
                subsections={section.subsections}
                goBack={this.props.viewSections} {...this.props}
            />
        }
    }

    render() {
        return (
            <div className="CatalogWindow">
                {this.getView()}
            </div>
        )
    }
}
export default CatalogWindow;