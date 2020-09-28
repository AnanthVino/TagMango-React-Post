/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */
 
import React from 'react';
import './create-post.scss';
import { connect } from "react-redux";
import createPost from '../../store/action/create-post-action';
import { bindActionCreators } from "redux";
 
class CreatePost extends React.PureComponent {
    constructor(props) {
        super(props)
 
        this.state = {
            title: 'Create post',
            docTitle: '',
            preview: '',
            upload: false
        }
    }
 
    componentDidMount = () => {
        if(this.props.location.pathname !== "/create-post"){
            this.setState({
                upload: true, 
                title: "Update post",
                preview: this.props.data.file,
                docTitle: this.props.data.title
            })
        }
    }

    handleChange = e => {
        this.setState({ docTitle: e.target.value });
    };

    // File upload event
 
    docUpload = e => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = () => {
            this.setState({ preview: reader.result, upload: true })
        }
    }
 
    back = () => {
        this.setState({preview: '', upload: false})
    }
 
    submit = () => {
        this.setState({docTitle: this.title.value})
        setTimeout(() => {
            const data = {
                id: Math.floor(Math.random() * 5),
                title: this.state.docTitle,
                file: this.state.preview
            }
            this.props.createPost(data);
            this.props.history.push("/post");
        },100)
    }
 
    render() {
        const { preview, upload, docTitle} = this.state
 
        return (
            <div className="file-upload mt-5">
                <div className="container">
                    <div className="card">
                        <div className="card-header"><h4>{this.state.title}</h4></div>
                        <div className="card-body">
                            <div className="card-content">
                            {upload ?
                                <div className="upload-file">
                                    {preview ?
                                    <div className="preview">
                                        <label>Document title</label>
                                        <input type="text" ref={(title) => this.title = title} defaultValue={this.state.docTitle} className="form-control doc-title" onChange={this.handleChange} />
                                        <embed className='preview-file mt-4' src={`${preview}`} alt={'preview'} type="application/pdf" />
                                    </div>
                                    : ''}
                                </div>
                            : 
                                <div className="choose-file">
                                    <span className="btn btn-outline-primary btn-file" >
                                        Choose file <input type="file" onChange={this.docUpload}/>
                                    </span>
                                </div> 
                            }
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-outline-secondary mr-2" disabled={!preview} onClick={this.back}>Back</button>
                            <button type="button" disabled={!(preview && docTitle)} onClick={this.submit} className="btn btn-primary">Post</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
 
const mapStateToProps = state => {
    return {
        data: state.data.createPost,
    };
};
 
const matchDispatchToProops = dispatch => {
    return bindActionCreators({ createPost: createPost }, dispatch);
};
 
export default connect(mapStateToProps, matchDispatchToProops)(CreatePost);