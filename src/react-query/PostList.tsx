import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  console.log(data);

  if (error) return <p>{error?.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages?.map((page) => (
          <Fragment>
            {page?.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading.." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
