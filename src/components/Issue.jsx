function Issue(props) {

    return (
        <div>
            <p><a href={props.url}>{props.title}</a></p>
            <p>{props.body}</p>
        </div>
    );
}

export default Issue;