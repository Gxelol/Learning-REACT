import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button text', () => {
    render(<Button text="Load more" />)

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  }); 
  
  it('should call the function onClick when button clicked', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />)

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button)
    // fireEvent.click(button);
    
    expect(fn).toHaveBeenCalledTimes(1);
  });
  
  it('should be disabled when disabled is true', () => {
    render(<Button text="Load More" disabled={true} />)
    
    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });
  
  it('should be enabled when disabled is true', () => {
    render(<Button text="Load More" disabled={false} />)
    
    expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
  });
});