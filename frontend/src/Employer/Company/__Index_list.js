import React from 'react'
import {Link} from 'react-router-dom' 
function Index() {
    return (
        <>
            <section className='mt-5 mb-10'>
                <div className='container px-3 px-lg-5 pb-5'>
                    <p>My company</p>
                    <h3 className='my-5'>My company</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='p-3' scope="col">Company name</th>
                                <th className='p-3' scope="col">On invoice</th>
                                {/* <th className='py-3' scope="col"><Link to="/">+ Add company</Link></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-light'>
                                <td className='p-3'><Link to="/dashboard/clients/id">Marqetize</Link></td>
                                <td className='p-3'>Marqetize</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Index