import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { search, SearchCondition } from '../apis/openstreetmap-api';
import { LatLng } from "leaflet";

const STORE_NAME = 'openstreetmap';

export interface OpenStreetMapState {
  status: 'idle' | 'loading' | 'failed';
  copyright:string,
  position: LatLng,
  elements:Array<OpenStreetMapElement>
}

const initialPosition = new LatLng(35.666452, 139.31582)

const initialState: OpenStreetMapState = {
  status: 'idle',
  copyright:'',
  position: initialPosition,
  elements: [{
    id: 1,
    lat: 35.666452,
    lon: 139.31582,
    tags: '',
    type: '' 
  }]
};

export interface OpenStreetMapElement {
  id: number
  lat: number
  lon: number
  tags?: any
  type: string  
}


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const searchAsync = createAsyncThunk(
  STORE_NAME + '/search',
  async (condition:SearchCondition) => {
    const response = await search(condition);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const openstreetmapSlice = createSlice({
  name: STORE_NAME,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    locationfound: (state, action:PayloadAction<LatLng>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.position = action.payload
    },
  } ,
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.copyright = action.payload.copyright;
        state.elements = action.payload.elements;
      })
      .addCase(searchAsync.rejected, (state) => {
        state.status = 'failed';
      })
  },
});


export const selectElements = (state: RootState) => state.openstreetmap.elements;
export const selectPosition = (state: RootState) => state.openstreetmap.position;

export const { locationfound } = openstreetmapSlice.actions;

export default openstreetmapSlice.reducer;

