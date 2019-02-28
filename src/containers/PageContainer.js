import React, { Component } from 'react';

import Main from "../components/main/Main";
import {connect} from "react-redux";


class PageContainer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const page = this.props.page;

        return (
            <Main
                data={page.data}
                isFetching={page.isFetching}
                error={page.error}

            />
        )
    }
}

const mapStateToProps = srore => {
    return {
        page: srore.topListPage,
    };
};

export default connect(
    mapStateToProps,
)(PageContainer)
