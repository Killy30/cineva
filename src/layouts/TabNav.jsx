
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import VideoMovie from './VideoMovie';
import VideoSerie from './VideoSerie';
import EpisodesList from './EpisodesList';
import Details from './Details';

function TabNav({ media_type, movie_tv_id, seasons, movie_imdb_id, data }) {
    return (
        <div className="tab_nav">
            <Tabs
                defaultActiveKey={media_type == 'tv' ? 'episodios' : 'pelicula'}
                id="noanim-tab-example"
                className="mb-4"
            >
                <Tab
                    eventKey={media_type == 'tv' ? 'episodios' : 'pelicula'}
                    title={media_type == 'tv' ? 'EPISODIOS' : 'PELICULA'}
                >
                    {
                        (media_type == 'movie')
                            ? <VideoMovie _ID={movie_imdb_id} />
                            : <EpisodesList
                                seasons={seasons}
                                tv_id={movie_tv_id}
                            />
                    }
                </Tab>
                <Tab eventKey="extras" title="EXTRAS">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="detalles" title="DETALLES">
                    <Details data={data} media_type={media_type}/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default TabNav;