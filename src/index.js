import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const API_KEY='AIzaSyBTV7bnt_GVfchvRPZMCYtQ8RVsd2Fjv6A';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
class App extends Component {
 constructor(props)
 {
     super(props);
     this.state={videos:[]}
     YTSearch({key: API_KEY, term: 'surfboards'},(videos)=> {
        console.log(videos);
        this.setState({videos: videos});
    })
 }
 
 
    render(){

    
    return ( <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
    </div> );
    }

}
ReactDOM.render(<App />, document.querySelector('.container'));
