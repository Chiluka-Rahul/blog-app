import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className="w-full flex py-4 space-x-4">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src={IF+post.photo} alt="" className="h-full w-full object-cover"/>
      </div>
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl text-neutral-950">
      {post.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@{post.username}</p>
       <div className="flex space-x-2 text-sm">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,21)}</p>
       </div>
      </div>
      <p className="text-sm md:text-base text-gray-500">{post.desc.slice(0,200)+" ...Read more"}</p>
    </div>

    </div>
  )
}

export default HomePosts
