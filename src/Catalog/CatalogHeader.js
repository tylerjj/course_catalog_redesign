import React, { Component } from 'react'
import './CatalogHeader.css'
class CatalogHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div class="row">
                    <div class="col">
                        <nav class="CatalogHeader-Navbar navbar navbar-expand-md">
                            <div class="container-fluid">
                                <span class="CatalogHeader-Brand navbar-brand">UW Course Catalog</span>
                                <span class="CatalogHeader-CartIcon navbar-text fa fa-2x fa-shopping-cart" i aria-hidden="true"></span>
                                <button class="CatalogHeader-ViewCartBtn btn btn-primary" type="button" onClick={this.props.viewCart}>View Cart</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default CatalogHeader;