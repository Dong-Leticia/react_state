import React, { usestate } from 'react'

function ProfileForm() {
const [profiles, setprofiles] = setState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
});
const handler =(event) => {
    setprofiles( (prev) => ({
       ...prev,
       [event. target.name]:event.target.value
    }));

}
const handeleform = (e) => {
    e.preventDefault();
    SubmitEvent(profile)
}




 return (
    <div classname="formcontainefr">
        <h3>profile form</h3>
        <form>
            <fieldset>
                <legend>Bio date</legend>
                    <div classname="names">
                        <label>First Name
                            <input name="firstname" value=
                            {profile.firstname} type="text" onchange={handler}/>

                        </label>
                        <label>last Name
                            <input name="last name" value=
                            {profile.lastname} type="text" onchange={handler}/>

                        </label>
                    </div>

                    <div classname="names">
                        <label>email
                            <input name="email" value=
                            {profile.email} type="email" onchange={handler}/>

                        </label>
                        <label>phone
                            <input name="phone" value=
                            {profile.phone} type="tel" onchange={handler}/>

                        </label>
                    </div>
                
            </fieldset>
        </form>
        


    </div>
  )
}

export default ProfileForm