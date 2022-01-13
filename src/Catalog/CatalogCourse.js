import React, { Component } from 'react'
import "./CatalogCourse.css"
class CatalogCourse extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
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
    addToCart() {
        this.props.add(this.props.data.number, null, null);
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
            sectionsAvailable = <a href="#" className="CatalogCourse-ViewSections" onClick={this.viewSections}>View Sections</a>;
        }
        return (
            <div className="CatalogCourse">
                <div className="CatalogCourse-HeaderContainer container-fluid">
                    <p>{number} | {name}</p>

                    <p className="CatalogCourse-Credits">{credits} Cr.</p>
                </div>
                <div className="CatalogCourse-Body">
                    <p className="CatalogCourse-Description">{description}</p>
                    <p><span>Requisites: </span><span className="CatalogCourse-Requisites">{requisites}</span></p>
                    <p>
                        <span>Keywords: </span>
                        <span className="CatalogCourse-Keywords">
                            {keywords}
                        </span>
                    </p>
                    <div className="row mt-2">
                        <div className="col-3">

                        </div>
                        <div className="col-6 d-flex align-items-end justify-content-end">
                            <button className="d-inline-block CatalogCourse-AddToCart" onClick={this.addToCart}>Add to Cart</button>

                        </div>
                        <div className="col-3 d-flex align-items-end justify-content-end">
                            <button className="d-inline-block CatalogCourse-SectionsAvailable"><span>Sections Available: </span>
                                <p>{sectionsAvailable}</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default CatalogCourse;