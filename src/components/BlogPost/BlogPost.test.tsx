import { screen, render } from "@testing-library/react";
import BlogPost from "./BlogPost";
import { MemoryRouter } from "react-router";

describe("BlogPost component", () => {
  const mockBlog = {
    title: "random title",
    author: "john",
    date: "9/12/2021",
    content: "blog content",
  };
  test("Renders blog post", () => {
    render(
      <MemoryRouter>
        <BlogPost blog={mockBlog} />
      </MemoryRouter>
    );
    const blogPost = screen.getByRole("article");
    expect(blogPost).toBeInTheDocument();
  });
});
