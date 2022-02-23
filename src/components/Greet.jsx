

const Greet = ({name, heroName,children}) => {
    
    return (
        <div>
            <h1>hello {name} a.k.a. {heroName}</h1>
            {children}
        </div>
    )
}

export default Greet