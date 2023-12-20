import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Statistics = () => {
    return (
        <div className="container ">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-ceter ml-md-5 " >
            <Badge bg="secondary" className="p-3 m-3">5000 Users</Badge>
            <Badge bg="secondary" className="p-3 m-3">10 Trusted Clients</Badge>
            <Badge bg="secondary" className="p-3 m-3">10k+ Downloads</Badge>
        </div>
        </div>
    );
}

export default Statistics;
