import test from 'tape';
import * as action from '../../actions/index.js';

// test.only('Append action creator returns the correct character passed ro it', (t) => {
//
// 	const expected = { type: 'append', gif: 'cat'};
// 	t.deepEqual(action.getGiff('d'), expected, 'append action correctly created');
// 	t.end();
// })

test('Del action creator always returns the correct action', (t) => {

	const expected = { type: 'delete'};

	t.deepEqual(action.del('b'), expected, 'del action correctly created');
	t.end();
})
