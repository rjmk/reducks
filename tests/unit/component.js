import test from 'tape';
import React from 'react/addons';
import Text from '../../components/Text.js';

const { TestUtils } = React.addons;

const setup = () => {
	let props = {
		display: 'adfkj',
		del () {
		},
		delCalls: 0,
		submitChar () {
		},
		subCalls: 0
	};

	const renderer = TestUtils.createRenderer();
	renderer.render(<Text {...props} />);

	const output = renderer.getRenderOutput();

	return {
		props,
		output
	}
}

test('p-tag contains display prop', (t) => {

	const { output, props } = setup();
	const [ p ] = output.props.children;


	t.equal(p.props.children, props.display, 'Hello Benji! The innerHTML was the right stuff. :)');
	t.end();
})

test('del button has del as onClick', (t) => {

	const { output, props } = setup();
	const [, delButton ] = output.props.children;

	t.equal(props.del, delButton.props.onClick, 'correct onClick method for del')
	t.end();
});

test('sub button has submitChar as onClick', (t) => {

	const { output, props } = setup();
	const [, , , subButton ] = output.props.children;

	t.equal(props.submitChar, subButton.props.onClick, 'correct onClick method for submit')
	t.end();
})