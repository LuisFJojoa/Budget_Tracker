import React, { useReducer, createContext }  from 'react';

const initialState = {
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shpping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 1400 },
		{ id: 14, name: 'car', cost: 50 },
		{ id: 14, name: 'car', cost: 500 },
		{ id: 14, name: 'car', cost: 500 }
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		default:
			return state;
	}
};