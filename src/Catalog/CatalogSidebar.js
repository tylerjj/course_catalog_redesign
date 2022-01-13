import React, { Component } from 'react'
import CatalogCourseList from './CatalogCourseList'
import "./CatalogSidebar.css"
class CatalogSidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="CatalogSidebar">
                <CatalogCourseList
                    {...this.props}
                />
            </div>
        )
    }
}

export default CatalogSidebar;