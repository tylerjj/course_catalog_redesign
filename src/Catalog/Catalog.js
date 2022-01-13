import React, { Component } from 'react'
import CatalogHeader from './CatalogHeader'
import CatalogSearchFilter from './CatalogSearchFilter'
import CatalogBody from './CatalogBody'
import "./Catalog.css"
class Catalog extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <CatalogHeader {...this.props} />
                <CatalogSearchFilter
                    {...this.props}
                />
                <CatalogBody {...this.props} />
            </div>
        )
    }
}

export default Catalog;