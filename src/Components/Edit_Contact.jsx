import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';


function EditContact() {


    const { id } = useParams()
    console.log(id)

    const dispatch = useDispatch()

    const AllContact = useSelector((store) => store.contacts)



    const [form, setForm] = useState({})

    const handleChange = (e) => {
     
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {



        dispatch(editContact({ id, ...form }))

    }

    useEffect(() => {

        AllContact.filter((el) => el.id == id && setForm(el))

    }, [])

    return (
     
        <div className="w-1/2 mx-auto my-4 pt-16">
        <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
        <div  className="mb-4 grid grid-cols-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className='cols-4 text-start'>
            <label className="block font-bold mb-2" htmlFor="first-name">
                First Name
            </label>
            </div>
            <div className='cols-8'>
            <input
                className="w-full border border-gray-400 p-2 rounded-md"
                id="first-name"
                type="text"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
            />
            </div>
        </div>
        <div  className="mb-4 grid grid-cols-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className='cols-4 text-start'>
            <label className="block font-bold mb-2" htmlFor="last-name">
                Last Name
            </label>
            </div>
            <div className='cols-8'>
            <input
                className="w-full border border-gray-400 p-2 rounded-md"
                id="last-name"
                type="text"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
            />
            </div>
        </div>
    
        <div  className="mb-4 grid grid-cols-12 sm:grid-cols-2 lg:grid-cols-4 pull-left ">
         
            <div className='cols-3 text-start'>
             <label className="block font-bold mb-2" htmlFor="status">
                Status
            </label>
            </div>
            <div className='cols-8 pull-left p-2'>
            <input className='pull-left text-start' type='radio' value={'active'}    name="status" onChange={handleChange}/>
            <label for='active' className='text-start'>Active</label><br/><br/>
            <input type='radio' value={'inactive'}   name="status"  onChange={handleChange}/>
            <label for='inactive' className='text-start'>Inactive</label>
         
            </div>
        </div>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
        >
            Save Contact
        </button>
    </div>
    );
}


export default EditContact