import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button text', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} disabled={false} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call the function onClick when button clicked', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    // fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} disabled />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });

  it('should be enabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} disabled={false} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load More" onClick={fn} disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
