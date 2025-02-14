import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const param = useParams();
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();
  
  console.log(param);
  console.log(searchParams.get('name'));
  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
