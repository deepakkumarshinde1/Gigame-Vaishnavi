import { useParams } from "react-router-dom";

function SubBranch() {
  let { branch } = useParams();
  return <div>SubBranch {branch}</div>;
}

export default SubBranch;
