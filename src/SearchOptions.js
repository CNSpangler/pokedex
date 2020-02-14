import React, { Component } from 'react';

export default class SearchOptions extends Component {
    componentDidMount() {
        this.updateControls();

        window.addEventListener("hashchange", () => { this.updateControls();
        })
    }

    state = {
        searchInput: '',
        // typeInput: ''
    }

    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        this.setState({
            searchInput: searchParams.get('pokemon') || '',
            // typeInput: searchParams.get('type') || ''
        })
    }

    handleSubmit = event => {
        const form = document.querySelector('form');
        event.preventDefault();
        const formData = new FormData(form);

        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        // searchParams.set('pokemon', formData.get('pokemon'));
        searchParams.set('pokemon', formData.get('search'));
        searchParams.set('page', 1);

        window.location.hash = searchParams.toString();
    }

    render() {
        return (
            <form className="searchOptions" onSubmit={this.handleSubmit}>
                <label htmlFor="searchOptions">Search by name:</label>
                <p>
                    <input id="search" name="search" onChange={e => this.setState({ searchInput: e.target.value })} value={this.state.searchInput} />
                </p>
                <p>
                    <button>Search</button>
                </p>
            </form>
        )
    }
}