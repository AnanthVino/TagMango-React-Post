/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react';
import './view-post.scss';
import { connect } from "react-redux";
import { Document, Page } from "react-pdf";

class PostView extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            preview: this.props.post.file || '',
            docTitle: this.props.post.title || '',
            showComment: false,
            comments: [],
            active: false,
            numPages: null,
            pageNumber: 1
        }
    }

    comment = () => {
        this.setState({ showComment: true})
    }

    addComment = () => {
        const comment = this.comment1.value;
        if (this.comment1 !== null) {
            this.setState({
                comments: this.state.comments.concat(comment)
            });
          }
    }

    toggle = () => {
		this.setState({
			active: true
		});
	}
  
    close = () => {
        this.setState({
            active: false
        });
    }

    onEditPost = () => {
        this.props.history.push({
            pathname: `/create-post/${this.props.post.id}`,
            state: {
                id: this.props.post.id,
                title: this.props.post.title,
                file: this.props.post.file
            }
        });
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({numPages: numPages, pageNumber: 1})
    }

    changePage = (offset) => {
        this.setState((prevPageNumber) => ({ pageNumber:  prevPageNumber.pageNumber + offset}))
    }

    previousPage = () => {
        this.changePage(-1);
    }

    nextPage = () => {
        this.changePage(1);
    }

    render() {
        const { preview, showComment, comments, numPages, pageNumber } = this.state;
        const menuItems = [
			{
				label: 'Edit',
				icon: 'fa fa-edit'
            }
        ]
        const active = this.state.active;
        return (
            <div className="view-post mt-5">
            <div className="container">
                <div className="card">
                    <div className="card-header d-flex flex-row">
                        <div className="p-2"><img src={require("../../assets/img/img_avatar.png")} alt="Avatar" className="user-icon" /></div>
                        <div className="p-2"><h5>{this.state.docTitle}</h5></div>
                    </div>
                    <div className="card-body">       
                        <Document
                            file={preview}
                            options={{ workerSrc: 'pdf.worker.js' }}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <div className="pdf-page">
                                <div className="total-page">{`${numPages} Pages`}</div>
                            </div>

                            {pageNumber > 1 &&
                                <i className="fa fa-arrow-circle-left fa-3x previous-page" onClick={this.previousPage} aria-hidden="true"></i>
                            }
                            {pageNumber < numPages &&
                                <i className="fa fa-arrow-circle-right fa-3x next-page" onClick={this.nextPage} aria-hidden="true"></i>
                            }
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex flex-row">
                            <div className="p-2"><i className="fa fa-thumbs-up" aria-hidden="true"><span className="ml-2">Like</span></i></div>
                            <div className="p-2 ml-3 comments" onClick={this.comment}><i className="fa fa-comments" aria-hidden="true"><span className="ml-2">Comment</span></i></div>
                            <div className="p-2 ml-3"><i className="fa fa-share" aria-hidden="true"><span className="ml-2">Share</span></i></div>
                            <div className="p-2 ml-3"><i className="fa fa-paper-plane" aria-hidden="true"><span className="ml-2">Send</span></i></div>
                        </div>
                        {showComment ?
                            <div className="mt-4 d-flex flex-row add-comment">
                                <div className="p-2"><img src={require("../../assets/img/img_avatar.png")} alt="Avatar" className="user-icon" /></div>
                                <div className="p-2"><input className="form-control add-comment" ref={(comment) => this.comment1 = comment}type="text" placeholder="Add a comment..." /></div>
                                <div className="p-2"><button type="button" onClick={this.addComment} className="btn btn-outline-primary mr-2">Add</button></div>
                            </div>
                        : ''
                        }

                        { comments.length >= 1 &&
                            <div className="mt-4 view-comment">
                                {
                                    comments.map((cmt, index) => {
                                        return (
                                            <div className="mt-2 d-flex" key={index}>
                                                <div className="p-2"><img src={require("../../assets/img/img_avatar.png")} alt="Avatar" className="user-icon" /></div>
                                                <div className="p-2 comment-content d-flex flex-colomn">
                                                    <p>{cmt}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.data.createPost
    };
};


export default connect(mapStateToProps, null)(PostView);