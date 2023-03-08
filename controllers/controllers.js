const connection = require("../config/config");

const getBlogs = (req, res) => {
  try {
    const query = "SELECT * FROM blogs";

    connection.query(
      query,
      (error,
      (blog) => {
        if (error) {
          res.json(error);
          return;
        }
        res.json(blogs);
      })
    );
  } catch (error) {
    res.json(error);
  }
};

const getBlog = (req, res) => {
  try {
    const id = req.params.id;
    const query = "";
    connection.query(
      query,
      (error,
      (blog) => {
        if (error) {
          res.json(error);
          return;
        }
        res.json(blogs);
      })
    );
  } catch (error) {
    res.json(error);
  }
};
const createBlog = (req, res) => {
  try {
    const { title, author, content } = req.body;
    const query = "";
    connection.query(
      query,
      (error,
      (blog) => {
        if (error) {
          res.json(error);
          return;
        }
        res.json(blogs);
      })
    );
  } catch (error) {
    res.json(error);
  }
};
const updateBlog = (req, res) => {
  try {
    const id = req.params.id;
    const query = "";
    connection.query(
      query,
      (error,
      (blog) => {
        if (error) {
          res.json(error);
          return;
        }
        res.json(blogs);
      })
    );
  } catch (error) {
    res.json(error);
  }
};
const deleteBlog = (req, res) => {
  try {
    const id = req.params.id;
    const query = "";
    connection.query(
      query,
      (error,
      (blog) => {
        if (error) {
          res.json(error);
          return;
        }
        res.json(blogs);
      })
    );
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getBlogs, getBlog, createBlog, deleteBlog, updateBlog };
