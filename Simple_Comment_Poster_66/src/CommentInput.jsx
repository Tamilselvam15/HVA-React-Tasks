/* eslint-disable react/prop-types */

const CommentInput = (props) => {
    const { comment, handleChange, handleSubmit } = props;
    return (
        <form className="w-4/5 border border-solid m-auto h-1/4  flex flex-col items-center gap-14 shadow-stone-600 shadow-sm rounded-md" onSubmit={handleSubmit}>
            <input type="text"
                className="w-3/5 mt-8 border border-solid h-10 border-black rounded"
                value={comment}
                onChange={handleChange}

            />
            <button type="submit" className="border border-slate-800 w-1/3 h-12 rounded-md">submit</button>
        </form>
    )
}

export default CommentInput