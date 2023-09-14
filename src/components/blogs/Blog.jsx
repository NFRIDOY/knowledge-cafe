export default function Blog(props) {
    // console.log("Props in blog",props);
    const {id, title, cover} = props.blog;
    const {handleBlogClick} = props;
    console.log(id);
    console.log(title);
    return (
        <>
            <div>
                <h1>id: {id}</h1>
                <h1>Title: {title}</h1>
                {/* <h1>Title: {}</h1> */}
                <button onClick={handleBlogClick} className="btn btn-primary">Click</button>

            </div>
        </>
    )
}
