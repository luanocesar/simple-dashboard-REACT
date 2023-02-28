function AppBar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
            </div>
        </nav>
    )
}

export default AppBar;