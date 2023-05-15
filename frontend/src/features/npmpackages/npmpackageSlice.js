import { createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import npmpackageService from './npmpackageService';

const initialState = {
    npmpackages: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''

}

// Create new package 

export const createPackage = createAsyncThunk('npmpackages/create', async (packageData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await npmpackageService.createPackage(packageData, token);
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        
    }
} )

// Get packages
export const getPackages = createAsyncThunk('npmpackages/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await npmpackageService.getPackages(token);
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);       
    }

})
// PUT package 
export const updatePackage = createAsyncThunk('npmpackages/update', async (packageData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await npmpackageService.updatePackage(packageData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);     
    }
})
// Delete package

export const deletePackage = createAsyncThunk('npmpackages/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await npmpackageService.deletePackage(id, token);
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        
    }
} )

export const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPackage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPackage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.npmpackages.push(action.payload)
            })
            .addCase(createPackage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getPackages.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPackages.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.npmpackages = action.payload;
            })
            .addCase(getPackages.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deletePackage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deletePackage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.npmpackages =  state.npmpackages.filter((npmpackage) => npmpackage._id !== action.payload.id )
            })
            .addCase(deletePackage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(updatePackage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updatePackage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                let currentState = [...current(state.npmpackages)];
                currentState.map((item, index) => {
                    if(item._id === action.payload.npmpackages._id) {
                         currentState[index] = action.payload.npmpackages
                    }
                    return currentState;
                })
                state.npmpackages = currentState
            })
            .addCase(updatePackage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })


    }
})

export const { reset } = packageSlice.actions;
export default packageSlice.reducer;