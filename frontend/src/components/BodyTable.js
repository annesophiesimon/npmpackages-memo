import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { deletePackage, updatePackage } from "../features/npmpackages/npmpackageSlice";

const BodyTable = ({datas}) => {

    const dispatch = useDispatch();

    const { link, name, description, category, _id, userId} = datas;
    const [nameEdit, setName] = useState(name);
    const [categoryEdit, setCategory] = useState(category);
    const [descriptionEdit, setDescription] = useState(description);
    const [linkEdit, setLink] = useState(link);
    const [isEdit, setIsEdit] = useState(false);

    const editPackage = () => {
            setIsEdit(!isEdit);
        
    }


    const onSubmit = (e, id) => {
        e.preventDefault();
        dispatch(updatePackage({_id: id, name: nameEdit, description: descriptionEdit, link: linkEdit, category: categoryEdit, userId: userId }));
    }
    return (
        <>
            <tbody>

            {
                !isEdit? (
                    
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <Link to={link}>{name}</Link> 
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div>{description}</div>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {link}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {category}
                        </td>
                        <td className="px-6 py-4">
                            <button value={_id} onClick={() => editPackage()} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                        </td>
                        <td className="px-6 py-4">
                            <button onClick={() => dispatch(deletePackage(_id))} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                        </td>      
                </tr>

                ) : (
                    <>
                    <tr>
                         <td className="collapse">
                            <form method="POST" id="package_form" onSubmit={(e) => onSubmit(e, _id)}></form>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input className="border-2 border-gray-300 rounded p-1" type="text" value={nameEdit} form="package_form" onChange={(e) => setName(e.target.value)}/>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input  className="border-2 border-gray-300 rounded p-1" type="text" value={descriptionEdit} form="package_form" onChange={(e) => setDescription(e.target.value)}/>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input className="border-2 border-gray-300 rounded p-1" type="text" value={linkEdit} form="package_form" onChange={(e) => setLink(e.target.value)} />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input className="border-2 border-gray-300 rounded p-1" type="text" value={categoryEdit? categoryEdit : ''} form="package_form" onChange={(e) => setCategory(e.target.value)} />
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button onClick={() => editPackage()} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" type="submit" form="package_form">Submit</button>
                    </td>      
                </tr>
                    </>
                )
            }
        
            
        </tbody>
    </>
    )

}

export default BodyTable;