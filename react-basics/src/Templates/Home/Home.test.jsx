import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
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
    expect(images).toHaveLength(3);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });
});