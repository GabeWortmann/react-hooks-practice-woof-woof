const DogInfo = ({ dogDetails, updateDog }) => {
    if (!dogDetails) return <div>choose a dog to see more info</div>
    const { id, image, isGoodDog, name } = dogDetails

    const clickDogButton = () => {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: `PATCH`,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isGoodDog: !isGoodDog
            }),
        })
        .then((response) => response.json())
        .then((dogData) => updateDog(dogData));
    }
    return (
        <div id="dog-summary-container">
            <div id="dog-info">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <button onClick={clickDogButton}>
                    {isGoodDog ? "Good Dog" : "Bad Dog"}
                </button>
            </div>
        </div>
    )
}

export default DogInfo