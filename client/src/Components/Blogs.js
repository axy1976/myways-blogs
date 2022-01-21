import React from 'react';

export const Blogs = () => {
    
    return (
        <>
            <div className="m-5 col-md-8 mx-auto">
                <h3 className='text-center mb-5'>Blogs</h3>
                <div className="row">
                    <div className="card col-md-3 col-sm-4 mx-auto">
                        <img src="" className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-link">Read More...</a>
                        </div>
                    </div>
                </div>
                <nav className='m-5' aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Blogs