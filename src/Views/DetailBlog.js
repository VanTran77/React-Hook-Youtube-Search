import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../customize/fetch';
import './Blogs.scss';

const DetailBlog = () =>{

    let {id} = useParams();
    let history = useHistory();

    const handleBackData = () => {
        history.push("/blog")
    }

    const { data: dataBlogDetail, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    return(
        <div>
            <div> <span onClick={handleBackData}> &lt;-- Back </span> </div>
            {/* <h1>Detail Page with id: {id}</h1> */}
            <div className='blog-detail'>
                {dataBlogDetail && 
                    <>
                        <div className='title'>
                           Blog id {id} --- {isLoading === true ? 'Loading data ...' : dataBlogDetail.title}
                        </div>
                        <div className='content'>
                            {dataBlogDetail.body}
                        </div>
                    </>
                }
            </div>
        </div>
        
    )
}

export default DetailBlog;