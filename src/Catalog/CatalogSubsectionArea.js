import React, { Component } from 'react'
import "./CatalogSubsectionArea.css"
import Times from '../Times';
import CatalogSubsectionListCard from './CatalogSubsectionListCard';
class CatalogSubsectionArea extends Component {
    constructor(props) {
        super(props);
        this.times = new Times();
    }

    getTimes(times) {
        return this.times.getTimes(times);
    }

    getSubsectionList() {

        let subsections = [];

        for (const subsection of this.props.section.subsections) {
            let number = subsection.number;
            let location = subsection.location;
            subsections.push(
                <CatalogSubsectionListCard course={this.props.course} section={this.props.section} subsection={subsection} {...this.props} />
                // <div className="CatalogSubsectionArea-ListCard">
                //     <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                //         <div class="d-flex w-100 align-items-center justify-content-between">
                //             <strong class="mb-1">{number}</strong>
                //         </div>
                //         <div class="col-10 mb-1 small">{location}</div>
                //     </a>
                // </div>
            )
        }

        return subsections;
    }

    render() {

        let course = this.props.course;
        let section = this.props.section;
        if (!course) {
            return null;
        }
        if (!section) {
            return null;
        }

        return (

            <div className="CatalogSubsectionArea">
                <div className="CatalogSubsectionArea-HeaderContainer container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="CatalogSectionArea-HeaderTitle">
                                <p>{course.number} | {course.name}</p>
                            </div>
                            <p>{course.credits} Cr.</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <a href="#" onClick={this.props.goBack}>Back</a>
                        </div>
                    </div>

                    <div className="CatalogSubsectionArea-HeaderSectionInfo">
                        <span>Section: </span><span class="CatalogSubsectionArea-HeaderNumber">{section.number}</span>
                        <div className="row">
                            <div className="col">
                                Instructor: <p>{section.instructor}</p>
                            </div>
                            <div className="col">
                                Location: <p>{section.location}</p>
                            </div>
                            <div className="col">
                                Meetings: <p>{this.getTimes(section.time)}</p>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="CatalogSubsectionArea-List">
                    <div class="CatalogSubsectionArea-ListContent d-flex flex-column align-items-stretch flex-shrink-0">
                        <div class="list-group list-group-flush border-none scrollarea">
                            {this.getSubsectionList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CatalogSubsectionArea;