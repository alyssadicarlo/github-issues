import React, { Component } from 'react';
import Issue from './Issue';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        };
    }

    componentDidMount() {
        this._fetchList();
    }

    _fetchList = async () => {
        const response = await fetch(
            `https://api.github.com/repos/facebook/create-react-app/issues`
        ).then(response => response.json());
        const issues = response.map(issue => {
            return {
                url: issue.html_url,
                title: issue.title,
                body: issue.body
            }
        });
        this.setState({
            issues
        });
    }

    render() {
        const { issues } = this.state;
        const issuesJSX = issues.map((issue, index) => {
            return <Issue key={index} title={issue.title} url={issue.url} body={issue.body} />
        });

        return (
            <>
                {issuesJSX}
            </>
        );
    }
}

export default IssueList;