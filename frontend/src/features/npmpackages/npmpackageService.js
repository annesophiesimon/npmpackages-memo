import axios from 'axios';

const API_URL = 'http://localhost:3000/api/npmpackages/';

// Create new package

const createPackage = async (packageData, token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }    
    }

    const response = await axios.post(API_URL, packageData, config);

    return response.data;
}

// Get package

const getPackages = async (token) => {

    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }    
    }

    const response = await axios.get(API_URL, config);

    return response.data;
}

// PUT package 

const updatePackage = async (packageData, token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }    
    }

    const response = await axios.put(API_URL + packageData._id, packageData, config);
    return response.data;
}

// DELETE package

const deletePackage = async (packageId, token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }    
    }

    const response = await axios.delete(API_URL + packageId, config);

    return response.data;
}

const npmpackageService = {
    createPackage,
    getPackages,
    updatePackage,
    deletePackage,
}

export default npmpackageService;