import React, { Component } from 'react'
import "./CartSubsectionListCard.css"
import Times from '../Times';
class CartSubsectionListCard extends Component {
    constructor(props) {
        super(props);
        this.times = new Times();
        this.removeFreomCart = this.removeFreomCart.bind(this);
    }

    getTimes(times) {
        return this.times.getTimesDefault(times);
    }

    removeFromCart() {
        this.props.remove(this.props.course.number, this.props.section.number, this.props.subsection.number);
    }


    render() {
        let subsection = this.props.subsection;
        if (!subsection) {
            return null;
        }
        let number = subsection.number;
        let location = subsection.location;
        let times = this.getTimes(subsection.time);

        return (
            <div className="CartSubsectionListCard">
                <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong className="CartSubsectionListCard-Number mb-1">{number}</strong>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="CartSubsectionListCard-Location col-10 mb-1 med"><p>Location: </p>{location}</div>
                        </div>
                        <div className="col">
                            <div class="CartSubsectionListCard-Times col-10 mb-1 med"><p>Meetings: </p>{times}</div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-9">

                        </div>
                        <div className="col-3 d-flex align-items-end justify-content-end">
                            <button className="d-inline-block CartSubsectionListCard-AddToCart" onClick={this.removeFromCart}>RemoveFromCart</button>
                        </div>
                    </div>
                </a>
            </div>

        )
    }
}

export default CartSubsectionListCard;