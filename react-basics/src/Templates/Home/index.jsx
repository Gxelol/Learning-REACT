import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import { loadPosts } from '../../utils/loadPosts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

export function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerClick] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerClick >= allPosts.length;

  const filteredPosts = searchValue
    ? posts.filter((post) => post.title.toLowerCase().includes(
      searchValue.toLowerCase(),
    ))
    : posts;

  const handleLoadPosts = useCallback(async () => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerClick));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerClick);
  }, [handleLoadPosts, postsPerClick]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerClick;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerClick);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">

      <SearchInput
        actionFn={handleChange}
        inputValue={searchValue}
      />

      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}
      {filteredPosts.length === 0 && (
        <p className="error-p">No posts found.</p>
      )}

      {!searchValue && (
      <Button
        text="Load more posts"
        onClick={loadMorePosts}
        disabled={noMorePosts}
      />
      )}
    </section>
  );
}

// class Home2 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: [],
//       allPosts: [],
//       page: 0,
//       postsPerClick: 10,
//       searchValue: '',
//     };
//   }

// componentDidMount() {
//  this.loadPosts();
// }

//   loadPosts = async () => {
//     const { page, postsPerClick } = this.state;
//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerClick),
//       allPosts: postsAndPhotos,
//     })
//   }

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerClick,
//       allPosts,
//       posts,
//     } = this.state;
//     const nextPage = page + postsPerClick;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerClick);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage })
//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value })
//   }

//   render() {
//     const { posts, page, postsPerClick, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerClick >= allPosts.length;

//     const filteredPosts = !!searchValue ?
//     posts.filter(post => {
//       return post.title.toLowerCase().includes(
//         searchValue.toLowerCase()
//       );
//     })
//     : posts;

//     return (
//       <section className='container'>

//         <SearchInput
//         actionFn={this.handleChange}
//         inputValue={searchValue}
//         />

//         {filteredPosts.length > 0 && (
//           <Posts posts={filteredPosts}/>
//         )}
//         {filteredPosts.length === 0 && (
//           <p className='error-p'>No posts found.</p>
//         )}

//         <>
//           {!searchValue && (
//             <Button
//             text="Load more posts"
//             onClick={this.loadMorePosts}
//             disabled={noMorePosts}
//             />
//           )}
//         </>
//       </section>
//     )
//   }
// }

export default Home;
