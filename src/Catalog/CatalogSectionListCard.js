import React, { Component } from 'react'
import "./CatalogSectionListCard.css"
import Times from '../Times';
class CatalogSectionListCard extends Component {
    constructor(props) {
        super(props);
        this.times = new Times();
        this.viewSubsections = this.viewSubsections.bind(this);
        this.addToCart = this.addToCart(this);
    }

    getTimes(times) {
        return this.times.getTimes(times);
    }
    viewSubsections() {
        let section = this.props.section;
        if (!section) {
            console.log("viewSubsections returned null");
            return null;
        }
        this.props.viewSubsections(section.number);
    }


    addToCart() {
        this.props.add(this.props.course.number, this.props.section.number, null);
    }


    render() {
        let section = this.props.section;
        console.log(section);
        if (!section) {
            return null;
        }
        let number = section.number;
        let location = section.location;
        let instructor = section.instructor;
        let times = this.getTimes(section.time);
        let subsections = section.subsections;
        let subsectionsAvailable = "None";
        if (subsections && subsections.length != 0) {
            subsectionsAvailable = <div className="CatalogSectionListCard-ViewSubsections"><a href="#" onClick={this.viewSubsections}>View Subsections</a></div>;
        }
        return (
            <div className="CatalogSectionListCard">
                <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong className="CatalogSectionListCard-Number mb-1">{number}</strong>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="CatalogSectionListCard-Instructor col-10 mb-1 med"><p>Instructor:</p> {instructor}</div>
                        </div>
                        <div className="col">
                            <div class="CatalogSectionListCard-Location col-10 mb-1 med"><p>Location: </p>{location}</div>
                        </div>
                        <div className="col">
                            <div class="CatalogSectionListCard-Times col-10 mb-1 med"><p>Meetings: </p>{times}</div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">

                        </div>
                        <div className="col-6 d-flex align-items-end justify-content-end">
                            <button className="d-inline-block CatalogSectionListCard-AddToCart" onClick={this.addToCart}>Add to Cart</button>

                        </div>
                        <div className="col-3 d-flex align-items-end justify-content-end">
                            <button className="d-inline-block CatalogSectionListCard-SubsectionsAvailable"><span>Subsections Available: </span>
                                <p>{subsectionsAvailable}</p>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default CatalogSectionListCard;