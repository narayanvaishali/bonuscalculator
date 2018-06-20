import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
          initials: '',
          name : '',
          designation : '',
          email : '',
          phone : '',
          code : '',
          id : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            initials: nextProps.initials,
            name: nextProps.name,
            designation: nextProps.designation,
            email : nextProps.email,
            phone: nextProps.phone,
            code : nextProps.code,
            id : nextProps.id
        });
    }


    IDHandler(e) {
        this.setState({ id: e.target.value });
    }

    initialsHandler(e) {
        this.setState({ initials: e.target.value });
    }

    nameHandler(e) {
        this.setState({ name: e.target.value });
    }

    designationHandler(e) {
        this.setState({ designation: e.target.value });
    }

    emailHandler(e) {
        this.setState({ email: e.target.value });
    }

    phoneHandler(e) {
        this.setState({ phone: e.target.value });
    }

    codeHandler(e) {
        this.setState({ code: e.target.value });
    }
    handleSave(itemid) {
        const item = this.state;
        this.props.saveModalDetails(item, itemid)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Staff</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">initials:</span><input value={this.state.initials} onChange={(e) => this.initialsHandler(e)} /></p>
                            <p><span className="modal-lable">name:</span><input value={this.state.name} onChange={(e) => this.nameHandler(e)} /></p>
                            <p><span className="modal-lable">designation:</span><input value={this.state.designation} onChange={(e) => this.designationHandler(e)} /></p>
                            <p><span className="modal-lable">email:</span><input value={this.state.email} onChange={(e) => this.emailHandler(e)} /></p>
                            <p><span className="modal-lable">phone:</span><input value={this.state.phone} onChange={(e) => this.phoneHandler(e)} /></p>
                            <p><span className="modal-lable">code:</span><input value={this.state.code} onChange={(e) => this.codeHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave(this.state.id) }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
