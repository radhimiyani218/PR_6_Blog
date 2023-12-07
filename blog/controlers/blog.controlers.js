const Fuse = require("fuse.js");
const blog = require("../models/blog.schema");
const user = require("../models/user.schema");

const home = (req, res) => {
  res.render("home");
};
const addblog = (req, res) => {
  res.render("addblog");
};
const content = async (req, res) => {
  try {
    const data = await blog.find();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};

const add = async (req, res) => {
  const { id } = req.cookies;
  let userdata = await user.findById(id);
  const { title, content, image, category } = req.body;
  const adblog = {
    title: title,
    content: content,
    image: image,
    author: userdata.author,
    category: category,
  };
  try {
    const data = await blog.create(adblog);
    return res.cookie("blogId", data.id).send(`blog created by ${data.author}`);
  } catch (error) {
    return res.send(error.message);
  }
};
const deleted = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const data = await blog.findByIdAndDelete(id);
    if (data) {
      const data = await blog.find();
      res.send(data);
    } else {
      res.send("blog is not availble");
    }
  } catch (error) {
    return res.send(error.message);
  }
};
const edit = async (req, res) => {
  const { id } = req.params;
  // console.log("id",id);
  try {
    let data = await blog.findByIdAndUpdate(id,req.body);
    // console.log("data",data);
    if (data) {
      console.log(data);
      res.send("sucessfully upadte");
    } else {
      res.send("blog is not availble");
    }
  } catch (error) {
    return res.send(error.message);
  }
};
const singleblog = async (req, res) => {
  const { id } = req.params;
  try {
    let singleBlog = await blog.findById(id);
    res.render("singleBlogPage", { singleBlog });
  } catch (error) {
    return res.send(error.message);
  }
};
const search = async (req, res) => {
  let query = req.query.blogs;
  const blogs = await blog.find();
  const options = {
    keys: ["author", "category", "title"],
  };
  const fuse = new Fuse(blogs, options);
  const result = fuse.search(query);
  res.send(result);
};
const like = async (req, res) => {
  let blogId = req.params.id;
  let blogdata = await blog.findById(blogId);
  let userdata = await user.findById(req.cookies.id);
  blogdata.likedBy.push({ username: userdata.username });
  await blogdata.save();
  res.send(blogdata);
};
const comment = async (req, res) => {
  let blogId = req.params.id;
  let blogdata = await blog.findById(blogId);
  let userdata = await user.findById(req.cookies.id);
  blogdata.comments.push({ username: userdata.username, text: req.body.text });
  await blogdata.save();
  res.send(blogdata);
};


module.exports = {
  home,
  addblog,
  content,
  add,
  singleblog,
  deleted,
  edit,
  like,
  comment,
  search,
};
