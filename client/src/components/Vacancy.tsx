import moment from "moment";
import "moment/dist/locale/id";
import { useEffect, useState } from "react";
import { POST_STATUS } from "../constant";
import { sortPostsByDate } from "../helpers";
import formatCurrency from "../helpers/formatCurrency";
import formatName from "../helpers/formatName";
import { useGetPosts, useUpdatePost } from "../hooks/post";
import {
  useStoreJobDetails,
  useStoreModalConfirmation,
  useStoreSearch,
  useStoreUpdateDetailJob,
} from "../hooks/zustand";
import { Post } from "../types";
import Empty from "./Empty";
import ModalConfim from "./ModalConfim";
import { useNavigate } from "react-router-dom";

export default function Vacancy() {
  const getPosts = useGetPosts();
  const updatePosts = useUpdatePost();
  const [posts, setPosts] = useState<Post[]>([]);
  const [postToUpdate, setPostToUpdate] = useState<Post[]>([]);
  const [queryPost, setQueryPost] = useState<Post[]>([]);
  const [isDescExpanded, setDescExpanded] = useState(false);

  const { setShowJobDetails } = useStoreJobDetails();
  // const { isOpen, setOpenModal } = useStoreModalConfirmation();
  const { posts: searchedPost } = useStoreSearch();
  const { setUpdateIsEmpty } = useStoreUpdateDetailJob();

  const naviate = useNavigate();

  moment.locale("id");
  // Filter posts by canceled status
  useEffect(() => {
    const overduePosts = posts?.filter((post) => {
      return moment().isAfter(post.deadline) && (post.status as string) !== POST_STATUS.CANCELED;
    });

    if (overduePosts) {
      setPostToUpdate(overduePosts);
    }
  }, [posts]);

  useEffect(() => {
    if (updatePosts.isSuccess) {
      console.log(updatePosts.data);
    }

    if (updatePosts.isError) {
      console.error(updatePosts.error);
    }

    const interval = setInterval(() => {
      postToUpdate?.forEach((post) => {
        updatePosts.mutate({ postId: post.id, status: POST_STATUS.CANCELED });
      });
    }, 1000 * 10);

    return () => clearInterval(interval);
  }, [updatePosts, posts, postToUpdate]);

  // Display posts
  useEffect(() => {
    if (getPosts.isSuccess && getPosts.data?.data) {
      setPosts(sortPostsByDate(getPosts.data.data));
    }

    if (getPosts.isError) {
      console.error(getPosts.error);
    }
  }, [getPosts, searchedPost]);

  // search query post
  useEffect(() => {
    const post = posts?.filter((post) => post.title.includes(searchedPost));

    setQueryPost(post);
  }, [searchedPost, posts]);

  function handleDescExpanded() {
    setDescExpanded((prev) => !prev);
    document.getElementById("description")?.classList.toggle("truncate");
  }

  useEffect(() => {
    const jobIsEmpty = posts.filter((post) => (post.status as string) === POST_STATUS.IDLE);
    // setUpdateIsEmpty(jobIsEmpty);
  }, [posts]);

  return (
    <>
      <div className="">
        {getPosts.isPending ? (
          <div>Loading bro</div>
        ) : // Check if there are any posts with status IDLE
        posts.filter((post) => (post.status as string) === POST_STATUS.IDLE).length === 0 ? (
          <div className="">
            <Empty />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 max-md:gap-5 justify-center md:mr-24 mr-0">
            {queryPost
              ?.filter((post) => (post.status as string) === POST_STATUS.IDLE)
              .map((post) => (
                <div
                  key={post.id}
                  onClick={() => {
                    setShowJobDetails(post);
                    naviate("/detail-job/" + post.id);
                  }}
                  // cursor-pointer md:mb-[20px] max-w-sm p-4 gap-[10px] bg-white border border-gray-200 rounded-lg shadow
                  className="cursor-pointer md:mb-5 max-w-sm gap-[10px] p-4 bg-white border border-gray-200 rounded-lg shadow w-[400px] max-h-[200px] place-content-center mx-auto hover:bg-slate-200 transition"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2.5">
                      <img src="/img/user2.jpg" alt="user" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
                      <div className="grid gap-1 items-center">
                        <h1 className="text-bulma text-sm-s">{`${formatName(post.creator.firstname)} ${formatName(
                          post.creator.lastname
                        )}`}</h1>
                        <div className="hidden bg-bulma h-1 w-1 rounded-full"></div>
                        <h6 className="text-trunks text-xs-r">{moment(post.createdAt).fromNow()}</h6>
                      </div>
                    </div>
                    <div className="lg:hidden lg:mt-5 h-full inline-block rounded-lg bg-cell-90 bg-opacity-30 px-1.5 pt-1.5">
                      <h5 className="mb-2 text-sm-s text-cell-90">{moment(post.deadline).toNow(true)}</h5>
                    </div>
                    <div className="hidden lg:flex">
                      <h1 className="text-lg-s">{formatCurrency(post.price)}</h1>
                    </div>
                  </div>
                  <div className="hidden mt-5 lg:inline-block rounded-lg bg-cell-90 bg-opacity-30 px-1.5 pt-1.5">
                    <h5 className="mb-2 text-sm-s text-cell-90">
                      {moment().isAfter(post.deadline)
                        ? "Kadaluarsa"
                        : "Lowongan ini akan hilang dalam " + moment(post.deadline).toNow(true)}
                    </h5>
                  </div>
                  <div className="grid mt-2.5 gap-2.5 md:gap-0">
                    <h1 className="text-sm-s md:text-md-s text-bulma">{post.title}</h1>
                    <p id="description" className="truncate text-xs-r md:text-sm-r text-trunks">
                      {post.desc}
                    </p>
                    {/* <div onClick={handleDescExpanded} className="flex md:hidden text-xs-r text-dark">
                    {isDescExpanded ? "Read Less" : "Read More"}
                  </div> */}
                    <span className="truncate text-xs-r md:text-sm-r text-trunks">{post.address}</span>
                  </div>
                  <div className="mt-2.5 flex justify-end gap-1.25"></div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

{
  /* <button className="btn-sm-fill rounded-full bg-blue-90 text-white hover:text-blue focus:text-blue text-sm font-semibold">
                    <span className="hidden lg:inline">Hubungi Klien</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="lg:hidden size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={setOpenModal}
                    className="btn-sm-fill bg-dark text-white hover:text-dark focus:text-dark text-sm font-semibold"
                  >
                    <span className="hidden lg:inline">Kerjakan</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:hidden w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                  {isOpen && <ModalConfim />} */
}
