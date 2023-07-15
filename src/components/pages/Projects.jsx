import {useEffect, useState} from "react";
import {Link as RouterLink} from 'react-router-dom';
import List from "./List.jsx";
import Link from "../Link.jsx";

// eslint-disable-next-line react/prop-types
function Projects({userName}) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        async function fetchData(){
            const projects = await fetch(`https://api.github.com/users/${userName}/repos`);
            const res = await projects.json();
            if (res) {
                setProjects(res);
                setLoading(false);
            }
        }
        fetchData()
            .then(data => data);
    }, [userName]);

    return (
        <div>
            {loading ? <span>Loading...</span> : (
                <div>
                    <List items={projects.map((project) => ({
                        field: project.name,
                        value: <RouterLink url={project.html_url} to={`/projects/${project.name}`}>{project.html_url}</RouterLink>
                    }))} />
                </div>
            )}
        </div>
    );
}

export default Projects;