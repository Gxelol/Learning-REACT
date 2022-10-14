import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/loadPosts'
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Button';

// LIFECYCLE METHODS

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerClick: 10
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerClick } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerClick),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerClick,
      allPosts,
      posts,
    } = this.state;
    const nextPage = page + postsPerClick;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerClick);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })
  }

  render() {
    const { posts, page, postsPerClick, allPosts } = this.state;
    const noMorePosts = page + postsPerClick >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts}/>
        <Button 
        text="Load more posts" 
        onClick={this.loadMorePosts}
        disabled={noMorePosts}
        />
      </section>
    );
  }
}

export default App;
