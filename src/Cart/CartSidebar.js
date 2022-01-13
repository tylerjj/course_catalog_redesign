import React, { Component } from 'react'
import CartCourseList from './CartCourseList'
import "./CartSidebar.css"
class CartSidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="CartSidebar">
                <CartCourseList
                    {...this.props}
                />
            </div>
        )
    }
}

export default CartSidebar;