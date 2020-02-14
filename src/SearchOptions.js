import React, { Component } from 'react';

export default class SearchOptions extends Component {
    componentDidMount() {
        this.updateControls();

        window.addEventListener("hashchange", () => {
            this.updateControls();
        })
    }

    state = {
        // checkedRadio: [{ name: "movie" }, { name: "series" }, { name: "episode" }],searchInput: ""
    }

    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        // const type = searchParams.get('type');
    }

    this.ListeningStateChangedEvent({
        // searchInput: searchParams.get('s') || '',
        // checkedRadio: type;
    })

    handleSubmit = event => {
        const form = document.querySelector('form');
        event.preventDefault();
        const formData = new FormData(form);

        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        searchParams.set('type', formData.get('type'));
        searchParams.set('s', formData.get('search'));
        searchParams.set('page', 1);

        window.location.hash = searchParams.toString();
    }

    render() {
        return (
            <form className="searchOptions" onSubmit={this.handleSubmit}>
                <label for="searchOptions">Search:</label>
                <p>
                    <input id="search" name="search" onChange={e => this.setState({ searchInput: e.target.value })} value={this.state.searchInput} />
                </p>
                {/* add in fieldset, can use model below */}
            </form>
        )
    }
}

// export default class SearchOptions extends Component {
//         <fieldset className="type">
//           <label>
//             <input
//               type="radio"
//               name="type"
//               value="movie"
//               onClick={() => this.setState({ checkedRadio: "movie" })}
//               checked={this.state.checkedRadio === "movie"}
//             />
//             Movie
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="type"
//               value="series"
//               onClick={() => this.setState({ checkedRadio: "series" })}
//               checked={this.state.checkedRadio === "series"}
//             />
//             Series
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="type"
//               value="episode"
//               onClick={() => this.setState({ checkedRadio: "episode" })}
//               checked={this.state.checkedRadio === "episode"}
//             />
//             Episode
//           </label>
//         </fieldset>

//         <p>
//           <button>Search 🔍</button>
//         </p>
//       </form>
//     );
//   }
// }