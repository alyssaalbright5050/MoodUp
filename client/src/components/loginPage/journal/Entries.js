
import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
const EntryHeader = () => {
    return <h2>My Entries</h2>
}

const EntryBody = props => {
    const lines = props.entryData.map((line, index) => {
        return (
            <Container key={index} className='shadow p-3 mb-5'>
                <Row>
                    <Col>
                        <div key={index}>
                            <h2>{line.title}</h2>
                            <p>{line.body}</p>
                            <Button onClick={() => props.removeEntry(index)}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    })

    return (
        <div>
            {lines}
        </div>
    )
}

const Entries = (props) => {

    const { entryData, removeEntry } = props;

    return (
        <div>
            <h2 style={{ paddingTop: '20px', paddingBottom: '20px' }}></h2>

            <EntryHeader />
            <EntryBody entryData={entryData} removeEntry={removeEntry} />
        </div>

    )

}

export default Entries;