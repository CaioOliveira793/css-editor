import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../src/styles/themes/default';

import Header from '../../../src/components/Header';

describe('Header', () => {

	beforeEach(() => {
		jest.mock('next/link', () => ({ children }) => children);
	});

	it('macth the snapshot', () => {
		const tree = renderer.create(
			<ThemeProvider theme={defaultTheme}>
				<Header links={[{ label: 'properties', href: '/properties' }]} />
			</ThemeProvider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it(`have the 'CSS Editor' text`, () => {
		const { getByText } = render(
			<ThemeProvider theme={defaultTheme}>
				<Header links={[{ label: 'properties', href: '/properties' }]} />
			</ThemeProvider>
		);

		const mainText = getByText(/CSS Editor/);
		expect(mainText).toHaveTextContent(/CSS Editor/);
	});

	it('create a navigable link', () => {
		const { getByText } = render(
			<ThemeProvider theme={defaultTheme}>
				<Header links={[{ label: 'properties', href: '/properties' }]} />
			</ThemeProvider>
		);

		const anchor = getByText(/properties/i);
		expect(anchor).toHaveTextContent(/properties/i);
	});

	it('navigate with the link', async () => {
		const { getByText } = render(
			<ThemeProvider theme={defaultTheme}>
				<Header links={[{ label: 'properties', href: '/properties' }]} />
			</ThemeProvider>
		);

		const anchor = getByText(/properties/i);
		await waitFor(() => fireEvent.click(anchor));

		const propertiesPage = getByText('chose a item');
		expect(propertiesPage).toHaveTextContent('chose a item');
	});

});
