import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ProductContext} from "../context"

export default class OutsideAlerter extends Component {
    static contextType = ProductContext;
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event){
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.context.removeDisplay();
        }
    }

    render() {
        return <div ref={this.setWrapperRef}>{this.props.children}</div>;
    }
}

OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired,
};
