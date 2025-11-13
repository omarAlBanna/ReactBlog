export const dataMock = {
  categories: {
    EN: {
      sports: {
        "sub-categories": [
          {
            name: "Football",
            image: "football.jpg",
            alt: "Football image",
            blogs: [
              {
                title: "Blog 1",
                author: "Author A",
                date: "2025-01-01",
                content: "Content 1",
              },
              {
                title: "Blog 2",
                author: "Author B",
                date: "2025-01-02",
                content: "Content 2",
              },
            ],
          },
          {
            name: "Basketball",
            image: "basketball.jpg",
            alt: "Basketball image",
            blogs: [
              {
                title: "Blog 1",
                author: "Author A",
                date: "2025-01-01",
                content: "Content 1",
              },
              {
                title: "Blog 2",
                author: "Author B",
                date: "2025-01-02",
                content: "Content 2",
              },
            ],
          },
          {
            name: "Tennis",
            image: "tennis.jpg",
            alt: "Tennis image",
            blogs: [
              {
                title: "Blog 1",
                author: "Author A",
                date: "2025-01-01",
                content: "Content 1",
              },
              {
                title: "Blog 2",
                author: "Author B",
                date: "2025-01-02",
                content: "Content 2",
              },
            ],
          },
        ],
      },
    },
    AR: {
      sports: {
        "sub-categories": [
          {
            name: "كرة القدم",
            image: "football.jpg",
            alt: "صورة كرة القدم",
            blogs: [
              {
                title: "Blog 1",
                author: "Author A",
                date: "2025-01-01",
                content: "Content 1",
              },
              {
                title: "Blog 2",
                author: "Author B",
                date: "2025-01-02",
                content: "Content 2",
              },
            ],
          },
          {
            name: "كرة السلة",
            image: "basketball.jpg",
            alt: "صورة كرة السلة",
            blogs: [
              {
                title: "Blog 1",
                author: "Author A",
                date: "2025-01-01",
                content: "Content 1",
              },
              {
                title: "Blog 2",
                author: "Author B",
                date: "2025-01-02",
                content: "Content 2",
              },
            ],
          },
          {
            name: "تنس",
            image: "tennis.jpg",
            alt: "صورة التنس",
            blogs: [
              {
                title: "Blog 1",
                author: "Author A",
                date: "2025-01-01",
                content: "Content 1",
              },
              {
                title: "Blog 2",
                author: "Author B",
                date: "2025-01-02",
                content: "Content 2",
              },
            ],
          },
        ],
      },
    },
  },
};
export const LangCtxMock = {
  language: "EN",
  toggleLang: vi.fn(),
  loading: false,
};
export const LoginCtxMock = {
  loggedIn: false,
  LogIn: vi.fn(),
  LogOut: vi.fn(),
};
export const UseActionDataMock = {
  success: true,
  error: "an error occured",
};
export const categoriesMock = {
  EN: {
    sports: {
      "sub-categories": ["sub-1", "sub-2"],
    },
  },
  AR: {
    رياضة: {
      "sub-categories": ["sub-1", "sub-2"],
    },
  },
};
export const submitMock = vi.fn();
