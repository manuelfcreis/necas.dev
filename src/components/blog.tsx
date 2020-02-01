import React, { Component } from "react";
import Card from "./shared/card";

interface Props {
  open: boolean;
}

interface PostProps {
  file: any;
}

const filePaths = require.context("../blog/", true, /\.md$/).keys();

const files = filePaths.reverse().map(path => {
  return require("../blog/" + path.replace("./", ""));
});

class Blog extends Component<Props> {
  render(): JSX.Element {
    return (
      <Card>
        {files.map((file, index) => {
          return <BlogPost key={index} file={file} />;
        })}
      </Card>
    );
  }
}

const BlogPost = (props: PostProps): JSX.Element => {
  return <article dangerouslySetInnerHTML={{ __html: props.file }} />;
};

export default Blog;
