import JobCards from "../components/jobCards";
import Data from "../../../databases/recruiting.json";

function Recommendation() {
    return (
        <div>
            {Data.map((item) => {
                return <JobCards data={item} />;
            })}
        </div>
    );
}

export default Recommendation;
