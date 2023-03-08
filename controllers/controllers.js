const connection = require("../config/config");

const getBlogs = (req, res) => {
  try {
    const query = "SELECT * FROM blogs";

    connection.query(query, (error, blogs) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(blogs);
    });
  } catch (error) {
    res.json(error);
  }
};

const getBlog = (req, res) => {
  try {
    const id = req.params.id;
    const query = `SELECT * FROM blogs WHERE id="${id}"`;
    connection.query(query, (error, blog) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(blog);
    });
  } catch (error) {
    res.json(error);
  }
};
const createBlog = (req, res) => {
  try {
    const { id, title, content } = req.body;
    const query = `INSERT INTO blogs VALUES("${id}","${title}","${content}" )`;
    connection.query(query, (error, info) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(info);
    });
  } catch (error) {
    res.json(error);
  }
};
const updateBlog = (req, res) => {
  try {
    const { title, content } = req.body;
    const id = req.params.id;
    const query = `UPDATE blogs SET title="${title}", content="${content}" WHERE id="${id}"`;
    connection.query(query, (error, info) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(info);
    });
  } catch (error) {
    res.json(error);
  }
};
const deleteBlog = (req, res) => {
  try {
    const id = req.params.id;
    const query = `DELETE FROM blogs WHERE id="${id}"`;
    connection.query(query, (error, info) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(info);
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getBlogs, getBlog, createBlog, deleteBlog, updateBlog };
