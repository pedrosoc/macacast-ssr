import { createRobots } from "@/utils/seo";

const Robots = () => {};

Robots.getInitialProps = ({ res }) => {
    res.setHeader("Content-Type", "text/plain");
    res.write(createRobots());
    res.end();
    
    return { namespacesRequired: [] };
}

export default Robots;
