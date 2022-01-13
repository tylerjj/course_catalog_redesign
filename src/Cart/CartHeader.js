import React, { Component } from 'react'
import './CartHeader.css'
class CartHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div class="row">
                    <div class="col">
                        <nav class="CartHeader-Navbar navbar navbar-expand-md">
                            <div class="container-fluid">
                                <span class="CartHeader-Brand navbar-brand">UW Course Cart</span>
                                <span class="CartHeader-CartIcon navbar-text fa fa-2x fa-shopping-cart" i aria-hidden="true"></span>
                                <button class="CartHeader-ViewCartBtn btn btn-primary" type="button" onClick={this.props.viewCatalog}>View Catalog</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartHeader;