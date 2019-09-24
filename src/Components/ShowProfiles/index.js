import React, { Component} from 'react';
import './style.css';

import cross from './../../assets/close.svg';
import star from './../../assets/star.svg';
import hearts from './../../assets/hearts.svg';

class ShowProfiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            index: 0,
            liked: [],
            rejected: [],
        }

    }

    componentDidMount() {
        fetch(`https://my-json-server.typicode.com/GoKartheek/gwl-task/profiles`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                profiles: data,
            })
        })
    }

    
    showNextProfile() {
        let { index } = this.state;
        this.setState({
            index: ++index,
        })
    }

    likeProfile(profile) {
        let { profiles, index } = this.state;
        if(index < profiles.length) {
            this.setState({
                liked: profile,
            }, () => {
                console.log('Liked: ', this.state.liked.name)
            })
            this.showNextProfile();
        }
    }

    rejectProfile(profile) {
        let { profiles, index } = this.state;
        if(index < profiles.length) {
            this.setState({
                rejected: profile,
            }, () => {
                console.log('Rejected: ', this.state.rejected.name)
            })
            this.showNextProfile();
        }
    }

    render() {
        let { profiles, index } = this.state;

        return(
            <div className="show-profiles-wrapper">
                <div className="header">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="profile">
                    {
                        index < profiles.length ?
                        <React.Fragment>
                            <img src={profiles[index].photo} className="profile-photo" alt="photo" />
                            <div>{profiles[index].name}</div>
                        </React.Fragment>
                        : <div className="exhausted">Nobody in your area to show</div>
                    }
                </div>
                
                <div className="footer">
                    <img src={cross} className="reject" alt="reject" onClick={() => this.rejectProfile(profiles[index])}/>
                    <img src={star} className="super-like" alt="super-like" />
                    <img src={hearts} className="like" onClick={() => this.likeProfile(profiles[index])} alt="like" />
                </div>
            </div>
        );
    }
}

export default ShowProfiles;