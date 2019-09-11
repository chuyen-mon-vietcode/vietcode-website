import React from 'react';

import "../stylesheets/post.css";

const styles = {
    postContainer: {
        background: "white",
        border: ".5px solid rgb(222, 222, 222)",
        borderRadius: "10px",
        margin: "20px auto",
        maxWidth: "600px",
    },

    margin: {
        margin: "0 10px",
        padding: "10px 0",
    }
}

const Post = ({ node }) => {
    return (
        <div className="post">
            <div style={styles.postContainer}>
                <div style={styles.margin}>

                    <Title text={node.frontmatter.title} />

                    {/* <Author name={node.frontmatter.author} /> */}

                    <hr
                        style={{
                            background: "black",
                            marginTop: "15px",
                            marginBottom: "15px",
                        }}
                    />

                    <div dangerouslySetInnerHTML={{ __html: node.html }}
                        style={{
                            padding: "10px",
                        }} />

                </div>

            </div>

        </div>
    )
}

const Title = ({ text }) => {
    const style = {
        fontSize: "30px",
        margin: "10px 0 0 10px",
    };

    return (
        <h3 style={style}>{text}</h3>
    );
}

const Author = ({ name }) => {
    const style = {
        margin: "0 0 0 10px",
        fontSize: "16px",
    };

    return (
        <p style={style}><b>By</b> <i>{name}</i></p>
    );
}

export default Post;