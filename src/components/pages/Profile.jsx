import {useState, useEffect} from "react";
import Link from "../Link.jsx";
import List from "./List.jsx";

// eslint-disable-next-line react/prop-types
function Profile({userName}) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url}>{profile.html_url}</Link>
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url}>{profile.repos_url}</Link>
        },
        {
            field: 'name',
            value: profile.name
        },
        {
            field: 'company',
            value: profile.company
        },
        {
            field: 'location',
            value: profile.location
        },
        {
            field: 'email',
            value: profile.email
        },
        {
            field: 'bio',
            value: profile.bio
        }
    ]

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const res = await profile.json();
            if (res) {
                setProfile(res);
                setLoading(false)
            }
        }
        fetchData()
            .then(() => true);
    }, []);

    return (
        <div>
            <img src={profile.avatar_url} alt={profile.name}/>
            {loading ? (<span>Loading...</span>) : (<List items={items} />)}
        </div>
    );
}

export default Profile;