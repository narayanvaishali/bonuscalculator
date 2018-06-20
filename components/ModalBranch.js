import React, { Component } from 'react';

class ModalBranch extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
          branchname: '',
          target : '',
          id : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            branchname: nextProps.branchname,
            target: nextProps.target,
            id : nextProps.id
        });
    }


    IDHandler(e) {
        this.setState({ id: e.target.value });
    }

    branchnameHandler(e) {
        this.setState({ branchname: e.target.value });
    }

    targetHandler(e) {
        this.setState({ target: e.target.value });
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
                            <h5 className="modal-title" id="exampleModalLabel">Edit Branch</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">branchname:</span><input value={this.state.branchname} onChange={(e) => this.branchnameHandler(e)} /></p>
                            <p><span className="modal-lable">target:</span><input value={this.state.target} onChange={(e) => this.targetHandler(e)} /></p>
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

export default ModalBranch;
