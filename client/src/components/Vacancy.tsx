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
} from "../hooks/zustand";
import { Post } from "../types";

export default function Vacancy() {
  const getPosts = useGetPosts();
  const updatePosts = useUpdatePost();
  const [posts, setPosts] = useState<Post[]>([]);
  const [postToUpdate, setPostToUpdate] = useState<Post[]>([]);
  const { isShowJobDetails } = useStoreJobDetails();
  const { closeModal, isOpen, openModal } = useStoreModalConfirmation();

  moment.locale("id");

  // Filter posts by canceled status
  useEffect(() => {
    const overduePosts = posts?.filter((post) => {
      return (
        moment().isAfter(post.deadline) &&
        (post.status as string) !== POST_STATUS.CANCELED
      );
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
    if (getPosts.isSuccess) {
      setPosts(sortPostsByDate(getPosts.data?.data));
    }

    if (getPosts.isError) {
      console.log(getPosts.error);
    }
  }, [getPosts, posts]);

  return (
    <section className="mt-[120px] md:flex md:justify-center lg:justify-start sm:grid-cols-2 md:grid-cols-1 justify-items-center h-full xl:ml-[100px] m-[20px] gap-[20px]">
      <div className="grid md:inline-block gap-[20px]">
        {getPosts.isPending ? (
          <div>Loading bro</div>
        ) : posts.length === 0 ? (
          <div>kosong</div>
        ) : (
          posts
            ?.filter((post) => (post.status as string) !== POST_STATUS.CANCELED)
            .map((post) => (
              <div
                key={post.id}
                onClick={() => isShowJobDetails(post)}
                className="cursor-pointer md:mb-[20px] max-w-sm p-4 gap-[10px] bg-white border border-gray-200 rounded-lg shadow"
              >
                <div className="flex justify-between">
                  <div className="flex flexCenter gap-[10px]">
                    <img
                      src={""}
                      alt="user"
                      className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
                    />
                    <div className="flex sm:grid gap-1 items-center justify-start">
                      <h1 className="text-bulma text-sm-s">{`${formatName(
                        post.creator.firstname
                      )} ${formatName(post.creator.lastname)}`}</h1>
                      <div className="sm:hidden bg-bulma h-1 w-1 rounded-full"></div>
                      <h6 className="text-trunks text-xs-r">
                        {moment(post.createdAt).fromNow()}
                      </h6>
                    </div>
                  </div>
                  <div className="lg:hidden lg:mt-[20px] h-full inline-block rounded-lg bg-chici-90 bg-opacity-30 px-[6px] pt-[6px]">
                    <h5 className="mb-2 text-sm-s text-chici-90">
                      {moment(post.deadline).toNow(true)}
                    </h5>
                  </div>
                  <div className="hidden lg:flex">
                    <h1 className="text-lg-s">{formatCurrency(post.price)}</h1>
                  </div>
                </div>
                <div className="hidden mt-[20px] lg:inline-block rounded-lg bg-chici-90 bg-opacity-30 px-[6px] pt-[6px]">
                  <h5 className="mb-2 text-sm-s text-chici-90">
                    {moment().isAfter(post.deadline)
                      ? "Kadaluarsa"
                      : "Kadaluarsa dalam " + moment(post.deadline).toNow(true)}
                  </h5>
                </div>
                <div className="grid mt-[10px] gap-[10px] md:gap-0">
                  <h1 className="text-sm-s md:text-md-s text-bulma">
                    {post.title}
                  </h1>
                  <p className="line-clamp-1 lg:line-clamp-2 text-xs-r md:text-sm-r text-trunks">
                    {post.desc}
                  </p>
                  <span className="text-xs-r md:text-sm-r text-trunks">
                    {post.address}
                  </span>
                </div>
                <div className="mt-[10px] flex justify-end gap-[5px]">
                  <button className="btn-sm-fill rounded-full bg-orange-90 text-white hover:text-orange-90 focus:text-orange-90 text-sm font-semibold">
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
                    onClick={openModal}
                    className="btn-sm-fill bg-green-90 text-white hover:text-green-90 focus:text-green-90 text-sm font-semibold"
                  >
                    <span className="hidden lg:inline">Kerjakan</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:hidden w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      onClick={closeModal}
                      className="flex justify-center mx-auto items-center bg-[rgba(0,0,0,.5)] w-full h-screen fixed z-50 top-0 left-0 overflow-hidden"
                    >
                      <div className="grid justify-items-center gap-[30px] absolute bg-white p-6 w-[250px] sm:w-[350px] rounded-lg ">
                        <h1 className="text-center text-sm-s sm:text-md-s">
                          Apakah anda yakin akan mengerjakan pekerjaan ini?
                        </h1>
                        <div className="flex gap-3">
                          <button className="btn-sm-fill md:btn-md-fill text-sm-s bg-red-90 text-white hover:text-red-90 focus:text-red-90">
                            <span className="hidden lg:inline">Gak Dulu</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="current"
                              className="lg:hidden size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                          <button className="btn-sm-fill md:btn-md-fill text-sm-s bg-green-90 text-white hover:text-green-90 focus:text-green-90">
                            <span className="hidden lg:inline">Gass</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="lg:hidden w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
        )}
      </div>
    </section>
  );
}
