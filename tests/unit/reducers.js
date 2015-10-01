import test from 'tape';
import reducer from '../../reducers/index.js';

test('reducers initial state is always the same', (t) => {

	t.equal(reducer(undefined, {}), '', 'anitial state empty string');
	t.end();
});

test('should handle append by adding char to state', (t) => {

	const initialState = '';
	const appendedState = initialState + 'a';
	const action = {type: 'append', character: 'a'};

	t.equal(reducer(initialState, action), appendedState, 'reducer append functionality works');
	t.end();
});

test('should handle del by removing char to state', (t) => {

	const initialState = 'abc';
	const delState = 'ab';
	const action = {type: 'delete'};

	t.equal(reducer(initialState, action), delState, 'reducer del functionality works');
	t.end();
});