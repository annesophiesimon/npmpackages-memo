import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createPackage } from "../features/npmpackages/npmpackageSlice";


const PackagesForm = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);


    const onSubmit = e => {
        e.preventDefault();
        dispatch(createPackage({name: name, description: description, link: link, category: category, userId: user._id }));
    }

    return (
        <section>
            <h1 className="text-xl mb-5 text-center"> Add npm packages</h1>
            <form onSubmit={onSubmit} className="flex flex-col w-80 space-y-2">
                <label htmlFor="text">Npm package name</label>
                <input className="border-2 border-gray-300 rounded p-1" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor="text">Documentation link</label>
                <input  className="border-2 border-gray-300 rounded p-1" type="text" value={link} onChange={(e) => setLink(e.target.value)} required/>
                <label  htmlFor="text">Category</label>
                <input  className="border-2 border-gray-300 rounded p-1" type="text" value={category} onChange={(e) => setCategory(e.target.value)} required/>
                <label htmlFor="text">Description</label>
                <textarea className="border-2 border-gray-300 rounded p-1" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                <div className="flex justify-end">
                    <button className="bg-blue-600 rounded text-white p-1 w-24 disabled:opacity-75" type="submit" disabled={!(name !==' ' && link !== '' && category !== '' && description !== '')}>Submit</button>
                </div>
            </form>
        </section>
    )

}

export default PackagesForm;