import React from 'react';
import axios from "axios";

export const Blogs = () => {
    const blogs = async () => {
        let x = await axios.get('/blogs');
        if (x.data.data !== "blogs") {
            document.getElementById('output').innerHTML = ''+
            '<div class="row">'+
                '<div class="p-3">'+
                    '<h3 class="text-center">'+x.data.data+'</h3>'+
                '</div>'+
            '</div>';
        }else{
            document.getElementById('output').innerHTML = ''+
            '<div class="row">'+
                '<div class="p-3">'+
                    '<img src="" className="card-img-top" alt="image" />'+
                    '<div className="card-body">'+
                        '<h5 className="card-title">Card title</h5>'+
                        '<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>'+
                        '<a className="btn btn-link">Read More...</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
        }
    }
    blogs();
    return (
        <>
            <div className="m-5 col-md-8 mx-auto">
                <h3 className='text-center mb-5'>Blogs</h3>
                <div id='output'></div>
                {/* // <nav className='m-5' aria-label="Page navigation example">
                //     <ul className="pagination justify-content-end">
                //         <li className="page-item disabled">
                //             <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                //         </li>
                //         <li className="page-item"><a className="page-link" href="#">1</a></li>
                //         <li className="page-item"><a className="page-link" href="#">2</a></li>
                //         <li className="page-item"><a className="page-link" href="#">3</a></li>
                //         <li className="page-item">
                //             <a className="page-link" href="#">Next</a>
                //         </li>
                //     </ul>
                //</nav> */}
            </div>
        </>
    );
};

export default Blogs