import React, { Component } from 'react'
import "./CartCourse.css"
class CartCourse extends Component {
    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.viewSections = this.viewSections.bind(this);
    }

    viewSections(number) {
        this.props.viewSections(number);
    }

    getRequisites() {
        const requisites = this.props.data.requisites;

        if (!requisites || requisites.length === 0) {
            return "None";
        }
        else {
            let string = "";
            //https://stackoverflow.com/questions/45812160/unexpected-comma-using-map
            requisites.map(function (requirement, index) {
                // Wrap the courses within each requirement in ( ), with an OR between
                // each two courses. 
                string = "(" + requirement.map(function (courses, index2) {
                    if (index2 !== requirement.length - 1) {
                        return courses + " OR ";
                    } else return courses;
                }).join("") + ")";
                // If this isn't the last requirement, append an AND to the string of
                // requirements. 
                if (index !== requisites.length - 1) {
                    return string + " AND ";
                } else return string;
            });

            // return our string of requirements
            return string;
        }
    }

    getKeywords() {
        let keywords = this.props.data.keywords;
        if (!keywords || keywords.length === 0) {
            return;
        }
        return keywords.map(function (keyword, index) {
            if (index !== keywords.length - 1) {
                return keyword + ", "
            } else return keyword;
        })

    }
    //TODO: Need to make sure the view changes when I remove a course/section/subsection. 
    removeFromCart() {
        this.props.remove(this.props.data.number, null, null);
        this.props.viewCourse(null);
    }

    render() {
        const data = this.props.data;
        //Sort of a hackey workaround to a bug I was having.
        if (!data || Object.entries(data).length === 0) {
            return null;
        }
        const credits = data.credits;
        const number = data.number;
        const name = data.name;
        const description = data.description;
        const subject = data.subject;
        const keywords = this.getKeywords();
        const requisites = this.getRequisites();
        const sections = data.sections;
        let sectionsAvailable = "None";
        if (sections && sections.length != 0) {
            sectionsAvailable = <a href="#" className="CartCourse-ViewSections" onClick={this.viewSections}>View Sections</a>;
        }
        return (
            <div className="CartCourse">
                <div className="CartCourse-HeaderContainer container-fluid">
                    <p>{number} | {name}</p>

                    <p className="CartCourse-Credits">{credits} Cr.</p>
                </div>
                <div className="CartCourse-Body">
                    <p className="CartCourse-Description">{description}</p>
                    <p><span>Requisites: </span><span className="CartCourse-Requisites">{requisites}</span></p>
                    <p>
                        <span>Keywords: </span>
                        <span className="CartCourse-Keywords">
                            {keywords}
                        </span>
                    </p>
                    <div className="row mt-2">
                        <div className="col-3">

                        </div>
                        <div className="col-6 d-flex align-items-end justify-content-end">
                            <button className="d-inline-block CartCourse-AddToCart" onClick={this.removeFromCart}>Remove From Cart</button>

                        </div>
                        <div className="col-3 d-flex align-items-end justify-content-end">
                            <button className="d-inline-block CartCourse-SectionsAvailable"><span>Sections In Cart: </span>
                                <p>{sectionsAvailable}</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default CartCourse;