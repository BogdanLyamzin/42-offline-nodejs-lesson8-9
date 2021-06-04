const Message = ({text, author})=>{
    return (
        <div>
            <p>{text}</p>
            <p style={{textAlign: "right"}}>{author}</p>
        </div>
    )
}

export default Message;