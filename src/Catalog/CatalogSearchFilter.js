import React, { Component } from 'react'
import Form from "react-bootstrap/Form"
import SearchAndFilter from '../SearchAndFilter';
import "./CatalogSearchFilter.css"

class CatalogSearchFilter extends Component {

    constructor(props) {
        super(props);
        this.searchAndFilter = new SearchAndFilter();
        this.subject = React.createRef();
        this.minimumCredits = React.createRef();
        this.maximumCredits = React.createRef();
        this.search = React.createRef();
    }

    setCourses() {
        this.props.setCourses(this.searchAndFilter.searchAndFilter(this.props.courses, this.search.current.value,
            this.subject.current.value, this.minimumCredits.current.value, this.maximumCredits.current.value));
    }

    handleCreditsKeyDown(e) {
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'].indexOf(e.key) === -1)
            e.preventDefault();
    }

    getSubjectOptions() {
        let subjectOptions = [];
        for (const subject of this.props.subjects) {
            subjectOptions.push(<option key={subject}>{subject}</option>);
        }

        return subjectOptions;
    }

    render() {
        return (
            <div>
                <div className="CatalogSearchFilter row">
                    <div id="SearchCol" className="CatalogSearchFilter-SearchCol col">
                        <Form>
                            <Form.Group controlId="formKeywords" onChange={() => this.setCourses()} style={{ width: '100%' }}>
                                <div className="row">
                                    <Form.Label display="inline">Search</Form.Label>
                                    <div className="col">
                                        <Form.Control display="inline" type="text" placeholder="Search" autoComplete="off" ref={this.search} />
                                    </div>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                    <div id="CreditsCol" className="CatalogSearchFilter-CreditsCol col">
                        <Form>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Form.Group controlId="minimumCredits" onChange={() => this.setCourses()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                                    <Form.Label>Credits</Form.Label>
                                    <Form.Control type="text" placeholder="minimum" autoComplete="off" ref={this.minimumCredits} />
                                </Form.Group>
                                <div style={{ marginLeft: '5px', marginRight: '5px', marginTop: '38px' }}>to</div>
                                <Form.Group controlId="maximumCredits" style={{ marginTop: '32px' }} onChange={() => this.setCourses()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                                    <Form.Control type="text" placeholder="maximum" autoComplete="off" ref={this.maximumCredits} />
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                    <div id="SubjectsCol" className="CatalogSearchFilter-SubjectsCol col">
                        <Form>
                            <Form.Group controlId="formSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control as="select" ref={this.subject} onChange={() => this.setCourses()}>
                                    {this.getSubjectOptions()}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CatalogSearchFilter;