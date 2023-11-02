const DogsContainer = ({ dogs, setClickedDog }) => {
    const dogSpans = dogs.map(dog => <span key={dog.id} onClick={() => setClickedDog(dog.id)}>{dog.name}</span>)
    return dogSpans
}

export default DogsContainer