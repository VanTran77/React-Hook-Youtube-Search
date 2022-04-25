import './Blogs.scss'
import { useState } from 'react'
import axios from 'axios';

const AddNewBlog = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitBtn = async () => {
        // e.preventDefault();
        if(!title){ // if (title ===='' || title === null || title ===undefined)
            alert('Please input title');
            return;
        }
        
        if(!content){ 
            alert('Please input content');
            return;
        }
        
        let data = {
            title: title,
            body:  content,
            userId: 1
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }

        
    }

    return(
        <div className="add-new-container">
            {/* <form onSubmit={handleSubmitBtn}> */}
                <div className="text-add-new">--- Add new Blog ---</div>
                <div className="input-data">
                    <label>Title: </label>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-data">
                    <label>Content: </label>
                    <input type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button className="btn-add-new" onClick={handleSubmitBtn}>Submit</button>
                {/* <button className="btn-add-new" type="submit">Submit</button> */}
            {/* </form> */}
        </div>
    )

}

export default AddNewBlog