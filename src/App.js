import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from './components/Home.page';
import SimpleApiRequest from './components/simpleApiRequest';
import RcApiRequest from './components/rcApiRequest';
import RQsingleBlog from './components/RQsingleBlog';
import RcParallelquery from './components/rcParallelquery';
import RcDynamicParallelquery from './components/rcDynamicParallelquery';
import RcDependent from './components/rcDependent';
import RcColorPagination from './components/rcColorPagination';
import InfiniteColors from './components/infiniteColorPage';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div >
          <nav  >
            <ul className='mainNav'>
              <li>
                <Link to='home'>Home</Link>
              </li>
              <li>
                <Link to='rcapi'>RC Api</Link>
              </li>
              <li>
                <Link to='simple-api'>Simple Api</Link>
              </li>
              <li>
                <Link to='friends'>Friends List</Link>
              </li>
              <li>
                <Link to='dynamic-query'>DynamicQuery</Link>
              </li>
              <li>
                <Link to='dependent-query'>Denpent Query</Link>
              </li>
              <li>
                <Link to='rc-color'>Color List</Link>
              </li>
              <li>
                <Link to='infinite-color'>Infinite Color</Link>
              </li>
            </ul>
          </nav>
          <Routes >

            <Route path='friends' element={<RcParallelquery />} />
            <Route path='dynamic-query' element={<RcDynamicParallelquery postIds={[1,3,4]} />} />
            <Route path='dependent-query' element={<RcDependent email='mentor@gmail.com' />} />
            <Route path='rc-color' element={<RcColorPagination />} />            
            <Route path='infinite-color' element={<InfiniteColors />} />
            <Route path='single-post/:postId' element={<RQsingleBlog />} />
            <Route path='home' element={<HomePage />} />
            <Route path='simple-api' element={<SimpleApiRequest />} />
            <Route path='rcapi' element={<RcApiRequest />} />
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </>
  );
}

export default App;
