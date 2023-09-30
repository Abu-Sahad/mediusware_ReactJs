import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [data, setData] = useState([]);
    const [temp, setTemp] = useState([]);
    const [showAllContactsModal, setShowAllContactsModal] = useState(false);
    const [showUSContactsModal, setShowUSContactsModal] = useState(false);
    const [even, setEven] = useState(false);

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/?format=json')
            .then((response) => response.json())
            .then((responseData) => {
                // Update the state with the fetched data
                setData(responseData.results);
                //console.log("object ", responseData.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const openAllContactsModal = () => {
        setShowAllContactsModal(true);
    };

    const closeAllContactsModal = () => {
        setShowAllContactsModal(false);
    };

    const openUSContactsModal = () => {
        setShowUSContactsModal(true);
    };

    const closeUSContactsModal = () => {
        setShowUSContactsModal(false);
    };

    const openAllCloseUs = () => {
        setShowAllContactsModal(true);
        setShowUSContactsModal(false);
    }

    const openUSCloseAll = () => {
        setShowAllContactsModal(false);
        setShowUSContactsModal(true);
    }

    const handleEven = () => {
        const newData = data.filter(item => item.id % 2 === 0);
        setData(newData);
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={openAllContactsModal}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={openUSContactsModal}>US Contacts</button>
                </div>

                {/* All Contacts Modal */}
                <div className={`modal fade ${showAllContactsModal ? 'show' : ''}`} style={{ display: showAllContactsModal ? 'block' : 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">All Contacts</h5>
                                <button type="button" className="btn-close" onClick={closeAllContactsModal}></button>
                            </div>
                            <div className="modal-body">
                                {/* Render all contact data here */}
                                {data.map((contact) => (
                                    <div key={contact.id}>
                                        <div key={contact.id} className='border mt-2 mr-2 px-3 py-2'>
                                            <p>Id: {contact.id}</p>
                                            <p>Country Id: {contact.country.id}</p>
                                            <p>Country: {contact.country.name}</p>
                                            <p>Phone: {contact.phone}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary bg-1" onClick={openAllCloseUs}>All Contacts</button>
                                <button type="button" className="btn btn-secondary bg-2" onClick={openUSCloseAll}>Us Contacts</button>
                                <button type="button" className="btn btn-secondary bg-white border-1 text-black" onClick={closeAllContactsModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of All Contacts Modal */}

                {/* US Contacts Modal */}
                <div className={`modal fade ${showUSContactsModal ? 'show' : ''}`} style={{ display: showUSContactsModal ? 'block' : 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">US Contacts</h5>
                                <button type="button" className="btn-close" onClick={closeUSContactsModal}></button>
                            </div>
                            <div className="modal-body px-4">
                                {/* Render US contact data here */}
                                {data.filter((contact) => contact.country.name === 'United States').map((contact) => (
                                    <div key={contact.id} className='border mt-2 mr-2 px-3 py-2'>
                                        <p>Id: {contact.id}</p>
                                        <p>Country Id: {contact.country.id}</p>
                                        <p>Country: {contact.country.name}</p>
                                        <p>Phone: {contact.phone}</p>v
                                    </div>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary bg-1" onClick={openAllCloseUs}>All Contacts</button>
                                <button type="button" className="btn btn-secondary bg-2" onClick={openUSCloseAll}>Us Contacts</button>
                                <button type="button" className="btn btn-secondary bg-white border-1 text-black" onClick={closeAllContactsModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of US Contacts Modal */}
                {/* Check box */}
                <div className="form-check">
                    <input className="form-check-input" onClick={handleEven} type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Check Even Value
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Problem2;
