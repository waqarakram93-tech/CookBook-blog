const Error = ({ error }) => {
    return (
        <div className="error alert">
            Oops! There was an error loading your recipe: {error.message}. We'll
            stir once more in 5 seconds!
        </div>
    );
};

export default Error;
