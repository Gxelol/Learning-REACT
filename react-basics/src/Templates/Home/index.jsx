import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/loadPosts'
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

// LIFECYCLE METHODS

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerClick: 10,
      searchValue: '',
    };
  }

  componentDidMount() {
   this.loadPosts();
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

  handleChange = (e) => {
    const { value } = e.target; 
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerClick, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerClick >= allPosts.length;
    
    const filteredPosts = !!searchValue ? 
    posts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    }) 
    : posts;

    return (
      <section className='container'>
        
        <SearchInput 
        actionFn={this.handleChange}
        inputValue={searchValue}
        />

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}
        {filteredPosts.length === 0 && (
          <p className='error-p'>No posts found.</p>
        )}
        
        <>
          {!searchValue && (
            <Button 
            text="Load more posts" 
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
            />
          )}
        </>
      </section>
    );
  }
}

export default App;
