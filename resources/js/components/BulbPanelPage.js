import React, { Component } from 'react';
import {connect} from "react-redux";
import {getBulbState, changeBulbState} from "../actions/BulbAction";

class BulbPanelPage extends Component {
    componentDidMount() {
        getBulbState();
    }
    render() {

        let src = this.props.bulb !=1 ? "/images/bulb-off.png" : "/images/bulb-on.png"

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <img src={src} style={{height:"700px"}} ></img>
                            </div>
                            <div className="card-body">I'm an example component!</div>
                            <button onClick={() => this.props.changeBulbState()}>Change</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = {
    // ... normally is an object full of action creators
};

export default connect(
    mapStateToProps,
    {getBulbState, changeBulbState}
)(BulbPanelPage);