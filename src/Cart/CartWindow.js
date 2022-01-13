import React, { Component } from 'react'
import CartCourseArea from './CartCourseArea'
import CartSectionArea from './CartSectionArea';
import CartSubsectionArea from './CartSubsectionArea';
import "./CartWindow.css"
import { VIEWS } from '../Views';

class CartWindow extends Component {

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

    //         console.log("Rendering CartCourseArea");
    //         console.log("Course to be rendered: ");
    //         console.log(course);
    //         return <CartCourseArea
    //             course={course}
    //             viewSections={this.sectionView}
    //             {...this.props}
    //         />
    //     }
    //     else if (view === VIEWS.SECTIONLIST) {
    //         console.log("Rendering CartSectionArea");
    //         return <CartSectionArea
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
    //         console.log("Rendering CartSubsectionArea");
    //         return <CartSubsectionArea
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

            console.log("Rendering CartCourseArea");
            console.log("Course to be rendered: ");
            console.log(course);
            return <CartCourseArea
                {...this.props}
                course={course}

            />
        }
        else if (view === VIEWS.SECTIONLIST) {
            console.log("Rendering CartSectionArea");
            return <CartSectionArea
                {...this.props}
                course={course}
                sections={course.sections}
                goBack={this.props.viewCourse}

            />
        } else if (view === VIEWS.SUBSECTIONLIST) {
            if (!section || Object.entries(section).length === 0) {
                console.log("this.props.currentSection is undefined/empty. Rendering nothing.");
                return null;
            }
            console.log("Rendering CartSubsectionArea");
            return <CartSubsectionArea
                {...this.props}
                course={course}
                section={section}
                subsections={section.subsections}
                goBack={this.props.viewSections}
            />
        }
    }

    render() {
        return (
            <div className="CartWindow">
                {this.getView()}
            </div>
        )
    }
}
export default CartWindow;