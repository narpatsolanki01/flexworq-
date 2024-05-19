import React from 'react'

function Calendar() {
    return (
        <>
            <div className='card border-0 shadow border-top d-none d-md-block'>
                <div className='card-body'>
                    <h5 className='d-flex mb-4'>
                        <span className='position-absolute mt-2'><i className="bi bi-chevron-left"></i></span>
                        <span className='m-auto'>July</span>
                        <span className='position-absolute end-0 me-3 mt-2'><i className="bi bi-chevron-right"></i></span>
                    </h5>
                    <ul className='list-inline d-flex pt-2'>
                        <li className='m-auto text-primary'>S</li>
                        <li className='m-auto text-primary'>M</li>
                        <li className='m-auto text-primary'>T</li>
                        <li className='m-auto text-primary'>W</li>
                        <li className='m-auto text-primary'>T</li>
                        <li className='m-auto text-primary'>F</li>
                        <li className='m-auto text-primary'>S</li>
                    </ul>
                    <ul className='list-inline d-flex  mt-0'>
                        <li className='m-auto'>1</li>
                        <li className='m-auto'>2</li>
                        <li className='m-auto'>3</li>
                        <li className='m-auto'>4</li>
                        <li className='m-auto'>5</li>
                        <li className='m-auto'>6</li>
                        <li className='m-auto'>7</li>
                    </ul>
                    <ul className='list-inline d-flex  mt-0'>
                        <li className='m-auto'>8</li>
                        <li className='m-auto'>9</li>
                        <li className='m-auto'>10</li>
                        <li className='m-auto'>11</li>
                        <li className='m-auto rounded-5 bg-success p-2 text-light'>12</li>
                        <li className='m-auto'>13</li>
                        <li className='m-auto'>14</li>
                    </ul>
                    <ul className='list-inline d-flex  mt-0'>
                        <li className='m-auto'>15</li>
                        <li className='m-auto'>16</li>
                        <li className='m-auto'>17</li>
                        <li className='m-auto'>18</li>
                        <li className='m-auto'>19</li>
                        <li className='m-auto'>20</li>
                        <li className='m-auto'>21</li>
                    </ul>
                    <ul className='list-inline d-flex  mt-0'>
                        <li className='m-auto'>22</li>
                        <li className='m-auto'>23</li>
                        <li className='m-auto'>24</li>
                        <li className='m-auto'>25</li>
                        <li className='m-auto'>26</li>
                        <li className='m-auto'>27</li>
                        <li className='m-auto'>28</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Calendar