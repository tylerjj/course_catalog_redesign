import React, { Component } from 'react'
import CartHeader from './CartHeader'
import CartSubheader from './CartSubheader'
import CartBody from './CartBody'
import "./Cart.css"
class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //     <CartSubheader
        //     {...this.props}
        // />
        return (
            <div>
                <CartHeader {...this.props} />

                <CartBody {...this.props} />
            </div>
        )
    }
}

export default Cart;