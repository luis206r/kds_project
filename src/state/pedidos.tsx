import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

export const add = createAction<{ 
  id: number; 
  status: string; 
  initialTime: string;
  finalTime: string;
  elements: string[]; 
}>("ADD");

export const changeStatus = createAction<{ 
  id: number; 
  newStatus: string; 
}>("CHANGESTATUS");

const initialState: { 
  id: number; 
  status: string; 
  initialTime: string;
  finalTime: string;
  elements: string[]; 
}[] = [];

const pedidosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(add, (state, action) => [...state, action.payload])
    .addCase(changeStatus, (state, action) => {
      const { id, newStatus } = action.payload;
      const newState = state.map((item) => (item.id === id? { ...item, status: newStatus } : item));
      return newState;
    });
});

export default pedidosReducer;