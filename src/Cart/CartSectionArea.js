import React, { Component } from 'react'
import "./CartSectionArea.css"
import CartSectionListCard from './CartSectionListCard';

class CartSectionArea extends Component {
    constructor(props) {
        super(props);
        this.getSectionList = this.getSectionList.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    getSectionList() {
        let sections = this.props.course.sections;
        if (!sections) {

            return null;
        }
        let sectionList = [];
        for (const section of sections) {
            console.log(section);
            if (section.inCart) {
                sectionList.push(
                    <CartSectionListCard
                        {...this.props}
                        course={this.props.course}
                        section={section}
                        viewSubsections={this.props.viewSubsections}
                    />
                )
            }

        }
        return sectionList;
    }

    goBack() {
        this.props.viewCourse(this.props.course.number);
    }
    render() {

        let course = this.props.course;
        let number = course.number;
        let name = course.name;
        let credits = course.credits;

        return (
            <div>
                <div className="CartSectionArea">
                    <div className="CartSectionArea-HeaderContainer container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="CartSectionArea-HeaderTitle">
                                    <p>{number} | {name}</p>
                                </div>
                                <p>{credits} Cr.</p>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <a href="#" onClick={this.goBack}>Back</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="CartSectionArea-List">
                    <div class="CartSectionArea-ListContent d-flex flex-column align-items-stretch flex-shrink-0">
                        <div class="list-group list-group-flush border-none scrollarea">
                            {this.getSectionList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartSectionArea;