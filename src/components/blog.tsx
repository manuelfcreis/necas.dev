import React, { Component } from "react";
import { parse, format } from "date-fns";
import Card from "./shared/card";
import "../stylesheets/blog.scss";

interface State {
  page: number;
}

interface PostProps {
  file: any;
  date: any;
}

class Blog extends Component<{}, State> {
  filePaths: string[];
  files: any[];

  constructor(props: any) {
    super(props);

    this.state = {
      page: 1
    };

    this.filePaths =
      process.env.NODE_ENV === "test"
        ? []
        : require.context("../blog/", true, /\.md$/).keys();

    this.files = this.filePaths.reverse().map(path => {
      return require("../blog/" + path.replace("./", ""));
    });

    this.increasePage = this.increasePage.bind(this);
    this.lowerPage = this.lowerPage.bind(this);
  }

  increasePage(event: any): void {
    event.preventDefault();
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  }

  lowerPage(event: any): void {
    event.preventDefault();
    this.setState(prevState => {
      return { page: prevState.page - 1 };
    });
  }

  selectFiles(): any[] {
    const startPost = 10 * (this.state.page - 1);
    const endPost = 10 * this.state.page;

    return this.files.slice(startPost, endPost);
  }

  render(): JSX.Element {
    let files = this.selectFiles();
    const link = window.location.href.match(/blog\/([^\?]*)/);

    if (link) {
      const index = this.filePaths.indexOf("./" + link[1] + ".md");
      if (index > 0) {
        files = [files[index]];
      }
    }

    return (
      <Card classes="blogContainer">
        {files.map((file, index) => {
          return (
            <BlogPost
              date={parse(
                this.filePaths[index].slice(2, 10),
                "yyyymmdd",
                new Date()
              )}
              key={index}
              file={file}
            />
          );
        })}
        <div className="pagination">
          {!link && this.state.page > 1 ? (
            <a href="#" onClick={this.lowerPage}>
              &larr; previous page
            </a>
          ) : null}
          {!link && this.filePaths.length / 10 > this.state.page ? (
            <a href="#" onClick={this.increasePage}>
              next page &rarr;
            </a>
          ) : null}
        </div>
      </Card>
    );
  }
}

class BlogPost extends Component<PostProps> {
  render(): JSX.Element {
    return (
      <article className="blogpost">
        <hr />
        <small>{format(this.props.date, "dd - mm - yyyy")}</small>
        <div dangerouslySetInnerHTML={{ __html: this.props.file }} />
      </article>
    );
  }
}

export default Blog;
