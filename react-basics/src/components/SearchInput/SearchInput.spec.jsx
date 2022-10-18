import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { SearchInput } from '.';

describe('<SearchInput />', () => {
  it('cshould have a value of inputValue', () => {
    const fn = jest.fn();
    render(<SearchInput actionFn={fn} inputValue="testing" />);

    const input = screen.getByPlaceholderText(/search here/i);
    expect(input.value).toBe('testing');
  });

  it('should call actionFn function on each key pressed', async () => {
    const fn = jest.fn();
    render(<SearchInput actionFn={fn} inputValue="" />);

    const input = screen.getByPlaceholderText(/search here/i);
    const value = 'the value';

    await userEvent.type(input, value);

    expect(input.value).toBe('');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<SearchInput actionFn={fn} inputValue="" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
