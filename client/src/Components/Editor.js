import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";

export const Editor = () => {

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [desc, setdesc] = useState("");
  const dt = (new Date()).getFullYear()+'/'+(parseInt((new Date()).getMonth())+1)+'/'+(new Date()).getDate();

  const Blog = {
    title:"",
    image:"",
    desc:"",
    date: dt,
    owner: localStorage.getItem("loggedin")
  }
  
  const addBlog = async (e) => {
    let x = await axios.post('/addBlog',Blog);
    console.log(x);
  }
  
  return (
      <>
        <div className="m-5 col-md-8 mx-auto">
          <h3 className='mb-5'>Create New Blog</h3>
          <form method='post' onSubmit={addBlog}>
            <div className="mb-3">
              <input type="text" className="form-control" id="title" name='title' placeholder='Blog Title' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            </div>
            <div className="mb-3">
              <input type="file" className='form-control' accept="image/*" onChange={(e)=>{setimage(e.target.value)}} />
            </div>
            {image !== ""?
            <img src={image} alt={image} srcSet={image} />:""
            }
            <div className="mb-3">
              <CKEditor editor={ClassicEditor} onChange={ ( event, editor ) => {setdesc(editor.getData()) } } data={desc} config />
            </div>
            <button type="submit" className="form-control btn btn-primary">Login</button>
          </form>
        </div>
      </>
  );
};

export default Editor;