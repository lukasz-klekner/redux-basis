import { connect} from 'react-redux';

const ActorsContainer = ({ actors }) => (
    <ul>
        {actors.list.map( ( actor, index) => <li key={index}>{actor}</li>)}
    </ul>
)

const mapStateToProps = state => ({
    actors: state.actors
})

export default connect(mapStateToProps, {})(ActorsContainer);