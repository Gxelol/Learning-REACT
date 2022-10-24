import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render, screen, waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '.';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: 'title1',
        body: 'body1',
        url: 'img1.jpg',
      },
      {
        userId: 2,
        id: 2,
        title: 'title2',
        body: 'body3',
        url: 'img2.jpg',
      },
      {
        userId: 3,
        id: 3,
        title: 'title3',
        body: 'body3',
        url: 'img3.jpg',
      },
    ]));
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render button, posts and loadMore button', async () => {
    render(<Home />);
    const noPostsFound = screen.queryByText('No posts found.');

    expect.assertions(3);

    await waitForElementToBeRemoved(noPostsFound);

    const input = screen.getByPlaceholderText(/search here/i);
    expect(input).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<Home />);
    const noPostsFound = screen.queryByText('No posts found.');

    expect.assertions(10);

    await waitForElementToBeRemoved(noPostsFound);

    const input = screen.getByPlaceholderText(/search here/i);
    expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title2 2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3 3' })).not.toBeInTheDocument();

    await userEvent.type(input, 'title1');
    expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title2 2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3 3' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();

    await userEvent.clear(input);
    expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title2 2' })).toBeInTheDocument();

    await userEvent.type(input, 'this is not in the posts');
    expect(screen.getByText('No posts found.')).toBeInTheDocument();
  });

  it('should render posts when loadMore button is clicked', async () => {
    render(<Home />);
    const noPostsFound = screen.queryByText('No posts found.');

    // expect.assertions(3);

    await waitForElementToBeRemoved(noPostsFound);

    const button = screen.getByRole('button', { name: /load more posts/i });

    await userEvent.click(button);
    expect(screen.getByRole('heading', { name: 'title3 3' })).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
