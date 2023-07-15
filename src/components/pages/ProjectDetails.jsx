import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProjectDetails({userName}) {
    const [loading, setLoading] = useState(true);
    const [projectDetails, setProjectDetails] = useState({});
    const {name} = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`);
            const res = await data.json();
            if (res) {
                setProjectDetails(res);
                setLoading(false);
            }
        }
        if (userName && name) {
            fetchData()
                .then(data => data);
        }
    }, [name, userName]);

    return (
        <div className="Project-container">
            <h2>Project: {projectDetails.name}</h2>
            {loading ? <span>Loading...</span> :
                (<div style={{textAlign: "left"}}>
                    <p>Project Name: {projectDetails.name}</p>
                    <p>Repository Name: {projectDetails.full_name}</p>
                    <p>Author: {projectDetails.owner.login}</p>
                    <p>Created at: {projectDetails.created_at}</p>
                    <p>Git URL: {projectDetails.git_url}</p>
                    <p>Description: {projectDetails.description}</p>
                </div>)}
        </div>
    );
}

export default ProjectDetails;