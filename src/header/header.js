import React from 'react';

import './header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }

    onButtonClick(){
        this.props.onSearchTermChange(document.getElementById('search').value);
    }

    render() {
        return (
            <nav className = "navbar navbar-light border">
                <a className = "navbar-brand">Videotube</a>
                <form className = "form-inline mrg">
                    <input className = "form-control mr-sm-2 inp" id="search" type="search" placeholder="Поиск" aria-label="Search"
                        value={this.state.term} onChange={this.onInputChange} />
                    <button className = "btn btn-primary my-2 my-sm-0" type="button" onClick={this.onButtonClick} ><i class="fas fa-search"></i></button>
                </form>
            </nav>
        );
    }
}
export default Header;
