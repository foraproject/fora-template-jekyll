import React from "react";
import Container from "../_includes/container";

export default class Default extends React.Component {
    constructor(props) {
        super(props);
    }

    getContent() {
        return typeof this.props.content !== "undefined" && this.props.content !== null ? this.props.content : "";
    }

    render() {
        return (
            <Container {...this.props}>
                <div className="post">

                    <header className="post-header">
                        <h1 className="post-title">{ this.props.page.title }</h1>
                    </header>

                    <article className="post-content">
                        <div dangerouslySetInnerHTML={{__html: this.getContent()}}></div>
                    </article>

                </div>
            </Container>
        );
    }
}
