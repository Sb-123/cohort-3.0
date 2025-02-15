import axios from "axios";

async function getBlogs() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
}

const Blogs = async () => {

    const blogs = await getBlogs();
  return (
    <div>
      {blogs.map((blog: ITodo)=><Todo title={blog.title} completed={blog.completed} />)}
    </div>
  )
}

interface ITodo {
  title: string;
  completed: boolean;
}

function Todo({ title, completed }: ITodo) {
    return (
        <div>
          <p className="text-xl text-green-200">{title}</p>
            
            {completed ? "done" : "not done"}
        </div>
    )
}

export default Blogs
