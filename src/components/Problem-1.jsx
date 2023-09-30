import React, { useEffect, useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [list, setList] = useState([]);
    const [info, setInfo] = useState({});
    const [temp, setTemp] = useState([]);

    const handleClick = (val) => {
        setShow(val);
    }

    const handleInfo = (e) => {
        setInfo(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newList = [...list, info];
        setList(newList);
        setTemp(newList);
    }
    console.log("temp  ", temp);
    useEffect(() => {
        if (show === 'active') {
            const newTemp = temp.filter(item => item.status === 'active');
            setList(newTemp);
        } else if (show === 'all') {
            let newTemp = temp.filter(item => item.status === 'active');
            let newLists = newTemp; console.log('acibe ', newLists);
            newTemp = temp.filter(item => item.status === 'completed');
            newLists = [...newLists, ...newTemp]; console.log('complete', newLists);
            newTemp = temp.filter(item => item.status !== 'active' && item.status !== 'completed');
            newLists = [...newLists, ...newTemp]; console.log('after', newLists);
            setList(newLists);
        } else if (show === 'completed') {
            const newTemp = temp.filter(item => item.status === 'completed');
            setList(newTemp);
        }
    }, [show])

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" name='name' onBlur={handleInfo} placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' onBlur={handleInfo} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                            {
                                list.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                )
                            }
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;