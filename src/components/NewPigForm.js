export default function NewPigForm({ formData, handleSubmit }) {

    

     
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input id="name" type='text' placeholder='Name ...'/>
            <br/>
            
            <label htmlFor="specialty">Specialty</label>
            <input id="specialty" type='text' placeholder='Specialty ...'/>
            <br/>

            <input id="greased" type='checkbox' value={true}/>
            <label htmlFor="greased">Greased</label>
            <br/>

            <input id="weight" type="number"/>
            <label htmlFor="weight">Weight</label>
            <br/>

            <label htmlFor="highest-medal-achieved">Highest Medal Achieved</label>
            <input id="highest-medal-achieved" type="text"/>
            <br/>

            <label htmlFor="image">Image URL</label>
            <input id="image" />
            <br/>

            <label htmlFor="submit">Add New Pig</label>
            <input id="submit" type="submit"/>
        </form>

    )
}