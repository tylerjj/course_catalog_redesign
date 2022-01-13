import React, { Component } from 'react'
import "./CartSubsectionArea.css"
import Times from '../Times';
import CartSubsectionListCard from './CartSubsectionListCard';
class CartSubsectionArea extends Component {
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
            if (subsection.inCart) {
                subsections.push(
                    <CartSubsectionListCard course={this.props.course} section={this.props.section} subsection={subsection} {...this.props} />
                )
            }

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

            <div className="CartSubsectionArea">
                <div className="CartSubsectionArea-HeaderContainer container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="CartSectionArea-HeaderTitle">
                                <p>{course.number} | {course.name}</p>
                            </div>
                            <p>{course.credits} Cr.</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <a href="#" onClick={this.props.goBack}>Back</a>
                        </div>
                    </div>

                    <div className="CartSubsectionArea-HeaderSectionInfo">
                        <span>Section: </span><span class="CartSubsectionArea-HeaderNumber">{section.number}</span>
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
                <div className="CartSubsectionArea-List">
                    <div class="CartSubsectionArea-ListContent d-flex flex-column align-items-stretch flex-shrink-0">
                        <div class="list-group list-group-flush border-none scrollarea">
                            {this.getSubsectionList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartSubsectionArea;